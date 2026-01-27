import { motion } from 'framer-motion';
import { 
  BookOpen, Users, Mic2, Brain, Sparkles, 
  Theater, Heart, Lightbulb, Download, ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { PessoinhasGroup } from '../components/BrandElements';

export default function ProjetoLeitura() {
  const etapas = [
    {
      etapa: 1,
      titulo: "O despertar do educador",
      publico: "Professores",
      icon: Lightbulb,
      descricao: "Tudo começa com quem ensina. Realizamos uma palestra de reprogramação emocional e sugestão de habilidades criativas, a fim de resgatar o ânimo e a visibilidade do professor.",
      detalhe: "Foco na valorização humana do docente."
    },
    {
      etapa: 2,
      titulo: "A Vila da Fonética (imaginação)",
      publico: "Alunos (Fund. I)",
      icon: Brain,
      descricao: "No primeiro encontro com as crianças não mostramos imagens, narramos a história da 'Vila da Fonética' e descrevemos a casa de cada vogal para reativar o poder da imaginação que tem se perdido pelo uso excessivo de telas.",
      detalhe: "Estimulação auditiva e criativa pura."
    },
    {
      etapa: 3,
      titulo: "Experiência sensorial",
      publico: "Alunos",
      icon: Sparkles,
      descricao: "Trabalhamos a memória e os sentidos, pois levamos referências reais de cada vogal para a sala de aula, criando conexões neurais poderosas.",
      itens: ["Cheiro de Alfazema (A)", "Folha de Espinafre (E)", "Íris/Flor (I)", "Cheiro de Orégano (O)", "Uva para degustar (U)"]
    },
    {
      etapa: 4,
      titulo: "A revelação e a leitura",
      publico: "Alunos",
      icon: BookOpen,
      descricao: "Revelamos as imagens das casas confrontando com o que imaginaram. Realizamos várias dinâmicas para uma interação divertida sobre a formação de sílabas. Incentivamos a leitura ao microfone, transformando o ato de ler em um evento.",
      detalhe: "70-80% da turma participa ativamente da leitura."
    },
    {
      etapa: 5,
      titulo: "Protagonismo no pátio",
      publico: "Alunos artistas",
      icon: Users,
      descricao: "Convidamos e ensaiamos alguns alunos para encenarem uma adaptação da peça para os colegas no pátio. Assim, eles vivenciam a diferença entre gênero narrativo e dramático na prática.",
      detalhe: "Apresentações para toda a escola."
    },
    {
      etapa: 6,
      titulo: "A culminância no teatro",
      publico: "Escola completa",
      icon: Theater,
      descricao: "Chegou o grande dia! Recbemos a escola no teatro para assistir à peça profissional 'Vila da Fonética'. Nesse momento, os estudantes convivem com iluminação, sonoplastia, os atores e magia do teatro, onde se é consolidado o aprendizado das oxítonas, paroxítonas, paroxítonas e separação de sílabas.",
      detalhe: "Olhos brilhando e interação total."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-[#1A3D7C]">
        <div className="absolute inset-0 opacity-40">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-[#FFD23F] text-[#1A3D7C] px-4 py-1 rounded-full font-bold text-sm mb-6"
          >
            Metodologia exclusiva Rose Gomes
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Projeto de leitura e escrita <br/>
            <span className="text-[#FFD23F]">Da Imaginação ao Palco</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Uma jornada de 6 etapas que resgata a imaginação, envolve a família e transforma a alfabetização em um espetáculo inesquecível.
          </motion.p>
        </div>
      </section>

      {/* Destaque das Vogais */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-6">Protagonistas da Vila</p>
          <div className="flex justify-center">
            <PessoinhasGroup className="h-24 md:h-32 w-auto object-contain" />
          </div>
        </div>
      </section>

      {/* A Jornada (Timeline) */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1A3D7C] mb-4">Como funciona o Projeto?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nossa metodologia é estruturada para envolver toda a comunidade escolar: professores, alunos e famílias.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FFD23F] to-[#7A3EB1] transform -translate-x-1/2 rounded-full"></div>

          {etapas.map((item, index) => {
            const Icon = item.icon;
            const isLeft = index % 2 === 0;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col md:flex-row items-center justify-between mb-16 relative ${isLeft ? '' : 'md:flex-row-reverse'}`}
              >
                <div className="w-full md:w-[45%] bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#1A3D7C] hover:-translate-y-2 transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[#1A3D7C]/10 p-3 rounded-full text-[#1A3D7C]">
                      <Icon size={24} />
                    </div>
                    <span className="text-sm font-bold text-[#7A3EB1] uppercase tracking-wider">Etapa {item.etapa}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A3D7C] mb-3">{item.titulo}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.descricao}
                  </p>
                  
                  {item.itens && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.itens.map((sub, i) => (
                        <span key={i} className="bg-green-50 text-green-700 px-2 py-1 rounded-md text-xs font-semibold border border-green-100">
                          {sub}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="text-sm text-[#FF6B6B] font-semibold mt-4 italic">
                    💡 {item.detalhe}
                  </p>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 bg-white border-4 border-[#FFD23F] rounded-full z-10 shadow-md mt-6 md:mt-0">
                  <span className="text-[#1A3D7C] font-bold">{item.etapa}</span>
                </div>

                <div className="hidden md:block w-[45%]"></div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Família e Legado */}
      <section className="py-20 bg-gradient-to-br from-[#7A3EB1] to-[#5a2d82] text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#FFD23F] p-4 rounded-full text-[#1A3D7C]">
                  <Heart size={32} />
                </div>
                <h2 className="text-3xl font-bold">Resgate da família</h2>
              </div>
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                Após o término do projeto, realizamos uma roda de conversa afetiva com os pais dos estudantes. O objetivo é resgatar a responsabilidade parental na era tecnológica, discutindo a importância da presença, do afeto e do limite no uso de telas.
              </p>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border-l-4 border-[#FFD23F]">
                <p className="italic text-gray-200">
                  "Não tem TV, não tem celular mais importante do que ouvir o seu filho."
                </p>
              </div>
            </div>

            <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#1A3D7C] p-4 rounded-full text-white">
                  <Download size={24} />
                </div>
                <h2 className="text-2xl font-bold text-[#1A3D7C]">O Legado para a escola</h2>
              </div>
              <p className="text-gray-600 mb-6">
                O projeto não acaba quando vamos embora. Deixamos um material rico para que os professores continuem o trabalho:
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle />
                  <span><strong>E-book exclusivo</strong> com jogos pedagógicos.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle />
                  <span><strong>70 dicas práticas</strong> para gestão de sala de aula (conflitos, desânimo, bullying).</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle />
                  <span>Atividades extras de matemática e lógica.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle />
                  <span>Relatório de avaliação de impacto.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-[#FFD23F]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#1A3D7C] mb-6">
            Quer transformar a alfabetização na sua escola?
          </h2>
          <p className="text-[#1A3D7C] text-xl mb-10 max-w-2xl mx-auto">
            Leve o Projeto de Leitura e Escrita da Professora Rose Gomes para seus alunos e veja os olhinhos deles brilharem.
          </p>
          <Link 
            to="/contato"
            className="inline-flex items-center gap-3 bg-[#1A3D7C] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-[#17386D] hover:scale-105 transition-all shadow-xl"
          >
            Agendar projeto agora
            <ArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
}

const CheckCircle = () => (
  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
  </div>
);
