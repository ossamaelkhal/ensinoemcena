import { ChevronRight, Calendar, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { DataService } from '../../services/dataService';
import { Espetaculo } from '../../types/schema';

export default function FeaturedShowsSection() {
  const [espetaculos, setEspetaculos] = useState<Espetaculo[]>([]);

  useEffect(() => {
    const load = async () => {
      const data = await DataService.getEspetaculos();
      // Mostra apenas os 3 primeiros ou os marcados como destaque (se houvesse esse campo)
      setEspetaculos(data.slice(0, 3)); 
    };
    load();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#7A3EB1] font-bold tracking-wider uppercase text-sm">Nosso repertório</span>
          <h2 className="text-4xl font-bold text-[#1A3D7C] mt-2">Espetáculos que ensinam</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Peças teatrais desenvolvidas com rigor didático pedagógico e qualidade artística para diferentes faixas etárias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {espetaculos.map((espetaculo) => (
            <div
              key={espetaculo.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={espetaculo.imagemCapa}
                  alt={espetaculo.titulo}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-[#1A3D7C] shadow-sm">
                  {espetaculo.temas?.[0]}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-[#1A3D7C] mb-3 group-hover:text-[#7A3EB1] transition-colors line-clamp-1">
                  {espetaculo.titulo}
                </h3>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Users size={16} className="text-[#FFD23F]" />
                    <span className="truncate max-w-[100px]">{espetaculo.faixaEtaria?.split(' ')[0]}...</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} className="text-[#FF6B6B]" />
                    <span>{espetaculo.duracao}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed flex-grow">
                  Uma aventura lúdica na qual as vogais e as consoantes enfrentam traças para salvar a literatura.
                </p>
                
                <Link
                  to={`/espetaculos/${espetaculo.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gray-50 hover:bg-[#1A3D7C] text-[#1A3D7C] hover:text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 group-hover:translate-x-1"
                >
                  Ver detalhes <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
             to="/espetaculos"
             className="inline-block border-2 border-[#1A3D7C] text-[#1A3D7C] px-8 py-3 rounded-full font-bold hover:bg-[#1A3D7C] hover:text-white transition-all"
          >
            Ver todos os espetáculos
          </Link>
        </div>
      </div>
    </section>
  );
}
