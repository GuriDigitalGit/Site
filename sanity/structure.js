export const structure = (S) =>
  S.list()
    .title('Painel Guri')
    .items([
      S.listItem()
        .title('Artigos do blog')
        .child(S.documentTypeList('post').title('Artigos do blog').defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])),
      S.listItem()
        .title('Cases')
        .child(S.documentTypeList('case').title('Cases').defaultOrdering([{ field: 'order', direction: 'asc' }])),
    ]);
