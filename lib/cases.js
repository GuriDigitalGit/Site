const liveCases = [
  ['thaisa-leal-case', 'Comunidade Leal', 'Comunidade Leal', '2026', 'Branding, Estrutura Digital e Identidade Visual', '/site-home/case-thaisa.webp'],
  ['shape-now-case', 'Shape Now', 'Shape Now', '2026', 'Identidade Visual', '/site-home/case-shape.webp'],
  ['bruna-zanatta-case', 'Bruna Zanatta', 'Bruna Zanatta', '2026', 'Identidade Visual', '/site-home/case-bruna.webp'],
  ['kleverson-passos-case', 'Kleverson Passos', 'Kleverson Passos', '2026', 'Identidade Visual', '/site-home/case-kleverson.webp'],
  ['lo-que-piensan-case', 'Lo que piensan las mujeres', 'Lo que piensan las mujeres', '2026', 'Branding e Identidade Visual', '/site-home/case-loque.webp'],
  ['modelo-de-case-para-copiar', 'Valentina Marcillo', 'Valentina Marcillo', '2026', 'Estrutura Digital e Identidade Visual', '/site-home/case-valentina.webp'],
  ['fazenda-tres-marias', 'Fazenda Três Marias', 'Fazenda Três Marias', '2026', 'Branding e cinema sintético', '/assets/case-water.jpg'],
];

export const cases = liveCases.map(([slug, title, client, year, category, coverImage]) => ({
  slug, title, client, year, category, coverImage, heroImage: coverImage,
  gallery: [coverImage], excerpt: `Projeto de ${category.toLowerCase()} desenvolvido pela Guri Digital.`,
  challenge: 'Construir uma presença clara, relevante e reconhecível para a marca.',
  solution: 'Estratégia, conceito e design trabalhando juntos para dar forma a uma marca com personalidade.',
  results: 'Um sistema de marca pronto para crescer com consistência em todos os pontos de contato.',
}));

export function getCaseBySlug(slug) { return cases.find((item) => item.slug === slug); }
