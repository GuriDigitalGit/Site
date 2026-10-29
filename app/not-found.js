import Link from 'next/link';
import './(site)/globals.css';
import './(site)/platform.css';
import SiteShell from './(site)/site-shell';

export const metadata = { title: 'Página não encontrada | Guri Digital' };

export default function NotFound() {
  return (
    <SiteShell>
      <section className="sx-wrap sx-hero sx-404">
        <p className="home-eyebrow"><span />ERRO 404</p>
        <h1>Essa página<br />não existe.</h1>
        <p className="sx-lead">O endereço pode ter mudado ou nunca ter existido. Que tal voltar para o começo?</p>
        <div className="home-actions" style={{ justifyContent: 'flex-start', marginTop: 40 }}>
          <Link className="home-button home-button-dark" href="/">Voltar para o início <span>→</span></Link>
          <Link className="home-button home-button-outline" href="/cases">Ver cases</Link>
        </div>
      </section>
    </SiteShell>
  );
}
