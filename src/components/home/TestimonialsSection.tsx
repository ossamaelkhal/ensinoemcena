import { Quote } from 'lucide-react';
import { useState } from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      text: "A Ensino em Cena trouxe uma nova perspectiva para nossos alunos. Não foi apenas diversão, foi uma aula viva sobre literatura e convivência. O material de apoio ajudou muito os professores em sala.",
      author: "Maria Helena",
      role: "Coordenadora Pedagógica",
      school: "Colégio Santa Maria",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80"
    },
    {
      id: 2,
      text: "Impressionante a qualidade técnica e o carinho com as crianças. A logística foi impecável, não tivemos trabalho nenhum. Já agendamos o próximo!",
      author: "Roberto Almeida",
      role: "Diretor",
      school: "Escola Municipal Novo Saber",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&q=80"
    },
    {
      id: 3,
      text: "Meus filhos chegaram em casa encantados falando sobre as vogais. É mágico ver como o teatro fixa o conteúdo na cabecinha deles.",
      author: "Juliana Costa",
      role: "Mãe e Presidente da APM",
      school: "Escola Integração",
      image: "https://images.unsplash.com/photo-1554151228-14d9def656ec?w=150&q=80"
    }
  ];

  return (
    <section className="py-20 bg-[#1A3D7C] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#7A3EB1] rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFD23F] rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">O impacto real nas escolas</h2>
          <p className="text-blue-200 mt-4 text-lg">Histórias de quem já vivenciou a experiência.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/15 transition-colors">
              <Quote className="text-[#FFD23F] mb-6 w-10 h-10 opacity-80" />
              <p className="text-lg text-gray-100 italic mb-8 leading-relaxed">"{t.text}"</p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={t.image} 
                  alt={t.author} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#FFD23F]"
                />
                <div>
                  <h4 className="font-bold text-white">{t.author}</h4>
                  <p className="text-sm text-blue-200">{t.role}</p>
                  <p className="text-xs text-blue-300 uppercase tracking-wide mt-1">{t.school}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
