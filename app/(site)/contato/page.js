import SiteShell from '../site-shell';
import ContactForm from '../components/contact-form';

export const metadata = {
  title: 'Contato | Guri Digital',
  description: 'Conta pra gente o que você está construindo. A gente te diz como a marca pode levar isso mais longe.',
};

export default function ContatoPage() {
  return (
    <SiteShell>
      <section className="sx-wrap sx-hero">
        <p className="home-eyebrow sx-rise"><span />CONTATO</p>
        <h1 className="sx-rise" style={{ '--d': '80ms' }}>Pronto para construir algo real?</h1>
        <p className="sx-lead sx-rise" style={{ '--d': '160ms' }}>Conta pra gente o que você está construindo. A gente te diz como a marca pode levar isso mais longe.</p>
      </section>
      <section className="sx-wrap sx-contact sx-rise" style={{ '--d': '240ms' }}>
        <aside className="sx-contact-info">
          <div><span>E-MAIL</span><a href="mailto:comercial1@guridigital.com.br">comercial1@guridigital.com.br</a></div>
          <div><span>WHATSAPP</span><a href="https://wa.me/5511955795397" target="_blank" rel="noreferrer">+55 11 95579 5397</a></div>
          <div><span>ONDE ESTAMOS</span><p>São Paulo, Brasil</p></div>
          <div><span>REDES</span><p><a href="https://instagram.com/guriwork" target="_blank" rel="noreferrer">Instagram ↗</a> <a href="https://behance.net/guridigital" target="_blank" rel="noreferrer">Behance ↗</a></p></div>
        </aside>
        <ContactForm />
      </section>
    </SiteShell>
  );
}
