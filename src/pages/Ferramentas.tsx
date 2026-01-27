import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Sparkles, Download, CheckCircle, BookOpen, FileText, Layers, Grid, Printer } from 'lucide-react';
import { DataService } from '../services/dataService';

export default function Ferramentas() {
  const [activeTab, setActiveTab] = useState<'ia' | 'recursos'>('ia');
  
  // Estado da IA
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ tema: '', ano: '1º Ano', email: '' });

  // Recursos Gratuitos (Mock)
  const recursos = [
    { id: 1, titulo: 'Alfabeto da Vila', tipo: 'Flashcards', img: '🅰️' },
    { id: 2, titulo: 'Máscaras dos Personagens', tipo: 'Para Colorir', img: '🎭' },
    { id: 3, titulo: 'Jogo da Memória', tipo: 'Atividade', img: '🧩' },
    { id: 4, titulo: 'Certificado de Leitor', tipo: 'Diploma', img: '📜' },
  ];

  const gerarPlano = async (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
    await DataService.saveLead({
        nome: 'Professor Criativo',
        email: formData.email,
        telefone: '',
        tipo: 'escola',
        interesse: 'ferramenta-ia',
        mensagem: `Gerou plano: ${formData.tema}`
    });
    setTimeout(() => setStep(3), 2500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Inspirador */}
      <section className="bg-[#1A3D7C] pt-20 pb-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Sala de recursos digitais</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Tecnologia e criatividade para facilitar sua rotina em sala de aula.
          </p>
          
          {/* Abas de Navegação */}
          <div className="flex justify-center mt-10 gap-4">
            <button 
              onClick={() => setActiveTab('ia')}
              className={`px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${activeTab === 'ia' ? 'bg-[#FFD23F] text-[#1A3D7C] shadow-lg transform scale-105' : 'bg-white/10 text-white hover:bg-white/20'}`}
            >
              <Brain size={20} />
              IA planejadora
            </button>
            <button 
              onClick={() => setActiveTab('recursos')}
              className={`px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${activeTab === 'recursos' ? 'bg-[#FFD23F] text-[#1A3D7C] shadow-lg transform scale-105' : 'bg-white/10 text-white hover:bg-white/20'}`}
            >
              <Grid size={20} />
              Materiais para imprimir
            </button>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="container mx-auto px-4 -mt-20 relative z-20 pb-20">
        <AnimatePresence mode='wait'>
          
          {/* ABA 1: IA PLANEJADORA */}
          {activeTab === 'ia' && (
            <motion.div 
              key="ia"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
            >
              {step === 1 && (
                <form onSubmit={gerarPlano} className="p-8 md:p-12 space-y-6">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-800">Planeje sua aula em segundos</h2>
                        <p className="text-gray-500">Nossa IA estrutura objetivos BNCC e atividades lúdicas para você.</p>
                    </div>
                    <div className="space-y-4">
                        <input 
                            required placeholder="Qual o tema? (Ex: Ciclo da Água)" 
                            className="w-full p-4 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-[#1A3D7C] outline-none"
                            onChange={e => setFormData({...formData, tema: e.target.value})}
                        />
                        <select 
                            className="w-full p-4 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-[#1A3D7C] outline-none"
                            onChange={e => setFormData({...formData, ano: e.target.value})}
                        >
                            <option>Educação Infantil</option>
                            <option>Fundamental I</option>
                        </select>
                        <input 
                            required type="email" placeholder="Seu e-mail para receber o PDF" 
                            className="w-full p-4 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-[#1A3D7C] outline-none"
                            onChange={e => setFormData({...formData, email: e.target.value})}
                        />
                    </div>
                    <button type="submit" className="w-full bg-[#1A3D7C] text-white font-bold py-4 rounded-xl hover:bg-[#17386D] flex items-center justify-center gap-2">
                        <Sparkles size={20} /> Gerar plano mágico
                    </button>
                </form>
              )}

              {step === 2 && (
                <div className="p-12 text-center min-h-[400px] flex flex-col items-center justify-center">
                    <div className="w-16 h-16 border-4 border-[#FFD23F] border-t-transparent rounded-full animate-spin mb-6"></div>
                    <h3 className="text-xl font-bold text-gray-800">Consultando a Base Nacional...</h3>
                    <p className="text-gray-500">Criando conexões criativas para {formData.tema}...</p>
                </div>
              )}

              {step === 3 && (
                <div className="p-8 md:p-12">
                    <div className="flex items-center gap-2 mb-6 text-green-600 font-bold bg-green-50 p-3 rounded-lg w-fit">
                        <CheckCircle size={20} /> Plano gerado com sucesso!
                    </div>
                    <h2 className="text-2xl font-bold text-[#1A3D7C] mb-2">Aula: {formData.tema}</h2>
                    <p className="text-gray-500 mb-6">Sugestão lúdica baseada no teatro pedagógico.</p>
                    
                    <div className="space-y-4 mb-8">
                        <div className="p-4 border border-blue-100 bg-blue-50 rounded-lg">
                            <h4 className="font-bold text-[#1A3D7C] text-sm mb-1">Atividade: "O Teatro do {formData.tema}"</h4>
                            <p className="text-sm text-gray-700">Divida a turma em grupos e peça para criarem uma cena onde o tema é o protagonista. Use materiais recicláveis.</p>
                        </div>
                        <div className="p-4 border border-gray-200 bg-gray-50 rounded-lg">
                            <h4 className="font-bold text-gray-700 text-sm mb-1">Competências BNCC</h4>
                            <p className="text-sm text-gray-600 font-mono">EF15LP03, EF01HI08</p>
                        </div>
                    </div>

                    <div className="bg-[#FFD23F]/10 border border-[#FFD23F] p-6 rounded-xl text-center">
                        <p className="text-[#1A3D7C] font-bold mb-2">Quer levar essa experiência para o palco?</p>
                        <p className="text-sm text-gray-600 mb-4">A Ensino em Cena tem um espetáculo profissional sobre este universo.</p>
                        <a href="/espetaculos" className="inline-block bg-[#1A3D7C] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#17386D]">Ver catálogo</a>
                    </div>
                </div>
              )}
            </motion.div>
          )}

          {/* ABA 2: MATERIAIS PARA IMPRIMIR */}
          {activeTab === 'recursos' && (
            <motion.div 
              key="recursos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {recursos.map((item) => (
                        <div key={item.id} className="bg-white p-6 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform border border-gray-100">
                            <div className="text-6xl mb-4 text-center">{item.img}</div>
                            <h3 className="text-lg font-bold text-gray-800 text-center mb-1">{item.titulo}</h3>
                            <p className="text-xs text-gray-400 text-center uppercase font-bold mb-4">{item.tipo}</p>
                            <button className="w-full border-2 border-[#1A3D7C] text-[#1A3D7C] font-bold py-2 rounded-lg hover:bg-[#1A3D7C] hover:text-white transition-colors flex items-center justify-center gap-2">
                                <Printer size={16} /> Baixar PDF
                            </button>
                        </div>
                    ))}
                    
                    <div className="bg-gradient-to-br from-[#7A3EB1] to-[#5a2d82] p-6 rounded-2xl shadow-lg text-white flex flex-col justify-center text-center">
                        <h3 className="font-bold text-lg mb-2">Quer mais?</h3>
                        <p className="text-sm text-purple-200 mb-4">Assine nossa newsletter e receba atividades mensais.</p>
                        <button className="bg-[#FFD23F] text-[#1A3D7C] font-bold py-2 rounded-lg hover:bg-[#FFCA45]">Cadastrar grátis</button>
                    </div>
                </div>
            </motion.div>
          )}

        </AnimatePresence>
      </section>
    </div>
  );
}
