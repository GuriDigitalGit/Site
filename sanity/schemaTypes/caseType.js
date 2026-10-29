import { defineField, defineType } from 'sanity';

export const caseServices = ['Branding', 'Naming', 'Identidade Visual', 'Estrutura Digital', 'Cinema sintético'];

export default defineType({
  name: 'case',
  title: 'Case',
  type: 'document',
  groups: [
    { name: 'content', title: 'Informações', default: true },
    { name: 'media', title: 'Imagens' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({ name: 'title', title: 'Nome do projeto', type: 'string', group: 'content', validation: (rule) => rule.required() }),
    defineField({
      name: 'slug', title: 'Endereço (slug)', type: 'slug', group: 'content',
      description: 'Parte final do link. Evite mudar depois de publicado.',
      options: { source: 'title', maxLength: 96 }, validation: (rule) => rule.required(),
    }),
    defineField({ name: 'client', title: 'Cliente', type: 'string', group: 'content' }),
    defineField({ name: 'year', title: 'Ano', type: 'number', group: 'content', validation: (rule) => rule.integer().min(2000).max(2100) }),
    defineField({ name: 'services', title: 'Serviços prestados', type: 'array', group: 'content', of: [{ type: 'string' }], options: { list: caseServices, layout: 'tags' } }),
    defineField({ name: 'sector', title: 'Setor', type: 'string', group: 'content', description: 'Ex.: Infoproduto, Saúde, Fitness.' }),
    defineField({ name: 'caseIntro', title: 'Frase de destaque', type: 'string', group: 'content', description: 'Ex.: "Uma marca que desperta todos os sentidos."' }),
    defineField({ name: 'excerpt', title: 'Descrição do projeto', type: 'text', rows: 5, group: 'content', validation: (rule) => rule.required() }),
    defineField({ name: 'order', title: 'Ordem na lista', type: 'number', group: 'content', description: 'Menor número aparece primeiro. Deixe vazio para ir ao final.' }),
    defineField({ name: 'coverImage', title: 'Imagem do card', type: 'image', group: 'media', description: 'Aparece na Home e na lista de cases. Se vazio, usa a imagem principal.', options: { hotspot: true } }),
    defineField({ name: 'heroImage', title: 'Imagem principal', type: 'image', group: 'media', options: { hotspot: true }, validation: (rule) => rule.required() }),
    defineField({
      name: 'gallery', title: 'Galeria', type: 'array', group: 'media',
      description: 'A primeira imagem aparece em largura total. Arraste para reordenar.',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({ name: 'seoTitle', title: 'Título para o Google', type: 'string', group: 'seo' }),
    defineField({ name: 'seoDescription', title: 'Descrição para o Google', type: 'text', rows: 2, group: 'seo' }),
  ],
  orderings: [{ title: 'Ordem do site', name: 'siteOrder', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'title', subtitle: 'client', media: 'coverImage' } },
});
