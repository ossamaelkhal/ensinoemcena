import { Mic2, Users, Heart, Lightbulb, CheckCircle, ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Palestras() {
  const palestras = [
    {
      id: 1,
      titulo: "Desenvolvimento de Habilidades Criativas",
      publico: "Educadores",
      icon: Lightbulb,
      cor: "text-[#FFD23F]",
      bg: "bg-[#FFD23F]",
      descricao: "Como transformar a sala de aula em um ambiente de inovação? Nesta palestra interativa, exploramos técnicas teatrais e metodologias ativas para desbloquear a criatividade docente e engajar alunos.",
      topicos: ["Storytelling na educação", "Improvisação como ferramenta", "Criatividade na resolução de conflitos"]
    },
    {
      id: 2,
      titulo: "Desenvolvimento Emocional e Consciência Corporativa",
      publico: "Servidores da Educação",
      icon: Heart,
      cor: "text-[#FF6B6B]",
      bg: "bg-[#FF6B6B]",
      descricao: "Voltada para o bem-estar de quem faz a escola acontecer. Trabalhamos a inteligência emocional, o autocuidado e a importância do trabalho em equipe para um ambiente escolar saudável.",
      topicos: ["Gestão do estresse", "Comunicação não-violenta", "Pertencimento e propósito"]
    },
    {
      id: 3,
      titulo: "Gestão Familiar e Habilidades Emocionais",
      publico: "Pais e Responsáveis",
      icon: Users,
      cor: "text-[#7A3EB1]",
      bg: "bg-[#7A3EB1]",
      descricao: "Estratégias práticas para fortalecer o vínculo entre pais e filhos. Discutimos limites, afeto e como a família pode ser parceira da escola no desenvolvimento emocional da criança.",
      topicos: ["Escuta ativa", "Limites com afeto", "O papel da família na era digital"]
    },
    {
      id: 4,
      titulo: "Habilidades Criativas em Sala de Aula",
      publico: "Educadores (Foco Prático)",
      icon: Mic2,
      cor: "text-[#1A3D7C]",
      bg: "bg-[#1A3D7C]",
      descricao: "Um mergulho prático em dinâmicas que funcionam. O professor sai com um repertório de atividades lúdicas para aplicar imediatamente, tornando o conteúdo curricular mais atraente.",
      topicos: ["Jogos teatrais", "Dinâmicas de grupo", "Planejamento criativo"]
    },
    {
      id: 5,
      titulo: "Habilidades Socioemocionais para Gestores",
      publico: "Gestores Educacionais",
      icon: Users,
      cor: "text-[#7A3EB1]",
      bg: "bg-[#7A3EB1]",
      descricao: "Liderar na educação exige empatia e visão sistêmica. Esta palestra aborda como criar uma cultura escolar acolhedora e eficiente, focada no desenvolvimento humano.",
      topicos: ["Liderança inspiradora", "Clima escolar", "Resolução de conflitos"]
    },
    {
      id: 6,
      titulo: "O Poder de Ser Quem Sou!",
      publico: "Público Geral / Alunos",
      icon: Star,
      cor: "text-[#FFD23F]",
      bg: "bg-[#FFD23F]",
      descricao: "Uma palestra interativa e motivacional sobre identidade, autoestima e protagonismo. Ideal para momentos de acolhimento e projetos de vida.",
      topicos: ["Autoconhecimento", "Propósito de vida", "Superação de medos"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-[#1A3D7C] py-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#7A3EB1]/30 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-flex items-center gap-2 bg-[#FFD23F]/20 border border-[#FFD23F] rounded-full px-4 py-1 text-[#FFD23F] text-sm font-bold mb-6"
          >
            <Mic2 size={16} />
            <span>Formação e Desenvolvimento</span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Nossas Palestras</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Conteúdo transformador para educadores, gestores e famílias. Levamos conhecimento e reflexão para sua comunidade escolar.
          </p>
        </div>
      </section>

      {/* Lista de Palestras */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {palestras.map((palestra, idx) => {
            const Icon = palestra.icon;
            
            return (
              <motion.div 
                key={palestra.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-shadow"
              >
                <div className={`h-2 ${palestra.bg}`}></div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className={`w-14 h-14 ${palestra.bg}/10 rounded-xl flex items-center justify-center ${palestra.cor} mb-6`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <div className="mb-4">
                    <span className={`text-xs font-bold uppercase tracking-wider ${palestra.cor} bg-opacity-10 px-2 py-1 rounded bg-gray-100`}>
                      {palestra.publico}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-4 leading-tight">
                    {palestra.titulo}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    {palestra.descricao}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {palestra.topicos.map((topico, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                        <CheckCircle size={16} className={`mt-0.5 ${palestra.cor}`} />
                        <span>{topico}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to="/contato" 
                    className={`w-full py-3 rounded-xl border-2 font-bold text-center flex items-center justify-center gap-2 transition-colors
                      border-gray-200 text-gray-600 hover:border-[#1A3D7C] hover:text-[#1A3D7C]`}
                  >
                    Contratar Palestra
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-100 py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1A3D7C] mb-4">Personalize para sua escola</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Podemos adaptar o conteúdo das palestras de acordo com a realidade e necessidade da sua instituição.
          </p>
          <Link to="/contato" className="bg-[#FFD23F] text-[#1A3D7C] px-8 py-3 rounded-full font-bold hover:bg-[#FFCA45] transition-colors shadow-lg">
            Fale com um Consultor
          </Link>
        </div>
      </section>
    </div>
  );
}
