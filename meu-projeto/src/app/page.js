import Link from 'next/link';
import Titulo from '@/components/Titulo';

export default function Home() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 max-w-2xl mx-auto">
      <Titulo texto="Bem-vindo ao meu portfólio" nivel="h1" className="mb-4" />
      <p className="text-gray-600 mb-8 leading-relaxed">
        Este é meu espaço para compartilhar projetos, habilidades e um pouco sobre minha trajetória.
      </p>
      <Link
        href="/sobre"
        className="inline-block bg-gray-900 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-gray-700 transition-colors"
      >
        Saiba mais sobre mim →
      </Link>
    </main>
  );
}