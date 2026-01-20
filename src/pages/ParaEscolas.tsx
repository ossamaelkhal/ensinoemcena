import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Sparkles, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ParaEscolas() {
  return (
    <div className="bg-gray-50">
      {/* Hero: Foco na Diretora Inovadora */}
      <section className="py-24 text-white bg-gradient-to-r from-[#7A3EB1] to-[#1A3D7C]">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{delay: 0.1}}
            className="text-4xl md:text-5xl font-extrabold mb-4">
            Diferencie sua escola no mercado e entregue resultados de ponta.
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{delay: 0.2}}
            className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Para diretoras(es) visionárias que buscam projetos pedagógicos de alto impacto, com resultados comprovados e que fortalecem a reputação da instituição.
          </motion.p>
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{delay: 0.3}}>
            <Link to="/contato" className="bg-[#FFD23F] text-[#1A3D7C] font-bold py-3 px-8 rounded-full text-lg hover:bg-white transition-all transform hover:scale-105">
              Agende uma Apresentação
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Seção de Benefícios Estratégicos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#1A3D7C]">Por que as melhores escolas escolhem a Ensino em Cena?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <BenefitCard icon={<ShieldCheck />} title="Reputação e Prestígio">
              Associe sua marca a um projeto pedagógico inovador, reconhecido por sua qualidade e impacto no aprendizado.
            </BenefitCard>
            <BenefitCard icon={<TrendingUp />} title="Aumento de Matrículas">
              Destaque-se da concorrência com uma proposta de valor única que atrai pais que buscam uma educação de vanguarda para seus filhos.
            </BenefitCard>
            <BenefitCard icon={<Sparkles />} title="Engajamento Exponencial">
              Nossa metodologia transforma a sala de aula, aumenta o interesse dos alunos e combate a apatia, melhorando os índices de satisfação.
            </BenefitCard>
            <BenefitCard icon={<Award />} title="Selo de Escola Inovadora">
              Posicione sua instituição como líder em inovação educacional, alinhada às novas tendências e tecnologias do século XXI.
            </BenefitCard>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#1A3D7C] mb-4">Pronta para ser a próxima escola de referência em inovação?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Vamos conversar sobre como a Ensino em Cena pode se alinhar ao seu planejamento pedagógico e impulsionar seus resultados. </p>
          <Link to="/contato?interesse=apresentacao_escolas" className="bg-[#1A3D7C] text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-[#143063] transition-all">
            Fale com um especialista
          </Link>
        </div>
      </section>
    </div>
  );
}

const BenefitCard = ({ icon, title, children }: any) => (
  <div className="text-center bg-white p-6 rounded-xl shadow-md border-t-4 border-[#FFD23F]">
    <div className="mx-auto w-16 h-16 flex items-center justify-center bg-blue-100 text-[#1A3D7C] rounded-full mb-4">
      {icon}
    </div>
    <h3 className="font-bold text-lg mb-2 text-gray-800">{title}</h3>
    <p className="text-sm text-gray-600">{children}</p>
  </div>
)
