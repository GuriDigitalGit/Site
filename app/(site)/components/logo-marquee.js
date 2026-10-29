// Duas faixas de logos em movimento contínuo, em sentidos opostos, com as bordas esmaecidas.
const rows = [
  Array.from({ length: 14 }, (_, i) => `/site-home/logos/logo-${String(i + 1).padStart(2, '0')}.webp`),
  // logo-26.webp é uma foto de case (não é logo): fica fora da faixa.
  Array.from({ length: 13 }, (_, i) => i + 15).filter((n) => n !== 26).map((n) => `/site-home/logos/logo-${String(n).padStart(2, '0')}.webp`),
];

function Group({ logos, hidden = false }) {
  return (
    <div className="hx-logo-group" aria-hidden={hidden || undefined}>
      {logos.map((src) => <div className="hx-logo-item" key={src}><img src={src} alt="" loading="lazy" /></div>)}
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <div className="hx-logos">
      {rows.map((logos, index) => (
        <div className={`hx-logo-row${index === 1 ? ' is-reverse' : ''}`} key={index}>
          <div className="hx-logo-track">
            <Group logos={logos} />
            <Group logos={logos} hidden />
          </div>
        </div>
      ))}
    </div>
  );
}
