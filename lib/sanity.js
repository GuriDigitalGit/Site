import { projectId, dataset, apiVersion, hasSanity } from '../sanity/env';

let clientPromise;

// O cliente do Sanity só é carregado quando o painel está configurado.
// Sem projectId, o site funciona normalmente com o conteúdo local.
async function getClient() {
  if (!hasSanity) return null;
  if (!clientPromise) {
    clientPromise = import(/* webpackIgnore: true */ /* turbopackIgnore: true */ 'next-sanity').then(({ createClient }) => createClient({ projectId, dataset, apiVersion, useCdn: true }));
  }
  return clientPromise;
}

// Revalida a cada 60s: publicou no painel? Em até 1 minuto está no ar.
export async function sanityFetch(query, params = {}) {
  const client = await getClient();
  if (!client) return null;
  return client.fetch(query, params, { next: { revalidate: 60 } });
}

export { hasSanity };
