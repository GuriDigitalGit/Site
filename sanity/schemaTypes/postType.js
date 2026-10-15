import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Título', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (rule) => rule.required() }),
    defineField({ name: 'excerpt', title: 'Resumo', type: 'text', rows: 3, validation: (rule) => rule.required().max(240) }),
    defineField({ name: 'coverImage', title: 'Imagem de capa', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'category', title: 'Categoria', type: 'string' }),
    defineField({ name: 'author', title: 'Autor', type: 'string' }),
    defineField({ name: 'publishedAt', title: 'Data de publicação', type: 'datetime', validation: (rule) => rule.required() }),
    defineField({
      name: 'body',
      title: 'Conteúdo',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
    }),
    defineField({ name: 'seoTitle', title: 'Título SEO', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'Descrição SEO', type: 'text', rows: 2 }),
  ],
  preview: { select: { title: 'title', subtitle: 'category', media: 'coverImage' } },
});
