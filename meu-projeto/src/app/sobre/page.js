import Titulo from '@/components/Titulo';

export const metadata = {
  title: 'Sobre | Meu Portfólio',
  description: 'Saiba mais sobre mim e minha trajetória como desenvolvedor.',
};

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 max-w-2xl mx-auto">
      <Titulo texto="Sobre mim" nivel="h1" className="mb-6" />

      <section className="space-y-4 text-gray-600 leading-relaxed">
        <p>
          Olá! Sou <strong className="text-gray-900">Seu Nome</strong>, desenvolvedor(a) web
          apaixonado(a) por criar experiências digitais intuitivas e bem construídas.
        </p>
        <p>
          Tenho experiência com React, Next.js e ferramentas modernas do ecossistema JavaScript.
        </p>
        <p>
          Fora do código, curto aprender coisas novas e colaborar em projetos open source.
        </p>
      </section>

      <div className="mt-12">
        <Titulo texto="Tecnologias" nivel="h2" className="mb-4" />
        <ul className="flex flex-wrap gap-2">
          {['Next.js', 'React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Git'].map((tech) => (
            <li key={tech} className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full font-medium">
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12">
        <Titulo texto="Contato" nivel="h2" className="mb-4" />
        <p className="text-gray-600">
          Entre em contato pelo e-mail{' '}
          <a href="mailto:seuemail@exemplo.com" className="text-blue-600 hover:underline">
            seuemail@exemplo.com
          </a>
        </p>
      </div>
    </main>
  );
}