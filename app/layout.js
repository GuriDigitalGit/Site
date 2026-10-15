import './globals.css';

export const metadata = {
  title: 'GuriDigital | Cine Sintético',
  description: 'Filmes, manifestos e documentários de lançamento criados com IA cinematográfica pela GuriDigital.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
