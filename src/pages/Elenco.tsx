import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RotateCw, Star } from 'lucide-react';
import { DataService } from '../services/dataService';
import { MembroElenco } from '../types/schema';

const CardElenco = ({ membro }: { membro: MembroElenco }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="h-[420px] w-full perspective-1000 cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full preserve-3d transition-transform duration-700 shadow-xl rounded-2xl"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* FRENTE */}
        <div className="absolute inset-0 backface-hidden bg-white rounded-2xl overflow-hidden border-2 border-transparent hover:border-[#FFD23F] transition-colors">
          <div className="h-3/5 overflow-hidden relative">
             <div className="absolute inset-0 bg-gradient-to-t from-[#1A3D7C]/80 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"/>
             <img src={membro.foto} alt={membro.nome} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute bottom-3 right-3 z-20 bg-white/20 backdrop-blur-md p-2 rounded-full text-white">
                <RotateCw size={20} />
            </div>
          </div>
          <div className="p-6 h-2/5 flex flex-col justify-between bg-white">
            <div>
              <h3 className="text-2xl font-bold text-[#1A3D7C]">{membro.nome}</h3>
              <p className="text-sm text-[#7A3EB1] font-medium mb-3">{membro.funcao || 'Artista & Educador'}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {membro.especialidades?.slice(0, 3).map((esp, i) => (
                <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">{esp}</span>
              ))}
            </div>
          </div>
        </div>

        {/* VERSO */}
        <div 
          className="absolute inset-0 backface-hidden bg-gradient-to-br from-[#1A3D7C] to-[#7A3EB1] rounded-2xl text-white p-8 flex flex-col items-center justify-center text-center rotate-y-180 border-4 border-[#FFD23F]"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <div className="mb-4 bg-white/10 p-4 rounded-full">
            <Star className="text-[#FFD23F] w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold mb-4 text-[#FFD23F]">Sobre o Artista</h4>
          <p className="text-sm leading-relaxed text-gray-100 mb-6">"{membro.biografia}"</p>
          <button className="text-xs font-bold uppercase tracking-widest text-[#FFD23F]">Voltar</button>
        </div>
      </motion.div>
    </div>
  );
};

export default function Elenco() {
  const [elenco, setElenco] = useState<MembroElenco[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const data = await DataService.getElenco();
      setElenco(data);
      setLoading(false);
    };
    load();
  }, []);

  if (loading) return <div className="min-h-screen flex items-center justify-center text-[#1A3D7C]">Carregando artistas...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-[#1A3D7C] to-[#0f244a] text-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Nosso Elenco</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light">
              Conheça os artistas-educadores que transformam o palco em sala de aula.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 -mt-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {elenco.map((membro, index) => (
              <motion.div
                key={membro.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CardElenco membro={membro} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
