'use client';

import { useState } from 'react';

export default function ShareButton({ title }) {
  const [copied, setCopied] = useState(false);

  async function share() {
    const url = window.location.href;
    if (navigator.share) {
      try { await navigator.share({ title, url }); return; } catch { /* cancelado: cai para copiar */ }
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch { /* sem permissão de área de transferência */ }
  }

  return <button type="button" className="home-button home-button-outline" onClick={share}>{copied ? 'Link copiado ✓' : 'Compartilhar artigo'}</button>;
}
