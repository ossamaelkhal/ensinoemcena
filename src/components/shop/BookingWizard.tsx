import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, School, User, Sparkles, Calendar, Users, GraduationCap, ArrowRight, CheckCircle, MessageSquare } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';
import { CRMService } from '../../services/crmService'; // Alterado de DataService para CRMService

export default function BookingWizard() {
  const { isOpen, closeBooking } = useBooking();
  const [step, setStep] = useState(1);
  const [selection, setSelection] = useState<any>({
    perfil: '',
    motivo: '',
    faixaEtaria: '',
    tamanhoTurma: '',
    nome: '',
    escola: '',
    cargo: '',
    contato: ''
  });
  const [loading, setLoading] = useState(false);

  // Avança salvando o dado do passo atual
  const handleNext = (key: string, value: any) => {
    setSelection((prev: any) => ({ ...prev, [key]: value }));
    setStep(step + 1);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSelection({ ...selection, [e.target.name]: e.target.value });
  };

  const finishBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Utiliza o novo CRMService centralizado
    const isEmail = selection.contato.includes('@');
    await CRMService.addLead({
        nome: selection.nome,
        email: isEmail ? selection.contato : '',
        telefone: !isEmail ? selection.contato : '',
        instituicao: selection.escola,
        tipo: selection.perfil === 'escola' ? 'escola' : 'responsavel',
        interesse: `${selection.motivo} - ${selection.faixaEtaria}`,
        mensagem: `Lead via Wizard:\nCargo: ${selection.cargo}\nPlateia: ${selection.tamanhoTurma}\nMotivo: ${selection.motivo}`,
        origem: 'Assistente de Agendamento', // Adiciona a origem do lead
    });

    setTimeout(() => {
        setLoading(false);
        // Mensagem super estruturada para o comercial já saber tudo
        const msg = `*Novo Diagnóstico do Site* 🎭\n\n` +
                    `👤 *Nome:* ${selection.nome}\n` +
                    `🏫 *Instituição:* ${selection.escola} (${selection.cargo})\n` +
                    `🎯 *Objetivo:* ${selection.motivo}\n` +
                    `👶 *Público:* ${selection.faixaEtaria}\n` +
                    `👥 *Estimativa:* ${selection.tamanhoTurma} pessoas\n\n` +
                    `Olá! Gostaria de receber uma proposta personalizada para esse perfil.`;
                    
        window.open(`https://wa.me/5531996739694?text=${encodeURIComponent(msg)}`, '_blank');
        closeBooking();
        setStep(1); // Reset
        setSelection({}); 
    }, 1500);
  };

  if (!isOpen) return null;

  // Componentes visuais para as opções
  const OptionCard = ({ icon: Icon, title, subtitle, onClick, color = "blue" }: any) => (
    <button 
        onClick={onClick}
        className={`flex flex-col items-center p-5 border-2 border-gray-100 rounded-xl hover:border-[#1A3D7C] hover:bg-${color}-50 transition-all group w-full text-center h-full justify-center`}
    >
        <div className={`bg-${color}-100 p-3 rounded-full text-[#1A3D7C] mb-3 group-hover:scale-110 transition-transform`}>
            <Icon size={28} />
        </div>
        <span className="font-bold text-gray-700 text-sm md:text-base">{title}</span>
        {subtitle && <span className="text-xs text-gray-500 mt-1">{subtitle}</span>}
    </button>
  );

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-[#1A3D7C]/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden relative flex flex-col max-h-[90vh]"
        >
          {/* Header Progressivo */}
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <div className="flex items-center gap-3">
                <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className={`h-2 w-8 rounded-full transition-all ${i <= step ? 'bg-[#FFD23F]' : 'bg-gray-200'}`} />
                    ))}
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-2">
                    Etapa {step} de 5
                </span>
            </div>
            <button onClick={closeBooking} className="hover:bg-gray-200 p-2 rounded-full transition-colors text-gray-500">
              <X size={20} />
            </button>
          </div>

          {/* Conteúdo com Scroll se necessário */}
          <div className="p-6 md:p-10 overflow-y-auto flex-1">
            
            {/* PASSO 1: Perfil */}
            {step === 1 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
                    <div className="text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#1A3D7C] mb-2">Bem-vindo ao Ensino em Cena</h2>
                        <p className="text-gray-500">Para começarmos, qual o seu perfil?</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
                        <OptionCard 
                            icon={School} 
                            title="Represento uma Escola" 
                            subtitle="Gestor, Coordenação ou Professor"
                            onClick={() => handleNext('perfil', 'escola')} 
                        />
                        <OptionCard 
                            icon={User} 
                            title="Particular / Família" 
                            subtitle="Pais, Eventos ou Grupos"
                            onClick={() => handleNext('perfil', 'familia')} 
                            color="purple"
                        />
                    </div>
                </div>
            )}

            {/* PASSO 2: Motivo (Contexto) */}
            {step === 2 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-[#1A3D7C] mb-2">Qual o objetivo da ação?</h2>
                        <p className="text-gray-500">Queremos entender o contexto para sugerir o melhor formato.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            { id: 'projeto', label: 'Projeto Literário', icon: Sparkles },
                            { id: 'datas', label: 'Data Comemorativa', icon: Calendar },
                            { id: 'passeio', label: 'Passeio Escolar (Teatro)', icon: BusIcon }, // Ícone customizado abaixo
                            { id: 'familia', label: 'Dia da Família', icon: Users },
                            { id: 'pedagogico', label: 'Reforço Pedagógico', icon: GraduationCap },
                            { id: 'outro', label: 'Outro Motivo', icon: MessageSquare },
                        ].map(opt => (
                            <OptionCard 
                                key={opt.id}
                                icon={opt.icon}
                                title={opt.label}
                                onClick={() => handleNext('motivo', opt.label)}
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* PASSO 3: Público e Tamanho */}
            {step === 3 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-[#1A3D7C] mb-2">Quem será a plateia?</h2>
                        <p className="text-gray-500">Isso define a linguagem e a estrutura técnica necessária.</p>
                    </div>
                    
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-3">Faixa Etária Predominante</label>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                {['Infantil (2-5)', 'Fund. I (6-10)', 'Fund. II (11-14)', 'Misto'].map(age => (
                                    <button 
                                        key={age}
                                        onClick={() => setSelection({...selection, faixaEtaria: age})}
                                        className={`p-3 rounded-lg text-sm font-medium transition-all border ${selection.faixaEtaria === age ? 'bg-[#1A3D7C] text-white border-[#1A3D7C]' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}`}
                                    >
                                        {age}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-3">Estimativa de Público</label>
                            <div className="grid grid-cols-3 gap-2">
                                {['Até 50', '50 a 150', '+ de 150'].map(size => (
                                    <button 
                                        key={size}
                                        onClick={() => {
                                            if (selection.faixaEtaria) {
                                                setSelection({...selection, tamanhoTurma: size});
                                                setStep(4);
                                            } else {
                                                alert('Selecione a faixa etária primeiro!');
                                            }
                                        }}
                                        className={`p-4 rounded-xl border-2 border-dashed border-gray-300 hover:border-[#FFD23F] hover:bg-yellow-50 font-bold text-gray-600 transition-all`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* PASSO 4: Coleta de Dados (Formulário Humanizado) */}
            {step === 4 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500 max-w-md mx-auto">
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                            <CheckCircle size={32} />
                        </div>
                        <h2 className="text-2xl font-bold text-[#1A3D7C]">Quase lá!</h2>
                        <p className="text-gray-500">Para quem devemos enviar o orçamento detalhado?</p>
                    </div>

                    <form onSubmit={finishBooking} className="space-y-4">
                        <div className="group relative">
                            <User className="absolute left-3 top-3.5 text-gray-400 group-focus-within:text-[#1A3D7C]" size={20} />
                            <input 
                                required
                                name="nome"
                                type="text" 
                                placeholder="Seu Nome Completo"
                                className="w-full pl-10 p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1A3D7C] outline-none transition-all"
                                onChange={handleInput}
                            />
                        </div>

                        {selection.perfil === 'escola' && (
                            <div className="grid grid-cols-2 gap-4">
                                <div className="group relative">
                                    <School className="absolute left-3 top-3.5 text-gray-400 group-focus-within:text-[#1A3D7C]" size={20} />
                                    <input 
                                        required
                                        name="escola"
                                        type="text" 
                                        placeholder="Nome da Escola"
                                        className="w-full pl-10 p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1A3D7C] outline-none transition-all"
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="group relative">
                                    <GraduationCap className="absolute left-3 top-3.5 text-gray-400 group-focus-within:text-[#1A3D7C]" size={20} />
                                    <input 
                                        required
                                        name="cargo"
                                        type="text" 
                                        placeholder="Seu Cargo"
                                        className="w-full pl-10 p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1A3D7C] outline-none transition-all"
                                        onChange={handleInput}
                                    />
                                </div>
                            </div>
                        )}

                        <div className="group relative">
                            <MessageSquare className="absolute left-3 top-3.5 text-gray-400 group-focus-within:text-[#1A3D7C]" size={20} />
                            <input 
                                required
                                name="contato"
                                type="text" 
                                placeholder="WhatsApp ou E-mail Principal"
                                className="w-full pl-10 p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1A3D7C] outline-none transition-all"
                                onChange={handleInput}
                            />
                        </div>

                        <button 
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#1A3D7C] text-white font-bold py-4 rounded-xl hover:bg-[#17386D] transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
                        >
                            {loading ? 'Processando...' : 'Ver Proposta e Falar com Consultor'}
                            {!loading && <ArrowRight size={20} />}
                        </button>
                        
                        <p className="text-center text-xs text-gray-400">
                            Seus dados são usados apenas para o atendimento. Não enviamos spam.
                        </p>
                    </form>
                </div>
            )}

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// Ícone auxiliar para ônibus (Passeio)
const BusIcon = ({size, className}: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M8 6v6"/><path d="M15 6v6"/><path d="M2 12h19.6"/><path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"/><circle cx="7" cy="18" r="2"/><path d="M9 18h5"/><circle cx="16" cy="18" r="2"/></svg>
);
