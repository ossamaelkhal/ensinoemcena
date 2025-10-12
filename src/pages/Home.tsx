import { Link } from 'react-router-dom';
import { BookOpen, Sparkles, TrendingUp, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [depoimentos] = useState([
    {
      id: 1,
      nome: 'Maria Silva',
      cargo: 'Diretora Pedagógica',
      escola: 'Escola Municipal Santos Dumont',
      tipo: 'gestor' as const,
      depoimento: 'Os espetáculos transformaram o aprendizado dos nossos alunos. A conexão entre arte e educação é extraordinária!',
      nota: 5,
    },
    {
      id: 2,
      nome: 'João Pedro',
      cargo: 'Aluno do 5º ano',
      escola: 'Colégio Visão',
      tipo: 'aluno' as const,
      depoimento: 'Foi muito legal! Aprendi sobre vogais de um jeito divertido. Quero ver de novo!',
      nota: 5,
    },
    {
      id: 3,
      nome: 'Ana Costa',
      cargo: 'Professora de Português',
      escola: 'Instituto Educacional',
      tipo: 'professor' as const,
      depoimento: 'Metodologia inovadora que engaja os estudantes. Recomendo para todas as escolas!',
      nota: 5,
    },
  ]);

  const espetaculosDestaque = [
    {
      id: 1,
      titulo: 'Vila da Fonética',
      sinopse: 'As vogais A, E, I, O, U vivem como amigos até que duas traças aparecem para destruir os livros.',
      imagem: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
    },
    {
      id: 2,
      titulo: 'Português com Classe',
      sinopse: 'Classes gramaticais descobrem que a fábrica da Língua Portuguesa está sob nova direção: a IA.',
      imagem: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    },
    {
      id: 3,
      titulo: 'Tuco e o Controle Mágico',
      sinopse: 'Um cientista inventa um controle que ensina inglês sem precisar de escola.',
      imagem: 'https://images.unsplash.com/photo-1516575114784-7abf2c36b18f?w=800&q=80',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-[#1A3D7C] via-[#7A3EB1] to-[#FF6B6B] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#FFD23F] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#FF6B6B] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Aqui, o aprender é um espetáculo
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Ensino em Cena®, onde o aprendizado vira espetáculo e o espetáculo vira aprendizado.
            </p>
            <Link
              to="/contato"
              className="inline-block bg-[#FFD23F] text-[#1A3D7C] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFCA45] transition-all transform hover:scale-105 shadow-lg"
            >
              Agende para sua escola
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#1A3D7C] mb-12">
            Espetáculos em Destaque
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {espetaculosDestaque.map((espetaculo) => (
              <div
                key={espetaculo.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={espetaculo.imagem}
                    alt={espetaculo.titulo}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#1A3D7C] mb-3">
                    {espetaculo.titulo}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{espetaculo.sinopse}</p>
                  <Link
                    to="/espetaculos"
                    className="inline-flex items-center text-[#7A3EB1] font-semibold hover:text-[#FF6B6B] transition-colors"
                  >
                    Saiba mais <ChevronRight size={20} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#7A3EB1] to-[#1A3D7C] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6 text-[#FFD23F]">
              Projeto Leitura e Escrita
            </h2>
            <p className="text-lg text-center mb-8 text-gray-100">
              Um programa pedagógico completo que une teatro, literatura e desenvolvimento de habilidades linguísticas.
            </p>
            <details className="bg-white/10 backdrop-blur rounded-xl p-6 hover:bg-white/20 transition-colors cursor-pointer">
              <summary className="text-xl font-semibold text-[#FFD23F] cursor-pointer">
                Clique para conhecer o projeto completo
              </summary>
              <div className="mt-6 space-y-4 text-gray-100">
                <p>
                  O Projeto Leitura e Escrita integra espetáculos teatrais com atividades pedagógicas para desenvolver competências de leitura, escrita, interpretação e criatividade.
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Espetáculos adaptados ao currículo escolar</li>
                  <li>Material didático complementar para professores</li>
                  <li>Atividades pós-espetáculo para fixação do conteúdo</li>
                  <li>Acompanhamento pedagógico personalizado</li>
                  <li>Avaliação de impacto no aprendizado</li>
                </ul>
                <Link
                  to="/contato"
                  className="inline-block mt-4 bg-[#FFD23F] text-[#1A3D7C] px-6 py-3 rounded-lg font-semibold hover:bg-[#FFCA45] transition-colors"
                >
                  Solicitar apresentação do projeto
                </Link>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#1A3D7C] mb-12">
            O que dizem sobre nós
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {depoimentos.map((depoimento) => (
              <div
                key={depoimento.id}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {[...Array(depoimento.nota)].map((_, i) => (
                    <span key={i} className="text-[#FFD23F] text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{depoimento.depoimento}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-[#1A3D7C]">{depoimento.nome}</p>
                  <p className="text-sm text-gray-600">{depoimento.cargo}</p>
                  {depoimento.escola && (
                    <p className="text-sm text-gray-500">{depoimento.escola}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#1A3D7C] mb-12">
            Nossos Diferenciais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#FFD23F] rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen size={40} className="text-[#1A3D7C]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A3D7C] mb-2">
                Metodologia Inovadora
              </h3>
              <p className="text-gray-600">
                Unimos arte e educação para criar experiências de aprendizado únicas e transformadoras.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#7A3EB1] rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles size={40} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A3D7C] mb-2">
                Aprendizado Criativo
              </h3>
              <p className="text-gray-600">
                Estimulamos a imaginação e o pensamento crítico através do teatro pedagógico.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#FF6B6B] rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp size={40} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A3D7C] mb-2">
                Impacto Comprovado
              </h3>
              <p className="text-gray-600">
                Resultados mensuráveis no engajamento e desempenho dos estudantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-[#FFD23F] to-[#FFCA45]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#1A3D7C] mb-4">
              Leve um pedacinho da magia para sua escola ou casa
            </h2>
            <p className="text-lg text-[#1A3D7C] mb-6">
              Confira nossa loja com livros, materiais educativos, brindes e kits especiais
            </p>
            <Link
              to="/loja"
              className="inline-block bg-[#1A3D7C] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#17386D] transition-colors"
            >
              Visitar loja
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
