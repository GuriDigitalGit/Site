# GuriDigital Site

Site GuriDigital em migração incremental de uma landing estática para Next.js na Vercel.

## Estrutura atual

- `/` é a Home principal da plataforma.
- `/landing/cine-sintetico` preserva a landing de campanha existente.
- `/sobre`, `/servicos`, `/contato` e `/cases` são rotas públicas da plataforma.
- `/cases/[slug]` é o template de cada projeto/case.
- `/blog` e `/blog/[slug]` mostram os artigos publicados no painel.
- `app/(site)/site-shell.js` junta cabeçalho (`components/site-header.js`), conteúdo e rodapé de todas as páginas.
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

## Painel de conteúdo (blog e cases)

O painel fica em `/studio` e usa o Sanity. Passo a passo de configuração em [`sanity/README.md`](sanity/README.md).

- `lib/content.js` busca os dados no painel; se ele não estiver configurado, usa o conteúdo local (`lib/cases.js`, `lib/posts.js`).
- Os arquivos do site ficam em `app/(site)`; o painel, em `app/(studio)`.
