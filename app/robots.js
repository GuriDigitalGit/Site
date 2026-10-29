export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/studio'] }],
    sitemap: 'https://site-pi-one-65.vercel.app/sitemap.xml',
  };
}
