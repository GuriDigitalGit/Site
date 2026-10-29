'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

export default function BlogExplorer({ posts }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Todos');

  const categories = useMemo(() => ['Todos', ...new Set(posts.map((p) => p.category).filter(Boolean))], [posts]);
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => (category === 'Todos' || p.category === category)
      && (!q || `${p.title} ${p.excerpt} ${p.category}`.toLowerCase().includes(q)));
  }, [posts, query, category]);

  const [featured, ...rest] = visible;
  const filtering = query.trim() !== '' || category !== 'Todos';

  return (
    <div className="sx-wrap">
      <div className="sx-filterbar sx-rise" style={{ '--d': '240ms' }}>
        <div className="sx-chips" role="tablist" aria-label="Categorias">
          {categories.map((c) => (
            <button key={c} type="button" role="tab" aria-selected={category === c} className={`sx-chip${category === c ? ' is-active' : ''}`} onClick={() => setCategory(c)}>{c}</button>
          ))}
        </div>
        <label className="sx-search">
          <span className="sx-sr">Buscar artigos</span>
          <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar artigos..." />
        </label>
      </div>

      {featured && (
        <Link className="sx-featured" href={`/blog/${featured.slug}`} key={`f-${featured.slug}`}>
          {featured.coverImage && <div className="sx-featured-img"><img src={featured.coverImage} alt="" /></div>}
          <div className="sx-featured-body">
            <p className="sx-meta">{featured.category} · {featured.dateLabel} · {featured.readingTime} min de leitura</p>
            <h2>{featured.title}</h2>
            <p>{featured.excerpt}</p>
            <span className="sx-card-go">Ler artigo <b>→</b></span>
          </div>
        </Link>
      )}

      {rest.length > 0 && (
        <div className="sx-post-grid">
          {rest.map((post, i) => (
            <Link className="sx-post" href={`/blog/${post.slug}`} key={post.slug} style={{ '--d': `${i * 70}ms` }}>
              {post.coverImage && <div className="sx-post-img"><img src={post.coverImage} alt="" loading="lazy" /></div>}
              <p className="sx-meta">{post.category} · {post.dateLabel}</p>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </Link>
          ))}
        </div>
      )}

      {visible.length === 0 && (
        <p className="works-empty">{filtering ? 'Nenhum artigo encontrado. Tente outra busca ou categoria.' : 'Em breve, novos artigos por aqui.'}</p>
      )}
    </div>
  );
}
