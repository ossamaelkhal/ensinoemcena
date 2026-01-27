import { useState } from 'react';
import { CheckCircle, PlayCircle, Download, MessageCircle, Star, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { DataService } from '../../services/dataService';
import { PessoinhasGroup, FoneLogo } from '../../components/BrandElements';

export default function LPVilaDaFonetica() {
  const [email, setEmail] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    await DataService.saveLead({
      nome: 'Lead LP Vila',
      email: email,
      telefone: '',
      tipo: 'escola',
      interesse: 'guia-fonetica',
      mensagem: 'Download Guia Pedagógico LP'
    });
    setEnviado(true);
    // Simula download
    setTimeout(() => window.open('https://ensinoemcena.com.br/guia-amostra.pdf', '_blank'), 1000);
  };

  return (
    <div className="min-h-screen font-sans bg-white">
      {/* 1. Headline Agressiva + VSL */}
      <header className="bg-[#1A3D7C] text-white pt-12 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFD23F]/10 rounded-full blur-[100px]"></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-[#FF6B6B] text-white text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest"
          >
            Atenção Coordenadores Pedagógicos
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight max-w-4xl">
            Transforme a Alfabetização dos seus alunos em <span className="text-[#FFD23F]">Paixão pela Leitura</span> em apenas 50 minutos.
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl">
            O espetáculo que une Fonética, Música e BNCC para desbloquear o potencial leitor da sua escola.
          </p>
          
          <div className="w-full max-w-3xl aspect-video bg-black rounded-2xl shadow-2xl border-4 border-[#FFD23F]/30 relative group cursor-pointer overflow-hidden mb-12">
            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt="Trailer" />
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayCircle size={80} className="text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
            </div>
            <div className="absolute bottom-4 left-4 bg-black/60 px-3 py-1 rounded text-sm font-bold">
              Assista ao Trailer (1:30)
            </div>
          </div>

          {/* Destaque das Personagens (Inserção Estratégica) */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl w-full max-w-4xl border border-white/10">
            <p className="text-[#FFD23F] font-bold uppercase tracking-widest text-sm mb-6">Conheça os Protagonistas</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <PessoinhasGroup className="h-24 w-auto object-contain drop-shadow-lg" />
                <div className="text-left">
                    <h3 className="text-xl font-bold text-white mb-2">As Vogais Ganham Vida</h3>
                    <p className="text-blue-200 text-sm max-w-md">
                        Na Vila, cada letra tem personalidade, som e cor. As crianças se identificam imediatamente, facilitando a memorização fonética.
                    </p>
                </div>
            </div>
          </div>

        </div>
      </header>

      {/* 2. O Problema x A Solução (BNCC) */}
      <section className="py-20 bg-gray-50 relative z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-red-500 mb-4">O desafio da sala de aula</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex gap-3"><span className="text-red-400">✕</span> Alunos desinteressados na leitura</li>
                <li className="flex gap-3"><span className="text-red-400">✕</span> Dificuldade com fonética e separação</li>
                <li className="flex gap-3"><span className="text-red-400">✕</span> Professores sobrecarregados</li>
              </ul>
            </div>
            <div className="border-l-2 border-gray-100 pl-8">
              <h3 className="text-2xl font-bold text-green-600 mb-4">A Solução Ensino em Cena</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex gap-3"><span className="text-green-500 font-bold">✓</span> Engajamento emocional imediato</li>
                <li className="flex gap-3"><span className="text-green-500 font-bold">✓</span> Conteúdo alinhado à BNCC (EF01LP05)</li>
                <li className="flex gap-3"><span className="text-green-500 font-bold">✓</span> Material de apoio para o professor</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Lead Magnet (Isca Digital) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
            <div className="md:w-1/2">
              <div className="bg-gray-50 p-2 rounded shadow-lg rotate-2 border border-gray-200 relative">
                 <div className="bg-white h-[400px] flex flex-col items-center justify-center text-center p-6 border-2 border-dashed border-gray-300">
                    <FoneLogo className="w-24 h-24 text-[#1A3D7C] mb-4" />
                    <h4 className="font-bold text-lg text-gray-800">Guia Pedagógico</h4>
                    <p className="text-sm text-gray-500">Vila da Fonética</p>
                 </div>
                 <div className="absolute -top-4 -right-4 bg-[#FFD23F] text-[#1A3D7C] font-bold px-4 py-2 rounded-full shadow-lg transform rotate-12">
                    Grátis
                 </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-[#1A3D7C] mb-4">
                Baixe o Guia Pedagógico Gratuito
              </h2>
              <p className="text-gray-600 mb-8">
                Veja exatamente quais competências da BNCC trabalhamos e receba 3 atividades prontas para usar amanhã.
              </p>
              
              {enviado ? (
                <div className="bg-green-100 text-green-700 p-4 rounded-lg font-bold text-center">
                  ✓ Guia enviado para seu e-mail!
                </div>
              ) : (
                <form onSubmit={handleDownload} className="space-y-4">
                  <input 
                    type="email" 
                    required
                    placeholder="Seu e-mail escolar" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A3D7C] outline-none"
                  />
                  <button type="submit" className="w-full bg-[#FFD23F] text-[#1A3D7C] font-bold py-4 rounded-lg hover:bg-[#FFCA45] flex items-center justify-center gap-2 shadow-lg transition-transform hover:-translate-y-1">
                    <Download size={20} />
                    Baixar Guia Agora
                  </button>
                  <p className="text-xs text-gray-400 text-center flex items-center justify-center gap-1">
                    <ShieldCheck size={12} /> Seus dados estão seguros.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Depoimentos (Prova Social) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#1A3D7C] mb-12">Quem levou, aprovou</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-left">
                <div className="flex gap-1 text-[#FFD23F] mb-4">
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                </div>
                <p className="text-gray-600 mb-6 text-sm italic">
                  "Nunca vi meus alunos tão engajados. Eles saíram do teatro cantando as músicas das vogais e pedindo para ler o livro."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#1A3D7C] rounded-full flex items-center justify-center text-white font-bold">C</div>
                  <div>
                    <p className="font-bold text-sm text-[#1A3D7C]">Coord. Mariana</p>
                    <p className="text-xs text-gray-500">Colégio Santo Antônio</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Oferta Irresistível (CTA Final) */}
      <section className="py-24 bg-gradient-to-r from-[#1A3D7C] to-[#0f244a] text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Leve a Vila da Fonética para sua escola</h2>
          <p className="text-xl text-blue-100 mb-10">
            Agenda 2026 aberta com condições especiais para fechamento antecipado.
          </p>
          <a 
            href="https://wa.me/5531996739694?text=Vim%20pela%20LP%20Vila%20e%20quero%20cotacao" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-[#20bd5a] hover:scale-105 transition-all shadow-xl"
          >
            <MessageCircle size={24} />
            Solicitar Cotação no WhatsApp
          </a>
          <p className="mt-6 text-sm text-white/40">
            Atendimento prioritário para escolas de BH e região.
          </p>
        </div>
      </section>
    </div>
  );
}
