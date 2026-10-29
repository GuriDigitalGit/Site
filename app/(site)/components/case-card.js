import Link from 'next/link';

export default function CaseCard({ item, delay = 0 }) {
  return (
    <Link className="work-card sx-case-card" href={`/cases/${item.slug}`} data-reveal style={{ '--d': `${delay}ms` }}>
      <img src={item.coverImage} alt="" loading="lazy" />
      <div className="work-card-overlay">
        <h3>{item.title}</h3>
        <p>{item.category}</p>
        <span className="sx-card-go">Ver case <b>→</b></span>
      </div>
    </Link>
  );
}
