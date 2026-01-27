import { Target, Heart, ShieldCheck, Lightbulb } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <Target size={32} />,
      title: 'Alinhado à BNCC',
      description: 'Conteúdos pedagógicos desenvolvidos de acordo com as competências da Base Nacional Comum Curricular.',
      color: 'text-blue-600',
      bg: 'bg-blue-100'
    },
    {
      icon: <ShieldCheck size={32} />,
      title: 'Logística simplificada',
      description: 'Levamos toda a estrutura necessária. A escola só precisa ceder o espaço e os alunos.',
      color: 'text-green-600',
      bg: 'bg-green-100'
    },
    {
      icon: <Heart size={32} />,
      title: 'Desenvolvimento socioemocional',
      description: 'Trabalhamos empatia, criatividade e expressão através da arte teatral.',
      color: 'text-red-600',
      bg: 'bg-red-100'
    },
    {
      icon: <Lightbulb size={32} />,
      title: 'Experiência memorável',
      description: 'Uma vivência que marca a trajetória escolar e potencializa o aprendizado em sala de aula.',
      color: 'text-yellow-600',
      bg: 'bg-yellow-100'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <span className="text-[#7A3EB1] font-bold tracking-wider uppercase text-sm">Por que escolher</span>
            <h2 className="text-4xl font-bold text-[#1A3D7C] mt-2 mb-6 leading-tight">
              Mais que um espetáculo,<br />uma ferramenta pedagógica.
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Entendemos os desafios da gestão escolar. Por isso, a Ensino em Cena oferece uma solução completa que une entretenimento de alta qualidade com objetivos educacionais claros, facilitando a vida do coordenador e enriquecendo a rotina dos alunos.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${benefit.bg} ${benefit.color} shrink-0`}>
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A3D7C] mb-1">{benefit.title}</h4>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
             <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#FFD23F]/20 rounded-full blur-3xl -z-10"></div>
             <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#7A3EB1]/20 rounded-full blur-3xl -z-10"></div>
             <img 
               src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&q=80" 
               alt="Crianças assistindo teatro atentas" 
               className="rounded-2xl shadow-2xl w-full object-cover transform md:rotate-2 hover:rotate-0 transition-transform duration-500"
             />
          </div>
        </div>
      </div>
    </section>
  );
}
