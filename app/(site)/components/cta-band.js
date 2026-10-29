import Link from 'next/link';

export default function CtaBand({
  title = 'Pronto para construir algo real?',
  text = 'Conta pra gente o que você está construindo. A gente te diz como a marca pode levar isso mais longe.',
}) {
  return (
    <section className="hx-contact" data-reveal>
      <div className="hx-contact-art" aria-hidden="true">
        <img className="is-main" src="/site-home/contact/contact-main.svg" alt="" />
        <img className="is-top" src="/site-home/contact/contact-top.svg" alt="" />
        <img className="is-bottom" src="/site-home/contact/contact-bottom.svg" alt="" />
      </div>
      <div className="hx-contact-copy">
        <p className="home-eyebrow home-eyebrow-light"><span />CONTATO</p>
        <h2>{title}</h2>
        <p>{text}</p>
        <Link className="home-button home-button-dark" href="/contato">Falar com a Guri <span>→</span></Link>
      </div>
    </section>
  );
}
