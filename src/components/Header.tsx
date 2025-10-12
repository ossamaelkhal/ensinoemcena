import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Elenco', path: '/elenco' },
    { name: 'Espetáculos', path: '/espetaculos' },
    { name: 'Loja', path: '/loja' },
    { name: 'Contato', path: '/contato' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-[#1A3D7C] text-white sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-[#FFD23F] font-bold text-2xl">
              Ensino em Cena
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-[#FFD23F] ${
                  isActive(item.path) ? 'text-[#FFD23F]' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contato"
              className="bg-[#FFD23F] text-[#1A3D7C] px-4 py-2 rounded-lg font-semibold hover:bg-[#FFCA45] transition-colors"
            >
              Agende para sua escola
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 px-4 rounded transition-colors ${
                  isActive(item.path)
                    ? 'bg-[#FFD23F] text-[#1A3D7C]'
                    : 'text-white hover:bg-[#1A3D7C]/50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contato"
              onClick={() => setIsOpen(false)}
              className="block bg-[#FFD23F] text-[#1A3D7C] px-4 py-2 rounded-lg font-semibold text-center hover:bg-[#FFCA45] transition-colors"
            >
              Agende para sua escola
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
