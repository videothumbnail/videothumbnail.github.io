import React, { useState, useRef, useEffect, useCallback } from 'react';
import type { TranslationSchema } from '../i18n/translations';

interface Props {
  t: TranslationSchema['studio'];
}

type AspectRatioKey = '16:9' | '9:16' | '1:1';
type TextStylePreset = 'outline' | 'banner' | 'glow' | 'minimal';
type ExportFormat = 'png' | 'jpg';

interface AspectPreset {
  key: AspectRatioKey;
  shortLabel: string;
  width: number;
  height: number;
  labelKey: 'ratio16x9' | 'ratio9x16' | 'ratio1x1';
}

const ASPECT_PRESETS: AspectPreset[] = [
  { key: '16:9', shortLabel: '16:9', width: 1280, height: 720, labelKey: 'ratio16x9' },
  { key: '9:16', shortLabel: '9:16', width: 1080, height: 1920, labelKey: 'ratio9x16' },
  { key: '1:1', shortLabel: '1:1', width: 1080, height: 1080, labelKey: 'ratio1x1' },
];

const TEXT_COLORS = [
  { name: 'White', hex: '#FFFFFF' },
  { name: 'YouTube Yellow', hex: '#FFE600' },
  { name: 'Soft Sage', hex: '#C5D89D' },
  { name: 'Warm Cream', hex: '#F6F0D7' },
  { name: 'Signal Orange', hex: '#FF5722' },
  { name: 'Cyan Pop', hex: '#00E5FF' },
];

interface FilmstripItem {
  time: number;
  label: string;
  dataUrl: string;
}

function formatTimestamp(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return '00:00.00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  const hundredths = Math.floor((seconds % 1) * 100);
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}.${String(hundredths).padStart(2, '0')}`;
}

/**
 * Renders a clean, text-free high-resolution 1280x720 procedural sample video frame
 * that varies continuously with exactTimeSec so every frame/timestamp produces a distinct visual frame.
 */
function renderSampleSceneToCanvas(
  canvas: HTMLCanvasElement,
  sceneIndex: number,
  exactTimeSec: number = sceneIndex * 2
) {
  canvas.width = 1280;
  canvas.height = 720;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const palettes = [
    { sky1: '#141E28', sky2: '#2D4A53', sun: '#F6F0D7', hill1: '#233529', hill2: '#152218', accent: '#C5D89D' },
    { sky1: '#1F1B2E', sky2: '#4B385C', sun: '#FFE600', hill1: '#2D233B', hill2: '#191324', accent: '#FFB74D' },
    { sky1: '#0F2527', sky2: '#205054', sun: '#00E5FF', hill1: '#183A3D', hill2: '#0D2124', accent: '#80DEEA' },
    { sky1: '#1E2418', sky2: '#3D4A30', sun: '#C5D89D', hill1: '#2A3321', hill2: '#171C12', accent: '#F6F0D7' },
    { sky1: '#2B1814', sky2: '#633326', sun: '#FFAB40', hill1: '#3D211A', hill2: '#21110D', accent: '#FFD180' },
    { sky1: '#121D2B', sky2: '#28415E', sun: '#F6F0D7', hill1: '#1C2E42', hill2: '#101A26', accent: '#C5D89D' },
  ];
  const p = palettes[sceneIndex % palettes.length];

  // Continuous motion offset based on exactTimeSec
  const progress = Math.max(0, Math.min(1, exactTimeSec / 12));
  const localPhase = (exactTimeSec % 2) / 2;

  // Background gradient
  const grad = ctx.createLinearGradient(0, 0, 1280, 720);
  grad.addColorStop(0, p.sky1);
  grad.addColorStop(1, p.sky2);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1280, 720);

  // Moving sun / light source across the timeline
  const sunX = 180 + progress * 920;
  const sunY = 280 - Math.sin(progress * Math.PI) * 120;
  const radGrad = ctx.createRadialGradient(sunX, sunY, 20, sunX, sunY, 380);
  radGrad.addColorStop(0, `${p.sun}77`);
  radGrad.addColorStop(1, 'transparent');
  ctx.fillStyle = radGrad;
  ctx.fillRect(0, 0, 1280, 720);

  ctx.fillStyle = p.sun;
  ctx.beginPath();
  ctx.arc(sunX, sunY, 72 + Math.sin(exactTimeSec * 2) * 8, 0, Math.PI * 2);
  ctx.fill();

  // Parallax hills shifting with timestamp
  const ridgeOffset = (localPhase - 0.5) * 90;
  ctx.fillStyle = p.hill1;
  ctx.beginPath();
  ctx.moveTo(0, 720);
  ctx.lineTo(0, 490);
  ctx.quadraticCurveTo(340 + ridgeOffset, 360, 680, 470);
  ctx.quadraticCurveTo(980 - ridgeOffset, 560, 1280, 430);
  ctx.lineTo(1280, 720);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = p.hill2;
  ctx.beginPath();
  ctx.moveTo(0, 720);
  ctx.lineTo(0, 565);
  ctx.quadraticCurveTo(460 - ridgeOffset, 470, 860, 555);
  ctx.quadraticCurveTo(1080 + ridgeOffset, 600, 1280, 520);
  ctx.lineTo(1280, 720);
  ctx.closePath();
  ctx.fill();

  // Animated focal camera graphic
  const camX = 880 - (localPhase - 0.5) * 110;
  const camY = 360 + Math.cos(exactTimeSec * 1.8) * 24;
  ctx.save();
  ctx.translate(camX, camY);
  ctx.fillStyle = '#FAF8EE';
  ctx.strokeStyle = '#1D2416';
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.roundRect(-145, -105, 290, 210, 28);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = p.sky1;
  ctx.beginPath();
  ctx.arc(0, 0, 68, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = p.accent;
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.arc(0, 0, 48, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = p.accent;
  ctx.beginPath();
  ctx.arc(-14, -14, 10, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

export default function ThumbnailMakerIsland({ t }: Props) {
  // Video & Source Frame State
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [videoFileName, setVideoFileName] = useState<string>('video.mp4');
  const [isSampleMode, setIsSampleMode] = useState<boolean>(false);
  const [sampleSceneIdx, setSampleSceneIdx] = useState<number>(0);
  const [isDraggingFile, setIsDraggingFile] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [capturedTime, setCapturedTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(12);
  const [sourceDimensions, setSourceDimensions] = useState<{ width: number; height: number }>({
    width: 1280,
    height: 720,
  });
  const [filmstrip, setFilmstrip] = useState<FilmstripItem[]>([]);
  const [hasCapturedFrame, setHasCapturedFrame] = useState<boolean>(false);
  const [captureVersion, setCaptureVersion] = useState<number>(0);
  const [captureFlash, setCaptureFlash] = useState<boolean>(false);

  // Aspect Ratio & Export State
  const [aspectRatio, setAspectRatio] = useState<AspectRatioKey>('16:9');
  const [exportFormat, setExportFormat] = useState<ExportFormat>('png');
  const [statusMessage, setStatusMessage] = useState<string>(t.statusReady);
  const [lastExportSize, setLastExportSize] = useState<string | null>(null);
  const [copySuccess, setCopySuccess] = useState<boolean>(false);

  // Collapsible Sections State (Collapsed by default)
  const [isTextPanelOpen, setIsTextPanelOpen] = useState<boolean>(false);
  const [isColorPanelOpen, setIsColorPanelOpen] = useState<boolean>(false);

  // Optional Text Overlay State (Strictly empty by default)
  const [headlineText, setHeadlineText] = useState<string>('');
  const [subtext, setSubtext] = useState<string>('');
  const [textStyle, setTextStyle] = useState<TextStylePreset>('outline');
  const [textColor, setTextColor] = useState<string>('#FFE600');
  const [fontScale, setFontScale] = useState<number>(100);
  const [textPos, setTextPos] = useState<{ x: number; y: number }>({ x: 0.5, y: 0.82 });
  const [isDraggingText, setIsDraggingText] = useState<boolean>(false);

  // Optional Color Filter State (100% neutral by default)
  const [brightness, setBrightness] = useState<number>(100);
  const [contrast, setContrast] = useState<number>(100);
  const [saturation, setSaturation] = useState<number>(100);
  const [isAutoPop, setIsAutoPop] = useState<boolean>(false);

  // Refs
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const samplePreviewCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const capturedFrameCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const studioCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!capturedFrameCanvasRef.current) {
      const c = document.createElement('canvas');
      c.width = 1280;
      c.height = 720;
      capturedFrameCanvasRef.current = c;
    }
  }, []);

  // Keep the sample video player canvas live-updated whenever currentTime or sampleSceneIdx changes
  useEffect(() => {
    if (isSampleMode && samplePreviewCanvasRef.current) {
      renderSampleSceneToCanvas(samplePreviewCanvasRef.current, sampleSceneIdx, currentTime);
    }
  }, [isSampleMode, sampleSceneIdx, currentTime]);

  // Composite the captured frame + optional filters + optional user-entered text onto the output studio canvas
  const renderStudioCanvas = useCallback(() => {
    const outCanvas = studioCanvasRef.current;
    const srcCanvas = capturedFrameCanvasRef.current;
    if (!outCanvas || !srcCanvas || !hasCapturedFrame) return;

    const preset = ASPECT_PRESETS.find((p) => p.key === aspectRatio) || ASPECT_PRESETS[0];
    outCanvas.width = preset.width;
    outCanvas.height = preset.height;

    const ctx = outCanvas.getContext('2d');
    if (!ctx) return;

    ctx.save();
    ctx.clearRect(0, 0, outCanvas.width, outCanvas.height);

    if (brightness !== 100 || contrast !== 100 || saturation !== 100) {
      ctx.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%)`;
    }

    const srcW = srcCanvas.width || 1280;
    const srcH = srcCanvas.height || 720;
    const srcRatio = srcW / srcH;
    const targetRatio = outCanvas.width / outCanvas.height;

    let cropW = srcW;
    let cropH = srcH;
    let cropX = 0;
    let cropY = 0;

    if (srcRatio > targetRatio) {
      cropW = srcH * targetRatio;
      cropX = (srcW - cropW) / 2;
    } else if (srcRatio < targetRatio) {
      cropH = srcW / targetRatio;
      cropY = (srcH - cropH) / 2;
    }

    ctx.drawImage(
      srcCanvas,
      cropX,
      cropY,
      cropW,
      cropH,
      0,
      0,
      outCanvas.width,
      outCanvas.height
    );
    ctx.filter = 'none';

    const cleanHeadline = headlineText.trim();
    const cleanSubtext = subtext.trim();

    if (cleanHeadline || cleanSubtext) {
      const centerX = Math.max(0.08, Math.min(0.92, textPos.x)) * outCanvas.width;
      const centerY = Math.max(0.1, Math.min(0.92, textPos.y)) * outCanvas.height;

      const baseFontSize = Math.round((outCanvas.width * 0.068 * fontScale) / 100);
      const subFontSize = Math.round(baseFontSize * 0.45);

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      if (cleanSubtext) {
        ctx.font = `800 ${subFontSize}px Inter, system-ui, sans-serif`;
        const subMetrics = ctx.measureText(cleanSubtext.toUpperCase());
        const padX = subFontSize * 0.8;
        const padY = subFontSize * 0.45;
        const pillW = subMetrics.width + padX * 2;
        const pillH = subFontSize + padY * 2;
        const pillX = centerX - pillW / 2;
        const pillY = centerY - baseFontSize * 0.85 - pillH / 2;

        ctx.fillStyle = '#1D2416';
        ctx.strokeStyle = '#C5D89D';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.roundRect(pillX, pillY, pillW, pillH, 14);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#C5D89D';
        ctx.fillText(cleanSubtext.toUpperCase(), centerX, pillY + pillH / 2 + 2);
      }

      if (cleanHeadline) {
        ctx.font = `900 ${baseFontSize}px Inter, system-ui, -apple-system, sans-serif`;
        const metrics = ctx.measureText(cleanHeadline);
        const boxPadX = baseFontSize * 0.55;
        const boxPadY = baseFontSize * 0.32;

        if (textStyle === 'banner') {
          const bw = metrics.width + boxPadX * 2;
          const bh = baseFontSize + boxPadY * 2;
          ctx.save();
          ctx.shadowColor = 'rgba(0, 0, 0, 0.55)';
          ctx.shadowBlur = 24;
          ctx.shadowOffsetY = 8;
          ctx.fillStyle = '#1D2416';
          ctx.strokeStyle = textColor;
          ctx.lineWidth = 6;
          ctx.beginPath();
          ctx.roundRect(centerX - bw / 2, centerY - bh / 2, bw, bh, 20);
          ctx.fill();
          ctx.stroke();
          ctx.restore();

          ctx.fillStyle = textColor;
          ctx.fillText(cleanHeadline, centerX, centerY + 3);
        } else if (textStyle === 'glow') {
          ctx.save();
          ctx.shadowColor = textColor;
          ctx.shadowBlur = 32;
          ctx.lineJoin = 'round';
          ctx.miterLimit = 2;
          ctx.strokeStyle = '#1D2416';
          ctx.lineWidth = Math.max(10, Math.round(baseFontSize * 0.18));
          ctx.strokeText(cleanHeadline, centerX, centerY);
          ctx.fillStyle = '#FFFFFF';
          ctx.fillText(cleanHeadline, centerX, centerY);
          ctx.restore();
        } else if (textStyle === 'minimal') {
          ctx.save();
          ctx.shadowColor = 'rgba(0, 0, 0, 0.85)';
          ctx.shadowBlur = 18;
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 6;
          ctx.fillStyle = textColor;
          ctx.fillText(cleanHeadline, centerX, centerY);
          ctx.restore();
        } else {
          ctx.save();
          ctx.shadowColor = 'rgba(0, 0, 0, 0.75)';
          ctx.shadowBlur = 16;
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 8;
          ctx.lineJoin = 'round';
          ctx.miterLimit = 2;
          ctx.strokeStyle = '#1D2416';
          ctx.lineWidth = Math.max(12, Math.round(baseFontSize * 0.22));
          ctx.strokeText(cleanHeadline, centerX, centerY);
          ctx.restore();

          ctx.fillStyle = textColor;
          ctx.fillText(cleanHeadline, centerX, centerY);
        }
      }
    }

    ctx.restore();
  }, [
    hasCapturedFrame,
    captureVersion,
    aspectRatio,
    brightness,
    contrast,
    saturation,
    headlineText,
    subtext,
    textStyle,
    textColor,
    fontScale,
    textPos,
  ]);

  useEffect(() => {
    renderStudioCanvas();
  }, [renderStudioCanvas]);

  // Immediately capture the active video frame into capturedFrameCanvasRef AND repaint studioCanvasRef synchronously
  const captureCurrentFrame = useCallback(
    (overrideSampleIdx?: number, overrideTime?: number, showFlash: boolean = true) => {
      const srcCanvas = capturedFrameCanvasRef.current;
      if (!srcCanvas) return;

      if (isSampleMode || overrideSampleIdx !== undefined) {
        const tSec = overrideTime !== undefined ? overrideTime : currentTime;
        const idx =
          overrideSampleIdx !== undefined
            ? overrideSampleIdx
            : Math.min(5, Math.max(0, Math.floor(tSec / 2)));
        renderSampleSceneToCanvas(srcCanvas, idx, tSec);
        setHasCapturedFrame(true);
        setCapturedTime(tSec);
        setCaptureVersion((v) => v + 1);
        if (showFlash) {
          setCaptureFlash(true);
          setTimeout(() => setCaptureFlash(false), 300);
        }
        setStatusMessage(t.frameCapturedToast);
        // Also repaint studio canvas immediately on the same tick
        requestAnimationFrame(() => renderStudioCanvas());
        return;
      }

      const video = videoRef.current;
      if (!video) return;

      const w = video.videoWidth || 1280;
      const h = video.videoHeight || 720;
      srcCanvas.width = w;
      srcCanvas.height = h;
      const ctx = srcCanvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(video, 0, 0, w, h);
        setHasCapturedFrame(true);
        setCapturedTime(video.currentTime);
        setCaptureVersion((v) => v + 1);
        if (showFlash) {
          setCaptureFlash(true);
          setTimeout(() => setCaptureFlash(false), 300);
        }
        setStatusMessage(t.frameCapturedToast);
        requestAnimationFrame(() => renderStudioCanvas());
      }
    },
    [isSampleMode, currentTime, t.frameCapturedToast, renderStudioCanvas]
  );

  const generateVideoFilmstrip = useCallback(async (srcUrl: string, totalDuration: number) => {
    if (!srcUrl || !Number.isFinite(totalDuration) || totalDuration <= 0) return;

    const tempVideo = document.createElement('video');
    tempVideo.src = srcUrl;
    tempVideo.muted = true;
    tempVideo.playsInline = true;
    tempVideo.preload = 'auto';

    await new Promise<void>((resolve) => {
      tempVideo.onloadeddata = () => resolve();
      tempVideo.onerror = () => resolve();
    });

    const thumbCanvas = document.createElement('canvas');
    thumbCanvas.width = 320;
    thumbCanvas.height = 180;
    const ctx = thumbCanvas.getContext('2d');
    if (!ctx) return;

    const count = 6;
    const items: FilmstripItem[] = [];

    for (let i = 0; i < count; i++) {
      const targetTime = Math.min(
        totalDuration - 0.05,
        Math.max(0, ((i + 0.5) / count) * totalDuration)
      );

      await new Promise<void>((resolve) => {
        const onSeeked = () => {
          tempVideo.removeEventListener('seeked', onSeeked);
          resolve();
        };
        tempVideo.addEventListener('seeked', onSeeked);
        tempVideo.currentTime = targetTime;
      });

      ctx.drawImage(tempVideo, 0, 0, thumbCanvas.width, thumbCanvas.height);
      items.push({
        time: targetTime,
        label: formatTimestamp(targetTime),
        dataUrl: thumbCanvas.toDataURL('image/jpeg', 0.75),
      });
    }

    setFilmstrip(items);
  }, []);

  const handleVideoFile = useCallback(
    (file: File) => {
      if (videoUrl) {
        URL.revokeObjectURL(videoUrl);
      }
      const objectUrl = URL.createObjectURL(file);
      setIsSampleMode(false);
      setVideoFileName(file.name);
      setVideoUrl(objectUrl);
      setIsPlaying(false);
      setCurrentTime(0);
      setCapturedTime(0);
      setFilmstrip([]);
      setLastExportSize(null);
      setHeadlineText('');
      setSubtext('');
      setIsTextPanelOpen(false);
      setIsColorPanelOpen(false);
      setStatusMessage(t.statusReady);
    },
    [videoUrl, t.statusReady]
  );

  const handleLoadSampleVideo = useCallback(() => {
    if (videoUrl) {
      URL.revokeObjectURL(videoUrl);
      setVideoUrl(null);
    }
    setIsSampleMode(true);
    setVideoFileName('sample-video.mp4');
    setSourceDimensions({ width: 1280, height: 720 });
    setDuration(12);
    setCurrentTime(0);
    setCapturedTime(0);
    setSampleSceneIdx(0);

    setHeadlineText('');
    setSubtext('');
    setIsTextPanelOpen(false);
    setIsColorPanelOpen(false);

    const tempCanvas = document.createElement('canvas');
    const items: FilmstripItem[] = [];
    for (let i = 0; i < 6; i++) {
      const sec = i * 2;
      renderSampleSceneToCanvas(tempCanvas, i, sec);
      items.push({
        time: sec,
        label: formatTimestamp(sec),
        dataUrl: tempCanvas.toDataURL('image/jpeg', 0.8),
      });
    }
    setFilmstrip(items);

    if (capturedFrameCanvasRef.current) {
      renderSampleSceneToCanvas(capturedFrameCanvasRef.current, 0, 0);
    }
    setHasCapturedFrame(true);
    setCaptureVersion((v) => v + 1);
    setStatusMessage(t.statusSampleLoaded);
  }, [videoUrl, t.statusSampleLoaded]);

  const stepTimeline = (deltaSeconds: number) => {
    if (isSampleMode) {
      const nextTime = Math.max(0, Math.min(duration, currentTime + deltaSeconds));
      const nextIdx = Math.min(5, Math.max(0, Math.floor(nextTime / 2)));
      setCurrentTime(nextTime);
      setSampleSceneIdx(nextIdx);
      captureCurrentFrame(nextIdx, nextTime, false);
      return;
    }

    const video = videoRef.current;
    if (!video) return;
    video.pause();
    setIsPlaying(false);
    const nextTime = Math.max(0, Math.min(video.duration || duration, video.currentTime + deltaSeconds));
    video.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const updateTextPositionFromPointer = (clientX: number, clientY: number) => {
    if (!headlineText.trim() && !subtext.trim()) return;
    const canvas = studioCanvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return;

    const normX = Math.max(0.08, Math.min(0.92, (clientX - rect.left) / rect.width));
    const normY = Math.max(0.1, Math.min(0.92, (clientY - rect.top) / rect.height));
    setTextPos({ x: normX, y: normY });
  };

  const handleDownloadThumbnail = () => {
    const canvas = studioCanvasRef.current;
    if (!canvas) return;

    const mimeType = exportFormat === 'png' ? 'image/png' : 'image/jpeg';
    const quality = exportFormat === 'png' ? undefined : 0.92;
    const preset = ASPECT_PRESETS.find((p) => p.key === aspectRatio) || ASPECT_PRESETS[0];
    const baseName = videoFileName.replace(/\.[^/.]+$/, '') || 'video-thumbnail';
    const downloadName = `${baseName}-${preset.width}x${preset.height}.${exportFormat}`;

    canvas.toBlob(
      (blob) => {
        if (!blob) return;
        const sizeKB = (blob.size / 1024).toFixed(0);
        setLastExportSize(`${sizeKB} KB • ${preset.width}×${preset.height}`);

        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = downloadName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => URL.revokeObjectURL(blobUrl), 3000);

        setStatusMessage(`${t.statusExported} (${downloadName})`);
      },
      mimeType,
      quality
    );
  };

  const handleCopyImage = () => {
    const canvas = studioCanvasRef.current;
    if (!canvas || !navigator.clipboard || typeof ClipboardItem === 'undefined') return;

    canvas.toBlob((blob) => {
      if (!blob) return;
      navigator.clipboard
        .write([new ClipboardItem({ 'image/png': blob })])
        .then(() => {
          setCopySuccess(true);
          setStatusMessage(t.copiedImageToast);
          setTimeout(() => setCopySuccess(false), 2500);
        })
        .catch(() => {});
    }, 'image/png');
  };

  const hasActiveStudio = Boolean(videoUrl || isSampleMode);
  const hasUserText = Boolean(headlineText.trim() || subtext.trim());
  const hasColorChanges = brightness !== 100 || contrast !== 100 || saturation !== 100;

  return (
    <div className="w-full max-w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-line bg-surface-card p-3 shadow-card sm:p-6 spring-transition">
      {/* Accessible Live Region for Screen Readers */}
      <div aria-live="polite" className="sr-only">
        {statusMessage}
      </div>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="video/mp4,video/quicktime,video/webm,.mp4,.mov,.webm"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleVideoFile(file);
        }}
      />

      {/* INITIAL DROPZONE VIEW */}
      {!hasActiveStudio ? (
        <div
          role="button"
          tabIndex={0}
          aria-label={t.dropzoneTitle}
          onClick={() => fileInputRef.current?.click()}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              fileInputRef.current?.click();
            }
          }}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDraggingFile(true);
          }}
          onDragLeave={() => setIsDraggingFile(false)}
          onDrop={(e) => {
            e.preventDefault();
            setIsDraggingFile(false);
            const file = e.dataTransfer.files?.[0];
            if (file) handleVideoFile(file);
          }}
          className={`group relative flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed px-4 py-10 text-center sm:px-10 sm:py-14 spring-transition ${
            isDraggingFile
              ? 'border-brand-moss bg-brand-sage/25 scale-[1.01]'
              : 'border-brand-moss/45 bg-surface-subtle/50 hover:border-brand-moss hover:bg-surface-subtle/80'
          }`}
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-sage text-brand-ink shadow-sm border border-brand-moss/30 spring-transition group-hover:scale-105">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.1"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <rect x="2" y="3" width="20" height="18" rx="3"></rect>
              <path d="M7 3v18"></path>
              <path d="M17 3v18"></path>
              <path d="M2 9h5"></path>
              <path d="M2 15h5"></path>
              <path d="M17 9h5"></path>
              <path d="M17 15h5"></path>
              <polygon points="10 9 15 12 10 15 10 9" fill="currentColor"></polygon>
            </svg>
          </div>

          <h2 className="mt-4 text-lg font-extrabold tracking-tight text-content-primary sm:text-2xl">
            {t.dropzoneTitle}
          </h2>
          <p className="mt-1.5 max-w-md text-xs sm:text-sm text-content-secondary">
            {t.dropzoneSubtitle}
          </p>

          <div
            className="mt-6 flex flex-wrap items-center justify-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="btn-sage inline-flex min-h-[46px] items-center gap-2 rounded-xl px-5 py-2.5 text-sm sm:text-base font-extrabold shadow-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
              <span>{t.chooseVideoBtn}</span>
            </button>

            <button
              type="button"
              onClick={handleLoadSampleVideo}
              className="btn-cream inline-flex min-h-[46px] items-center gap-2 rounded-xl px-5 py-2.5 text-sm sm:text-base font-bold"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              <span>{t.trySampleBtn}</span>
            </button>
          </div>
        </div>
      ) : (
        /* CLEAN MINIMAL WORKSPACE WHEN VIDEO IS LOADED */
        <div className="space-y-4 sm:space-y-5">
          {/* Compact Header Bar */}
          <div className="flex items-center justify-between gap-2 rounded-xl border border-line bg-surface-subtle/60 px-3 py-2">
            <div className="flex items-center gap-2 min-w-0">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-sage text-brand-ink text-[11px] font-extrabold">
                HD
              </span>
              <div className="min-w-0">
                <p className="truncate text-xs font-extrabold text-content-primary max-w-[140px] sm:max-w-xs">
                  {videoFileName}
                </p>
                <p className="text-[10px] sm:text-[11px] font-semibold text-content-secondary">
                  {sourceDimensions.width}×{sourceDimensions.height} • {formatTimestamp(currentTime)}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="btn-cream inline-flex min-h-[36px] shrink-0 items-center gap-1.5 rounded-xl px-2.5 py-1 text-xs font-bold"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
              <span>{t.changeVideoBtn}</span>
            </button>
          </div>

          {/* Primary 2-Column Studio: Left = Scrub & Capture, Right = Preview & Download */}
          <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-12">
            {/* LEFT COLUMN: Video Scrubber & Frame Picker */}
            <div className="flex flex-col gap-2.5 lg:col-span-6">
              <div className="flex items-center justify-between gap-2">
                <h2 className="truncate text-xs sm:text-sm font-extrabold text-content-primary">
                  {t.step1Title}
                </h2>
                <span className="shrink-0 rounded-md bg-surface-subtle px-2 py-0.5 text-[11px] font-bold text-content-secondary border border-line">
                  {formatTimestamp(currentTime)} / {formatTimestamp(duration)}
                </span>
              </div>

              {/* Video Player / Live Sample Frame Canvas */}
              <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-xl sm:rounded-2xl border border-line bg-black">
                {videoUrl && !isSampleMode ? (
                  <video
                    ref={videoRef}
                    src={videoUrl}
                    playsInline
                    muted
                    className="h-full w-full object-contain"
                    onLoadedMetadata={(e) => {
                      const v = e.currentTarget;
                      const dur = v.duration || 10;
                      setDuration(dur);
                      setSourceDimensions({
                        width: v.videoWidth || 1280,
                        height: v.videoHeight || 720,
                      });
                      v.currentTime = Math.min(0.5, dur * 0.1);
                    }}
                    onSeeked={() => {
                      // Every time the video finishes seeking to a new frame, capture it automatically!
                      captureCurrentFrame(undefined, undefined, false);
                    }}
                    onLoadedData={(e) => {
                      const v = e.currentTarget;
                      captureCurrentFrame(undefined, undefined, false);
                      generateVideoFilmstrip(v.src, v.duration || 10);
                    }}
                    onTimeUpdate={(e) => {
                      setCurrentTime(e.currentTarget.currentTime);
                    }}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  />
                ) : (
                  <canvas
                    ref={samplePreviewCanvasRef}
                    width={1280}
                    height={720}
                    className="h-full w-full object-contain"
                  />
                )}
              </div>

              {/* Scrubber & Frame Step Controls */}
              <div className="rounded-xl border border-line bg-surface-subtle/50 p-2.5 sm:p-3 space-y-2.5">
                <div className="flex items-center gap-2">
                  {!isSampleMode && (
                    <button
                      type="button"
                      onClick={() => {
                        const v = videoRef.current;
                        if (!v) return;
                        if (v.paused) v.play();
                        else {
                          v.pause();
                          captureCurrentFrame();
                        }
                      }}
                      aria-label={isPlaying ? t.pauseBtn : t.playBtn}
                      className="btn-sage inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                    >
                      {isPlaying ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <rect x="6" y="4" width="4" height="16" rx="1"></rect>
                          <rect x="14" y="4" width="4" height="16" rx="1"></rect>
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      )}
                    </button>
                  )}

                  <input
                    type="range"
                    role="slider"
                    tabIndex={0}
                    aria-label={t.step1Title}
                    aria-valuemin={0}
                    aria-valuemax={Number(duration.toFixed(2))}
                    aria-valuenow={Number(currentTime.toFixed(2))}
                    min={0}
                    max={duration || 1}
                    step={0.01}
                    value={currentTime}
                    onChange={(e) => {
                      const val = parseFloat(e.target.value);
                      setCurrentTime(val);
                      if (isSampleMode) {
                        const idx = Math.min(5, Math.max(0, Math.floor(val / 2)));
                        setSampleSceneIdx(idx);
                        captureCurrentFrame(idx, val, false);
                      } else if (videoRef.current) {
                        videoRef.current.currentTime = val;
                      }
                    }}
                    className="studio-slider w-full"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-1.5">
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => stepTimeline(-1)}
                      aria-label="Step back 1 second"
                      className="btn-cream min-h-[38px] rounded-lg px-2 py-1 text-xs font-extrabold"
                    >
                      {t.prevSecBtn}
                    </button>
                    <button
                      type="button"
                      onClick={() => stepTimeline(-1 / 30)}
                      aria-label="Step back 1 frame"
                      className="btn-cream min-h-[38px] rounded-lg px-2.5 py-1 text-xs font-extrabold"
                    >
                      {t.prevFrameBtn}
                    </button>
                    <button
                      type="button"
                      onClick={() => stepTimeline(1 / 30)}
                      aria-label="Step forward 1 frame"
                      className="btn-cream min-h-[38px] rounded-lg px-2.5 py-1 text-xs font-extrabold"
                    >
                      {t.nextFrameBtn}
                    </button>
                    <button
                      type="button"
                      onClick={() => stepTimeline(1)}
                      aria-label="Step forward 1 second"
                      className="btn-cream min-h-[38px] rounded-lg px-2 py-1 text-xs font-extrabold"
                    >
                      {t.nextSecBtn}
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => captureCurrentFrame(undefined, currentTime, true)}
                    className="btn-sage inline-flex min-h-[38px] flex-1 sm:flex-initial items-center justify-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-extrabold shadow-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                      <circle cx="12" cy="13" r="3"></circle>
                    </svg>
                    <span>{t.captureFrameBtn}</span>
                  </button>
                </div>
              </div>

              {/* Compact 6-Frame Quick Filmstrip */}
              {filmstrip.length > 0 && (
                <div className="grid grid-cols-6 gap-1">
                  {filmstrip.map((item, idx) => (
                    <button
                      key={idx}
                      type="button"
                      aria-label={`Frame ${idx + 1} (${item.label})`}
                      onClick={() => {
                        setCurrentTime(item.time);
                        if (isSampleMode) {
                          setSampleSceneIdx(idx);
                          captureCurrentFrame(idx, item.time, true);
                        } else if (videoRef.current) {
                          const v = videoRef.current;
                          v.currentTime = item.time;
                        }
                      }}
                      className={`relative overflow-hidden rounded-lg border-2 spring-transition ${
                        Math.abs(currentTime - item.time) < 1.1
                          ? 'border-brand-moss ring-1 ring-brand-sage'
                          : 'border-line opacity-80 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={item.dataUrl}
                        alt={`Frame at ${item.label}`}
                        className="aspect-video w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT COLUMN: Captured Thumbnail Preview & Direct Export */}
            <div className="flex flex-col gap-2.5 lg:col-span-6">
              <div className="flex items-center justify-between gap-2">
                <h2 className="truncate text-xs sm:text-sm font-extrabold text-content-primary">
                  {t.step3Title}
                </h2>
                <div className="flex items-center gap-1.5 shrink-0">
                  <span
                    className={`rounded-md px-2 py-0.5 text-[11px] font-extrabold spring-transition ${
                      captureFlash
                        ? 'bg-brand-ink text-brand-sage scale-105'
                        : 'bg-surface-subtle text-content-secondary border border-line'
                    }`}
                  >
                    ✓ {formatTimestamp(capturedTime)}
                  </span>
                  <span className="rounded-md bg-brand-sage px-2 py-0.5 text-[11px] font-extrabold text-brand-ink">
                    {ASPECT_PRESETS.find((p) => p.key === aspectRatio)?.width}×
                    {ASPECT_PRESETS.find((p) => p.key === aspectRatio)?.height}
                  </span>
                </div>
              </div>

              {/* Captured Frame Canvas */}
              <div
                className={`relative flex aspect-video items-center justify-center overflow-hidden rounded-xl sm:rounded-2xl border bg-neutral-950 spring-transition ${
                  captureFlash ? 'border-brand-sage ring-4 ring-brand-sage' : 'border-line'
                }`}
              >
                <canvas
                  ref={studioCanvasRef}
                  onPointerDown={(e) => {
                    if (!hasUserText) return;
                    setIsDraggingText(true);
                    updateTextPositionFromPointer(e.clientX, e.clientY);
                  }}
                  onPointerMove={(e) => {
                    if (isDraggingText && hasUserText) {
                      updateTextPositionFromPointer(e.clientX, e.clientY);
                    }
                  }}
                  onPointerUp={() => setIsDraggingText(false)}
                  onPointerLeave={() => setIsDraggingText(false)}
                  className={`max-h-full max-w-full object-contain ${
                    hasUserText ? 'cursor-move touch-none' : ''
                  }`}
                />
              </div>

              {/* Compact Aspect Ratio & Export Controls */}
              <div className="rounded-xl border border-line bg-surface-subtle/50 p-2.5 sm:p-3 space-y-2.5">
                {/* 1-Line Aspect Ratio & Format Toggles */}
                <div className="flex flex-wrap items-center justify-between gap-1.5">
                  <div className="flex items-center gap-1">
                    {ASPECT_PRESETS.map((preset) => (
                      <button
                        key={preset.key}
                        type="button"
                        aria-pressed={aspectRatio === preset.key}
                        onClick={() => setAspectRatio(preset.key)}
                        className={`min-h-[34px] rounded-lg px-2.5 py-1 text-xs font-extrabold spring-transition ${
                          aspectRatio === preset.key
                            ? 'bg-brand-sage text-brand-ink border border-brand-moss'
                            : 'bg-surface-card text-content-primary border border-line hover:border-brand-moss'
                        }`}
                      >
                        {preset.shortLabel}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center gap-1">
                    {(['png', 'jpg'] as const).map((fmt) => (
                      <button
                        key={fmt}
                        type="button"
                        aria-pressed={exportFormat === fmt}
                        onClick={() => setExportFormat(fmt)}
                        className={`min-h-[34px] rounded-lg px-2.5 py-1 text-xs font-extrabold uppercase spring-transition ${
                          exportFormat === fmt
                            ? 'bg-brand-sage text-brand-ink border border-brand-moss'
                            : 'bg-surface-card text-content-secondary border border-line'
                        }`}
                      >
                        {fmt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Primary Download & Copy Action Row */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleDownloadThumbnail}
                    className="btn-sage inline-flex min-h-[42px] flex-1 items-center justify-center gap-2 rounded-xl px-3.5 py-2 text-xs sm:text-sm font-extrabold shadow-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    <span>
                      {t.downloadBtn} ({exportFormat.toUpperCase()})
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyImage}
                    aria-label={t.copyImageBtn}
                    title={t.copyImageBtn}
                    className="btn-cream inline-flex min-h-[42px] items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-xs font-extrabold"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                    </svg>
                    <span className="hidden sm:inline">{copySuccess ? '✓' : t.copyImageBtn}</span>
                  </button>
                </div>

                {lastExportSize && (
                  <p className="text-right text-[11px] font-bold text-content-secondary">
                    {lastExportSize}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* COLLAPSIBLE OPTIONAL TOOLS (Hidden by default with Collapse/Expand Icons) */}
          <div className="grid grid-cols-1 gap-2.5 pt-1 sm:grid-cols-2">
            {/* Collapsible Panel 1: Add Thumbnail Text */}
            <div className="rounded-xl border border-line bg-surface-subtle/40 overflow-hidden">
              <button
                type="button"
                aria-expanded={isTextPanelOpen}
                onClick={() => setIsTextPanelOpen((prev) => !prev)}
                className="flex min-h-[44px] w-full items-center justify-between px-3.5 py-2.5 text-left text-xs sm:text-sm font-extrabold text-content-primary hover:bg-surface-subtle/80 spring-transition"
              >
                <span className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-brand-sage text-brand-ink text-xs font-black">
                    T
                  </span>
                  <span>{t.addTextLabel.split('(')[0].trim()}</span>
                  {hasUserText && (
                    <span className="h-2 w-2 rounded-full bg-brand-moss" />
                  )}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className={`text-content-secondary spring-transition ${
                    isTextPanelOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>

              {isTextPanelOpen && (
                <div className="border-t border-line bg-surface-card p-3.5 space-y-3">
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <input
                      type="text"
                      value={headlineText}
                      onChange={(e) => setHeadlineText(e.target.value)}
                      placeholder={t.headlinePlaceholder}
                      className="min-h-[40px] w-full rounded-xl border border-line bg-surface-page px-3 py-1.5 text-xs sm:text-sm font-extrabold text-content-primary placeholder:text-content-secondary/60 focus:border-brand-moss focus:outline-none"
                    />
                    <input
                      type="text"
                      aria-label={t.subtextPlaceholder}
                      value={subtext}
                      onChange={(e) => setSubtext(e.target.value)}
                      placeholder={t.subtextPlaceholder}
                      className="min-h-[40px] w-full rounded-xl border border-line bg-surface-page px-3 py-1.5 text-xs font-bold text-content-primary placeholder:text-content-secondary/60 focus:border-brand-moss focus:outline-none"
                    />
                  </div>

                  {/* Text Preset Styles */}
                  <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-4">
                    {(
                      [
                        { key: 'outline', label: t.styleOutline },
                        { key: 'banner', label: t.styleBanner },
                        { key: 'glow', label: t.styleGlow },
                        { key: 'minimal', label: t.styleMinimal },
                      ] as const
                    ).map((st) => (
                      <button
                        key={st.key}
                        type="button"
                        aria-pressed={textStyle === st.key}
                        onClick={() => setTextStyle(st.key)}
                        className={`min-h-[34px] rounded-lg px-2 py-1 text-xs font-extrabold spring-transition ${
                          textStyle === st.key
                            ? 'bg-brand-sage text-brand-ink border border-brand-moss'
                            : 'bg-surface-subtle text-content-primary border border-line'
                        }`}
                      >
                        {st.label}
                      </button>
                    ))}
                  </div>

                  {/* Color Swatches, Position & Size */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                    <div className="flex items-center gap-1.5">
                      {TEXT_COLORS.map((c) => (
                        <button
                          key={c.hex}
                          type="button"
                          aria-label={c.name}
                          aria-pressed={textColor === c.hex}
                          onClick={() => setTextColor(c.hex)}
                          style={{ backgroundColor: c.hex }}
                          className={`h-6 w-6 rounded-full border-2 spring-transition ${
                            textColor === c.hex
                              ? 'border-brand-ink scale-110 ring-2 ring-brand-moss'
                              : 'border-black/25'
                          }`}
                        />
                      ))}
                    </div>

                    <div className="flex items-center gap-1">
                      {(
                        [
                          { label: t.posTop, y: 0.2 },
                          { label: t.posCenter, y: 0.52 },
                          { label: t.posBottom, y: 0.82 },
                        ] as const
                      ).map((pos) => (
                        <button
                          key={pos.label}
                          type="button"
                          onClick={() => setTextPos({ x: 0.5, y: pos.y })}
                          className="min-h-[30px] rounded-lg border border-line bg-surface-subtle px-2 py-0.5 text-xs font-bold text-content-primary hover:bg-brand-sage hover:text-brand-ink"
                        >
                          {pos.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold text-content-secondary">
                      <label htmlFor="slider-font-scale">{t.fontSizeLabel}</label>
                      <span>{fontScale}%</span>
                    </div>
                    <input
                      id="slider-font-scale"
                      type="range"
                      min={60}
                      max={150}
                      value={fontScale}
                      onChange={(e) => setFontScale(Number(e.target.value))}
                      className="studio-slider mt-1 w-full"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Collapsible Panel 2: Visual Pop & Color Tuning */}
            <div className="rounded-xl border border-line bg-surface-subtle/40 overflow-hidden">
              <button
                type="button"
                aria-expanded={isColorPanelOpen}
                onClick={() => setIsColorPanelOpen((prev) => !prev)}
                className="flex min-h-[44px] w-full items-center justify-between px-3.5 py-2.5 text-left text-xs sm:text-sm font-extrabold text-content-primary hover:bg-surface-subtle/80 spring-transition"
              >
                <span className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-brand-sage text-brand-ink">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="4" x2="4" y1="21" y2="14"></line>
                      <line x1="4" x2="4" y1="10" y2="3"></line>
                      <line x1="12" x2="12" y1="21" y2="12"></line>
                      <line x1="12" x2="12" y1="8" y2="3"></line>
                      <line x1="20" x2="20" y1="21" y2="16"></line>
                      <line x1="20" x2="20" y1="12" y2="3"></line>
                      <line x1="2" x2="6" y1="14" y2="14"></line>
                      <line x1="10" x2="14" y1="8" y2="8"></line>
                      <line x1="18" x2="22" y1="16" y2="16"></line>
                    </svg>
                  </span>
                  <span>{t.visualPopLabel}</span>
                  {hasColorChanges && (
                    <span className="h-2 w-2 rounded-full bg-brand-moss" />
                  )}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className={`text-content-secondary spring-transition ${
                    isColorPanelOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>

              {isColorPanelOpen && (
                <div className="border-t border-line bg-surface-card p-3.5 space-y-2.5">
                  <div className="flex items-center justify-end gap-1.5">
                    <button
                      type="button"
                      aria-pressed={isAutoPop}
                      onClick={() => {
                        setBrightness(105);
                        setContrast(112);
                        setSaturation(120);
                        setIsAutoPop(true);
                      }}
                      className={`rounded-lg px-2.5 py-1 text-xs font-extrabold spring-transition ${
                        isAutoPop
                          ? 'bg-brand-sage text-brand-ink'
                          : 'bg-surface-subtle text-content-primary'
                      }`}
                    >
                      {t.autoPopBtn}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setBrightness(100);
                        setContrast(100);
                        setSaturation(100);
                        setIsAutoPop(false);
                      }}
                      className="rounded-lg bg-surface-subtle px-2.5 py-1 text-xs font-bold text-content-secondary hover:text-content-primary"
                    >
                      {t.resetFiltersBtn}
                    </button>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold">
                      <label htmlFor="slider-brightness">{t.brightness}</label>
                      <span>{brightness}%</span>
                    </div>
                    <input
                      id="slider-brightness"
                      type="range"
                      min={60}
                      max={150}
                      value={brightness}
                      onChange={(e) => {
                        setBrightness(Number(e.target.value));
                        setIsAutoPop(false);
                      }}
                      className="studio-slider mt-1 w-full"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold">
                      <label htmlFor="slider-contrast">{t.contrast}</label>
                      <span>{contrast}%</span>
                    </div>
                    <input
                      id="slider-contrast"
                      type="range"
                      min={60}
                      max={160}
                      value={contrast}
                      onChange={(e) => {
                        setContrast(Number(e.target.value));
                        setIsAutoPop(false);
                      }}
                      className="studio-slider mt-1 w-full"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold">
                      <label htmlFor="slider-saturation">{t.saturation}</label>
                      <span>{saturation}%</span>
                    </div>
                    <input
                      id="slider-saturation"
                      type="range"
                      min={50}
                      max={180}
                      value={saturation}
                      onChange={(e) => {
                        setSaturation(Number(e.target.value));
                        setIsAutoPop(false);
                      }}
                      className="studio-slider mt-1 w-full"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
