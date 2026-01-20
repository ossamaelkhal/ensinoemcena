import { Bot, Sparkles, Send, MessageSquare, RefreshCw, User, School, Search } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DataService } from '../../services/dataService';
import { Espetaculo } from '../../types/schema';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  type?: 'text' | 'product-card';
  product?: Espetaculo;
}

export default function PlataformaTeaser() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Olá! Sou a assistente virtual da Ensino em Cena. 🎭", sender: 'bot' },
    { id: 2, text: "Posso recomendar o espetáculo ideal para sua turma. Sobre o que você quer trabalhar? (Ex: Alfabetização, Valores, Inglês...)", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [catalogo, setCatalogo] = useState<Espetaculo[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    DataService.getEspetaculos().then(data => setCatalogo(data));
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const processBotResponse = async (userText: string) => {
    setIsTyping(true);
    const lowerInput = userText.toLowerCase();
    
    // Simula "pensamento"
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Busca Inteligente no Catálogo
    const matches = catalogo.filter(e => 
      e.titulo.toLowerCase().includes(lowerInput) || 
      e.temas.some(t => t.toLowerCase().includes(lowerInput)) ||
      e.sinopseCurta.toLowerCase().includes(lowerInput) ||
      e.objetivos?.some(o => o.toLowerCase().includes(lowerInput))
    );

    let newMessages: Message[] = [];

    if (matches.length > 0) {
        newMessages.push({ 
            id: Date.now(), 
            text: `Encontrei uma opção excelente para trabalhar "${userText}":`, 
            sender: 'bot' 
        });
        
        // Mostra o melhor match
        newMessages.push({
            id: Date.now() + 1,
            text: "",
            sender: 'bot',
            type: 'product-card',
            product: matches[0]
        });
        
        if (matches.length > 1) {
             newMessages.push({ 
                id: Date.now() + 2, 
                text: `Também temos outras ${matches.length - 1} opções relacionadas.`, 
                sender: 'bot' 
            });
        }
    } else if (lowerInput.includes('preço') || lowerInput.includes('quanto') || lowerInput.includes('orçamento')) {
        newMessages.push({ 
            id: Date.now(), 
            text: "Para orçamentos, preciso saber o número de alunos e a localização. Clique em 'Solicitar Orçamento' no topo para falar com um consultor.", 
            sender: 'bot' 
        });
    } else if (lowerInput.includes('ola') || lowerInput.includes('oi')) {
         newMessages.push({ 
            id: Date.now(), 
            text: "Olá! Como posso ajudar sua escola hoje?", 
            sender: 'bot' 
        });
    } else {
        newMessages.push({ 
            id: Date.now(), 
            text: "Não encontrei um espetáculo específico para isso no meu banco de dados atual, mas criamos projetos personalizados! Quer falar com a direção artística?", 
            sender: 'bot' 
        });
    }

    setMessages(prev => [...prev, ...newMessages]);
    setIsTyping(false);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg: Message = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    processBotResponse(userMsg.text);
  };

  const quickAction = (text: string) => {
      const userMsg: Message = { id: Date.now(), text: text, sender: 'user' };
      setMessages(prev => [...prev, userMsg]);
      processBotResponse(text);
  };

  return (
    <section className="py-24 bg-[#0f172a] text-white overflow-hidden relative border-t border-white/5">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#1A3D7C]/30 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FFD23F]/20 to-[#FFD23F]/5 border border-[#FFD23F]/30 rounded-full text-[#FFD23F] font-bold text-sm">
              <Sparkles size={16} className="animate-pulse" />
              <span>Tecnologia Educacional</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Encontre o espetáculo ideal <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD23F] to-[#FF6B6B]">em segundos</span>
            </h2>
            
            <p className="text-lg text-gray-400 leading-relaxed">
              Nossa Inteligência Artificial conhece a BNCC e todo o nosso repertório. Diga qual tema você quer trabalhar em sala de aula e receba a recomendação pedagógica perfeita.
            </p>

            <div className="flex flex-wrap gap-3">
                {['Alfabetização', 'Inglês', 'Bullying', 'História'].map(tag => (
                    <button 
                        key={tag}
                        onClick={() => quickAction(tag)}
                        className="bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-lg text-sm text-gray-300 transition-colors"
                    >
                        {tag}
                    </button>
                ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="relative mx-auto max-w-md group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#FFD23F] to-[#7A3EB1] rounded-[2.6rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              
              <div className="bg-[#111827] border-[6px] border-[#1f2937] rounded-[2.5rem] shadow-2xl overflow-hidden relative z-10 h-[600px] flex flex-col">
                <div className="bg-[#1A3D7C] p-4 flex items-center justify-between shadow-md z-20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 border-[#FFD23F] shadow-lg">
                      <Bot size={24} className="text-[#1A3D7C]" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">IA Pedagógica</p>
                      <p className="text-[10px] text-green-300 flex items-center gap-1 font-medium">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                        Online
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setMessages([messages[0], messages[1]])} 
                    className="text-white/70 hover:text-white transition-colors p-2"
                    title="Reiniciar Conversa"
                  >
                    <RefreshCw size={18} />
                  </button>
                </div>

                <div 
                  ref={scrollRef}
                  className="flex-1 bg-[#f3f4f6] p-4 overflow-y-auto space-y-4 scroll-smooth"
                >
                  <AnimatePresence>
                    {messages.map((msg) => (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        {msg.type === 'product-card' && msg.product ? (
                            <motion.div 
                                initial={{ scale: 0.9 }} animate={{ scale: 1 }}
                                className="max-w-[90%] bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 cursor-pointer hover:shadow-xl transition-shadow"
                            >
                                <img src={msg.product.imagemCapa} alt={msg.product.titulo} className="w-full h-32 object-cover" />
                                <div className="p-4">
                                    <div className="flex justify-between items-start mb-1">
                                        <h4 className="font-bold text-[#1A3D7C] text-sm">{msg.product.titulo}</h4>
                                        <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">BNCC</span>
                                    </div>
                                    <p className="text-xs text-gray-500 mb-2 line-clamp-2">{msg.product.sinopseCurta}</p>
                                    <div className="flex flex-wrap gap-1 mb-3">
                                        {msg.product.temas.slice(0,3).map(t => (
                                            <span key={t} className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded border border-gray-200">{t}</span>
                                        ))}
                                    </div>
                                    <a href={`/espetaculos/${msg.product.slug}`} className="block w-full bg-[#1A3D7C] text-white text-center text-xs font-bold py-2 rounded hover:bg-[#17386D] transition-colors">
                                        Ver Detalhes
                                    </a>
                                </div>
                            </motion.div>
                        ) : (
                            <div className={`
                            max-w-[85%] p-3.5 rounded-2xl text-sm shadow-sm leading-relaxed
                            ${msg.sender === 'user' 
                                ? 'bg-[#1A3D7C] text-white rounded-tr-none' 
                                : 'bg-white text-gray-800 rounded-tl-none border border-gray-200'}
                            `}>
                            {msg.text}
                            </div>
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  
                  {isTyping && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                      <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-200 shadow-sm flex gap-1.5 items-center">
                        <span className="w-2 h-2 bg-[#7A3EB1] rounded-full animate-bounce"></span>
                        <span className="w-2 h-2 bg-[#7A3EB1] rounded-full animate-bounce delay-75"></span>
                        <span className="w-2 h-2 bg-[#7A3EB1] rounded-full animate-bounce delay-150"></span>
                      </div>
                    </motion.div>
                  )}
                </div>

                <div className="p-3 bg-white border-t border-gray-200">
                    <form onSubmit={handleSend} className="flex gap-2 items-center">
                      <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Digite um tema..."
                        className="flex-1 bg-gray-100 text-gray-800 px-4 py-3 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3D7C] transition-all"
                      />
                      <button 
                        type="submit"
                        disabled={!input.trim() || isTyping}
                        className="w-11 h-11 bg-gradient-to-r from-[#1A3D7C] to-[#7A3EB1] text-white rounded-full flex items-center justify-center hover:shadow-lg transition-all disabled:opacity-50"
                      >
                        <Send size={18} />
                      </button>
                    </form>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
