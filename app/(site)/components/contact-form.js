'use client';

import { useState } from 'react';

const projectTypes = ['Branding', 'Naming', 'Identidade Visual', 'Estrutura Digital', 'Ainda não sei'];
const WHATSAPP = '5511955795397';

export default function ContactForm() {
  const [type, setType] = useState('');
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(['name', 'email', 'phone', 'message'].map((key) => [key, String(data.get(key) || '').trim()]));
    const next = {};
    if (!values.name) next.name = 'Conta pra gente seu nome.';
    if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = 'Informe um e-mail válido.';
    if (values.message.length < 10) next.message = 'Escreva um pouquinho sobre o projeto.';
    setErrors(next);
    if (Object.keys(next).length) return;

    const text = [
      `Olá, Guri! Meu nome é ${values.name}.`,
      type ? `Projeto: ${type}.` : '',
      '',
      values.message,
      '',
      `E-mail: ${values.email}`,
      values.phone ? `Telefone: ${values.phone}` : '',
    ].filter((line, i, all) => line !== '' || (all[i - 1] !== '' && i !== 0)).join('\n');
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    setSent(true);
  }

  if (sent) {
    return (
      <div className="sx-form-done" role="status">
        <span>✓</span>
        <h3>Quase lá!</h3>
        <p>Abrimos o WhatsApp com a sua mensagem pronta. É só enviar por lá e a gente responde em seguida.</p>
        <button type="button" className="home-button home-button-outline" onClick={() => setSent(false)}>Enviar outra mensagem</button>
      </div>
    );
  }

  return (
    <form className="sx-form" onSubmit={onSubmit} noValidate>
      <fieldset className="sx-field">
        <legend>O que você precisa?</legend>
        <div className="sx-chips">
          {projectTypes.map((t) => (
            <button key={t} type="button" aria-pressed={type === t} className={`sx-chip${type === t ? ' is-active' : ''}`} onClick={() => setType(type === t ? '' : t)}>{t}</button>
          ))}
        </div>
      </fieldset>
      <label className="sx-field">
        <span>Nome</span>
        <input name="name" autoComplete="name" placeholder="Seu nome" aria-invalid={Boolean(errors.name)} />
        {errors.name && <em>{errors.name}</em>}
      </label>
      <div className="sx-field-row">
        <label className="sx-field">
          <span>E-mail</span>
          <input name="email" type="email" autoComplete="email" placeholder="voce@empresa.com" aria-invalid={Boolean(errors.email)} />
          {errors.email && <em>{errors.email}</em>}
        </label>
        <label className="sx-field">
          <span>Telefone <small>(opcional)</small></span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="(11) 90000-0000" />
        </label>
      </div>
      <label className="sx-field">
        <span>Sobre o projeto</span>
        <textarea name="message" rows="5" placeholder="Conta pra gente o que você está construindo." aria-invalid={Boolean(errors.message)} />
        {errors.message && <em>{errors.message}</em>}
      </label>
      <button type="submit" className="home-button home-button-dark sx-submit">Enviar pelo WhatsApp <span>→</span></button>
      <p className="sx-form-note">Ao enviar, abrimos o WhatsApp da Guri com a sua mensagem já escrita. Se preferir, escreva para comercial1@guridigital.com.br.</p>
    </form>
  );
}
