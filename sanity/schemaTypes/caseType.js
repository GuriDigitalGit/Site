import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'case',
  title: 'Case',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Nome do projeto', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (rule) => rule.required() }),
    defineField({ name: 'client', title: 'Cliente', type: 'string' }),
    defineField({ name: 'year', title: 'Ano', type: 'number', validation: (rule) => rule.integer().min(2000).max(2100) }),
    defineField({ name: 'category', title: 'Categoria', type: 'string' }),
    defineField({ name: 'excerpt', title: 'Resumo', type: 'text', rows: 3, validation: (rule) => rule.required().max(300) }),
    defineField({ name: 'heroImage', title: 'Imagem principal', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'videoUrl', title: 'URL do vídeo', type: 'url' }),
    defineField({ name: 'services', title: 'Serviços', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'challenge', title: 'Desafio', type: 'text', rows: 5 }),
    defineField({ name: 'solution', title: 'Solução', type: 'text', rows: 5 }),
    defineField({ name: 'results', title: 'Resultados', type: 'text', rows: 5 }),
    defineField({
      name: 'gallery',
      title: 'Galeria',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'body',
      title: 'Conteúdo complementar',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
    }),
    defineField({ name: 'seoTitle', title: 'Título SEO', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'Descrição SEO', type: 'text', rows: 2 }),
  ],
  preview: { select: { title: 'title', subtitle: 'client', media: 'heroImage' } },
});
