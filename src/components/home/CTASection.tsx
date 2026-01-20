import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute -left-20 top-20 w-64 h-64 bg-[#FFD23F]/20 rounded-full blur-3xl"></div>
        <div className="absolute -right-20 bottom-20 w-64 h-64 bg-[#7A3EB1]/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#1A3D7C] to-[#2a55a3] rounded-3xl p-10 md:p-16 shadow-2xl text-white relative overflow-hidden">
          
          <div className="absolute top-0 right-0 p-4 opacity-10">
             <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="20"/>
             </svg>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Pronto para transformar a educação na sua escola?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Junte-se a centenas de escolas que já levaram a magia do teatro pedagógico para seus alunos.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contato"
              className="bg-[#FFD23F] text-[#1A3D7C] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#FFCA45] hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-2"
            >
              Solicitar Orçamento Agora
            </Link>
            <a
              href="https://wa.me/5511999999999" // Replace with actual WhatsApp link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              Falar no WhatsApp
            </a>
          </div>
          
          <p className="mt-8 text-sm text-blue-200 opacity-80">
            Resposta em até 24 horas úteis. Sem compromisso.
          </p>
        </div>
      </div>
    </section>
  );
}
