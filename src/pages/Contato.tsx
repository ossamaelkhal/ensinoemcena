import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Youtube } from 'lucide-react';
import { CRMService } from '../services/crmService'; // Alterado de DataService para CRMService

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    escola: '',
    mensagem: '',
    tipo: 'agendamento',
  });

  const [enviando, setEnviando] = useState(false);
  const [sucesso, setSucesso] = useState(false);

  const whatsappNumber = '5531991873104';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);

    // Utiliza o novo CRMService centralizado
    const newLeadId = await CRMService.addLead({
        nome: formData.nome,
        email: formData.email,
        telefone: formData.telefone,
        instituicao: formData.escola,
        tipo: formData.escola ? 'escola' : 'responsavel', // Lógica para definir o tipo
        interesse: formData.tipo,
        mensagem: formData.mensagem,
        origem: 'Formulário de Contato', // Adiciona a origem do lead
    });

    if (!newLeadId) {
        console.warn('Não foi possível salvar o lead, mas prosseguindo para WhatsApp...');
    }

    // Preparar mensagem do WhatsApp
    const mensagemZap = `
*Nova mensagem do site - ${formData.tipo === 'agendamento' ? 'Agendamento' : 'Contato'}*

*Nome:* ${formData.nome}
*E-mail:* ${formData.email}
*Telefone:* ${formData.telefone}
${formData.escola ? `*Escola:* ${formData.escola}` : ''}

*Mensagem:*
${formData.mensagem}
    `.trim();

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagemZap)}`;

    // Feedback visual e redirecionamento
    setEnviando(false);
    setSucesso(true);
    
    // Abre o WhatsApp após breve delay para o usuário ver o sucesso
    setTimeout(() => {
        window.open(whatsappLink, '_blank');
        
        // Limpar formulário
        setFormData({
            nome: '',
            email: '',
            telefone: '',
            escola: '',
            mensagem: '',
            tipo: 'agendamento',
        });
        setSucesso(false);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#1A3D7C] to-[#7A3EB1] text-white py-20 relative overflow-hidden">
        {/* Background decorativo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FFD23F]/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-6">Entre em Contato</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
             Quer levar a Ensino em Cena para sua escola? Estamos prontos para criar uma experiência inesquecível.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Coluna do Formulário */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-[#1A3D7C] mb-2">
                Fale Conosco
              </h2>
              <p className="text-gray-600 mb-8">
                Preencha o formulário abaixo e nós redirecionaremos você para um atendimento personalizado no WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="tipo" className="block text-sm font-bold text-gray-700 mb-2">
                    Assunto *
                  </label>
                  <div className="relative">
                    <select
                        id="tipo"
                        name="tipo"
                        value={formData.tipo}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A3D7C] focus:border-transparent outline-none transition appearance-none bg-white"
                    >
                        <option value="agendamento">Agendar Espetáculo</option>
                        <option value="orcamento">Solicitar Orçamento</option>
                        <option value="informacao">Dúvidas Pedagógicas</option>
                        <option value="parceria">Parcerias</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="nome" className="block text-sm font-bold text-gray-700 mb-2">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A3D7C] focus:border-transparent outline-none transition"
                    placeholder="Como gostaria de ser chamado?"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A3D7C] focus:border-transparent outline-none transition"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefone" className="block text-sm font-bold text-gray-700 mb-2">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A3D7C] focus:border-transparent outline-none transition"
                      placeholder="(DD) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="escola" className="block text-sm font-bold text-gray-700 mb-2">
                    Escola / Instituição
                  </label>
                  <input
                    type="text"
                    id="escola"
                    name="escola"
                    value={formData.escola}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A3D7C] focus:border-transparent outline-none transition"
                    placeholder="Nome da escola (opcional)"
                  />
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-bold text-gray-700 mb-2">
                    Como podemos ajudar? *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A3D7C] focus:border-transparent outline-none transition resize-none"
                    placeholder="Conte detalhes sobre sua necessidade (número de alunos, datas preferidas...)"
                  ></textarea>
                </div>

                {sucesso && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-4 rounded-xl flex items-center gap-3 animate-pulse">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div>
                        <p className="font-bold">Mensagem Recebida!</p>
                        <p className="text-sm">Abrindo WhatsApp para finalizar...</p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={enviando}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2 ${
                    enviando
                      ? 'bg-gray-400 cursor-not-allowed text-gray-100'
                      : 'bg-[#FFD23F] text-[#1A3D7C] hover:bg-[#FFCA45] hover:shadow-xl hover:-translate-y-1'
                  }`}
                >
                  {enviando ? 'Enviando...' : (
                    <>
                      <Send size={20} />
                      Iniciar Conversa
                    </>
                  )}
                </button>
                
                <p className="text-center text-xs text-gray-400 mt-4">
                    Ao enviar, você concorda em ser contatado pela nossa equipe.
                </p>
              </form>
            </div>

            {/* Coluna de Informações */}
            <div className="lg:pl-8 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-[#1A3D7C] mb-6">Canais Diretos</h3>
                <div className="space-y-4">
                    <a href={`https://wa.me/${whatsappNumber}`} target="_blank" className="flex items-center p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors group cursor-pointer border border-green-100">
                        <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mr-4 shadow-md group-hover:scale-110 transition-transform">
                            <Phone size={20} />
                        </div>
                        <div>
                            <p className="text-xs text-green-600 font-bold uppercase">WhatsApp (Principal)</p>
                            <p className="text-lg font-bold text-gray-800">(31) 99187-3104</p>
                        </div>
                    </a>

                    <a href="mailto:ensinoemcena@gmail.com" className="flex items-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors group cursor-pointer border border-blue-100">
                        <div className="w-12 h-12 bg-[#1A3D7C] text-white rounded-full flex items-center justify-center mr-4 shadow-md group-hover:scale-110 transition-transform">
                            <Mail size={20} />
                        </div>
                        <div>
                            <p className="text-xs text-[#1A3D7C] font-bold uppercase">E-mail</p>
                            <p className="text-lg font-bold text-gray-800">ensinoemcena@gmail.com</p>
                        </div>
                    </a>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#1A3D7C] mb-6">Onde Estamos</h3>
                 <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <div className="flex items-start gap-4">
                         <div className="mt-1 text-[#FF6B6B]">
                            <MapPin size={24} />
                         </div>
                         <div>
                            <p className="font-bold text-gray-800 text-lg">Belo Horizonte, MG</p>
                            <p className="text-gray-600 mt-1">
                                Nossa sede administrativa está em BH, mas nossa trupe viaja por todo o Brasil levando arte e educação.
                            </p>
                         </div>
                    </div>
                 </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#1A3D7C] mb-6">Siga a Trupe</h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/ensinoemcena"
                    target="_blank"
                    className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl flex items-center justify-center shadow-lg hover:shadow-purple-500/30 hover:-translate-y-1 transition-all"
                  >
                    <Instagram size={28} />
                  </a>
                  <a
                    href="https://facebook.com/ensinoemcena"
                    target="_blank"
                    className="w-14 h-14 bg-[#1877F2] text-white rounded-2xl flex items-center justify-center shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 transition-all"
                  >
                    <Facebook size={28} />
                  </a>
                  <a
                    href="https://youtube.com/@ensinoemcena"
                    target="_blank"
                    className="w-14 h-14 bg-[#FF0000] text-white rounded-2xl flex items-center justify-center shadow-lg hover:shadow-red-500/30 hover:-translate-y-1 transition-all"
                  >
                    <Youtube size={28} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
