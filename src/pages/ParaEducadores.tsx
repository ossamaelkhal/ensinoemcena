import { motion } from 'framer-motion';
import { Lightbulb, BookOpen, Heart, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ParaEducadores() {
  return (
    <div className="bg-gray-50">
      {/* Hero: Foco na Coordenadora Engajada */}
      <section className="py-24 text-white bg-gradient-to-r from-[#1A3D7C] to-[#5a2d82]">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{delay: 0.1}}
            className="text-4xl md:text-5xl font-extrabold mb-4">
            Apoio, inspiração e ferramentas para sua jornada pedagógica.
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{delay: 0.2}}
            className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
            Para coordenadoras(es) e professoras(es) que buscam transformar suas aulas, engajar alunos e reacender o brilho nos olhos de cada um.
          </motion.p>
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{delay: 0.3}}>
            <Link to="/ferramentas" className="bg-[#FFD23F] text-[#1A3D7C] font-bold py-3 px-8 rounded-full text-lg hover:bg-white transition-all transform hover:scale-105">
              Explore Nossos Recursos Gratuitos
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Seção de Benefícios para o Educador */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#1A3D7C]">Como podemos facilitar o seu dia a dia?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <BenefitCard icon={<Lightbulb />} title="Inspiração e Novas Ideias">
              Receba planos de aula prontos, sugestões de atividades e insights para aplicar o teatro e a criatividade em qualquer disciplina.
            </BenefitCard>
            <BenefitCard icon={<BookOpen />} title="Alinhamento Curricular">
              Nossos projetos são 100% alinhados à BNCC, facilitando a integração com seu planejamento e economizando seu tempo.
            </BenefitCard>
            <BenefitCard icon={<Heart />} title="Reconexão com o Propósito">
              Nossa metodologia ajuda a resgatar a paixão por ensinar e a ver o impacto real do seu trabalho no desenvolvimento dos alunos.
            </BenefitCard>
            <BenefitCard icon={<Download />} title="Materiais Prontos para Uso">
              Acesse nossa Sala de Recursos e baixe flashcards, atividades e outros materiais para enriquecer suas aulas imediatamente.
            </BenefitCard>
          </div>
        </div>
      </section>

      {/* CTA para a Comunidade */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#1A3D7C] mb-4">Junte-se à nossa comunidade de Educadores Criativos!</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Seja a primeira a receber novos materiais, participar de workshops exclusivos com Rose Gomes e trocar experiências com outros profissionais da área.</p>
          <a href="#" className="bg-[#1A3D7C] text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-[#143063] transition-all">
            Cadastre-se na Newsletter
          </a>
        </div>
      </section>
    </div>
  );
}

const BenefitCard = ({ icon, title, children }: any) => (
  <div className="text-center bg-white p-6 rounded-xl shadow-md border-t-4 border-[#FFD23F]">
    <div className="mx-auto w-16 h-16 flex items-center justify-center bg-purple-100 text-[#7A3EB1] rounded-full mb-4">
      {icon}
    </div>
    <h3 className="font-bold text-lg mb-2 text-gray-800">{title}</h3>
    <p className="text-sm text-gray-600">{children}</p>
  </div>
)
