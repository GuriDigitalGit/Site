import Link from 'next/link';

export default function SiteShell({ children }) {
  return (
    <div className="platform-shell">
      <header className="platform-header">
        <Link className="platform-brand" href="/">GURIDIGITAL</Link>
        <nav className="platform-nav" aria-label="Navegação principal">
          <Link href="/sobre">Sobre</Link>
          <Link href="/servicos">Serviços</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contato">Contato</Link>
        </nav>
      </header>
      <main className="platform-main">{children}</main>
      <footer className="platform-footer">© 2026 GURI Digital. Todos os direitos reservados.</footer>
    </div>
  );
}
