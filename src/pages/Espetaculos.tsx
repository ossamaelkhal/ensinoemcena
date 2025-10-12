import { Link } from 'react-router-dom';
import { Clock, Users, Calendar } from 'lucide-react';

export default function Espetaculos() {
  const espetaculos = [
    {
      id: 1,
      titulo: 'Vila da Fonética',
      slug: 'vila-da-fonetica',
      sinopse: 'As vogais A, E, I, O, U vivem como amigos até que duas traças aparecem para destruir os livros. Em meio a músicas e diálogos interativos, elas se unem para vencer.',
      publico_alvo: 'Educação Infantil e Fundamental I (4 a 10 anos)',
      duracao: '50 minutos',
      imagem: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
      temas: ['Literatura', 'Autoconhecimento', 'Gestão de Emoções', 'Educação Financeira', 'Alimentação Saudável'],
    },
    {
      id: 2,
      titulo: 'Português com Classe',
      slug: 'portugues-com-classe',
      sinopse: 'As classes gramaticais descobrem que a fábrica da Língua Portuguesa está sob nova direção: a Inteligência Artificial. Vaidosas e insatisfeitas, precisam se unir para restaurar a harmonia.',
      publico_alvo: 'Fundamental II e Ensino Médio (11 a 17 anos)',
      duracao: '60 minutos',
      imagem: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
      temas: ['Gramática', 'Língua Portuguesa', 'Tecnologia', 'Trabalho em Equipe'],
    },
    {
      id: 3,
      titulo: 'Tuco e o Controle Mágico',
      slug: 'tuco-controle-magico',
      sinopse: 'Um cientista inventa um controle que ensina inglês sem precisar de escola. Ao dormir, viaja por países, culturas e descobre que aprender línguas pode ser divertido.',
      publico_alvo: 'Fundamental I e II (7 a 14 anos)',
      duracao: '55 minutos',
      imagem: 'https://images.unsplash.com/photo-1516575114784-7abf2c36b18f?w=800&q=80',
      temas: ['Inglês', 'Culturas', 'Viagens', 'Aprendizado'],
      parceria: 'Bambina Trupe (Escola de Teatro Bilíngue)',
    },
    {
      id: 4,
      titulo: 'Janusz Korczak - O Mestre',
      slug: 'janusz-korczak',
      sinopse: 'História inspiradora do educador polonês que dedicou sua vida às crianças e revolucionou a pedagogia com amor e respeito.',
      publico_alvo: 'Fundamental II e Ensino Médio (12 a 17 anos)',
      duracao: '65 minutos',
      imagem: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
      temas: ['História', 'Educação', 'Direitos Humanos', 'Valores'],
      parceria: 'Bambina Trupe',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#1A3D7C] to-[#7A3EB1] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Nossos Espetáculos</h1>
            <p className="text-xl text-gray-100">
              Teatro pedagógico que transforma o aprendizado em experiência inesquecível
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {espetaculos.map((espetaculo, index) => (
              <div
                key={espetaculo.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow`}
              >
                <div className="lg:w-1/2 h-64 lg:h-auto overflow-hidden">
                  <img
                    src={espetaculo.imagem}
                    alt={espetaculo.titulo}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-[#1A3D7C] mb-4">
                    {espetaculo.titulo}
                  </h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {espetaculo.sinopse}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Users className="mr-3 text-[#7A3EB1]" size={20} />
                      <span className="font-semibold mr-2">Público-alvo:</span>
                      {espetaculo.publico_alvo}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="mr-3 text-[#FF6B6B]" size={20} />
                      <span className="font-semibold mr-2">Duração:</span>
                      {espetaculo.duracao}
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="font-semibold text-gray-700 mb-2">Temas trabalhados:</p>
                    <div className="flex flex-wrap gap-2">
                      {espetaculo.temas.map((tema, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-[#FFD23F] text-[#1A3D7C] text-sm font-semibold rounded-full"
                        >
                          {tema}
                        </span>
                      ))}
                    </div>
                  </div>

                  {espetaculo.parceria && (
                    <p className="text-sm text-gray-600 mb-4 italic">
                      Em parceria com {espetaculo.parceria}
                    </p>
                  )}

                  <Link
                    to={`/espetaculos/${espetaculo.slug}`}
                    className="inline-block bg-[#1A3D7C] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#17386D] transition-colors text-center"
                  >
                    Ver detalhes e agendar
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#7A3EB1] to-[#FF6B6B] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-[#FFD23F]">
              Como Funciona o Agendamento
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <div className="w-12 h-12 bg-[#FFD23F] rounded-full flex items-center justify-center mx-auto mb-4 text-[#1A3D7C] font-bold text-xl">
                  1
                </div>
                <h3 className="font-semibold text-lg mb-2">Entre em Contato</h3>
                <p className="text-sm text-gray-100">
                  Escolha o espetáculo e preencha o formulário de agendamento
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <div className="w-12 h-12 bg-[#FFD23F] rounded-full flex items-center justify-center mx-auto mb-4 text-[#1A3D7C] font-bold text-xl">
                  2
                </div>
                <h3 className="font-semibold text-lg mb-2">Planejamento</h3>
                <p className="text-sm text-gray-100">
                  Nossa equipe entrará em contato para definir data, local e detalhes
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <div className="w-12 h-12 bg-[#FFD23F] rounded-full flex items-center justify-center mx-auto mb-4 text-[#1A3D7C] font-bold text-xl">
                  3
                </div>
                <h3 className="font-semibold text-lg mb-2">Apresentação</h3>
                <p className="text-sm text-gray-100">
                  Levamos o espetáculo até sua escola com toda estrutura necessária
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
