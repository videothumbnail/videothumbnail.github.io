export type LocaleCode = 'en' | 'es' | 'pt' | 'de' | 'fr' | 'ja' | 'zh' | 'ru';

export interface LanguageOption {
  code: LocaleCode;
  label: string;
  ogLocale: string;
  pathPrefix: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'English', ogLocale: 'en_US', pathPrefix: '/' },
  { code: 'es', label: 'Español', ogLocale: 'es_ES', pathPrefix: '/es/' },
  { code: 'pt', label: 'Português', ogLocale: 'pt_BR', pathPrefix: '/pt/' },
  { code: 'de', label: 'Deutsch', ogLocale: 'de_DE', pathPrefix: '/de/' },
  { code: 'fr', label: 'Français', ogLocale: 'fr_FR', pathPrefix: '/fr/' },
  { code: 'ja', label: '日本語', ogLocale: 'ja_JP', pathPrefix: '/ja/' },
  { code: 'zh', label: '简体中文', ogLocale: 'zh_CN', pathPrefix: '/zh/' },
  { code: 'ru', label: 'Русский', ogLocale: 'ru_RU', pathPrefix: '/ru/' },
];

export const NON_DEFAULT_LOCALES: LocaleCode[] = ['es', 'pt', 'de', 'fr', 'ja', 'zh', 'ru'];

export function getLocalizedPath(locale: LocaleCode, pagePath: '' | 'how-to-use/' | 'hire-me/' = ''): string {
  const prefix = locale === 'en' ? '/' : `/${locale}/`;
  return `${prefix}${pagePath}`;
}

export function getCanonicalUrl(locale: LocaleCode, pagePath: '' | 'how-to-use/' | 'hire-me/' = ''): string {
  return `https://videothumbnail.github.io${getLocalizedPath(locale, pagePath)}`;
}

export interface TranslationSchema {
  nav: {
    brandName: string;
    home: string;
    howToUse: string;
    hireMe: string;
    languageLabel: string;
    themeToggleLabel: string;
    lightMode: string;
    darkMode: string;
    installPwa: string;
    installPwaAria: string;
    supportDev: string;
    supportDevAria: string;
    githubAria: string;
  };
  pwaModal: {
    title: string;
    subtitle: string;
    iosStep1: string;
    iosStep2: string;
    iosStep3: string;
    desktopNote: string;
    closeBtn: string;
  };
  home: {
    title: string;
    metaDescription: string;
    h1: string;
    heroSubtitle: string;
    badges: {
      privacy: string;
      noWatermark: string;
      hdExport: string;
    };
    featuresTitle: string;
    featuresSubtitle: string;
    features: Array<{
      title: string;
      description: string;
    }>;
    faqTitle: string;
    faqSubtitle: string;
    faqs: Array<{
      question: string;
      answer: string;
    }>;
  };
  studio: {
    dropzoneTitle: string;
    dropzoneSubtitle: string;
    chooseVideoBtn: string;
    trySampleBtn: string;
    privacyNote: string;
    step1Title: string;
    step2Title: string;
    step3Title: string;
    playBtn: string;
    pauseBtn: string;
    prevFrameBtn: string;
    nextFrameBtn: string;
    prevSecBtn: string;
    nextSecBtn: string;
    captureFrameBtn: string;
    frameCapturedToast: string;
    quickFilmstripLabel: string;
    generateFilmstripBtn: string;
    changeVideoBtn: string;
    aspectRatioLabel: string;
    ratio16x9: string;
    ratio9x16: string;
    ratio1x1: string;
    visualPopLabel: string;
    brightness: string;
    contrast: string;
    saturation: string;
    autoPopBtn: string;
    resetFiltersBtn: string;
    addTextLabel: string;
    headlinePlaceholder: string;
    subtextPlaceholder: string;
    textStyleLabel: string;
    styleOutline: string;
    styleBanner: string;
    styleGlow: string;
    styleMinimal: string;
    textPositionLabel: string;
    posTop: string;
    posCenter: string;
    posBottom: string;
    fontSizeLabel: string;
    textColorLabel: string;
    dragHint: string;
    exportFormatLabel: string;
    formatPng: string;
    formatJpg: string;
    downloadBtn: string;
    copyImageBtn: string;
    copiedImageToast: string;
    statusReady: string;
    statusExported: string;
    statusSampleLoaded: string;
  };
  howToUse: {
    title: string;
    metaDescription: string;
    h1: string;
    breadcrumb: string;
    intro: string;
    steps: Array<{
      name: string;
      text: string;
    }>;
    sections: Array<{
      heading: string;
      body: string;
    }>;
    ctaText: string;
    ctaBtn: string;
  };
  hireMe: {
    title: string;
    metaDescription: string;
    h1: string;
    breadcrumb: string;
    badge: string;
    heading: string;
    intro: string;
    subcopy: string;
    specialties: Array<{
      title: string;
      description: string;
    }>;
    ctaHeading: string;
    email: string;
    emailLabel: string;
    copyButtonLabel: string;
    copiedConfirmation: string;
  };
  footer: {
    tagline: string;
    privacyBadge: string;
    copyright: string;
  };
}

export const translations: Record<LocaleCode, TranslationSchema> = {
  en: {
    nav: {
      brandName: 'VideoThumbnail',
      home: 'Home',
      howToUse: 'How to Use',
      hireMe: 'Hire Me',
      languageLabel: 'Select language',
      themeToggleLabel: 'Toggle light and dark theme',
      lightMode: 'Light',
      darkMode: 'Dark',
      installPwa: 'Add to Home Screen',
      installPwaAria: 'Add VideoThumbnail to Home Screen for offline use',
      supportDev: 'Support the Developer',
      supportDevAria: 'Support the Developer on Gumroad',
      githubAria: 'View source code on GitHub',
    },
    pwaModal: {
      title: 'Install VideoThumbnail App (Offline Ready)',
      subtitle: 'Use VideoThumbnail 100% offline anytime directly from your device home screen or desktop.',
      iosStep1: '1. Tap the Share icon in your browser toolbar.',
      iosStep2: '2. Scroll down and tap "Add to Home Screen".',
      iosStep3: '3. Tap "Add" to launch VideoThumbnail as an offline web app.',
      desktopNote: 'In Chrome, Edge, or Brave, click the Install App icon in the address bar or browser menu.',
      closeBtn: 'Got it, Close',
    },
    home: {
      title: 'Video Thumbnail Maker - Create Thumbnails From Video Free',
      metaDescription: 'Extract high-resolution frames from any MP4, MOV, or WebM video and design YouTube thumbnails in your browser. 100% free, no uploads, and no watermarks.',
      h1: 'Video Thumbnail Maker — Create Thumbnails From Any Video',
      heroSubtitle: 'Extract high-resolution frames from MP4, MOV, and WebM videos, add bold text, and export YouTube thumbnails right in your browser. 100% free, no uploads, and no watermarks.',
      badges: {
        privacy: '100% Client-Side (No Video Uploads)',
        noWatermark: 'Free & Zero Watermarks',
        hdExport: '1280x720 YouTube & 9:16 Cover Ready',
      },
      featuresTitle: 'Why Creators Use Our Online Video Thumbnail Generator',
      featuresSubtitle: 'Designed as a fast, private video frame extractor and YouTube thumbnail maker that works directly inside your browser.',
      features: [
        {
          title: 'Create Thumbnail From Video Frame With -1f / +1f Precision',
          description: 'Scrub through MP4, MOV, or WebM files frame-by-frame or click auto-generated filmstrip previews to capture a high resolution video snapshot without motion blur.',
        },
        {
          title: '1280x720 YouTube Thumbnail Creator & 9:16 Cover Presets',
          description: 'Switch between 16:9 YouTube (1280x720), 9:16 vertical covers (1080x1920) for Shorts, TikTok, and Reels, or 1:1 square thumbnails in a single click.',
        },
        {
          title: 'Add Text to Video Frame Thumbnail & Boost Visual Pop',
          description: 'Drag and position bold headline overlays with dark outlines or high-contrast banners, and fine-tune brightness, contrast, and saturation for higher click-through rates.',
        },
        {
          title: 'Create Thumbnail From Video Without Uploading',
          description: 'Your video files never leave your device. Our no signup YouTube thumbnail maker processes every pixel locally using HTML5 Canvas with zero watermarks.',
        },
      ],
      faqTitle: 'Frequently Asked Questions',
      faqSubtitle: 'Everything you need to know about extracting video frames and designing custom YouTube thumbnails.',
      faqs: [
        {
          question: 'How do I make a YouTube thumbnail from an existing video?',
          answer: 'Drop your MP4, MOV, or WebM file into the Video Thumbnail Maker above, scrub the timeline or use the -1f / +1f buttons to find the sharpest expression or action shot, and click Capture Video Frame. Then select the 16:9 YouTube (1280x720) preset, optionally add bold headline text or boost vibrancy, and download your finished PNG or JPG thumbnail.',
        },
        {
          question: 'What size and resolution should a YouTube thumbnail be?',
          answer: 'Google recommends a 1280x720 pixel resolution (16:9 aspect ratio) with a minimum width of 640 pixels and a file size under 2 MB in JPG or PNG format. Our 16:9 YouTube preset automatically renders your captured video frame at an exact 1280x720 resolution, while our 9:16 Cover preset exports 1080x1920 vertical covers for Shorts, TikTok, and Reels.',
        },
        {
          question: 'Are my videos uploaded to a server when I extract frames?',
          answer: 'No. VideoThumbnail runs 100% locally inside your web browser using the HTML5 Video and hardware-accelerated Canvas 2D APIs. Your video files are never uploaded to any cloud server, which means large 4K video files load immediately and your unreleased footage stays completely private.',
        },
        {
          question: 'Can I create thumbnails from MP4, MOV, and WebM videos without a watermark?',
          answer: 'Yes. You can extract thumbnail snapshots from MP4, MOV, and WebM videos completely free with no watermarks, no account signup, and no daily export limits. Every exported PNG and JPG image is clean and ready to upload directly to YouTube Studio.',
        },
      ],
    },
    studio: {
      dropzoneTitle: 'Drop your MP4, MOV, or WebM video here',
      dropzoneSubtitle: 'Or click to browse local video files from your device — instant loading, zero server upload',
      chooseVideoBtn: 'Select Video File',
      trySampleBtn: 'Try Sample Video',
      privacyNote: '100% Local Browser Processing • No Signup • No Watermark',
      step1Title: '1. Scrub & Capture Video Frame',
      step2Title: '2. Size, Visual Pop & Bold Text',
      step3Title: '3. Export Thumbnail',
      playBtn: 'Play',
      pauseBtn: 'Pause',
      prevFrameBtn: '-1f',
      nextFrameBtn: '+1f',
      prevSecBtn: '-1s',
      nextSecBtn: '+1s',
      captureFrameBtn: 'Capture Video Frame',
      frameCapturedToast: 'Crisp video frame captured to Thumbnail Studio!',
      quickFilmstripLabel: 'Quick Filmstrip Picks (Click any frame to jump & capture):',
      generateFilmstripBtn: 'Refresh Filmstrip',
      changeVideoBtn: 'Load Another Video',
      aspectRatioLabel: 'Target Aspect Ratio & Resolution',
      ratio16x9: '16:9 YouTube (1280×720)',
      ratio9x16: '9:16 Cover (1080×1920)',
      ratio1x1: '1:1 Square (1080×1080)',
      visualPopLabel: 'Visual Pop & Color Tuning',
      brightness: 'Brightness',
      contrast: 'Contrast',
      saturation: 'Vibrance / Saturation',
      autoPopBtn: 'Auto Vivid Pop',
      resetFiltersBtn: 'Reset Colors',
      addTextLabel: 'Add Thumbnail Text (Drag directly on canvas to position)',
      headlinePlaceholder: 'Type bold thumbnail headline...',
      subtextPlaceholder: 'Optional badge or subtitle...',
      textStyleLabel: 'Text Preset Style',
      styleOutline: 'Bold Outline',
      styleBanner: 'Pill Banner',
      styleGlow: 'Neon Pop',
      styleMinimal: 'Clean Shadow',
      textPositionLabel: 'Quick Snap Position',
      posTop: 'Top',
      posCenter: 'Center',
      posBottom: 'Bottom',
      fontSizeLabel: 'Text Scale',
      textColorLabel: 'Headline Color',
      dragHint: 'Tip: Drag text directly on the preview canvas to place it anywhere.',
      exportFormatLabel: 'Export Image Format',
      formatPng: 'PNG (Lossless HD)',
      formatJpg: 'JPG (<2MB YouTube Ready)',
      downloadBtn: 'Download Thumbnail',
      copyImageBtn: 'Copy Image',
      copiedImageToast: 'Thumbnail image copied to clipboard!',
      statusReady: 'Ready to capture and export high-resolution video thumbnails locally.',
      statusExported: 'Thumbnail exported successfully!',
      statusSampleLoaded: 'Sample video loaded! Scrub frames or customize the thumbnail below.',
    },
    howToUse: {
      title: 'How to Make a Thumbnail From Any Video - VideoThumbnail',
      metaDescription: 'Step-by-step guide to grab high-resolution frames from MP4, MOV, or WebM videos, add bold text, and export 1280x720 YouTube thumbnails locally.',
      h1: 'How to Create a High-Resolution Thumbnail From Any Video',
      breadcrumb: 'How to Use',
      intro: 'Learn how to extract crystal-clear frames from MP4, MOV, or WebM videos, apply high-converting visual pop and bold typography, and export 1280x720 YouTube thumbnails or 9:16 Shorts covers 100% locally in your browser.',
      steps: [
        {
          name: 'Step 1: Load Your MP4, MOV, or WebM Video Locally',
          text: 'Drag and drop your video file into the VideoThumbnail dropzone on the Home page or click Select Video File. Because processing happens inside your browser via HTML5 Video, multi-gigabyte 4K recordings open immediately without waiting for cloud uploads.',
        },
        {
          name: 'Step 2: Scrub Frame-by-Frame & Capture the Sharpest Shot',
          text: 'Use the timeline scrubber, click any auto-generated filmstrip preview, or tap the -1f and +1f precision frame buttons to step 1/30th of a second at a time. Once you find an expressive face or sharp action frame without motion blur, click Capture Video Frame.',
        },
        {
          name: 'Step 3: Choose Aspect Ratio, Enhance Colors & Add Bold Text',
          text: 'Select 16:9 YouTube (1280x720), 9:16 Cover (1080x1920) for Shorts and TikTok, or 1:1 Square. Click Auto Vivid Pop or fine-tune Brightness, Contrast, and Saturation. Type a short 3-to-5 word headline, pick Bold Outline or Pill Banner, and drag the text directly on the canvas.',
        },
        {
          name: 'Step 4: Download Lossless PNG or YouTube-Ready JPG (<2MB)',
          text: 'Choose PNG for lossless quality or JPG for a lightweight file guaranteed to stay under YouTube Studio’s 2 MB thumbnail limit. Click Download Thumbnail to save your finished image immediately with zero watermarks.',
        },
      ],
      sections: [
        {
          heading: 'Best Practices for 1280x720 YouTube Thumbnails',
          body: 'YouTube displays thumbnails at a 16:9 aspect ratio with a standard 1280x720 resolution. To maximize your click-through rate (CTR), pick a frame with clear eye contact or strong motion contrast, boost saturation slightly (+10% to +15%) so the image stands out against dark and light browser themes, and keep text overlays to 4 words or fewer so they remain legible on mobile screens.',
        },
        {
          heading: 'Creating 9:16 Vertical Covers for Shorts, TikTok & Reels',
          body: 'When exporting vertical video covers, switch to the 9:16 Cover (1080x1920) preset. VideoThumbnail automatically center-crops your horizontal or vertical source frame to fill the 1080x1920 canvas cleanly. Place your headline text near the center or upper third so platform UI buttons at the bottom do not obscure your title.',
        },
        {
          heading: '100% Privacy-First Local Browser Architecture',
          body: 'Traditional online video thumbnail generators require uploading your raw footage to remote servers. VideoThumbnail executes entirely on your device using hardware-accelerated HTML5 Canvas 2D compositing and works completely offline once installed as a Progressive Web App (PWA).',
        },
      ],
      ctaText: 'Ready to grab a high-resolution snapshot from your video?',
      ctaBtn: 'Open Video Thumbnail Maker',
    },
    hireMe: {
      title: 'Hire Kishara Dilshan - Astro & WASM Dev | VideoThumbnail',
      metaDescription: 'Need an ultra-fast Astro, React, or Next.js web app or client-side WebAssembly tool? Hire Kishara Dilshan for custom SEO-ready IT solutions.',
      h1: 'Available for Freelance Projects',
      breadcrumb: 'Hire Me',
      badge: 'Available for Freelance Projects',
      heading: 'Need a Custom IT Solution?',
      intro: "Hi, I'm Kishara Dilshan, the developer behind VideoThumbnail.",
      subcopy: 'If you love this fast, client-side tool and need a world-class IT solution for your own business, I am available for freelance projects. I specialize in:',
      specialties: [
        {
          title: 'Ultra-fast, SEO-optimized web applications',
          description: 'Astro, React, Next.js — engineered for sub-second loads, technical SEO, and clean scalability.',
        },
        {
          title: 'Client-side processing & WebAssembly (WASM) tools',
          description: 'Zero-server media, PDF, and data utilities that run privately inside the browser.',
        },
        {
          title: 'UI/UX design & High-converting landing pages',
          description: 'Minimal, accessible interfaces crafted to convert visitors effortlessly across desktop and mobile.',
        },
      ],
      ctaHeading: "Let's build something amazing together.",
      email: 'kisharadilshan007@gmail.com',
      emailLabel: 'Email me directly: kisharadilshan007@gmail.com',
      copyButtonLabel: 'Copy Email',
      copiedConfirmation: 'Email copied to clipboard!',
    },
    footer: {
      tagline: '100% Client-Side Video Frame Extractor & YouTube Thumbnail Studio.',
      privacyBadge: 'Zero Video Uploads • No Watermarks • Works Offline',
      copyright: '© 2026 VideoThumbnail by Kishara Dilshan. Released under the MIT License.',
    },
  },
  es: {
    nav: {
      brandName: 'VideoThumbnail',
      home: 'Inicio',
      howToUse: 'Cómo Usar',
      hireMe: 'Contrátame',
      languageLabel: 'Seleccionar idioma',
      themeToggleLabel: 'Cambiar tema claro y oscuro',
      lightMode: 'Claro',
      darkMode: 'Oscuro',
      installPwa: 'Instalar App',
      installPwaAria: 'Añadir VideoThumbnail a la pantalla de inicio para uso sin conexión',
      supportDev: 'Apoyar al Creador',
      supportDevAria: 'Apoyar al desarrollador en Gumroad',
      githubAria: 'Ver código fuente en GitHub',
    },
    pwaModal: {
      title: 'Instalar VideoThumbnail (Modo Sin Conexión)',
      subtitle: 'Usa VideoThumbnail 100% sin internet desde tu pantalla de inicio o escritorio.',
      iosStep1: '1. Toca el icono Compartir en la barra de Safari.',
      iosStep2: '2. Desliza y selecciona "Añadir a pantalla de inicio".',
      iosStep3: '3. Pulsa "Añadir" para usar la herramienta sin conexión.',
      desktopNote: 'En Chrome, Edge o Brave, haz clic en el icono Instalar en la barra de direcciones.',
      closeBtn: 'Entendido, Cerrar',
    },
    home: {
      title: 'Creador de Miniaturas de Video - Gratis y Sin Marca de Agua',
      metaDescription: 'Extrae fotogramas HD de videos MP4, MOV o WebM y diseña miniaturas para YouTube en tu navegador. 100% gratis, sin subir archivos y sin marcas de agua.',
      h1: 'Creador de Miniaturas de Video — Extrae Fotogramas en HD',
      heroSubtitle: 'Extrae fotogramas de alta resolución de videos MP4, MOV y WebM, añade texto llamativo y exporta miniaturas para YouTube en tu navegador. 100% gratis y sin marcas de agua.',
      badges: {
        privacy: '100% Local en tu Navegador (Sin Subidas)',
        noWatermark: 'Gratis y Sin Marcas de Agua',
        hdExport: 'YouTube 1280x720 y Portadas 9:16',
      },
      featuresTitle: 'Por Qué Usar Nuestro Generador de Miniaturas de Video Online',
      featuresSubtitle: 'Extractor de fotogramas rápido y privado diseñado para creadores de YouTube, Shorts y TikTok.',
      features: [
        {
          title: 'Extrae Fotogramas con Precisión Cuadro por Cuadro (-1f / +1f)',
          description: 'Avanza cuadro a cuadro en archivos MP4, MOV o WebM o elige una vista previa de la tira de película para capturar la toma más nítida.',
        },
        {
          title: 'Formatos 1280x720 para YouTube y 9:16 para Shorts/TikTok',
          description: 'Cambia con un clic entre 16:9 YouTube (1280x720), portadas verticales 9:16 (1080x1920) o formato cuadrado 1:1.',
        },
        {
          title: 'Añade Texto Llamativo y Mejora el Color al Instante',
          description: 'Arrastra titulares con borde grueso o cintas de alto contraste y ajusta brillo, contraste y saturación para lograr más clics.',
        },
        {
          title: 'Crea Miniaturas de Video Sin Subir Archivos al Servidor',
          description: 'Tus videos nunca salen de tu dispositivo. Todo se procesa localmente mediante HTML5 Canvas sin registro ni marcas de agua.',
        },
      ],
      faqTitle: 'Preguntas Frecuentes',
      faqSubtitle: 'Todo lo que necesitas saber para extraer fotogramas y crear miniaturas de YouTube gratis.',
      faqs: [
        {
          question: '¿Cómo hago una miniatura de YouTube desde un video existente?',
          answer: 'Arrastra tu video MP4, MOV o WebM al cuadro superior, usa la línea de tiempo o los botones -1f / +1f para encontrar el fotograma perfecto y pulsa Capturar Fotograma. Elige el formato 16:9 YouTube (1280x720), añade texto opcional y descarga tu imagen en PNG o JPG.',
        },
        {
          question: '¿Qué tamaño y resolución debe tener una miniatura de YouTube?',
          answer: 'YouTube recomienda una resolución de 1280x720 píxeles (relación 16:9) y un peso menor a 2 MB en formato JPG o PNG. Nuestro ajuste 16:9 exporta exactamente a 1280x720, y el ajuste 9:16 exporta portadas de 1080x1920 para Shorts y TikTok.',
        },
        {
          question: '¿Mis videos se suben a un servidor al extraer fotogramas?',
          answer: 'No. VideoThumbnail funciona 100% en tu navegador usando HTML5 Video y Canvas 2D. Tus videos jamás se suben a ningún servidor externo, garantizando privacidad total y carga instantánea.',
        },
        {
          question: '¿Puedo crear miniaturas desde MP4, MOV y WebM sin marca de agua?',
          answer: 'Sí. Puedes extraer capturas de videos MP4, MOV y WebM totalmente gratis, sin marcas de agua, sin crear cuenta y sin límites diarios.',
        },
      ],
    },
    studio: {
      dropzoneTitle: 'Arrastra tu video MP4, MOV o WebM aquí',
      dropzoneSubtitle: 'O haz clic para elegir un archivo local — carga inmediata sin subir a servidores',
      chooseVideoBtn: 'Elegir Archivo de Video',
      trySampleBtn: 'Probar Video de Ejemplo',
      privacyNote: 'Procesamiento 100% Local • Sin Registro • Sin Marca de Agua',
      step1Title: '1. Buscar y Capturar Fotograma',
      step2Title: '2. Tamaño, Color y Texto',
      step3Title: '3. Exportar Miniatura',
      playBtn: 'Reproducir',
      pauseBtn: 'Pausar',
      prevFrameBtn: '-1f',
      nextFrameBtn: '+1f',
      prevSecBtn: '-1s',
      nextSecBtn: '+1s',
      captureFrameBtn: 'Capturar Fotograma',
      frameCapturedToast: '¡Fotograma capturado con éxito en el estudio!',
      quickFilmstripLabel: 'Selección Rápida de Fotogramas (Haz clic para saltar y capturar):',
      generateFilmstripBtn: 'Actualizar Tira',
      changeVideoBtn: 'Cambiar Video',
      aspectRatioLabel: 'Proporción y Resolución',
      ratio16x9: '16:9 YouTube (1280×720)',
      ratio9x16: '9:16 Portada (1080×1920)',
      ratio1x1: '1:1 Cuadrado (1080×1080)',
      visualPopLabel: 'Ajuste de Color y Contraste',
      brightness: 'Brillo',
      contrast: 'Contraste',
      saturation: 'Vibrancia / Saturación',
      autoPopBtn: 'Realce Vivo Auto',
      resetFiltersBtn: 'Restablecer',
      addTextLabel: 'Añadir Texto a la Miniatura (Arrastra en el lienzo)',
      headlinePlaceholder: 'Escribe un titular llamativo...',
      subtextPlaceholder: 'Subtítulo o etiqueta opcional...',
      textStyleLabel: 'Estilo del Texto',
      styleOutline: 'Borde Fuerte',
      styleBanner: 'Cinta Sólida',
      styleGlow: 'Brillo Neón',
      styleMinimal: 'Sombra Limpia',
      textPositionLabel: 'Posición Rápida',
      posTop: 'Arriba',
      posCenter: 'Centro',
      posBottom: 'Abajo',
      fontSizeLabel: 'Tamaño de Fuente',
      textColorLabel: 'Color de Texto',
      dragHint: 'Consejo: Arrastra el texto directamente sobre la vista previa para moverlo.',
      exportFormatLabel: 'Formato de Exportación',
      formatPng: 'PNG (HD Sin Pérdida)',
      formatJpg: 'JPG (<2MB Listo para YouTube)',
      downloadBtn: 'Descargar Miniatura',
      copyImageBtn: 'Copiar Imagen',
      copiedImageToast: '¡Miniatura copiada al portapapeles!',
      statusReady: 'Listo para capturar y exportar miniaturas de alta resolución.',
      statusExported: '¡Miniatura descargada correctamente!',
      statusSampleLoaded: '¡Video de ejemplo cargado! Explora los fotogramas o edita el texto.',
    },
    howToUse: {
      title: 'Cómo Crear una Miniatura Desde un Video | VideoThumbnail',
      metaDescription: 'Guía paso a paso para extraer fotogramas HD de videos MP4, MOV o WebM, añadir texto y exportar miniaturas de YouTube 1280x720 en tu propio navegador.',
      h1: 'Cómo Crear una Miniatura de Alta Resolución Desde Cualquier Video',
      breadcrumb: 'Cómo Usar',
      intro: 'Aprende a capturar el fotograma exacto de tus videos MP4, MOV o WebM, mejorar el color y añadir texto llamativo para YouTube y Shorts sin subir archivos.',
      steps: [
        {
          name: 'Paso 1: Abre tu Video MP4, MOV o WebM Localmente',
          text: 'Arrastra tu archivo de video al área de carga en la página de inicio. Como todo funciona en tu navegador, incluso grabaciones 4K pesadas se abren al instante.',
        },
        {
          name: 'Paso 2: Avanza Cuadro por Cuadro (-1f / +1f) y Captura',
          text: 'Usa la barra de tiempo, la tira de fotogramas automática o los botones -1f y +1f para encontrar una toma sin desenfoque y haz clic en Capturar Fotograma.',
        },
        {
          name: 'Paso 3: Elige Tamaño 16:9 o 9:16, Realza el Color y Añade Texto',
          text: 'Selecciona 16:9 YouTube (1280x720) o 9:16 Portada (1080x1920), aplica Realce Vivo Auto y escribe un titular corto arrastrándolo directamente sobre el lienzo.',
        },
        {
          name: 'Paso 4: Descarga en PNG o JPG (<2MB) Sin Marca de Agua',
          text: 'Elige PNG sin pérdida o JPG optimizado por debajo de 2 MB y pulsa Descargar Miniatura para guardar tu imagen al instante.',
        },
      ],
      sections: [
        {
          heading: 'Consejos para Miniaturas de YouTube 1280x720 con Alto CTR',
          body: 'El estándar oficial de YouTube es 1280x720 píxeles (16:9). Elige un fotograma expresivo, aumenta ligeramente la saturación y usa menos de 4 palabras grandes con alto contraste.',
        },
        {
          heading: 'Portadas Verticales 9:16 para Shorts, TikTok y Reels',
          body: 'Con el ajuste 9:16 Portada (1080x1920), VideoThumbnail adapta el encuadre automáticamente para que puedas colocar títulos legibles en la zona central.',
        },
        {
          heading: 'Privacidad 100% Local en el Navegador',
          body: 'Tus videos jamás pasan por servidores externos. Además, puedes instalar VideoThumbnail como aplicación PWA para trabajar completamente sin conexión.',
        },
      ],
      ctaText: '¿Listo para extraer tu próxima miniatura en segundos?',
      ctaBtn: 'Ir al Creador de Miniaturas',
    },
    hireMe: {
      title: 'Contratar a Kishara Dilshan - Astro y WASM | VideoThumbnail',
      metaDescription: '¿Necesitas una aplicación web ultrarrápida en Astro, React o Next.js o herramientas WebAssembly? Contrata a Kishara Dilshan para soluciones IT a medida.',
      h1: 'Available for Freelance Projects',
      breadcrumb: 'Contrátame',
      badge: 'Available for Freelance Projects',
      heading: 'Need a Custom IT Solution?',
      intro: "Hi, I'm Kishara Dilshan, the developer behind VideoThumbnail.",
      subcopy: 'If you love this fast, client-side tool and need a world-class IT solution for your own business, I am available for freelance projects. I specialize in:',
      specialties: [
        {
          title: 'Ultra-fast, SEO-optimized web applications',
          description: 'Astro, React, Next.js — engineered for sub-second loads, technical SEO, and clean scalability.',
        },
        {
          title: 'Client-side processing & WebAssembly (WASM) tools',
          description: 'Zero-server media, PDF, and data utilities that run privately inside the browser.',
        },
        {
          title: 'UI/UX design & High-converting landing pages',
          description: 'Minimal, accessible interfaces crafted to convert visitors effortlessly across desktop and mobile.',
        },
      ],
      ctaHeading: "Let's build something amazing together.",
      email: 'kisharadilshan007@gmail.com',
      emailLabel: 'Email me directly: kisharadilshan007@gmail.com',
      copyButtonLabel: 'Copy Email',
      copiedConfirmation: '¡Correo copiado al portapapeles!',
    },
    footer: {
      tagline: 'Extractor de Fotogramas y Creador de Miniaturas de YouTube 100% Local.',
      privacyBadge: 'Sin Subidas • Sin Marcas de Agua • Funciona Sin Internet',
      copyright: '© 2026 VideoThumbnail por Kishara Dilshan. Licencia MIT.',
    },
  },
  pt: {
    nav: {
      brandName: 'VideoThumbnail',
      home: 'Início',
      howToUse: 'Como Usar',
      hireMe: 'Contrate-me',
      languageLabel: 'Selecionar idioma',
      themeToggleLabel: 'Alternar tema claro e escuro',
      lightMode: 'Claro',
      darkMode: 'Escuro',
      installPwa: 'Instalar App',
      installPwaAria: 'Adicionar VideoThumbnail à tela inicial para uso offline',
      supportDev: 'Apoiar o Criador',
      supportDevAria: 'Apoiar o desenvolvedor no Gumroad',
      githubAria: 'Ver código-fonte no GitHub',
    },
    pwaModal: {
      title: 'Instalar VideoThumbnail (Funciona Offline)',
      subtitle: 'Use o VideoThumbnail 100% offline direto da sua tela inicial ou área de trabalho.',
      iosStep1: '1. Toque no ícone Compartilhar na barra do Safari.',
      iosStep2: '2. Role para baixo e toque em "Adicionar à Tela de Início".',
      iosStep3: '3. Toque em "Adicionar" para abrir o app offline.',
      desktopNote: 'No Chrome, Edge ou Brave, clique no ícone Instalar na barra de endereços.',
      closeBtn: 'Entendi, Fechar',
    },
    home: {
      title: 'Criador de Miniaturas de Vídeo Grátis - Sem Marca d’Água',
      metaDescription: 'Extraia frames em alta resolução de vídeos MP4, MOV ou WebM e crie thumbnails para YouTube no navegador. 100% grátis, sem upload e sem marca d’água.',
      h1: 'Criador de Miniaturas de Vídeo — Extraia Frames em HD',
      heroSubtitle: 'Extraia quadros de alta resolução de vídeos MP4, MOV e WebM, adicione texto em destaque e exporte thumbnails para YouTube no navegador. 100% grátis e sem upload.',
      badges: {
        privacy: '100% Local no Navegador (Sem Upload)',
        noWatermark: 'Grátis e Sem Marca d’Água',
        hdExport: 'YouTube 1280x720 e Capas 9:16',
      },
      featuresTitle: 'Por Que Criadores Usam Nosso Gerador de Miniaturas de Vídeo',
      featuresSubtitle: 'Extrator de quadros rápido e privado para criar thumbnails de YouTube, Shorts e TikTok direto no navegador.',
      features: [
        {
          title: 'Capture Frames de Vídeo com Precisão Quadro a Quadro (-1f / +1f)',
          description: 'Navegue por arquivos MP4, MOV ou WebM quadro a quadro ou clique na tira de pré-visualização automática para capturar uma imagem nítida.',
        },
        {
          title: 'Predefinições 1280x720 para YouTube e 9:16 para Shorts/TikTok',
          description: 'Alterne em um clique entre 16:9 YouTube (1280x720), capas verticais 9:16 (1080x1920) ou formato quadrado 1:1.',
        },
        {
          title: 'Adicione Texto em Destaque e Realce Cores Instantaneamente',
          description: 'Arraste títulos com contorno forte ou faixas de alto contraste e ajuste brilho, contraste e saturação para aumentar seus cliques.',
        },
        {
          title: 'Crie Thumbnail de Vídeo Sem Fazer Upload para Servidores',
          description: 'Seus vídeos nunca saem do seu dispositivo. Tudo roda localmente via HTML5 Canvas sem cadastro e sem marca d’água.',
        },
      ],
      faqTitle: 'Perguntas Frequentes',
      faqSubtitle: 'Tudo o que você precisa saber sobre extração de frames e criação de thumbnails para YouTube.',
      faqs: [
        {
          question: 'Como criar uma thumbnail de YouTube a partir de um vídeo?',
          answer: 'Solte seu arquivo MP4, MOV ou WebM na caixa acima, use a linha do tempo ou os botões -1f / +1f para achar o melhor momento e clique em Capturar Quadro. Escolha 16:9 YouTube (1280x720), adicione texto opcional e baixe sua miniatura em PNG ou JPG.',
        },
        {
          question: 'Qual é o tamanho e resolução ideal para thumbnail do YouTube?',
          answer: 'O YouTube recomenda resolução de 1280x720 pixels (proporção 16:9) com menos de 2 MB em JPG ou PNG. Nosso modo 16:9 exporta exatamente em 1280x720, enquanto o modo 9:16 exporta capas de 1080x1920 para Shorts, Reels e TikTok.',
        },
        {
          question: 'Meus vídeos são enviados para um servidor ao extrair frames?',
          answer: 'Não. O VideoThumbnail processa tudo 100% localmente no seu navegador com HTML5 Video e Canvas 2D. Seus arquivos jamais são enviados para servidores externos.',
        },
        {
          question: 'Posso criar miniaturas de vídeos MP4, MOV e WebM sem marca d’água?',
          answer: 'Sim. Você pode extrair frames de vídeos MP4, MOV e WebM gratuitamente, sem marca d’água, sem login e sem limites de download.',
        },
      ],
    },
    studio: {
      dropzoneTitle: 'Solte seu vídeo MP4, MOV ou WebM aqui',
      dropzoneSubtitle: 'Ou clique para selecionar um vídeo local — abertura imediata sem upload',
      chooseVideoBtn: 'Selecionar Vídeo',
      trySampleBtn: 'Testar Vídeo de Exemplo',
      privacyNote: 'Processamento 100% Local • Sem Cadastro • Sem Marca d’Água',
      step1Title: '1. Avançar e Capturar Quadro',
      step2Title: '2. Tamanho, Cores e Texto',
      step3Title: '3. Baixar Miniatura',
      playBtn: 'Reproduzir',
      pauseBtn: 'Pausar',
      prevFrameBtn: '-1f',
      nextFrameBtn: '+1f',
      prevSecBtn: '-1s',
      nextSecBtn: '+1s',
      captureFrameBtn: 'Capturar Quadro do Vídeo',
      frameCapturedToast: 'Quadro capturado com sucesso para o estúdio!',
      quickFilmstripLabel: 'Tira de Quadros Rápidos (Clique em qualquer quadro para capturar):',
      generateFilmstripBtn: 'Atualizar Tira',
      changeVideoBtn: 'Trocar Vídeo',
      aspectRatioLabel: 'Proporção e Resolução',
      ratio16x9: '16:9 YouTube (1280×720)',
      ratio9x16: '9:16 Capa (1080×1920)',
      ratio1x1: '1:1 Quadrado (1080×1080)',
      visualPopLabel: 'Realce Visual e Cores',
      brightness: 'Brilho',
      contrast: 'Contraste',
      saturation: 'Vibrância / Saturação',
      autoPopBtn: 'Realce Vivo Auto',
      resetFiltersBtn: 'Redefinir Cores',
      addTextLabel: 'Adicionar Texto na Thumbnail (Arraste na prévia)',
      headlinePlaceholder: 'Digite o título em destaque...',
      subtextPlaceholder: 'Subtítulo ou selo opcional...',
      textStyleLabel: 'Estilo do Texto',
      styleOutline: 'Borda Forte',
      styleBanner: 'Faixa Sólida',
      styleGlow: 'Brilho Neon',
      styleMinimal: 'Sombra Limpa',
      textPositionLabel: 'Posição Rápida',
      posTop: 'Topo',
      posCenter: 'Centro',
      posBottom: 'Base',
      fontSizeLabel: 'Tamanho da Fonte',
      textColorLabel: 'Cor do Título',
      dragHint: 'Dica: Arraste o texto diretamente sobre a imagem para posicioná-lo.',
      exportFormatLabel: 'Formato de Imagem',
      formatPng: 'PNG (HD Sem Perda)',
      formatJpg: 'JPG (<2MB Pronto p/ YouTube)',
      downloadBtn: 'Baixar Miniatura',
      copyImageBtn: 'Copiar Imagem',
      copiedImageToast: 'Imagem copiada para a área de transferência!',
      statusReady: 'Pronto para capturar e exportar miniaturas em alta resolução.',
      statusExported: 'Miniatura exportada com sucesso!',
      statusSampleLoaded: 'Vídeo de exemplo carregado! Escolha um quadro ou personalize o texto.',
    },
    howToUse: {
      title: 'Como Criar Thumbnail de Qualquer Vídeo - VideoThumbnail',
      metaDescription: 'Guia passo a passo para extrair frames HD de vídeos MP4, MOV ou WebM, adicionar texto e exportar thumbnails 1280x720 para YouTube direto no navegador.',
      h1: 'Como Criar uma Thumbnail de Alta Resolução a Partir de Qualquer Vídeo',
      breadcrumb: 'Como Usar',
      intro: 'Aprenda a extrair quadros nítidos de arquivos MP4, MOV ou WebM, ajustar cores vibrantes e exportar thumbnails 1280x720 para YouTube 100% localmente.',
      steps: [
        {
          name: 'Passo 1: Carregue Seu Vídeo MP4, MOV ou WebM Localmente',
          text: 'Arraste seu arquivo de vídeo para a caixa na página inicial. Como o processamento é local via HTML5 Video, arquivos 4K abrem instantaneamente.',
        },
        {
          name: 'Passo 2: Use o Avanço -1f / +1f e Capture o Melhor Quadro',
          text: 'Deslize na linha do tempo, clique na tira de quadros ou use os botões -1f e +1f para achar uma cena nítida e clique em Capturar Quadro do Vídeo.',
        },
        {
          name: 'Passo 3: Escolha a Proporção, Realce Cores e Adicione Texto',
          text: 'Selecione 16:9 YouTube (1280x720) ou 9:16 Capa (1080x1920), ative o Realce Vivo Auto e arraste seu título personalizado sobre a tela.',
        },
        {
          name: 'Passo 4: Baixe em PNG ou JPG (<2MB) Sem Marca d’Água',
          text: 'Escolha PNG sem perda ou JPG otimizado abaixo de 2 MB e clique em Baixar Miniatura para salvar sua imagem pronta para o YouTube Studio.',
        },
      ],
      sections: [
        {
          heading: 'Boas Práticas para Thumbnails 1280x720 no YouTube',
          body: 'Use a resolução oficial de 1280x720 pixels (16:9), escolha expressões faciais claras, aumente levemente a saturação e mantenha o texto curto com até 4 palavras.',
        },
        {
          heading: 'Capas Verticais 9:16 para Shorts, TikTok e Reels',
          body: 'Com a predefinição 9:16 Capa (1080x1920), sua imagem é ajustada automaticamente para o formato vertical sem distorção.',
        },
        {
          heading: 'Arquitetura 100% Privada e Offline',
          body: 'Nenhum vídeo é enviado para a nuvem. Instale o VideoThumbnail como PWA para extrair frames e criar thumbnails mesmo sem conexão com a internet.',
        },
      ],
      ctaText: 'Pronto para criar sua thumbnail em poucos segundos?',
      ctaBtn: 'Abrir Criador de Miniaturas',
    },
    hireMe: {
      title: 'Contrate Kishara Dilshan - Astro & WASM | VideoThumbnail',
      metaDescription: 'Precisa de um web app ultrarrápido em Astro, React ou Next.js ou ferramenta WebAssembly? Contrate Kishara Dilshan para soluções de TI otimizadas para SEO.',
      h1: 'Available for Freelance Projects',
      breadcrumb: 'Contrate-me',
      badge: 'Available for Freelance Projects',
      heading: 'Need a Custom IT Solution?',
      intro: "Hi, I'm Kishara Dilshan, the developer behind VideoThumbnail.",
      subcopy: 'If you love this fast, client-side tool and need a world-class IT solution for your own business, I am available for freelance projects. I specialize in:',
      specialties: [
        {
          title: 'Ultra-fast, SEO-optimized web applications',
          description: 'Astro, React, Next.js — engineered for sub-second loads, technical SEO, and clean scalability.',
        },
        {
          title: 'Client-side processing & WebAssembly (WASM) tools',
          description: 'Zero-server media, PDF, and data utilities that run privately inside the browser.',
        },
        {
          title: 'UI/UX design & High-converting landing pages',
          description: 'Minimal, accessible interfaces crafted to convert visitors effortlessly across desktop and mobile.',
        },
      ],
      ctaHeading: "Let's build something amazing together.",
      email: 'kisharadilshan007@gmail.com',
      emailLabel: 'Email me directly: kisharadilshan007@gmail.com',
      copyButtonLabel: 'Copy Email',
      copiedConfirmation: 'E-mail copiado com sucesso!',
    },
    footer: {
      tagline: 'Extrator de Frames e Criador de Miniaturas para YouTube 100% Local.',
      privacyBadge: 'Zero Upload • Sem Marca d’Água • Funciona Offline',
      copyright: '© 2026 VideoThumbnail por Kishara Dilshan. Licença MIT.',
    },
  },
  de: {
    nav: {
      brandName: 'VideoThumbnail',
      home: 'Startseite',
      howToUse: 'Anleitung',
      hireMe: 'Hire Me',
      languageLabel: 'Sprache wählen',
      themeToggleLabel: 'Helles und dunkles Design wechseln',
      lightMode: 'Hell',
      darkMode: 'Dunkel',
      installPwa: 'App Installieren',
      installPwaAria: 'VideoThumbnail für die Offline-Nutzung zum Startbildschirm hinzufügen',
      supportDev: 'Entwickler Unterstützen',
      supportDevAria: 'Den Entwickler auf Gumroad unterstützen',
      githubAria: 'Quellcode auf GitHub ansehen',
    },
    pwaModal: {
      title: 'VideoThumbnail App Installieren (Offline-fähig)',
      subtitle: 'Nutzen Sie VideoThumbnail 100% offline direkt vom Startbildschirm oder Desktop.',
      iosStep1: '1. Tippen Sie in Safari auf das Teilen-Symbol.',
      iosStep2: '2. Wählen Sie "Zum Home-Bildschirm".',
      iosStep3: '3. Tippen Sie auf "Hinzufügen" für die Offline-Web-App.',
      desktopNote: 'Klicken Sie in Chrome, Edge oder Brave auf das Installieren-Symbol in der Adressleiste.',
      closeBtn: 'Verstanden, Schließen',
    },
    home: {
      title: 'Video Thumbnail Erstellen - Gratis & Ohne Wasserzeichen',
      metaDescription: 'Extrahieren Sie HD-Frames aus MP4-, MOV- oder WebM-Videos und erstellen Sie YouTube-Thumbnails direkt im Browser. 100% kostenlos und ohne Datei-Upload.',
      h1: 'Video Thumbnail Maker — Vorschaubilder aus Videos Erstellen',
      heroSubtitle: 'Extrahieren Sie hochauflösende Einzelbilder aus MP4-, MOV- und WebM-Videos, fügen Sie Text hinzu und exportieren Sie YouTube-Thumbnails lokal im Browser.',
      badges: {
        privacy: '100% Lokal im Browser (Kein Video-Upload)',
        noWatermark: 'Kostenlos & Ohne Wasserzeichen',
        hdExport: '1280x720 YouTube & 9:16 Shorts Cover',
      },
      featuresTitle: 'Warum Creator Unseren Online Video Thumbnail Generator Nutzen',
      featuresSubtitle: 'Schneller, datenschutzfreundlicher Video-Frame-Extractor und YouTube-Thumbnail-Editor direkt im Browser.',
      features: [
        {
          title: 'Einzelbild aus Video Extrahieren mit -1f / +1f Präzision',
          description: 'Springen Sie Bild für Bild durch MP4-, MOV- oder WebM-Dateien oder nutzen Sie die Filmstreifen-Vorschau für gestochen scharfe Aufnahmen.',
        },
        {
          title: '1280x720 YouTube-Format & 9:16 Cover für Shorts und TikTok',
          description: 'Wechseln Sie mit einem Klick zwischen 16:9 YouTube (1280x720), 9:16 Hochformat (1080x1920) oder 1:1 Quadrat.',
        },
        {
          title: 'Markanten Text Hinzufügen & Farben Sofort Optimieren',
          description: 'Positionieren Sie Überschriften per Drag-and-Drop und passen Sie Helligkeit, Kontrast und Sättigung für höhere Klickraten an.',
        },
        {
          title: 'Thumbnails Erstellen Ohne Video-Upload auf Server',
          description: 'Ihre Videos verlassen niemals Ihr Gerät. Die gesamte Bildverarbeitung läuft lokal über HTML5 Canvas ohne Registrierung.',
        },
      ],
      faqTitle: 'Häufig Gestellte Fragen (FAQ)',
      faqSubtitle: 'Alles Wissenswerte zum Extrahieren von Video-Frames und Erstellen von YouTube-Thumbnails.',
      faqs: [
        {
          question: 'Wie erstelle ich ein YouTube-Thumbnail aus einem vorhandenen Video?',
          answer: 'Ziehen Sie Ihre MP4-, MOV- oder WebM-Datei in das Werkzeug oben, wählen Sie über die Zeitleiste oder die -1f / +1f Tasten das beste Bild und klicken Sie auf Video-Frame Erfassen. Wählen Sie 16:9 YouTube (1280x720), fügen Sie optional Text hinzu und laden Sie das PNG oder JPG herunter.',
        },
        {
          question: 'Welche Größe und Auflösung sollte ein YouTube-Thumbnail haben?',
          answer: 'YouTube empfiehlt 1280x720 Pixel (16:9 Seitenverhältnis) und eine Dateigröße unter 2 MB als JPG oder PNG. Unsere 16:9-Vorlage exportiert exakt 1280x720 Pixel, während 9:16 Cover 1080x1920 Pixel für Shorts und TikTok liefert.',
        },
        {
          question: 'Werden meine Videos beim Extrahieren auf einen Server hochgeladen?',
          answer: 'Nein. VideoThumbnail arbeitet zu 100% lokal in Ihrem Browser mit HTML5 Video und Canvas 2D. Ihre Videodateien werden niemals hochgeladen.',
        },
        {
          question: 'Kann ich Thumbnails aus MP4, MOV und WebM ohne Wasserzeichen erstellen?',
          answer: 'Ja. Sie können Bilder aus MP4-, MOV- und WebM-Videos komplett kostenlos, ohne Wasserzeichen und ohne Anmeldung exportieren.',
        },
      ],
    },
    studio: {
      dropzoneTitle: 'MP4-, MOV- oder WebM-Video hier ablegen',
      dropzoneSubtitle: 'Oder klicken, um eine lokale Videodatei zu wählen — sofortiges Laden ohne Upload',
      chooseVideoBtn: 'Videodatei Auswählen',
      trySampleBtn: 'Beispielvideo Testen',
      privacyNote: '100% Lokale Browser-Verarbeitung • Keine Anmeldung • Kein Wasserzeichen',
      step1Title: '1. Frame Suchen & Erfassen',
      step2Title: '2. Format, Farben & Text',
      step3Title: '3. Thumbnail Exportieren',
      playBtn: 'Abspielen',
      pauseBtn: 'Pause',
      prevFrameBtn: '-1f',
      nextFrameBtn: '+1f',
      prevSecBtn: '-1s',
      nextSecBtn: '+1s',
      captureFrameBtn: 'Video-Frame Erfassen',
      frameCapturedToast: 'Einzelbild erfolgreich ins Studio übernommen!',
      quickFilmstripLabel: 'Filmstreifen-Schnellauswahl (Klicken zum Springen & Erfassen):',
      generateFilmstripBtn: 'Filmstreifen Aktualisieren',
      changeVideoBtn: 'Anderes Video Laden',
      aspectRatioLabel: 'Seitenverhältnis & Auflösung',
      ratio16x9: '16:9 YouTube (1280×720)',
      ratio9x16: '9:16 Cover (1080×1920)',
      ratio1x1: '1:1 Quadrat (1080×1080)',
      visualPopLabel: 'Farbkorrektur & Kontrast',
      brightness: 'Helligkeit',
      contrast: 'Kontrast',
      saturation: 'Dynamik / Sättigung',
      autoPopBtn: 'Auto Vivid Pop',
      resetFiltersBtn: 'Zurücksetzen',
      addTextLabel: 'Thumbnail-Text Hinzufügen (Auf der Vorschau verschiebbar)',
      headlinePlaceholder: 'Markante Überschrift eingeben...',
      subtextPlaceholder: 'Optionaler Untertitel oder Badge...',
      textStyleLabel: 'Text-Stil',
      styleOutline: 'Fette Kontur',
      styleBanner: 'Banner-Box',
      styleGlow: 'Neon-Glanz',
      styleMinimal: 'Klare Schatten',
      textPositionLabel: 'Schnellposition',
      posTop: 'Oben',
      posCenter: 'Mitte',
      posBottom: 'Unten',
      fontSizeLabel: 'Textgröße',
      textColorLabel: 'Textfarbe',
      dragHint: 'Tipp: Ziehen Sie den Text direkt auf der Vorschau an die gewünschte Stelle.',
      exportFormatLabel: 'Export-Format',
      formatPng: 'PNG (Verlustfrei HD)',
      formatJpg: 'JPG (<2MB YouTube-fertig)',
      downloadBtn: 'Thumbnail Herunterladen',
      copyImageBtn: 'Bild Kopieren',
      copiedImageToast: 'Thumbnail in die Zwischenablage kopiert!',
      statusReady: 'Bereit zum lokalen Erfassen und Exportieren von HD-Thumbnails.',
      statusExported: 'Thumbnail erfolgreich heruntergeladen!',
      statusSampleLoaded: 'Beispielvideo geladen! Wählen Sie einen Frame oder bearbeiten Sie den Text.',
    },
    howToUse: {
      title: 'Thumbnail aus Video Erstellen: Anleitung - VideoThumbnail',
      metaDescription: 'Schritt-für-Schritt-Anleitung: HD-Einzelbilder aus MP4-, MOV- oder WebM-Videos extrahieren, Text einfügen und 1280x720 YouTube-Thumbnails lokal speichern.',
      h1: 'Wie Man ein Hochauflösendes Thumbnail aus Jedem Video Erstellt',
      breadcrumb: 'Anleitung',
      intro: 'Erfahren Sie, wie Sie gestochen scharfe Frames aus MP4-, MOV- oder WebM-Videos extrahieren und als 1280x720 YouTube-Thumbnail oder 9:16 Cover speichern.',
      steps: [
        {
          name: 'Schritt 1: MP4-, MOV- oder WebM-Video Lokal Öffnen',
          text: 'Ziehen Sie Ihre Videodatei in das Auswahlfeld auf der Startseite. Da alles lokal im Browser verarbeitet wird, öffnen selbst große 4K-Videos sofort.',
        },
        {
          name: 'Schritt 2: Bild für Bild (-1f / +1f) Prüfen & Erfassen',
          text: 'Nutzen Sie den Regler, den Filmstreifen oder die -1f / +1f Tasten für das schärfste Einzelbild und klicken Sie auf Video-Frame Erfassen.',
        },
        {
          name: 'Schritt 3: Seitenverhältnis, Farb-Pop & Text Anpassen',
          text: 'Wählen Sie 16:9 YouTube (1280x720) oder 9:16 Cover (1080x1920), aktivieren Sie Auto Vivid Pop und ziehen Sie Ihren Titel an die gewünschte Position.',
        },
        {
          name: 'Schritt 4: Als PNG oder JPG (<2MB) Herunterladen',
          text: 'Speichern Sie Ihr fertiges Vorschaubild ohne Wasserzeichen als verlustfreies PNG oder als YouTube-optimiertes JPG unter 2 MB.',
        },
      ],
      sections: [
        {
          heading: 'Tipps für Klickstarke 1280x720 YouTube-Thumbnails',
          body: 'Nutzen Sie das offizielle 1280x720 Format (16:9), wählen Sie ein ausdrucksstarkes Einzelbild, erhöhen Sie leicht den Kontrast und beschränken Sie Text auf maximal 4 Wörter.',
        },
        {
          heading: '9:16 Vertikale Cover für Shorts, TikTok & Reels',
          body: 'Mit der 9:16 Cover-Vorlage (1080x1920) wird Ihr Bild perfekt zugeschnitten, sodass Titel optimal im sichtbaren Bereich platziert werden können.',
        },
        {
          heading: '100% Datenschutz durch Lokale Browser-Technik',
          body: 'Ihre Videos bleiben auf Ihrem Gerät. Nach der Installation als PWA funktioniert VideoThumbnail auch komplett ohne Internetverbindung.',
        },
      ],
      ctaText: 'Bereit, ein gestochen scharfes Vorschaubild zu erstellen?',
      ctaBtn: 'Zum Video Thumbnail Maker',
    },
    hireMe: {
      title: 'Kishara Dilshan - Astro & WASM Dev | VideoThumbnail',
      metaDescription: 'Suchen Sie eine schnelle Astro-, React- oder Next.js-Web-App oder ein WebAssembly-Tool? Beauftragen Sie Kishara Dilshan für maßgeschneiderte IT-Lösungen.',
      h1: 'Available for Freelance Projects',
      breadcrumb: 'Hire Me',
      badge: 'Available for Freelance Projects',
      heading: 'Need a Custom IT Solution?',
      intro: "Hi, I'm Kishara Dilshan, the developer behind VideoThumbnail.",
      subcopy: 'If you love this fast, client-side tool and need a world-class IT solution for your own business, I am available for freelance projects. I specialize in:',
      specialties: [
        {
          title: 'Ultra-fast, SEO-optimized web applications',
          description: 'Astro, React, Next.js — engineered for sub-second loads, technical SEO, and clean scalability.',
        },
        {
          title: 'Client-side processing & WebAssembly (WASM) tools',
          description: 'Zero-server media, PDF, and data utilities that run privately inside the browser.',
        },
        {
          title: 'UI/UX design & High-converting landing pages',
          description: 'Minimal, accessible interfaces crafted to convert visitors effortlessly across desktop and mobile.',
        },
      ],
      ctaHeading: "Let's build something amazing together.",
      email: 'kisharadilshan007@gmail.com',
      emailLabel: 'Email me directly: kisharadilshan007@gmail.com',
      copyButtonLabel: 'Copy Email',
      copiedConfirmation: 'E-Mail-Adresse kopiert!',
    },
    footer: {
      tagline: '100% Lokaler Video-Frame-Extractor & YouTube-Thumbnail-Editor.',
      privacyBadge: 'Kein Upload • Kein Wasserzeichen • Offline Nutzbar',
      copyright: '© 2026 VideoThumbnail von Kishara Dilshan. MIT-Lizenz.',
    },
  },
  fr: {
    nav: {
      brandName: 'VideoThumbnail',
      home: 'Accueil',
      howToUse: 'Guide',
      hireMe: 'Me Recruter',
      languageLabel: 'Choisir la langue',
      themeToggleLabel: 'Basculer entre le mode clair et sombre',
      lightMode: 'Clair',
      darkMode: 'Sombre',
      installPwa: 'Installer l’App',
      installPwaAria: 'Ajouter VideoThumbnail à l’écran d’accueil pour un usage hors ligne',
      supportDev: 'Soutenir le Créateur',
      supportDevAria: 'Soutenir le développeur sur Gumroad',
      githubAria: 'Voir le code source sur GitHub',
    },
    pwaModal: {
      title: 'Installer VideoThumbnail (Fonctionne Hors Ligne)',
      subtitle: 'Utilisez VideoThumbnail 100% hors connexion depuis votre écran d’accueil ou bureau.',
      iosStep1: '1. Appuyez sur l’icône Partager dans Safari.',
      iosStep2: '2. Sélectionnez "Sur l’écran d’accueil".',
      iosStep3: '3. Appuyez sur "Ajouter" pour lancer l’application hors ligne.',
      desktopNote: 'Dans Chrome, Edge ou Brave, cliquez sur l’icône Installer dans la barre d’adresse.',
      closeBtn: 'Compris, Fermer',
    },
    home: {
      title: 'Créateur de Miniature Vidéo Gratuit - Sans Filigrane en HD',
      metaDescription: 'Extrayez des images HD de vos vidéos MP4, MOV ou WebM et créez des miniatures YouTube dans votre navigateur. 100% gratuit, sans envoi et sans filigrane.',
      h1: 'Créateur de Miniature Vidéo — Extraire une Image en HD',
      heroSubtitle: 'Extrayez des images haute résolution de vos vidéos MP4, MOV et WebM, ajoutez du texte percutant et exportez vos miniatures YouTube localement sans filigrane.',
      badges: {
        privacy: '100% Local dans le Navigateur (Sans Envoi)',
        noWatermark: 'Gratuit & Sans Filigrane',
        hdExport: 'YouTube 1280x720 & Couvertures 9:16',
      },
      featuresTitle: 'Pourquoi Utiliser Notre Générateur de Miniatures Vidéo en Ligne',
      featuresSubtitle: 'Un extracteur d’images vidéo rapide et confidentiel conçu pour YouTube, Shorts, TikTok et Reels.',
      features: [
        {
          title: 'Capturer une Image Vidéo à l’Image Près (-1f / +1f)',
          description: 'Parcourez vos fichiers MP4, MOV ou WebM image par image ou cliquez sur la pellicule automatique pour capturer l’instant parfait.',
        },
        {
          title: 'Formats 1280x720 YouTube & 9:16 Couverture Verticale',
          description: 'Basculez en un clic entre le format 16:9 YouTube (1280x720), la couverture 9:16 (1080x1920) ou le format carré 1:1.',
        },
        {
          title: 'Ajouter du Texte Percutant et Sublimer les Couleurs',
          description: 'Glissez des titres avec contour épais ou bannière contrastée et ajustez luminosité, contraste et saturation.',
        },
        {
          title: 'Créer une Miniature Vidéo Sans Téléverser vos Fichiers',
          description: 'Vos vidéos restent sur votre appareil. Le rendu s’effectue localement via HTML5 Canvas sans inscription ni filigrane.',
        },
      ],
      faqTitle: 'Questions Fréquentes',
      faqSubtitle: 'Tout savoir sur l’extraction d’images vidéo et la création de miniatures YouTube.',
      faqs: [
        {
          question: 'Comment créer une miniature YouTube à partir d’une vidéo ?',
          answer: 'Déposez votre fichier MP4, MOV ou WebM dans l’outil ci-dessus, utilisez la barre de lecture ou les boutons -1f / +1f pour cibler la meilleure image, puis cliquez sur Capturer l’Image. Choisissez 16:9 YouTube (1280x720), ajoutez un titre si souhaité et téléchargez en PNG ou JPG.',
        },
        {
          question: 'Quelle est la taille et la résolution recommandées pour YouTube ?',
          answer: 'YouTube recommande une résolution de 1280x720 pixels (format 16:9) et un fichier inférieur à 2 Mo en JPG ou PNG. Notre préréglage 16:9 génère exactement du 1280x720, et le mode 9:16 génère du 1080x1920 pour Shorts et TikTok.',
        },
        {
          question: 'Mes vidéos sont-elles envoyées sur un serveur lors de l’extraction ?',
          answer: 'Non. VideoThumbnail fonctionne 100% localement dans votre navigateur grâce à HTML5 Video et Canvas 2D. Vos vidéos ne quittent jamais votre appareil.',
        },
        {
          question: 'Puis-je extraire des miniatures MP4, MOV et WebM sans filigrane ?',
          answer: 'Oui. Vous pouvez créer et télécharger des miniatures depuis vos vidéos MP4, MOV et WebM gratuitement, sans filigrane et sans compte.',
        },
      ],
    },
    studio: {
      dropzoneTitle: 'Déposez votre vidéo MP4, MOV ou WebM ici',
      dropzoneSubtitle: 'Ou cliquez pour choisir un fichier local — ouverture immédiate sans téléversement',
      chooseVideoBtn: 'Choisir une Vidéo',
      trySampleBtn: 'Essayer une Vidéo Test',
      privacyNote: 'Traitement 100% Local • Sans Inscription • Sans Filigrane',
      step1Title: '1. Parcourir & Capturer l’Image',
      step2Title: '2. Format, Couleurs & Texte',
      step3Title: '3. Exporter la Miniature',
      playBtn: 'Lecture',
      pauseBtn: 'Pause',
      prevFrameBtn: '-1f',
      nextFrameBtn: '+1f',
      prevSecBtn: '-1s',
      nextSecBtn: '+1s',
      captureFrameBtn: 'Capturer l’Image Vidéo',
      frameCapturedToast: 'Image vidéo capturée avec succès dans le studio !',
      quickFilmstripLabel: 'Pellicule Rapide (Cliquez sur une vignette pour capturer) :',
      generateFilmstripBtn: 'Actualiser la Pellicule',
      changeVideoBtn: 'Changer de Vidéo',
      aspectRatioLabel: 'Format & Résolution Cible',
      ratio16x9: '16:9 YouTube (1280×720)',
      ratio9x16: '9:16 Couverture (1080×1920)',
      ratio1x1: '1:1 Carré (1080×1080)',
      visualPopLabel: 'Éclat Visuel & Couleurs',
      brightness: 'Luminosité',
      contrast: 'Contraste',
      saturation: 'Vibrance / Saturation',
      autoPopBtn: 'Éclat Vif Auto',
      resetFiltersBtn: 'Réinitialiser',
      addTextLabel: 'Ajouter du Texte (Glissez directement sur l’aperçu)',
      headlinePlaceholder: 'Saisissez un titre accrocheur...',
      subtextPlaceholder: 'Sous-titre ou badge optionnel...',
      textStyleLabel: 'Style du Texte',
      styleOutline: 'Contour Épais',
      styleBanner: 'Bannière Pleine',
      styleGlow: 'Éclat Néon',
      styleMinimal: 'Ombre Nette',
      textPositionLabel: 'Position Rapide',
      posTop: 'Haut',
      posCenter: 'Centre',
      posBottom: 'Bas',
      fontSizeLabel: 'Taille du Texte',
      textColorLabel: 'Couleur du Titre',
      dragHint: 'Astuce : Faites glisser le texte directement sur le canevas pour le déplacer.',
      exportFormatLabel: 'Format d’Exportation',
      formatPng: 'PNG (HD Sans Perte)',
      formatJpg: 'JPG (<2 Mo Prêt pour YouTube)',
      downloadBtn: 'Télécharger la Miniature',
      copyImageBtn: 'Copier l’Image',
      copiedImageToast: 'Miniature copiée dans le presse-papiers !',
      statusReady: 'Prêt à capturer et exporter vos miniatures haute résolution.',
      statusExported: 'Miniature exportée avec succès !',
      statusSampleLoaded: 'Vidéo test chargée ! Parcourez les images ou personnalisez le titre.',
    },
    howToUse: {
      title: 'Comment Créer une Miniature Depuis une Vidéo - Guide Simple',
      metaDescription: 'Guide étape par étape pour extraire une image HD d’une vidéo MP4, MOV ou WebM, ajouter du texte et exporter une miniature YouTube 1280x720 localement.',
      h1: 'Comment Créer une Miniature Haute Résolution Depuis N’importe Quelle Vidéo',
      breadcrumb: 'Guide',
      intro: 'Apprenez à extraire une image nette depuis vos vidéos MP4, MOV ou WebM, ajuster les couleurs et exporter une miniature YouTube 1280x720 en local.',
      steps: [
        {
          name: 'Étape 1 : Chargez Votre Vidéo MP4, MOV ou WebM en Local',
          text: 'Glissez votre fichier vidéo dans la zone de dépôt. Comme le traitement est local via HTML5 Video, même les vidéos 4K s’ouvrent instantanément.',
        },
        {
          name: 'Étape 2 : Ciblez l’Image Exacte (-1f / +1f) et Capturez',
          text: 'Utilisez la timeline, la pellicule rapide ou les boutons -1f / +1f pour trouver une image nette, puis cliquez sur Capturer l’Image Vidéo.',
        },
        {
          name: 'Étape 3 : Choisissez le Format, l’Éclat et le Texte',
          text: 'Sélectionnez 16:9 YouTube (1280x720) ou 9:16 Couverture (1080x1920), activez Éclat Vif Auto et placez votre titre sur l’image.',
        },
        {
          name: 'Étape 4 : Téléchargez en PNG ou JPG (<2 Mo) Sans Filigrane',
          text: 'Exportez votre image en PNG sans perte ou en JPG optimisé sous la limite de 2 Mo de YouTube Studio.',
        },
      ],
      sections: [
        {
          heading: 'Réussir ses Miniatures YouTube 1280x720',
          body: 'Utilisez la résolution 1280x720 (16:9), privilégiez un visage expressif ou une action claire, augmentez légèrement la saturation et limitez le texte à 4 mots.',
        },
        {
          heading: 'Couvertures Verticales 9:16 pour Shorts, TikTok et Reels',
          body: 'Le mode 9:16 Couverture (1080x1920) recadre proprement votre image pour créer des couvertures verticales percutantes.',
        },
        {
          heading: 'Confidentialité Totale et Mode Hors Ligne',
          body: 'Aucun fichier n’est envoyé sur le cloud. Installez l’application PWA pour créer vos miniatures même sans connexion Internet.',
        },
      ],
      ctaText: 'Prêt à extraire une miniature HD de votre vidéo ?',
      ctaBtn: 'Ouvrir le Créateur de Miniatures',
    },
    hireMe: {
      title: 'Recruter Kishara Dilshan - Astro & WASM | VideoThumbnail',
      metaDescription: 'Besoin d’une application web ultra-rapide en Astro, React ou Next.js ou d’un outil WebAssembly ? Contactez Kishara Dilshan pour vos projets web sur mesure.',
      h1: 'Available for Freelance Projects',
      breadcrumb: 'Me Recruter',
      badge: 'Available for Freelance Projects',
      heading: 'Need a Custom IT Solution?',
      intro: "Hi, I'm Kishara Dilshan, the developer behind VideoThumbnail.",
      subcopy: 'If you love this fast, client-side tool and need a world-class IT solution for your own business, I am available for freelance projects. I specialize in:',
      specialties: [
        {
          title: 'Ultra-fast, SEO-optimized web applications',
          description: 'Astro, React, Next.js — engineered for sub-second loads, technical SEO, and clean scalability.',
        },
        {
          title: 'Client-side processing & WebAssembly (WASM) tools',
          description: 'Zero-server media, PDF, and data utilities that run privately inside the browser.',
        },
        {
          title: 'UI/UX design & High-converting landing pages',
          description: 'Minimal, accessible interfaces crafted to convert visitors effortlessly across desktop and mobile.',
        },
      ],
      ctaHeading: "Let's build something amazing together.",
      email: 'kisharadilshan007@gmail.com',
      emailLabel: 'Email me directly: kisharadilshan007@gmail.com',
      copyButtonLabel: 'Copy Email',
      copiedConfirmation: 'Adresse e-mail copiée !',
    },
    footer: {
      tagline: 'Extracteur d’Images Vidéo & Studio de Miniatures YouTube 100% Local.',
      privacyBadge: 'Zéro Envoi • Sans Filigrane • Fonctionne Hors Ligne',
      copyright: '© 2026 VideoThumbnail par Kishara Dilshan. Licence MIT.',
    },
  },
  ja: {
    nav: {
      brandName: 'VideoThumbnail',
      home: 'ホーム',
      howToUse: '使い方',
      hireMe: '制作依頼',
      languageLabel: '言語を選択',
      themeToggleLabel: 'ライトモードとダークモードを切り替え',
      lightMode: 'ライト',
      darkMode: 'ダーク',
      installPwa: 'アプリを追加',
      installPwaAria: 'オフライン利用のためにVideoThumbnailをホーム画面に追加',
      supportDev: '開発者を支援',
      supportDevAria: 'Gumroadで開発者を支援する',
      githubAria: 'GitHubでソースコードを見る',
    },
    pwaModal: {
      title: 'VideoThumbnailをホーム画面に追加（オフライン対応）',
      subtitle: 'インストールするとインターネット接続なしでも100%オフラインで動作します。',
      iosStep1: '1. ブラウザの「共有」アイコンをタップします。',
      iosStep2: '2. メニューから「ホーム画面に追加」を選択します。',
      iosStep3: '3. 「追加」をタップするとオフラインアプリとして起動できます。',
      desktopNote: 'Chrome・Edge・Braveではアドレスバー右側のインストールアイコンをクリックしてください。',
      closeBtn: '閉じる',
    },
    home: {
      title: '動画サムネイル作成ツール - 無料で動画から高画質切り出し｜YouTube対応のWebアプリ・透かしなし・登録不要',
      metaDescription: 'MP4・MOV・WebM動画から高解像度フレームを抽出し、ブラウザ上でYouTubeサムネイルや縦型カバー画像をデザインできる無料Webツールです。サーバーへのアップロード不要、透かしなし、登録不要で安全・高速に作成できます。今すぐブラウザで簡単に高画質サムネイル画像を保存・ダウンロードしましょう。',
      h1: '動画サムネイル作成ツール — 任意の動画から高画質サムネイルを即座に作成',
      heroSubtitle: 'MP4・MOV・WebM動画から高解像度の瞬間を切り出し、太字テキストを追加してYouTubeサムネイルをブラウザ上で即座に書き出せます。完全無料・アップロード不要・透かしなし。',
      badges: {
        privacy: '100%ブラウザ内処理（サーバー送信なし）',
        noWatermark: '完全無料・透かしロゴなし',
        hdExport: '1280x720 YouTube & 9:16 ショート対応',
      },
      featuresTitle: 'オンライン動画サムネイル作成ツールが選ばれる理由',
      featuresSubtitle: '動画をサーバーに送信せず、ブラウザ内で高速にフレーム抽出とサムネイル編集を完結できます。',
      features: [
        {
          title: '-1f / +1f コマ送り機能で決定的なフレームを抽出',
          description: 'MP4・MOV・WebM動画を1フレーム単位で精密にシークでき、自動生成フィルムストリップからもブレのない最高の一枚を瞬時に選べます。',
        },
        {
          title: '1280x720 YouTubeサイズ＆9:16縦型カバーにワンクリック対応',
          description: '16:9 YouTube（1280x720）、ショートやTikTok向けの9:16縦型カバー（1080x1920）、1:1正方形に即座に切り替えられます。',
        },
        {
          title: '目立つ太字テキスト追加＆明るさ・彩度ポップ補正',
          description: '縁取り文字やバナー付き見出しをキャンバス上で自由にドラッグ配置し、明るさ・コントラスト・彩度を高めてクリック率を向上させます。',
        },
        {
          title: '動画をアップロードせずに安全・高速にサムネイル作成',
          description: '動画ファイルは端末から外部へ一切送信されません。4K大容量動画も待ち時間ゼロで読み込め、会員登録も不要です。',
        },
      ],
      faqTitle: 'よくある質問（FAQ）',
      faqSubtitle: '動画からのフレーム切り出しやYouTubeサムネイル作成に関する疑問にお答えします。',
      faqs: [
        {
          question: '既存の動画からYouTubeサムネイルを作るにはどうすればいいですか？',
          answer: '上のボックスにMP4・MOV・WebM動画をドロップし、シークバーや-1f / +1fボタンでベストな瞬間を見つけて「フレームをキャプチャ」を押します。16:9 YouTube（1280x720）を選び、必要に応じて文字入れや色補正を行ってPNGまたはJPGで保存してください。',
        },
        {
          question: 'YouTubeサムネイルの推奨サイズと解像度は何ですか？',
          answer: 'YouTube公式の推奨サイズは解像度1280x720ピクセル（アスペクト比16:9）、ファイルサイズ2MB以下のJPGまたはPNGです。本ツールの16:9プリセットは正確な1280x720で出力し、9:16プリセットは1080x1920の縦型カバーを出力します。',
        },
        {
          question: 'フレームを抽出するとき、動画はサーバーにアップロードされますか？',
          answer: 'いいえ。VideoThumbnailはHTML5 VideoとCanvas 2Dを用いて100%お使いのブラウザ内だけで処理を行います。動画が外部サーバーへ送信されることは一切ありません。',
        },
        {
          question: 'MP4・MOV・WebM動画から透かし（ウォーターマーク）なしで作成できますか？',
          answer: 'はい。完全無料・透かしなし・アカウント登録なし・回数制限なしで高画質なサムネイル画像を書き出せます。',
        },
      ],
    },
    studio: {
      dropzoneTitle: 'MP4・MOV・WebM動画をここにドロップ',
      dropzoneSubtitle: 'またはクリックして端末内の動画を選択 — アップロード待ち時間ゼロで即座に読み込み',
      chooseVideoBtn: '動画ファイルを選択',
      trySampleBtn: 'サンプル動画で試す',
      privacyNote: '100%ブラウザ内ローカル処理 • 登録不要 • 透かしなし',
      step1Title: '1. フレーム選択＆キャプチャ',
      step2Title: '2. サイズ・色補正・文字入れ',
      step3Title: '3. サムネイル書き出し',
      playBtn: '再生',
      pauseBtn: '一時停止',
      prevFrameBtn: '-1f',
      nextFrameBtn: '+1f',
      prevSecBtn: '-1秒',
      nextSecBtn: '+1秒',
      captureFrameBtn: 'このフレームをキャプチャ',
      frameCapturedToast: '高画質フレームをスタジオに取り込みました！',
      quickFilmstripLabel: 'クイックフィルム一覧（クリックでその場面へ移動＆キャプチャ）：',
      generateFilmstripBtn: '一覧を更新',
      changeVideoBtn: '別の動画を開く',
      aspectRatioLabel: 'アスペクト比と出力解像度',
      ratio16x9: '16:9 YouTube (1280×720)',
      ratio9x16: '9:16 縦型カバー (1080×1920)',
      ratio1x1: '1:1 正方形 (1080×1080)',
      visualPopLabel: '色調・鮮やかさ補正',
      brightness: '明るさ',
      contrast: 'コントラスト',
      saturation: '鮮やかさ（彩度）',
      autoPopBtn: '自動くっきり補正',
      resetFiltersBtn: 'リセット',
      addTextLabel: 'サムネイル文字入れ（プレビュー上でドラッグ移動可能）',
      headlinePlaceholder: '目立つメイン見出しを入力...',
      subtextPlaceholder: 'サブテキストやバッジ（任意）...',
      textStyleLabel: 'テキストスタイル',
      styleOutline: '太枠アウトライン',
      styleBanner: '背景バナー',
      styleGlow: 'ネオン発光',
      styleMinimal: 'クリーンシャドウ',
      textPositionLabel: 'クイック位置合わせ',
      posTop: '上部',
      posCenter: '中央',
      posBottom: '下部',
      fontSizeLabel: '文字サイズ',
      textColorLabel: '文字カラー',
      dragHint: 'ヒント：プレビュー画面上のテキストを直接ドラッグして好きな位置に配置できます。',
      exportFormatLabel: '保存フォーマット',
      formatPng: 'PNG（高画質ロスレス）',
      formatJpg: 'JPG（2MB以下・YouTube最適）',
      downloadBtn: 'サムネイルをダウンロード',
      copyImageBtn: '画像をコピー',
      copiedImageToast: 'サムネイル画像をクリップボードにコピーしました！',
      statusReady: '高解像度サムネイルのキャプチャと書き出し準備が完了しています。',
      statusExported: 'サムネイル画像のダウンロードが完了しました！',
      statusSampleLoaded: 'サンプル動画を読み込みました！フレーム選択や文字入れをお試しください。',
    },
    howToUse: {
      title: '動画から高画質サムネイルを作成する方法｜VideoThumbnail公式使い方ガイド・1280x720対応',
      metaDescription: 'MP4・MOV・WebM動画から決定的な高解像度フレームを切り出し、目立つ太字テキストや色補正を加えて1280x720のYouTubeサムネイルや9:16ショート用カバー画像をブラウザ内で作成する手順を詳しく解説します。アップロード不要で安全に今すぐ無料で使えます。',
      h1: 'あらゆる動画から高解像度サムネイルを作成する手順',
      breadcrumb: '使い方',
      intro: 'MP4・MOV・WebM動画から高精細な静止画フレームを抽出し、YouTube用の1280x720サムネイルやショート用9:16カバー画像をローカルで作成する4つのステップを紹介します。',
      steps: [
        {
          name: 'ステップ1：MP4・MOV・WebM動画をブラウザに読み込む',
          text: 'トップページのドロップゾーンに動画ファイルをドラッグ＆ドロップします。サーバーへアップロードしないため、大容量の4K動画でも瞬時に開きます。',
        },
        {
          name: 'ステップ2：-1f / +1f コマ送りでベストな瞬間をキャプチャ',
          text: 'シークバー、自動フィルム一覧、または-1f / +1fボタンを使ってブレのない瞬間を見つけ、「このフレームをキャプチャ」をクリックします。',
        },
        {
          name: 'ステップ3：比率選択・自動くっきり補正・テキスト配置',
          text: '16:9 YouTube（1280x720）や9:16縦型（1080x1920）を選び、自動くっきり補正や太字タイトルをキャンバス上でドラッグ配置します。',
        },
        {
          name: 'ステップ4：PNGまたはJPG（2MB以下）で即座に保存',
          text: 'ロスレスPNGまたはYouTube Studioの2MB制限に収まる高画質JPGを選択し、透かしなしでダウンロードします。',
        },
      ],
      sections: [
        {
          heading: 'クリック率を高める1280x720 YouTubeサムネイルのコツ',
          body: '16:9（1280x720）の標準解像度を使用し、表情や動きがはっきり見えるフレームを選びましょう。彩度を少し高め、文字数を短く絞るとスマホ画面でも高い視認性を保てます。',
        },
        {
          heading: 'ショート・TikTok・Reels向け9:16縦型カバー作成',
          body: '9:16縦型カバー（1080x1920）を選ぶと自動的に最適な縦長比率にクロップされ、見出しテキストを中央付近に見やすく配置できます。',
        },
        {
          heading: '完全ローカル処理＆オフラインPWA対応',
          body: '映像データは端末内だけで処理されるため公開前の動画も安心です。ホーム画面に追加すればオフライン環境でも動作します。',
        },
      ],
      ctaText: 'さっそく動画からベストな一枚を切り出してみましょう！',
      ctaBtn: '動画サムネイル作成ツールを開く',
    },
    hireMe: {
      title: 'Kishara Dilshanへの開発依頼 - Astro & WASM開発｜VideoThumbnail',
      metaDescription: 'Astro・React・Next.jsによる超高速でSEOに強いWebアプリ開発や、ブラウザ完結のWebAssembly（WASM）ツール開発をお探しですか？カスタムITソリューション開発のご相談はKishara Dilshanまで今すぐお気軽にお問い合わせください。',
      h1: 'Available for Freelance Projects',
      breadcrumb: '制作依頼',
      badge: 'Available for Freelance Projects',
      heading: 'Need a Custom IT Solution?',
      intro: "Hi, I'm Kishara Dilshan, the developer behind VideoThumbnail.",
      subcopy: 'If you love this fast, client-side tool and need a world-class IT solution for your own business, I am available for freelance projects. I specialize in:',
      specialties: [
        {
          title: 'Ultra-fast, SEO-optimized web applications',
          description: 'Astro, React, Next.js — engineered for sub-second loads, technical SEO, and clean scalability.',
        },
        {
          title: 'Client-side processing & WebAssembly (WASM) tools',
          description: 'Zero-server media, PDF, and data utilities that run privately inside the browser.',
        },
        {
          title: 'UI/UX design & High-converting landing pages',
          description: 'Minimal, accessible interfaces crafted to convert visitors effortlessly across desktop and mobile.',
        },
      ],
      ctaHeading: "Let's build something amazing together.",
      email: 'kisharadilshan007@gmail.com',
      emailLabel: 'Email me directly: kisharadilshan007@gmail.com',
      copyButtonLabel: 'Copy Email',
      copiedConfirmation: 'メールアドレスをコピーしました！',
    },
    footer: {
      tagline: '100%ブラウザ完結の動画フレーム抽出＆YouTubeサムネイル作成スタジオ',
      privacyBadge: 'サーバー送信なし • 透かしなし • オフライン対応',
      copyright: '© 2026 VideoThumbnail by Kishara Dilshan. MIT License.',
    },
  },
  zh: {
    nav: {
      brandName: 'VideoThumbnail',
      home: '首页',
      howToUse: '使用指南',
      hireMe: '雇佣开发者',
      languageLabel: '选择语言',
      themeToggleLabel: '切换浅色与深色模式',
      lightMode: '浅色',
      darkMode: '深色',
      installPwa: '添加到主屏幕',
      installPwaAria: '将 VideoThumbnail 添加到主屏幕以供离线使用',
      supportDev: '支持开发者',
      supportDevAria: '在 Gumroad 上支持开发者',
      githubAria: '在 GitHub 上查看源代码',
    },
    pwaModal: {
      title: '安装 VideoThumbnail 离线应用',
      subtitle: '安装后可直接从手机主屏幕或电脑桌面启动，100%支持无网络离线使用。',
      iosStep1: '1. 点击 Safari 浏览器底部的“分享”图标。',
      iosStep2: '2. 向下滑动并点击“添加到主屏幕”。',
      iosStep3: '3. 点击右上角“添加”即可随时离线运行。',
      desktopNote: '在 Chrome、Edge 或 Brave 浏览器中，点击地址栏右侧的“安装应用”图标即可。',
      closeBtn: '知道了，关闭',
    },
    home: {
      title: '免费视频缩略图制作工具 - 在线提取高清视频帧与YouTube封面设计（无水印・免上传・浏览器本地极速处理）',
      metaDescription: '免费从任何 MP4、MOV 或 WebM 视频中提取高分辨率画面帧，并在浏览器内直接添加醒目文字、调整色彩对比度并导出 1280x720 YouTube 缩略图或 9:16 竖屏封面。100% 本地运行，无需上传视频文件，无水印、免注册，安全快速地在线制作高清视频封面图片。',
      h1: '视频缩略图制作工具 — 从任何视频免费提取并制作高清封面',
      heroSubtitle: '在浏览器中直接从 MP4、MOV 和 WebM 视频提取高分辨率帧，添加粗体标题并导出 YouTube 缩略图。100% 免费、无需上传服务器、绝无水印。',
      badges: {
        privacy: '100% 浏览器本地处理（零上传）',
        noWatermark: '完全免费 & 无水印',
        hdExport: '支持 1280x720 YouTube 与 9:16 竖屏封面',
      },
      featuresTitle: '为什么创作者选择我们的在线视频缩略图生成器',
      featuresSubtitle: '集高清视频帧提取器与 YouTube 封面制作工具于一体，快速、私密且无需安装庞大软件。',
      features: [
        {
          title: '-1f / +1f 逐帧精准定位，轻松抓取高清视频快照',
          description: '支持在 MP4、MOV 或 WebM 视频中按单帧步进或点击自动生成的胶片预览条，精准避开运动模糊，定格最佳表情与动作瞬间。',
        },
        {
          title: '一键切换 1280x720 YouTube 标准尺寸与 9:16 竖屏封面',
          description: '内置 16:9 YouTube (1280x720)、Shorts/TikTok 专属 9:16 竖屏封面 (1080x1920) 以及 1:1 方形尺寸预设。',
        },
        {
          title: '添加高对比度粗体文字与一键色彩增强',
          description: '直接在画布上拖拽排版描边大字或胶囊横幅标题，配合亮度、对比度与饱和度调节，显著提升视频点击率。',
        },
        {
          title: '无需上传视频即可在本地生成封面，极致隐私安全',
          description: '您的视频文件绝不会离开本地设备。基于 HTML5 Canvas 硬件加速渲染，几 GB 的 4K 原片也能秒开，免登录且无水印。',
        },
      ],
      faqTitle: '常见问题解答 (FAQ)',
      faqSubtitle: '关于从视频提取高清帧以及制作 YouTube 缩略图的常见问题说明。',
      faqs: [
        {
          question: '如何从现有视频中制作 YouTube 缩略图？',
          answer: '将您的 MP4、MOV 或 WebM 视频拖入上方工具框，使用时间轴或 -1f / +1f 逐帧按钮找到最清晰的画面并点击“截取当前视频帧”。随后选择 16:9 YouTube (1280x720) 比例，按需添加粗体文字或增强色彩，即可下载 PNG 或 JPG 封面。',
        },
        {
          question: 'YouTube 缩略图的标准尺寸和分辨率是多少？',
          answer: 'YouTube 官方推荐 1280x720 像素分辨率（16:9 宽高比），文件大小控制在 2MB 以内（JPG 或 PNG 格式）。本工具的 16:9 预设会自动输出精准的 1280x720 图像，9:16 预设则输出 1080x1920 竖屏封面。',
        },
        {
          question: '提取视频帧时，我的视频会上传到服务器吗？',
          answer: '不会。VideoThumbnail 100% 在您的本地浏览器中通过 HTML5 Video 和 Canvas 2D 运行，视频数据完全不会上传至任何远程服务器。',
        },
        {
          question: '我可以从 MP4、MOV 和 WebM 视频生成无水印缩略图吗？',
          answer: '可以。您可以完全免费地从 MP4、MOV 和 WebM 视频中提取并导出无水印高清封面，无需注册账号，也没有每日导出次数限制。',
        },
      ],
    },
    studio: {
      dropzoneTitle: '将 MP4、MOV 或 WebM 视频拖放到此处',
      dropzoneSubtitle: '或点击选择本地设备上的视频文件 — 零上传等待，秒速加载',
      chooseVideoBtn: '选择本地视频文件',
      trySampleBtn: '试用示例视频',
      privacyNote: '100% 浏览器本地处理 • 免注册 • 导出无水印',
      step1Title: '1. 逐帧寻找并截取画面',
      step2Title: '2. 尺寸、色彩与文字排版',
      step3Title: '3. 导出高清缩略图',
      playBtn: '播放',
      pauseBtn: '暂停',
      prevFrameBtn: '-1帧',
      nextFrameBtn: '+1帧',
      prevSecBtn: '-1秒',
      nextSecBtn: '+1秒',
      captureFrameBtn: '截取当前视频帧',
      frameCapturedToast: '高清视频帧已成功截取至编辑画布！',
      quickFilmstripLabel: '快速胶片预览（点击任意画面立即跳转并截取）：',
      generateFilmstripBtn: '刷新预览条',
      changeVideoBtn: '更换其他视频',
      aspectRatioLabel: '目标宽高比与输出分辨率',
      ratio16x9: '16:9 YouTube (1280×720)',
      ratio9x16: '9:16 竖屏封面 (1080×1920)',
      ratio1x1: '1:1 正方形 (1080×1080)',
      visualPopLabel: '画面色彩与对比度增强',
      brightness: '亮度',
      contrast: '对比度',
      saturation: '鲜艳度 / 饱和度',
      autoPopBtn: '一键鲜艳增强',
      resetFiltersBtn: '重置色彩',
      addTextLabel: '添加封面文字（可直接在预览画布上拖动位置）',
      headlinePlaceholder: '输入醒目的大号封面标题...',
      subtextPlaceholder: '可选副标题或角标文字...',
      textStyleLabel: '文字预设样式',
      styleOutline: '粗体描边',
      styleBanner: '胶囊底纹',
      styleGlow: '霓虹发光',
      styleMinimal: '立体阴影',
      textPositionLabel: '快速对齐位置',
      posTop: '顶部',
      posCenter: '居中',
      posBottom: '底部',
      fontSizeLabel: '字号缩放',
      textColorLabel: '标题颜色',
      dragHint: '提示：直接用鼠标或手指拖动预览画布上的文字即可自由摆放位置。',
      exportFormatLabel: '导出图片格式',
      formatPng: 'PNG（无损高清画质）',
      formatJpg: 'JPG（<2MB 符合 YouTube 规范）',
      downloadBtn: '下载高清缩略图',
      copyImageBtn: '复制图片',
      copiedImageToast: '缩略图已成功复制到剪贴板！',
      statusReady: '已就绪，可在本地截取并导出高分辨率视频缩略图。',
      statusExported: '缩略图导出成功！',
      statusSampleLoaded: '示例视频已加载！您可以滑动时间轴截帧或直接在下方编辑文字。',
    },
    howToUse: {
      title: '如何从任何视频制作高清缩略图与封面 - VideoThumbnail 完整分步图文教程（1280x720）',
      metaDescription: '手把手教您如何从本地 MP4、MOV 或 WebM 视频中逐帧提取高分辨率画面，添加醒目粗体标题与色彩增强，并在浏览器本地直接导出 1280x720 YouTube 缩略图或 9:16 短视频竖屏封面。无需上传文件、完全免费且无水印，立即掌握制作高点击率视频封面的技巧。',
      h1: '如何从任何视频创建高分辨率缩略图',
      breadcrumb: '使用指南',
      intro: '只需简单四步，即可在本地浏览器中从 MP4、MOV 或 WebM 视频提取清晰帧，添加高对比度标题并导出 1280x720 YouTube 封面或 9:16 竖屏封面。',
      steps: [
        {
          name: '第 1 步：在本地加载 MP4、MOV 或 WebM 视频',
          text: '将视频文件拖入首页上传区。由于采用 HTML5 本地加载技术，即使是数 GB 的 4K 视频也能立即打开，无需等待网络上传。',
        },
        {
          name: '第 2 步：使用 -1f / +1f 逐帧微调并截取最佳画面',
          text: '拖动进度条、点击胶片预览条或使用 -1帧 / +1帧 按钮定位清晰瞬间，然后点击“截取当前视频帧”。',
        },
        {
          name: '第 3 步：选择画幅比例、增强色彩并拖拽添加标题',
          text: '选择 16:9 YouTube (1280x720) 或 9:16 竖屏封面 (1080x1920)，点击“一键鲜艳增强”，输入简短有力的标题并在画布上拖动到合适位置。',
        },
        {
          name: '第 4 步：下载无损 PNG 或符合 YouTube 规范的 JPG (<2MB)',
          text: '选择无损 PNG 或小于 2MB 的高质量 JPG 格式，点击“下载高清缩略图”即可保存无水印成品。',
        },
      ],
      sections: [
        {
          heading: '高点击率 1280x720 YouTube 缩略图设计技巧',
          body: '采用官方推荐的 1280x720 像素（16:9），挑选人物眼神清晰或动作张力强的画面，适当提高 10%~15% 饱和度，并将封面文字精简在 4 个词以内。',
        },
        {
          heading: '制作 Shorts、TikTok 与 Reels 专属 9:16 竖屏封面',
          body: '切换到 9:16 竖屏封面 (1080x1920) 预设后，画布会自动居中裁剪并适配竖屏比例，方便您将标题放置在不易被平台按钮遮挡的中心区域。',
        },
        {
          heading: '100% 隐私保护与离线 PWA 支持',
          body: '所有视频解码与图像合成均在本地设备完成。将本站添加到主屏幕后，即使在断网环境下也能随时离线提取视频封面。',
        },
      ],
      ctaText: '准备好从您的视频中提取高清封面了吗？',
      ctaBtn: '打开视频缩略图制作工具',
    },
    hireMe: {
      title: '聘请 Kishara Dilshan - Astro & WASM 全栈开发 | VideoThumbnail',
      metaDescription: '需要构建超快速的 Astro、React 或 Next.js 网站应用，或是纯前端浏览器本地运行的 WebAssembly (WASM) 媒体与数据工具？立即联系全栈开发者 Kishara Dilshan，为您提供具备极致性能与技术 SEO 架构的定制化 IT 解决方案。',
      h1: 'Available for Freelance Projects',
      breadcrumb: '雇佣开发者',
      badge: 'Available for Freelance Projects',
      heading: 'Need a Custom IT Solution?',
      intro: "Hi, I'm Kishara Dilshan, the developer behind VideoThumbnail.",
      subcopy: 'If you love this fast, client-side tool and need a world-class IT solution for your own business, I am available for freelance projects. I specialize in:',
      specialties: [
        {
          title: 'Ultra-fast, SEO-optimized web applications',
          description: 'Astro, React, Next.js — engineered for sub-second loads, technical SEO, and clean scalability.',
        },
        {
          title: 'Client-side processing & WebAssembly (WASM) tools',
          description: 'Zero-server media, PDF, and data utilities that run privately inside the browser.',
        },
        {
          title: 'UI/UX design & High-converting landing pages',
          description: 'Minimal, accessible interfaces crafted to convert visitors effortlessly across desktop and mobile.',
        },
      ],
      ctaHeading: "Let's build something amazing together.",
      email: 'kisharadilshan007@gmail.com',
      emailLabel: 'Email me directly: kisharadilshan007@gmail.com',
      copyButtonLabel: 'Copy Email',
      copiedConfirmation: '邮箱地址已复制到剪贴板！',
    },
    footer: {
      tagline: '100% 浏览器本地运行的视频帧提取器与 YouTube 缩略图制作工作室。',
      privacyBadge: '零视频上传 • 无水印 • 支持离线运行',
      copyright: '© 2026 VideoThumbnail by Kishara Dilshan. 基于 MIT 许可证开源。',
    },
  },
  ru: {
    nav: {
      brandName: 'VideoThumbnail',
      home: 'Главная',
      howToUse: 'Инструкция',
      hireMe: 'Нанять меня',
      languageLabel: 'Выбрать язык',
      themeToggleLabel: 'Переключить светлую и тёмную тему',
      lightMode: 'Светлая',
      darkMode: 'Тёмная',
      installPwa: 'Установить PWA',
      installPwaAria: 'Добавить VideoThumbnail на главный экран для работы офлайн',
      supportDev: 'Поддержать Автора',
      supportDevAria: 'Поддержать разработчика на Gumroad',
      githubAria: 'Открыть исходный код на GitHub',
    },
    pwaModal: {
      title: 'Установить приложение VideoThumbnail (Офлайн-режим)',
      subtitle: 'Используйте VideoThumbnail 100% без интернета прямо с рабочего стола или экрана смартфона.',
      iosStep1: '1. Нажмите значок «Поделиться» в панели браузера Safari.',
      iosStep2: '2. Прокрутите вниз и выберите «На экран „Домой“».',
      iosStep3: '3. Нажмите «Добавить» для запуска офлайн веб-приложения.',
      desktopNote: 'В Chrome, Edge или Brave нажмите на значок установки приложения в адресной строке.',
      closeBtn: 'Понятно, закрыть',
    },
    home: {
      title: 'Создать Превью из Видео Онлайн - Бесплатно и Без Водяных',
      metaDescription: 'Извлекайте HD-кадры из видео MP4, MOV или WebM и создавайте превью для YouTube прямо в браузере. 100% бесплатно, без загрузки на сервер и водяных знаков.',
      h1: 'Создание Превью из Видео — Извлечение HD-Кадров Онлайн',
      heroSubtitle: 'Извлекайте кадры высокого разрешения из видео MP4, MOV и WebM, добавляйте крупный текст и скачивайте обложки для YouTube в браузере. Бесплатно и без водяных знаков.',
      badges: {
        privacy: '100% Локально в Браузере (Без Загрузки)',
        noWatermark: 'Бесплатно и Без Водяных Знаков',
        hdExport: '1280x720 YouTube и 9:16 Обложки Shorts',
      },
      featuresTitle: 'Почему Авторы Выбирают Наш Онлайн Генератор Превью из Видео',
      featuresSubtitle: 'Быстрый и приватный инструмент для извлечения кадров из видео и оформления обложек YouTube.',
      features: [
        {
          title: 'Пошаговый Поиск Кадра с Точностью до 1 Кадра (-1f / +1f)',
          description: 'Листайте видео MP4, MOV или WebM покадрово или выбирайте снимки из автоматической киноленты, чтобы поймать чёткий момент без смазывания.',
        },
        {
          title: 'Форматы 1280x720 для YouTube и 9:16 для Shorts и TikTok',
          description: 'Переключайтесь в один клик между 16:9 YouTube (1280x720), вертикальной обложкой 9:16 (1080x1920) и квадратом 1:1.',
        },
        {
          title: 'Добавление Крупного Текста и Улучшение Цвета',
          description: 'Перетаскивайте заголовки с контуром или плашкой прямо на холсте и настраивайте яркость, контраст и насыщенность.',
        },
        {
          title: 'Создание Превью из Видео Без Загрузки Файлов на Сервер',
          description: 'Ваши видеофайлы остаются на вашем устройстве. Вся обработка выполняется локально через HTML5 Canvas без регистрации.',
        },
      ],
      faqTitle: 'Часто Задаваемые Вопросы',
      faqSubtitle: 'Всё, что нужно знать об извлечении кадров из видео и создании превью для YouTube.',
      faqs: [
        {
          question: 'Как сделать превью для YouTube из готового видео?',
          answer: 'Перетащите файл MP4, MOV или WebM в окно выше, найдите лучший ракурс с помощью таймлайна или кнопок -1f / +1f и нажмите Захватить Кадр. Выберите формат 16:9 YouTube (1280x720), добавьте текст при желании и скачайте готовое превью в PNG или JPG.',
        },
        {
          question: 'Какой размер и разрешение должны быть у превью YouTube?',
          answer: 'YouTube рекомендует разрешение 1280x720 пикселей (соотношение 16:9) и размер файла до 2 МБ в формате JPG или PNG. Наш пресет 16:9 сохраняет изображение ровно в 1280x720, а пресет 9:16 — в 1080x1920 для Shorts и TikTok.',
        },
        {
          question: 'Загружаются ли мои видео на сервер при извлечении кадров?',
          answer: 'Нет. VideoThumbnail работает на 100% локально в вашем браузере с помощью HTML5 Video и Canvas 2D. Ваши видео никогда не отправляются на внешние серверы.',
        },
        {
          question: 'Можно ли создавать превью из MP4, MOV и WebM без водяного знака?',
          answer: 'Да. Вы можете сохранять кадры и обложки из видео MP4, MOV и WebM абсолютно бесплатно, без водяных знаков, без регистрации и без ограничений.',
        },
      ],
    },
    studio: {
      dropzoneTitle: 'Перетащите видео MP4, MOV или WebM сюда',
      dropzoneSubtitle: 'Или нажмите для выбора локального файла — мгновенное открытие без загрузки в сеть',
      chooseVideoBtn: 'Выбрать Видеофайл',
      trySampleBtn: 'Открыть Демо-Видео',
      privacyNote: '100% Локальная Обработка • Без Регистрации • Без Водяных Знаков',
      step1Title: '1. Поиск и Захват Кадра',
      step2Title: '2. Размер, Цвет и Текст',
      step3Title: '3. Скачать Превью',
      playBtn: 'Пуск',
      pauseBtn: 'Пауза',
      prevFrameBtn: '-1к',
      nextFrameBtn: '+1к',
      prevSecBtn: '-1с',
      nextSecBtn: '+1с',
      captureFrameBtn: 'Захватить Кадр Видео',
      frameCapturedToast: 'Кадр успешно передан в студию превью!',
      quickFilmstripLabel: 'Быстрая Кинолента (Нажмите на любой кадр для перехода и захвата):',
      generateFilmstripBtn: 'Обновить Ленту',
      changeVideoBtn: 'Выбрать Другое Видео',
      aspectRatioLabel: 'Пропорции и Разрешение',
      ratio16x9: '16:9 YouTube (1280×720)',
      ratio9x16: '9:16 Обложка (1080×1920)',
      ratio1x1: '1:1 Квадрат (1080×1080)',
      visualPopLabel: 'Цветокоррекция и Контраст',
      brightness: 'Яркость',
      contrast: 'Контраст',
      saturation: 'Насыщенность',
      autoPopBtn: 'Авто-Сочность',
      resetFiltersBtn: 'Сбросить',
      addTextLabel: 'Добавить Текст на Превью (Перетаскивайте прямо на холсте)',
      headlinePlaceholder: 'Введите яркий заголовок...',
      subtextPlaceholder: 'Подзаголовок или бейдж...',
      textStyleLabel: 'Стиль Текста',
      styleOutline: 'Жирный Контур',
      styleBanner: 'Плашка-Баннер',
      styleGlow: 'Неоновый Свет',
      styleMinimal: 'Чистая Тень',
      textPositionLabel: 'Быстрая Позиция',
      posTop: 'Сверху',
      posCenter: 'По центру',
      posBottom: 'Снизу',
      fontSizeLabel: 'Размер Шрифта',
      textColorLabel: 'Цвет Текста',
      dragHint: 'Совет: Перетаскивайте текст мышью или пальцем прямо по превью.',
      exportFormatLabel: 'Формат Экспорта',
      formatPng: 'PNG (HD Без Потерь)',
      formatJpg: 'JPG (<2 МБ для YouTube)',
      downloadBtn: 'Скачать Превью',
      copyImageBtn: 'Копировать',
      copiedImageToast: 'Изображение скопировано в буфер обмена!',
      statusReady: 'Готово к локальному захвату и экспорту HD-превью.',
      statusExported: 'Превью успешно сохранено!',
      statusSampleLoaded: 'Демо-видео загружено! Выберите кадр или настройте текст.',
    },
    howToUse: {
      title: 'Как Сделать Превью из Любого Видео: Гайд | VideoThumbnail',
      metaDescription: 'Пошаговое руководство: как извлечь HD-кадр из видео MP4, MOV или WebM, добавить текст и сохранить превью 1280x720 для YouTube локально в вашем браузере.',
      h1: 'Как Создать Превью Высокого Разрешения из Любого Видео',
      breadcrumb: 'Инструкция',
      intro: 'Узнайте, как за 4 простых шага извлечь чёткий кадр из видео MP4, MOV или WebM, добавить яркий заголовок и скачать обложку 1280x720 для YouTube.',
      steps: [
        {
          name: 'Шаг 1: Откройте Видео MP4, MOV или WebM Локально',
          text: 'Перетащите видеофайл в рабочую область на главной странице. Благодаря локальной обработке HTML5 даже тяжёлые 4K-файлы открываются мгновенно.',
        },
        {
          name: 'Шаг 2: Найдите Лучший Ракурс (-1f / +1f) и Захватите Кадр',
          text: 'Используйте ползунок, быструю киноленту или кнопки покадрового шага и нажмите Захватить Кадр Видео.',
        },
        {
          name: 'Шаг 3: Выберите Формат, Улучшите Цвет и Добавьте Текст',
          text: 'Выберите 16:9 YouTube (1280x720) или 9:16 Обложка (1080x1920), нажмите Авто-Сочность и разместите крупный заголовок на изображении.',
        },
        {
          name: 'Шаг 4: Скачайте PNG или JPG (<2 МБ) Без Водяных Знаков',
          text: 'Сохраните результат в формате PNG без потерь или в оптимизированном JPG до 2 МБ, полностью готовом для загрузки в YouTube Studio.',
        },
      ],
      sections: [
        {
          heading: 'Советы для Кликабельных Превью YouTube 1280x720',
          body: 'Используйте стандарт 1280x720 пикселей (16:9), выбирайте кадры с яркими эмоциями, слегка повышайте насыщенность и пишите не более 3–4 крупных слов.',
        },
        {
          heading: 'Вертикальные Обложки 9:16 для Shorts, TikTok и Reels',
          body: 'Пресет 9:16 Обложка (1080x1920) автоматически кадрирует сцену под вертикальный экран смартфона.',
        },
        {
          heading: '100% Приватность и Офлайн-Работа через PWA',
          body: 'Ваши видео не покидают компьютер или телефон. Установите приложение на главный экран, чтобы создавать превью даже без доступа к интернету.',
        },
      ],
      ctaText: 'Готовы создать яркое превью из вашего видео прямо сейчас?',
      ctaBtn: 'Открыть Генератор Превью',
    },
    hireMe: {
      title: 'Нанять Kishara Dilshan - Astro & WASM | VideoThumbnail',
      metaDescription: 'Нужно сверхбыстрое веб-приложение на Astro, React, Next.js или клиентский инструмент на WebAssembly? Наймите Kishara Dilshan для разработки IT-решений.',
      h1: 'Available for Freelance Projects',
      breadcrumb: 'Нанять меня',
      badge: 'Available for Freelance Projects',
      heading: 'Need a Custom IT Solution?',
      intro: "Hi, I'm Kishara Dilshan, the developer behind VideoThumbnail.",
      subcopy: 'If you love this fast, client-side tool and need a world-class IT solution for your own business, I am available for freelance projects. I specialize in:',
      specialties: [
        {
          title: 'Ultra-fast, SEO-optimized web applications',
          description: 'Astro, React, Next.js — engineered for sub-second loads, technical SEO, and clean scalability.',
        },
        {
          title: 'Client-side processing & WebAssembly (WASM) tools',
          description: 'Zero-server media, PDF, and data utilities that run privately inside the browser.',
        },
        {
          title: 'UI/UX design & High-converting landing pages',
          description: 'Minimal, accessible interfaces crafted to convert visitors effortlessly across desktop and mobile.',
        },
      ],
      ctaHeading: "Let's build something amazing together.",
      email: 'kisharadilshan007@gmail.com',
      emailLabel: 'Email me directly: kisharadilshan007@gmail.com',
      copyButtonLabel: 'Copy Email',
      copiedConfirmation: 'Email скопирован в буфер обмена!',
    },
    footer: {
      tagline: '100% Локальный Извлекатель Кадров и Студия Превью для YouTube.',
      privacyBadge: 'Без Загрузки на Сервер • Без Водяных Знаков • Офлайн-режим',
      copyright: '© 2026 VideoThumbnail от Kishara Dilshan. Лицензия MIT.',
    },
  },
};
