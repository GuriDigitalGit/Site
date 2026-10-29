// Importa os cases que hoje estão no código (lib/cases.js) para o painel (Sanity),
// já enviando as imagens. Pode ser executado mais de uma vez: ele atualiza, não duplica.
//
// Uso (na pasta do projeto):
//   SANITY_API_TOKEN=seu_token node scripts/import-cases.mjs
//
// O token precisa de permissão "Editor" (crie em sanity.io/manage → API → Tokens).
import fs from 'node:fs';
import path from 'node:path';
import { randomUUID } from 'node:crypto';
import { createClient } from '@sanity/client';
import { cases } from '../lib/cases.js';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !token) {
  console.error('Faltam variáveis. Rode assim:\n  NEXT_PUBLIC_SANITY_PROJECT_ID=xxxx SANITY_API_TOKEN=yyyy node scripts/import-cases.mjs');
  process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion: '2025-01-01', token, useCdn: false });

const SERVICES = ['Branding', 'Naming', 'Identidade Visual', 'Estrutura Digital', 'Cinema sintético'];
const toServices = (category) => category
  .split(/\s*(?:·|,| e )\s*/)
  .map((part) => SERVICES.find((s) => s.toLowerCase() === part.trim().toLowerCase()))
  .filter(Boolean);

async function uploadImage(webPath) {
  if (!webPath) return undefined;
  const file = path.join(process.cwd(), 'public', webPath);
  if (!fs.existsSync(file)) {
    console.warn(`  ! imagem não encontrada: ${webPath}`);
    return undefined;
  }
  const asset = await client.assets.upload('image', fs.createReadStream(file), { filename: path.basename(file) });
  return { _type: 'image', asset: { _type: 'reference', _ref: asset._id } };
}

for (const [index, item] of cases.entries()) {
  console.log(`→ ${item.title}`);
  const gallery = [];
  for (const src of item.gallery) {
    const image = await uploadImage(src);
    if (image) gallery.push({ ...image, _key: randomUUID().slice(0, 12) });
  }
  await client.createOrReplace({
    _id: `case-${item.slug}`,
    _type: 'case',
    title: item.title,
    slug: { _type: 'slug', current: item.slug },
    client: item.client,
    year: Number(item.year) || undefined,
    services: toServices(item.category),
    sector: item.sector,
    caseIntro: item.caseIntro,
    excerpt: item.caseDescription,
    order: index + 1,
    coverImage: await uploadImage(item.coverImage),
    heroImage: await uploadImage(item.heroImage),
    gallery,
  });
}
console.log('\nPronto! Abra /studio para conferir os cases.');
