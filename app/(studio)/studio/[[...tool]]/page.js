import { projectId } from '../../../../sanity/env';
import StudioClient from './studio-client';

export const dynamic = 'force-static';
export { metadata, viewport } from 'next-sanity/studio';

export default function StudioPage() {
  if (!projectId) {
    return (
      <main style={{ maxWidth: 640, margin: '12vh auto', padding: 24, fontFamily: 'system-ui, sans-serif', lineHeight: 1.6 }}>
        <h1>Painel ainda não conectado</h1>
        <p>Falta informar o <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code>. Siga o passo a passo no arquivo <code>sanity/README.md</code> e reinicie o site.</p>
      </main>
    );
  }
  return <StudioClient />;
}
