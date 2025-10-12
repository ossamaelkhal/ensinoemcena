import { Mail, Phone, Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const whatsappNumber = '5531991873104';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className="bg-[#1A3D7C] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-[#FFD23F] font-bold text-xl mb-4">
              Ensino em Cena
            </h3>
            <p className="text-sm text-gray-300">
              Onde o aprendizado vira espetáculo e o espetáculo vira aprendizado.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-[#FFD23F] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="hover:text-[#FFD23F] transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/elenco" className="hover:text-[#FFD23F] transition-colors">
                  Elenco
                </Link>
              </li>
              <li>
                <Link to="/espetaculos" className="hover:text-[#FFD23F] transition-colors">
                  Espetáculos
                </Link>
              </li>
              <li>
                <Link to="/loja" className="hover:text-[#FFD23F] transition-colors">
                  Loja
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-[#FFD23F]" />
                <a
                  href="mailto:ensinoemcena@gmail.com"
                  className="hover:text-[#FFD23F] transition-colors"
                >
                  ensinoemcena@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-[#FFD23F]" />
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFD23F] transition-colors"
                >
                  (31) 99187-3104
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/ensinoemcena"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFD23F] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://instagram.com/ensinoemcena"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFD23F] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://youtube.com/@ensinoemcena"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFD23F] transition-colors"
                aria-label="Youtube"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>
            Ensino em Cena® | ensinoemcena@gmail.com | WhatsApp: (31) 99187-3104
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} Ensino em Cena. Todos os direitos reservados.
          </p>
          <p className="mt-1 text-xs">
            Marca registrada no INPI. Protegido pela Lei de Direitos Autorais (Lei nº 9.610/98).
          </p>
        </div>
      </div>
    </footer>
  );
}
