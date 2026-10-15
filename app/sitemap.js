export default function sitemap() {
  const baseUrl = 'https://site-pi-one-65.vercel.app';
  return [
    '',
    '/landing/cine-sintetico',
    '/sobre',
    '/servicos',
    '/contato',
    '/cases',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
