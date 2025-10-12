import { BookOpen, Users, Target, Award } from 'lucide-react';

export default function Sobre() {
  const metricas = [
    { label: 'Escolas Atendidas', valor: '500+' },
    { label: 'Alunos Alcançados', valor: '50.000+' },
    { label: 'Cidades', valor: '30+' },
    { label: 'Anos de Atuação', valor: '10+' },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#1A3D7C] to-[#7A3EB1] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Sobre o Ensino em Cena</h1>
            <p className="text-xl text-gray-100">
              Transformar a sala de aula em palco de descobertas
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A3D7C] mb-6">Nossa História</h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p className="text-lg leading-relaxed">
                O Ensino em Cena® nasceu da paixão da professora Rose Gomes pela Língua Portuguesa e pela força transformadora do teatro. Criada com o propósito de revolucionar a educação, nossa companhia une arte e pedagogia para criar experiências de aprendizado vivas, emocionantes e memoráveis.
              </p>
              <p className="text-lg leading-relaxed">
                Ao longo de mais de uma década, desenvolvemos uma metodologia inovadora que utiliza espetáculos teatrais como ferramenta pedagógica. Acreditamos que a educação vai além da transmissão de conhecimento – ela deve emocionar, inspirar e transformar.
              </p>
              <p className="text-lg leading-relaxed">
                Cada espetáculo é cuidadosamente elaborado para trabalhar conteúdos curriculares de forma criativa, estimulando não apenas o aprendizado cognitivo, mas também o desenvolvimento socioemocional dos estudantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md p-8 text-center">
                <div className="w-16 h-16 bg-[#1A3D7C] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target size={32} className="text-[#FFD23F]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1A3D7C] mb-4">Missão</h3>
                <p className="text-gray-700">
                  Transformar a educação em uma experiência que se expande para espetáculos, produtos criativos e soluções digitais para escolas e professores.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8 text-center">
                <div className="w-16 h-16 bg-[#7A3EB1] rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1A3D7C] mb-4">Visão</h3>
                <p className="text-gray-700">
                  Ser referência nacional em teatro educativo, reconhecida pela qualidade artística e pelo impacto positivo no aprendizado de milhares de estudantes.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8 text-center">
                <div className="w-16 h-16 bg-[#FF6B6B] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1A3D7C] mb-4">Valores</h3>
                <p className="text-gray-700">
                  Inovação pedagógica, excelência artística, respeito à diversidade, compromisso com a educação de qualidade e transformação social.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1A3D7C] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#FFD23F]">
              Metodologia Pedagógica
            </h2>
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 space-y-6">
              <p className="text-lg leading-relaxed">
                Nossa metodologia une o viés emocional do teatro com objetivos pedagógicos claros. Cada espetáculo é desenvolvido a partir de uma pesquisa aprofundada sobre o conteúdo a ser trabalhado, garantindo alinhamento com a BNCC (Base Nacional Comum Curricular).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-[#FFD23F] mb-2">Como a arte transforma o aprendizado:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-100">
                    <li>Engajamento emocional facilita a memorização</li>
                    <li>Narrativas tornam conceitos abstratos concretos</li>
                    <li>Personagens criam identificação e empatia</li>
                    <li>Interatividade estimula participação ativa</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#FFD23F] mb-2">Benefícios comprovados:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-100">
                    <li>Aumento do interesse pelos conteúdos</li>
                    <li>Melhoria no desempenho acadêmico</li>
                    <li>Desenvolvimento socioemocional</li>
                    <li>Fortalecimento da autoestima</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1A3D7C] mb-12">
            Nossa Fundadora
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#7A3EB1]/10 to-[#FF6B6B]/10 rounded-xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 bg-[#1A3D7C]">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
                    alt="Rose Gomes"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1A3D7C] mb-2">Rose Gomes</h3>
                  <p className="text-lg text-[#7A3EB1] font-semibold mb-4">
                    Fundadora e Diretora Artística
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Professora de Língua Portuguesa apaixonada pelo poder transformador da educação, Rose Gomes fundou o Ensino em Cena com a convicção de que arte e conhecimento podem caminhar juntos.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Com formação em Letras e Teatro, dedicou sua carreira a desenvolver metodologias inovadoras que tornam o aprendizado uma experiência inesquecível. Sua visão pioneira já impactou milhares de estudantes em todo o Brasil.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#FFD23F] to-[#FFCA45]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1A3D7C] mb-12">
            Nosso Impacto
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {metricas.map((metrica, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#1A3D7C] mb-2">
                  {metrica.valor}
                </div>
                <div className="text-sm md:text-base font-semibold text-[#1A3D7C]">
                  {metrica.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
