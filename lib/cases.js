export const cases = [
  {
    slug: 'fazenda-tres-marias',
    title: 'Fazenda Três Marias',
    client: 'Fazenda Três Marias',
    year: '2026',
    category: 'Branding e cinema sintético',
    excerpt: 'Um empreendimento de alto padrão apresentado como desejo, paisagem e estilo de vida.',
    coverImage: '/assets/case-water.jpg',
    heroImage: '/assets/case-masterplan.jpg',
    gallery: ['/assets/case-water.jpg', '/assets/scene-aerial.jpg', '/assets/scene-sun.jpg'],
    challenge: 'O projeto ainda não existia fisicamente, mas precisava ser apresentado com força comercial e desejo.',
    solution: 'Direção criativa, narrativa e cenas cinematográficas geradas com IA para materializar a experiência do empreendimento.',
    results: 'Um sistema de comunicação visual pronto para apresentação comercial e lançamento.',
  },
];

export function getCaseBySlug(slug) {
  return cases.find((item) => item.slug === slug);
}
