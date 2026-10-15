import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="platform-main">
      <h1>Página não encontrada</h1>
      <p>O endereço informado não existe.</p>
      <Link href="/">Voltar para o início</Link>
    </main>
  );
}
