import { GraduationCap, School, BookOpen, Library, Landmark } from 'lucide-react';

export default function SocialProofSection() {
    const partners = [
      { name: 'Rede Sagrado', Icon: School },
      { name: 'Colégio Marista', Icon: GraduationCap },
      { name: 'Sistema Bernoulli', Icon: BookOpen },
      { name: 'Escola Americana', Icon: Library },
      { name: 'Colégio Santo Agostinho', Icon: Landmark },
    ];
  
    return (
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 font-bold mb-8 uppercase tracking-widest text-xs">
            Parceiros Educacionais
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2 text-gray-400 hover:text-[#1A3D7C] transition-colors duration-300 group cursor-default"
                title={`Parceiro: ${partner.name}`}
              >
                 <partner.Icon size={32} className="opacity-80 group-hover:opacity-100" />
                 <span className="font-bold text-lg hidden md:block opacity-50 group-hover:opacity-100">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
