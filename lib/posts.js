export const posts = [
  {
    slug: 'como-nasce-um-filme-de-lancamento-com-ia',
    title: 'Como nasce um filme de lançamento com IA',
    excerpt: 'Uma visão inicial do processo criativo por trás do cinema sintético.',
    date: '2026-10-15',
    content: 'Este conteúdo é uma fixture temporária. Ele será substituído por posts vindos do Sanity quando o CMS for conectado.',
  },
];

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug);
}
