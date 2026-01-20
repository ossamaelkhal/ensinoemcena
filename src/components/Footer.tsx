import { Mail, Phone, Facebook, Instagram, Youtube, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';

// Ícone TikTok SVG personalizado já que o Lucide pode não ter na versão antiga
const TikTokIcon = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Footer() {
  const location = window.location.pathname;
  const whatsappNumber = '5531996739694';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  // Não mostrar footer no portal ou LPs
  if (location.startsWith('/portal') || location.startsWith('/lp/')) return null;

  return (
    <footer className="bg-[#1A3D7C] text-white border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-[#FFD23F] font-bold text-xl mb-4">
              Ensino em Cena®
            </h3>
            <p className="text-sm text-gray-300 mb-6">
              Aqui, o aprender é um espetáculo.
            </p>
            <Link 
              to="/patrocine" 
              className="inline-flex items-center gap-2 text-xs font-bold text-[#1A3D7C] bg-[#FFD23F] px-3 py-1.5 rounded hover:bg-[#FFCA45] transition-colors"
            >
              <Handshake size={14} />
              Área do Investidor
            </Link>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-[#FFD23F] transition-colors">Home</Link></li>
              <li><Link to="/sobre" className="hover:text-[#FFD23F] transition-colors">Sobre</Link></li>
              <li><Link to="/elenco" className="hover:text-[#FFD23F] transition-colors">Elenco</Link></li>
              <li><Link to="/espetaculos" className="hover:text-[#FFD23F] transition-colors">Espetáculos</Link></li>
              <li><Link to="/loja" className="hover:text-[#FFD23F] transition-colors">Loja</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Fale Conosco</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-[#FFD23F]" />
                <a href="mailto:comunicacao@ensinoemcena.com.br" className="hover:text-[#FFD23F] transition-colors">
                  comunicacao@ensinoemcena.com.br
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-[#FFD23F]" />
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD23F] transition-colors">
                  (31) 99673-9694
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Siga-nos</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com/ensinoemcena" target="_blank" className="hover:text-[#FFD23F] transition-colors"><Facebook size={24} /></a>
              <a href="https://instagram.com/ensinoemcena" target="_blank" className="hover:text-[#FFD23F] transition-colors"><Instagram size={24} /></a>
              <a href="https://youtube.com/@ensinoemcena" target="_blank" className="hover:text-[#FFD23F] transition-colors"><Youtube size={24} /></a>
              <a href="https://www.tiktok.com/@ensinoemcenabh" target="_blank" className="hover:text-[#FFD23F] transition-colors"><TikTokIcon size={24} /></a>
            </div>
            <p className="mt-4 text-sm text-gray-400">@ensinoemcena</p>
            <p className="text-sm text-gray-400">TikTok: @ensinoemcenabh</p>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Ensino em Cena. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
