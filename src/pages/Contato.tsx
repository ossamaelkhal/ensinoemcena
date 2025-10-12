import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Youtube } from 'lucide-react';

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

    const mensagem = `
*Nova mensagem do site - ${formData.tipo === 'agendamento' ? 'Agendamento' : 'Contato'}*

*Nome:* ${formData.nome}
*E-mail:* ${formData.email}
*Telefone:* ${formData.telefone}
${formData.escola ? `*Escola:* ${formData.escola}` : ''}

*Mensagem:*
${formData.mensagem}
    `.trim();

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`;

    setTimeout(() => {
      setEnviando(false);
      setSucesso(true);
      window.open(whatsappLink, '_blank');

      setTimeout(() => {
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          escola: '',
          mensagem: '',
          tipo: 'agendamento',
        });
        setSucesso(false);
      }, 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#1A3D7C] to-[#7A3EB1] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Entre em Contato</h1>
            <p className="text-xl text-gray-100">
              Estamos prontos para levar o espetáculo até sua escola!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#1A3D7C] mb-6">
                Preencha o formulário
              </h2>
              <p className="text-gray-600 mb-8">
                Escolha o tipo de contato e preencha os campos abaixo. Retornaremos o mais breve possível!
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="tipo" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tipo de Contato *
                  </label>
                  <select
                    id="tipo"
                    name="tipo"
                    value={formData.tipo}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7A3EB1] focus:border-transparent outline-none transition"
                  >
                    <option value="agendamento">Agendamento de Espetáculo</option>
                    <option value="informacao">Solicitação de Informações</option>
                    <option value="parceria">Proposta de Parceria</option>
                    <option value="outro">Outro Assunto</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="nome" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7A3EB1] focus:border-transparent outline-none transition"
                    placeholder="Seu nome"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7A3EB1] focus:border-transparent outline-none transition"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7A3EB1] focus:border-transparent outline-none transition"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="escola" className="block text-sm font-semibold text-gray-700 mb-2">
                    Escola / Instituição
                  </label>
                  <input
                    type="text"
                    id="escola"
                    name="escola"
                    value={formData.escola}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7A3EB1] focus:border-transparent outline-none transition"
                    placeholder="Nome da escola"
                  />
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7A3EB1] focus:border-transparent outline-none transition resize-none"
                    placeholder="Conte-nos o que você precisa..."
                  ></textarea>
                </div>

                {sucesso && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                    Mensagem enviada! Redirecionando para WhatsApp...
                  </div>
                )}

                <button
                  type="submit"
                  disabled={enviando}
                  className={`w-full py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center ${
                    enviando
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-[#1A3D7C] text-white hover:bg-[#17386D] transform hover:scale-105'
                  }`}
                >
                  {enviando ? (
                    'Enviando...'
                  ) : (
                    <>
                      <Send className="mr-2" size={20} />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#1A3D7C] mb-6">
                Outras formas de contato
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-[#FFD23F] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#1A3D7C]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A3D7C] mb-1">E-mail</h3>
                    <a
                      href="mailto:ensinoemcena@gmail.com"
                      className="text-gray-600 hover:text-[#7A3EB1] transition-colors"
                    >
                      ensinoemcena@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-[#7A3EB1] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A3D7C] mb-1">WhatsApp</h3>
                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#7A3EB1] transition-colors"
                    >
                      (31) 99187-3104
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-[#FF6B6B] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A3D7C] mb-1">Localização</h3>
                    <p className="text-gray-600">
                      Belo Horizonte, MG<br />
                      Atendemos todo o Brasil
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#7A3EB1] to-[#FF6B6B] rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Redes Sociais</h3>
                <p className="mb-6">Acompanhe nosso trabalho e novidades!</p>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com/ensinoemcena"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href="https://instagram.com/ensinoemcena"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://youtube.com/@ensinoemcena"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    aria-label="Youtube"
                  >
                    <Youtube size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#1A3D7C] mb-6">
              Horário de Atendimento
            </h2>
            <div className="bg-white rounded-xl shadow-md p-8">
              <p className="text-gray-700 mb-4">
                Segunda a Sexta: 9h às 18h<br />
                Sábado: 9h às 13h
              </p>
              <p className="text-sm text-gray-600">
                Respondemos todas as mensagens em até 24 horas úteis
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
