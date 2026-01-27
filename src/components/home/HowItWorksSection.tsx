import { MessageSquare, CalendarCheck, Sparkles, ArrowRight } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      id: 1,
      icon: <MessageSquare size={32} />,
      title: 'Entre em contato',
      description: 'Preencha nosso formulário ou chame no WhatsApp. Nossa equipe entende sua necessidade.',
      color: 'bg-[#FFD23F]'
    },
    {
      id: 2,
      icon: <CalendarCheck size={32} />,
      title: 'Agende a data',
      description: 'Escolha o melhor dia e horário. Nós cuidamos de toda a logística e preparação.',
      color: 'bg-[#7A3EB1]'
    },
    {
      id: 3,
      icon: <Sparkles size={32} />,
      title: 'O espetáculo acontece',
      description: 'Levamos cenário, som, luz e elenco até sua escola. Seus alunos vivem a magia!',
      color: 'bg-[#FF6B6B]'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1A3D7C]">Como levar para sua escola</h2>
          <p className="text-gray-600 mt-4 text-lg">Processo simples, ágil e sem burocracia.</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={step.id} className="group relative bg-white p-8 rounded-2xl shadow-lg text-center hover:-translate-y-2 transition-transform duration-300">
                <div className={`${step.color} w-20 h-20 mx-auto rounded-full flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                  {step.icon}
                </div>
                
                {/* Mobile Arrow */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-4 text-gray-300">
                    <ArrowRight size={24} className="rotate-90" />
                  </div>
                )}

                <h3 className="text-xl font-bold text-[#1A3D7C] mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
