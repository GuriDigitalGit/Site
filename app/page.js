import Script from 'next/script';
import { getLegacyPageMarkup } from '../lib/legacy-page';

export default function HomePage() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: getLegacyPageMarkup() }} />
      <Script src="/legacy/script.js" strategy="afterInteractive" />
    </>
  );
}
