# GuriDigital Site

Site GuriDigital em migração incremental de uma landing estática para Next.js na Vercel.

## Estrutura atual

- `/` é a Home principal da plataforma.
- `/landing/cine-sintetico` preserva a landing de campanha existente.
- `/sobre`, `/servicos`, `/contato` e `/cases` são rotas públicas da plataforma.
- `/cases/[slug]` é o template de cada projeto/case.
- `/blog` e `/blog/[slug]` usam fixtures locais temporárias, preparadas para receber conteúdo do Sanity.
- `app/site-shell.js` concentra o header, a navegação e o footer das novas páginas.
- `public/assets` reúne os assets servidos pelo Next.js.

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Build

```bash
npm run build
```

## Deploy

1. Importe este repositório na Vercel.
2. Deixe a Vercel detectar Next.js automaticamente.
3. Use os scripts `npm run build` e `npm run start` padrão do projeto.

## Conteúdo depois

O blog está preparado com conteúdo local temporário. A próxima etapa de plataforma é conectar o Sanity para gerenciar posts, categorias, autores, imagens e slugs sem alterar os componentes visuais.
