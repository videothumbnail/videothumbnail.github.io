import type { APIRoute } from 'astro';
import {
  SUPPORTED_LANGUAGES,
  getCanonicalUrl,
} from '../i18n/translations';

const PAGE_PATHS: Array<'' | 'how-to-use/' | 'hire-me/'> = [
  '',
  'how-to-use/',
  'hire-me/',
];

export const GET: APIRoute = () => {
  const lastmod = '2026-11-21';

  const urlEntries: string[] = [];

  for (const pagePath of PAGE_PATHS) {
    const priority = pagePath === '' ? '1.0' : '0.8';
    const xDefaultHref = getCanonicalUrl('en', pagePath);

    const alternateLinks = [
      ...SUPPORTED_LANGUAGES.map(
        (altLang) =>
          `    <xhtml:link rel="alternate" hreflang="${altLang.code}" href="${getCanonicalUrl(altLang.code, pagePath)}" />`
      ),
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${xDefaultHref}" />`,
    ].join('\n');

    for (const lang of SUPPORTED_LANGUAGES) {
      const loc = getCanonicalUrl(lang.code, pagePath);
      urlEntries.push(`  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
${alternateLinks}
  </url>`);
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries.join('\n')}
</urlset>
`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
