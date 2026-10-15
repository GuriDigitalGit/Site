export default function sitemap() {
  const baseUrl = 'https://site-pi-one-65.vercel.app';
  return [
    '',
    '/sobre',
    '/servicos',
    '/contato',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
