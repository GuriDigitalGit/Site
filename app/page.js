import Link from 'next/link';
import SiteShell from './site-shell';
import { cases } from '../lib/cases';
import { posts } from '../lib/posts';

export default function HomePage() {
  return (
    <SiteShell>
      <section aria-labelledby="home-title">
        <p>GuriDigital</p>
        <h1 id="home-title">Marcas com ideia, forma e direção.</h1>
        <p>Esta é a Home principal do site. A landing de Cine Sintético permanece separada como uma página de campanha.</p>
        <p><Link href="/landing/cine-sintetico">Conheça a landing Cine Sintético →</Link></p>
      </section>

      <section aria-labelledby="cases-title">
        <h2 id="cases-title">Cases</h2>
        <p>Projetos, lançamentos e sistemas de marca dirigidos pela Guri.</p>
        <div>
          {cases.slice(0, 3).map((item) => (
            <Link className="case-card" key={item.slug} href={`/cases/${item.slug}`}>
              <img src={item.coverImage} alt="" />
              <div className="case-card-body">
                <p>{item.year} · {item.client}</p>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                <span>Ver case →</span>
              </div>
            </Link>
          ))}
        </div>
        <Link href="/cases">Ver todos os cases →</Link>
      </section>

      <section aria-labelledby="blog-title">
        <h2 id="blog-title">Conteúdo</h2>
        <p>Artigos e ideias sobre branding, criação e direção.</p>
        {posts.slice(0, 2).map((post) => (
          <article key={post.slug}>
            <h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
            <p>{post.excerpt}</p>
          </article>
        ))}
        <Link href="/blog">Ir para o blog →</Link>
      </section>
    </SiteShell>
  );
}
