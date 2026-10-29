import SiteHeader from './components/site-header';
import SiteFooter from './components/site-footer';

export default function SiteShell({ children, className = '' }) {
  return (
    <div className={`home-page sx-shell ${className}`.trim()}>
      <SiteHeader />
      <main className="sx-main">{children}</main>
      <SiteFooter />
    </div>
  );
}
