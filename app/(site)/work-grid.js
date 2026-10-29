'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

const filters = [
  ['Branding', 'Branding'],
  ['Estrutura Digital', 'Estrutura Digital'],
  ['Identidade Visual', 'Identidade Visual'],
];

export default function WorkGrid({ cases }) {
  const [filter, setFilter] = useState('');
  const visibleCases = useMemo(() => filter
    ? cases.filter(([, , category]) => category.includes(filter))
    : cases, [cases, filter]);

  return <>
    <div className="home-section-heading works-heading">
      <h2>Marcas que viraram referência.</h2>
      <select aria-label="Filtrar por categoria" value={filter} onChange={(event) => setFilter(event.target.value)}>
        <option value="">Filtrar por categoria...</option>
        {filters.map(([value, label]) => <option value={value} key={value}>{label}</option>)}
      </select>
    </div>
    <div className="works-grid live-works-grid">
      {visibleCases.map(([title, slug, category, image]) => <Link className="work-card" href={`/cases/${slug}`} key={slug}>
        <img src={image} alt="" />
        <div className="work-card-overlay"><h3>{title}</h3><p>{category}</p></div>
      </Link>)}
    </div>
    {visibleCases.length === 0 && <p className="works-empty">Nenhum trabalho encontrado nessa categoria.</p>}
    <Link className="home-more-link" href="/cases">Ver todos os trabalhos <span>→</span></Link>
  </>;
}
