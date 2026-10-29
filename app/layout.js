export const metadata = {
  title: 'Guri Digital | Branding & criação de marcas',
  description: 'Agência de branding e criação de marcas. Do conceito à forma. Do nome à alma.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
