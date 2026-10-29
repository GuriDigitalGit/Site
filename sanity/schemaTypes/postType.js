import { defineField, defineType } from 'sanity';

export const postCategories = ['Branding', 'Cinema sintético', 'Direção criativa', 'Bastidores', 'Mercado'];

export default defineType({
  name: 'post',
  title: 'Artigo do blog',
  type: 'document',
  groups: [
    { name: 'content', title: 'Conteúdo', default: true },
    { name: 'publish', title: 'Publicação' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({ name: 'title', title: 'Título', type: 'string', group: 'content', validation: (rule) => rule.required() }),
    defineField({
      name: 'slug', title: 'Endereço (slug)', type: 'slug', group: 'content',
      description: 'Parte final do link. Clique em "Generate" para criar a partir do título.',
      options: { source: 'title', maxLength: 96 }, validation: (rule) => rule.required(),
    }),
    defineField({ name: 'excerpt', title: 'Resumo', type: 'text', rows: 3, group: 'content', description: 'Aparece na lista do blog e nas buscas. Até 240 caracteres.', validation: (rule) => rule.required().max(240) }),
    defineField({ name: 'coverImage', title: 'Imagem de capa', type: 'image', group: 'content', options: { hotspot: true } }),
    defineField({
      name: 'body', title: 'Texto do artigo', type: 'array', group: 'content',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Parágrafo', value: 'normal' },
            { title: 'Título', value: 'h2' },
            { title: 'Subtítulo', value: 'h3' },
            { title: 'Citação', value: 'blockquote' },
          ],
        },
        { type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', type: 'string', title: 'Descrição da imagem' }] },
      ],
    }),
    defineField({ name: 'category', title: 'Categoria', type: 'string', group: 'publish', options: { list: postCategories } }),
    defineField({ name: 'author', title: 'Autor', type: 'string', group: 'publish', initialValue: 'Guri Digital' }),
    defineField({
      name: 'publishedAt', title: 'Data de publicação', type: 'datetime', group: 'publish',
      description: 'Artigos com data no futuro só aparecem no site quando a data chegar.',
      initialValue: () => new Date().toISOString(), validation: (rule) => rule.required(),
    }),
    defineField({ name: 'seoTitle', title: 'Título para o Google', type: 'string', group: 'seo' }),
    defineField({ name: 'seoDescription', title: 'Descrição para o Google', type: 'text', rows: 2, group: 'seo' }),
  ],
  orderings: [{ title: 'Mais recentes', name: 'recent', by: [{ field: 'publishedAt', direction: 'desc' }] }],
  preview: { select: { title: 'title', subtitle: 'category', media: 'coverImage' } },
});
