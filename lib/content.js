import { cases as localCases } from './cases';
import { posts as localPosts } from './posts';
import { sanityFetch, hasSanity } from './sanity';

const img = (url, width) => (url ? `${url}?w=${width}&auto=format&q=82` : url);

const CASES_QUERY = `*[_type == "case" && defined(slug.current)] | order(coalesce(order, 999) asc, year desc) {
  "slug": slug.current, title, client, year, services, sector, caseIntro, "caseDescription": excerpt,
  "coverImage": coalesce(coverImage.asset->url, heroImage.asset->url),
  "heroImage": heroImage.asset->url,
  "gallery": gallery[].asset->url
}`;

const POSTS_QUERY = `*[_type == "post" && defined(slug.current) && publishedAt <= now()] | order(publishedAt desc) {
  "slug": slug.current, title, excerpt, category, author, "date": publishedAt,
  "coverImage": coverImage.asset->url,
  body[]{ ..., _type == "image" => { ..., "url": asset->url } }
}`;

function mapCase(item) {
  return {
    slug: item.slug,
    title: item.title,
    client: item.client || item.title,
    year: item.year ? String(item.year) : '',
    category: (item.services || []).join(' · '),
    sector: item.sector || '',
    caseIntro: item.caseIntro || '',
    caseDescription: item.caseDescription || '',
    excerpt: item.caseDescription || '',
    coverImage: img(item.coverImage, 1200),
    heroImage: img(item.heroImage, 2000),
    gallery: (item.gallery || []).filter(Boolean).map((url) => img(url, 1800)),
  };
}

export async function getCases() {
  if (!hasSanity) return localCases;
  try {
    const data = await sanityFetch(CASES_QUERY);
    // Enquanto o painel estiver vazio, o site continua mostrando os cases locais.
    return data && data.length ? data.map(mapCase) : localCases;
  } catch (error) {
    console.error('[sanity] falha ao carregar cases', error);
    return localCases;
  }
}

export async function getCaseBySlug(slug) {
  const all = await getCases();
  return all.find((item) => item.slug === slug);
}

function mapPost(post) {
  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt || '',
    category: post.category || '',
    author: post.author || 'Guri Digital',
    date: String(post.date || '').slice(0, 10),
    coverImage: img(post.coverImage, 1600),
    body: post.body || null,
  };
}

export async function getPosts() {
  if (!hasSanity) return localPosts;
  try {
    const data = await sanityFetch(POSTS_QUERY);
    return (data || []).map(mapPost);
  } catch (error) {
    console.error('[sanity] falha ao carregar artigos', error);
    return [];
  }
}

export async function getPostBySlug(slug) {
  const all = await getPosts();
  return all.find((post) => post.slug === slug);
}
