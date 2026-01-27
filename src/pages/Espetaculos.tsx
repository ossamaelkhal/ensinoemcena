import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Users, CheckCircle, Search, AlertCircle } from 'lucide-react';
import { DataService } from '../services/dataService';
import { EspetaculoCapa } from '../components/BrandElements';

export default function Espetaculos() {
  const [espetaculos, setEspetaculos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filtro, setFiltro] = useState<'todos' | 'infantil' | 'fundamental' | 'medio'>('todos');

  useEffect(() => {
    const loadEspetaculos = async () => {
      try {
        const data = await DataService.getEspetaculos();
        if (Array.isArray(data)) {
             setEspetaculos(data);
        } else {
             throw new Error("Dados inválidos recebidos");
        }
      } catch (err: any) {
        console.error("Erro ao carregar espetáculos:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadEspetaculos();
  }, []);

  // Lógica de filtro inteligente
  const filteredEspetaculos = espetaculos.filter(e => {
    if (filtro === 'todos') return true;
    const faixa = (e.faixaEtaria || '').toLowerCase();
    if (filtro === 'infantil') return faixa.includes('infantil') || faixa.includes('4 a');
    if (filtro === 'fundamental') return faixa.includes('fundamental') || faixa.includes('7 a') || faixa.includes('11 a');
    if (filtro === 'medio') return faixa.includes('médio') || faixa.includes('12 a');
    return false;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#1A3D7C] border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-[#1A3D7C] font-medium animate-pulse">Carregando repertório...</p>
      </div>
    );
  }

  if (error) {
      return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 text-center">
            <AlertCircle size={48} className="text-red-500 mb-4" />
            <h2 className="text-xl font-bold text-gray-800">Ops! Algo deu errado.</h2>
            <p className="text-gray-600 mb-4">Não conseguimos carregar os espetáculos no momento.</p>
            <button onClick={() => window.location.reload()} className="bg-[#1A3D7C] text-white px-6 py-2 rounded-lg">Tentar novamente</button>
        </div>
      );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Cinemático */}
      <section className="bg-[#1A3D7C] pt-32 pb-20 rounded-b-[3rem] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7A3EB1]/30 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#FFD23F]/20 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Nossos espetáculos
          </motion.h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 font-light">
            Descubra obras que unem a magia do teatro com a precisão da BNCC.
          </p>
          
          <div className="inline-flex bg-white/10 backdrop-blur-md p-1 rounded-full border border-white/20 shadow-lg flex-wrap justify-center">
            {[
              { id: 'todos', label: 'Todos' },
              { id: 'infantil', label: 'Infantil' },
              { id: 'fundamental', label: 'Fundamental' },
              { id: 'medio', label: 'Médio' }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFiltro(f.id as any)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  filtro === f.id 
                    ? 'bg-[#FFD23F] text-[#1A3D7C] shadow-sm' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Espetáculos */}
      <section className="py-20 container mx-auto px-4 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredEspetaculos.map((espetaculo) => (
              <motion.div
                key={espetaculo.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
              >
                {/* Poster Art com Fallback Inteligente */}
                <div className="h-64 overflow-hidden relative bg-gray-200">
                  <EspetaculoCapa 
                    slug={espetaculo.slug} 
                    titulo={espetaculo.titulo} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A3D7C] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-[#1A3D7C] text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                    <Clock size={12} className="text-[#FF6B6B]" />
                    {espetaculo.duracao}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 translate-y-2 group-hover:translate-y-0 transition-transform">
                    <h3 className="text-2xl font-bold text-white drop-shadow-md leading-tight mb-1">
                      {espetaculo.titulo}
                    </h3>
                    <p className="text-blue-100 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                       <Users size={14} /> {espetaculo.faixaEtaria}
                    </p>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {espetaculo.sinopseCurta}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {espetaculo.bncc?.slice(0, 3).map((code: string) => (
                      <span key={code} className="text-[10px] font-mono font-bold bg-blue-50 text-[#1A3D7C] px-2 py-1 rounded border border-blue-100">
                        {code}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/espetaculos/${espetaculo.slug}`}
                    className="w-full bg-white border-2 border-[#1A3D7C] text-[#1A3D7C] py-3 rounded-xl font-bold text-center group-hover:bg-[#1A3D7C] group-hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Search size={18} />
                    Ver detalhes
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredEspetaculos.length === 0 && (
          <div className="text-center py-20 opacity-60">
            <p className="text-xl text-gray-500">Nenhum espetáculo encontrado para este filtro.</p>
            <button onClick={() => setFiltro('todos')} className="text-[#1A3D7C] underline mt-2">Limpar filtros</button>
          </div>
        )}
      </section>
    </div>
  );
}
