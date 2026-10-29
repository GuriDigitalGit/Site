// Posts de exemplo. Quando o painel (CMS) for conectado, estes dados passam a vir de lá.
export const posts = [
  {
    slug: 'como-nasce-um-filme-de-lancamento-com-ia',
    title: 'Como nasce um filme de lançamento com IA',
    excerpt: 'Uma visão inicial do processo criativo por trás do cinema sintético.',
    date: '2026-10-15',
    category: 'Cinema sintético',
    author: 'Guri Digital',
    coverImage: '/assets/scene-sun.jpg',
    content: [
      'Este conteúdo é um exemplo temporário. Ele será substituído pelos artigos publicados no painel do blog.',
      'Use o painel para escrever, revisar e publicar artigos com imagem de capa, categoria e data.',
    ],
  },
];

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug);
}

export function readingTime(post) {
  let text = '';
  if (Array.isArray(post.body)) {
    text = post.body.map((block) => (block.children || []).map((child) => child.text || '').join('')).join(' ');
  } else if (Array.isArray(post.content)) {
    text = post.content.join(' ');
  } else {
    text = String(post.content || '');
  }
  return Math.max(1, Math.round(text.split(/\s+/).filter(Boolean).length / 200));
}

export function formatDate(iso) {
  if (!iso) return '';
  return new Date(`${iso}T12:00:00`).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
}
