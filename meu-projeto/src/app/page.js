import Titulo from '@/components/Titulo';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Titulo texto="Bem-vindo ao meu portfólio" />
      <Link href="/sobre">Sobre mim</Link>
    </main>
  );
}