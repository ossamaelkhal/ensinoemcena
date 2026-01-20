import { useState } from 'react';
import { motion } from 'framer-motion';
import { Handshake, TrendingUp, Heart, Globe, Building2, Send, CheckCircle } from 'lucide-react';
import { DataService } from '../services/dataService';

export default function Patrocine() {
  const [form, setForm] = useState({ empresa: '', contato: '', email: '', mensagem: '' });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await DataService.saveLead({
      nome: form.contato,
      email: form.email,
      telefone: '',
      instituicao: form.empresa,
      tipo: 'parceria',
      interesse: 'patrocinio',
      mensagem: form.mensagem
    });
    setEnviado(true);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Corporativo */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=80" 
            alt="Reunião Corporativa e Impacto" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 bg-[#FFD23F]/10 border border-[#FFD23F]/30 rounded-full px-4 py-1 text-[#FFD23F] text-sm font-bold mb-6"
            >
              <Handshake size={16} />
              <span>Responsabilidade Social & Cultura</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Associe sua marca à transformação da educação.
            </motion.h1>
            <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
              Invista em iniciativas culturais de alto impacto social. Fortaleça sua imagem institucional e contribua para um futuro mais justo, consciente e sensível.
            </p>
          </div>
        </div>
      </section>

      {/* Por que patrocinar? (Os 3 Pilares) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Por que a Ensino em Cena?</h2>
            <p className="text-slate-600 text-lg">
              Mais do que um patrocínio, uma parceria estratégica alinhada aos valores ESG.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                color: "text-red-500",
                title: "Impacto Social Real",
                desc: "Promova o desenvolvimento da linguagem, criatividade e autoestima de centenas de crianças em fase de alfabetização."
              },
              {
                icon: TrendingUp,
                color: "text-blue-600",
                title: "Visibilidade Estratégica",
                desc: "Sua marca presente em escolas, teatros e mídias digitais, dialogando diretamente com famílias e educadores."
              },
              {
                icon: Globe,
                color: "text-green-600",
                title: "Conexão com Valores",
                desc: "Associe-se a inovação, cultura e inclusão. Uma oportunidade concreta de construir legado."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-transparent hover:border-current transition-all group"
                style={{ borderColor: item.color === "text-red-500" ? '#ef4444' : item.color === "text-blue-600" ? '#2563eb' : '#16a34a' }}
              >
                <div className={`w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center ${item.color} mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contrapartidas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-[#1A3D7C] mb-6">Onde sua marca aparece</h2>
            <ul className="space-y-4">
              {[
                "Logo em banners e materiais gráficos dos espetáculos",
                "Menção nas redes sociais e site oficial",
                "Abertura para ações de ativação no teatro",
                "Cotas de ingressos para colaboradores e parceiros",
                "Relatório de impacto social pós-projeto"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 p-4 bg-slate-50 rounded-lg">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A3D7C] to-[#7A3EB1] rounded-2xl transform rotate-3 opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80" 
              alt="Plateia no Teatro" 
              className="rounded-2xl shadow-2xl relative z-10"
            />
          </div>
        </div>
      </section>

      {/* Formulário B2B */}
      <section className="py-24 bg-[#1A3D7C] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <div className="md:w-2/5 bg-gradient-to-br from-slate-800 to-slate-900 p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4">Seja um Mantenedor</h3>
                <p className="text-slate-300 text-sm mb-8">
                  Preencha o formulário e nossa diretoria entrará em contato para apresentar o Mídia Kit completo.
                </p>
              </div>
              <div className="flex items-center gap-2 text-[#FFD23F]">
                <Building2 />
                <span className="font-bold">Relacionamento Corporativo</span>
              </div>
            </div>

            <div className="md:w-3/5 p-10">
              {enviado ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-slate-800">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                    <CheckCircle size={32} />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Mensagem Recebida!</h4>
                  <p className="text-slate-500">Em breve entraremos em contato para agendar uma apresentação.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Empresa</label>
                    <input 
                      required
                      type="text" 
                      className="w-full p-3 border border-slate-200 rounded-lg text-slate-800 focus:ring-2 focus:ring-[#1A3D7C] outline-none"
                      onChange={e => setForm({...form, empresa: e.target.value})}
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">Seu Nome</label>
                      <input 
                        required
                        type="text" 
                        className="w-full p-3 border border-slate-200 rounded-lg text-slate-800 focus:ring-2 focus:ring-[#1A3D7C] outline-none"
                        onChange={e => setForm({...form, contato: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">E-mail Corporativo</label>
                      <input 
                        required
                        type="email" 
                        className="w-full p-3 border border-slate-200 rounded-lg text-slate-800 focus:ring-2 focus:ring-[#1A3D7C] outline-none"
                        onChange={e => setForm({...form, email: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Mensagem (Opcional)</label>
                    <textarea 
                      rows={3}
                      className="w-full p-3 border border-slate-200 rounded-lg text-slate-800 focus:ring-2 focus:ring-[#1A3D7C] outline-none resize-none"
                      onChange={e => setForm({...form, mensagem: e.target.value})}
                    ></textarea>
                  </div>
                  <button className="w-full bg-[#FFD23F] hover:bg-[#FFCA45] text-[#1A3D7C] font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <Send size={18} />
                    Solicitar Proposta de Patrocínio
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
