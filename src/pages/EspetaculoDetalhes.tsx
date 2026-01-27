import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Clock, Users, ArrowLeft, Calendar, CheckCircle, Star, BookOpen, Share2, AlertCircle } from 'lucide-react';
import { DataService } from '../services/dataService';
import { EspetaculoCapa } from '../components/BrandElements';

export default function EspetaculoDetalhes() {
  const { slug } = useParams();
  const [espetaculo, setEspetaculo] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  useEffect(() => {
    const loadData = async () => {
      if (slug) {
        try {
            const data = await DataService.getEspetaculoBySlug(slug);
            if (data) {
                setEspetaculo(data);
            } else {
                setError(true);
            }
        } catch (e) {
            console.error(e);
            setError(true);
        } finally {
            setLoading(false);
        }
      }
    };
    loadData();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-[#1A3D7C] border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-500 font-medium">Preparando o palco...</p>
        </div>
      </div>
    );
  }

  if (error || !espetaculo) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <AlertCircle size={48} className="text-red-500 mb-4" />
        <h1 className="text-3xl font-bold text-[#1A3D7C] mb-4">Espetáculo não encontrado</h1>
        <Link to="/espetaculos" className="text-[#7A3EB1] underline hover:text-[#FF6B6B]">
          Voltar para o catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section Imersiva */}
      <div className="relative h-[60vh] overflow-hidden bg-gray-900">
        <motion.div style={{ y, opacity }} className="absolute inset-0">
           <EspetaculoCapa 
                slug={espetaculo.slug} 
                titulo={espetaculo.titulo} 
                className="w-full h-full object-cover opacity-60"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-[#1A3D7C] via-[#1A3D7C]/20 to-transparent" />
        </motion.div>

        <div className="absolute inset-0 flex flex-col justify-end pb-16">
          <div className="container mx-auto px-4">
            <Link to="/espetaculos" className="inline-flex items-center text-white/80 hover:text-[#FFD23F] mb-6 transition-colors backdrop-blur-sm bg-black/20 px-3 py-1 rounded-full text-sm">
              <ArrowLeft size={16} className="mr-2" />
              Voltar ao catálogo
            </Link>
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg leading-tight"
            >
              {espetaculo.titulo}
            </motion.h1>
            <motion.p 
               initial={{ y: 30, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.7, delay: 0.2 }}
               className="text-xl md:text-2xl text-gray-200 max-w-2xl font-light leading-relaxed"
            >
              {espetaculo.sinopseCurta}
            </motion.p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Coluna Principal */}
          <div className="lg:w-2/3">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1A3D7C] mb-6 flex items-center gap-2">
                <BookOpen className="text-[#FFD23F]" />
                Sinopse
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                {espetaculo.sinopseLonga}
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1A3D7C] mb-6 flex items-center gap-2">
                <CheckCircle className="text-[#7A3EB1]" />
                O que seus alunos vão aprender
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {espetaculo.objetivos?.map((obj: string, i: number) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-50 p-5 rounded-xl border-l-4 border-[#7A3EB1] shadow-sm"
                  >
                    <p className="text-gray-800 font-medium">{obj}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-bold text-[#1A3D7C] mb-4">Alinhamento BNCC</h2>
              <div className="flex flex-wrap gap-3">
                {espetaculo.bncc?.map((code: string) => (
                  <span key={code} className="bg-[#E0E7FF] text-[#1A3D7C] px-3 py-1.5 rounded-lg font-mono text-sm font-bold border border-[#1A3D7C]/20" title="Código de Competência BNCC">
                    {code}
                  </span>
                ))}
              </div>
            </section>

             <section className="mb-12 bg-[#FFD23F]/10 rounded-2xl p-8 border border-[#FFD23F]/30">
              <h3 className="text-xl font-bold text-[#1A3D7C] mb-6 flex items-center gap-2">
                <Star className="fill-[#FFD23F] text-[#FFD23F]" />
                Diferenciais exclusivos
              </h3>
              <ul className="space-y-3">
                {espetaculo.diferenciais?.map((dif: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1A3D7C]" />
                    <span className="text-gray-800">{dif}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar Sticky */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-[#1A3D7C] p-4 text-white text-center font-bold">
                  Ficha técnica rápida
                </div>
                <div className="p-6 space-y-6">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Clock size={20} />
                      <span>Duração</span>
                    </div>
                    <span className="font-bold text-[#1A3D7C]">{espetaculo.duracao}</span>
                  </div>
                  
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Users size={20} />
                      <span>Público</span>
                    </div>
                    <span className="font-bold text-[#1A3D7C] text-right text-sm max-w-[50%]">{espetaculo.faixaEtaria}</span>
                  </div>

                   <div className="flex items-center justify-between pb-2">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Calendar size={20} />
                      <span>Disponibilidade</span>
                    </div>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                      AGENDA ABERTA
                    </span>
                  </div>
                </div>

                <div className="p-6 bg-gray-50 border-t border-gray-100">
                  <Link 
                    to="/contato"
                    className="block w-full bg-[#FFD23F] hover:bg-[#FFCA45] text-[#1A3D7C] text-center font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all transform mb-3"
                  >
                    Solicitar orçamento
                  </Link>
                  <button className="block w-full bg-white border border-gray-300 text-gray-600 font-semibold py-3 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                    <Share2 size={18} />
                    Compartilhar
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
