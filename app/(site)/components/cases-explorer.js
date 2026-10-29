'use client';

import { useMemo, useState } from 'react';
import CaseCard from './case-card';

const splitCategories = (category) => category.split(/\s*(?:·|,| e )\s*/).map((c) => c.trim()).filter(Boolean);

export default function CasesExplorer({ cases }) {
  const [filter, setFilter] = useState('Todos');

  const categories = useMemo(() => {
    const set = new Set();
    cases.forEach((item) => splitCategories(item.category).forEach((c) => set.add(c)));
    return ['Todos', ...set];
  }, [cases]);

  const visible = useMemo(
    () => (filter === 'Todos' ? cases : cases.filter((item) => splitCategories(item.category).includes(filter))),
    [cases, filter],
  );

  return (
    <div className="sx-wrap">
      <div className="sx-filterbar sx-rise" style={{ '--d': '240ms' }}>
        <div className="sx-chips" role="tablist" aria-label="Filtrar cases por categoria">
          {categories.map((c) => (
            <button key={c} type="button" role="tab" aria-selected={filter === c} className={`sx-chip${filter === c ? ' is-active' : ''}`} onClick={() => setFilter(c)}>{c}</button>
          ))}
        </div>
        <p className="sx-count" aria-live="polite">{visible.length} {visible.length === 1 ? 'projeto' : 'projetos'}</p>
      </div>
      <div className="works-grid live-works-grid sx-cases-grid" key={filter}>
        {visible.map((item, i) => <CaseCard key={item.slug} item={item} delay={i * 70} />)}
      </div>
      {visible.length === 0 && <p className="works-empty">Nenhum projeto nessa categoria ainda.</p>}
    </div>
  );
}
