import { services, serviceDetails } from '../../../lib/site-data';

const art = ['/site-home/services/svc-1.webp', '/site-home/services/svc-2.webp', '/site-home/services/svc-3.webp', '/site-home/services/svc-4.webp'];

// Cards de serviços: ilustração no topo, número + seta, título e texto (igual ao site original).
export default function ServiceCards({ details = false }) {
  return (
    <div className="hx-svc-grid">
      {services.map(([number, title, copy], i) => (
        <article className="hx-svc" data-reveal style={{ '--d': `${(i % 2) * 120}ms` }} key={number}>
          <div className="hx-svc-art"><img src={art[i]} alt="" loading="lazy" /></div>
          <div className="hx-svc-body">
            <div className="hx-svc-top"><span>{number}</span><i className="hx-svc-arrow" aria-hidden="true">↘</i></div>
            <h3>{title}</h3>
            <p>{copy}</p>
            {details && (serviceDetails[number] || []).length > 0 && (
              <ul className="hx-svc-list">{serviceDetails[number].map((item) => <li key={item}>{item}</li>)}</ul>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
