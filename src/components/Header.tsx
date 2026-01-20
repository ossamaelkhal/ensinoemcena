import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ShoppingCart, UserCircle, Wrench } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { useCart } from '../context/CartContext'; // Importando Carrinho
import { LogoPrincipal } from './BrandElements';

const NavLinkItem = ({ to, children }: { to: string, children: React.ReactNode }) => (
  <NavLink 
    to={to} 
    className={({ isActive }) => 
      `font-bold transition-colors pb-2 ${isActive ? 'text-[#FFD23F] border-b-2 border-[#FFD23F]' : 'text-white hover:text-[#FFD23F]'}`
    }
  >
    {children}
  </NavLink>
);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { openBooking } = useBooking();
  const { toggleCart, cartCount } = useCart(); // Usando Carrinho

  const navigation = [
    { name: 'Projeto de Leitura', path: '/projeto-leitura' },
    { name: 'Espetáculos', path: '/espetaculos' },
    { name: 'Ferramentas', path: '/ferramentas', highlight: true },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Elenco', path: '/elenco' },
    { name: 'Blog', path: '/blog' },
    { name: 'Loja', path: '/loja' },
  ];

  // Removendo a lógica que escondia o header em certas páginas para evitar confusão "portal sumiu"
  // Mas mantendo para /login e /portal/* para não quebrar o layout admin
  if (location.pathname.includes('/login') || location.pathname.startsWith('/portal')) return null;

  return (
    <header className="bg-[#1A3D7C]/95 backdrop-blur-md sticky top-0 z-50 shadow-lg border-b border-white/10">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo - Ajustado para não distorcer e ter margem */}
          <Link to="/" className="flex-shrink-0 mr-8">
            <LogoPrincipal className="h-12 w-auto object-contain hover:scale-105 transition-transform" />
          </Link>

          {/* Menu Desktop - Melhorado espaçamento e alinhamento */}
          <div className="hidden xl:flex items-center justify-end flex-1 gap-5">
            <div className="flex items-center gap-5">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-semibold whitespace-nowrap transition-all hover:text-[#FFD23F] flex items-center gap-1.5 ${
                    (location.pathname === item.path) ? 'text-[#FFD23F]' : 'text-gray-100'
                  } ${item.highlight ? 'bg-white/10 px-4 py-2 rounded-full border border-white/20 hover:bg-white/20' : ''}`}
                >
                  {item.highlight && <Wrench size={14} />}
                  {item.name}
                </Link>
              ))}
            </div>
            
            <div className="h-8 w-px bg-white/20 mx-2"></div>

            {/* Ações Direitas - Carrinho e Portal */}
            <div className="flex items-center gap-4">
              <button onClick={toggleCart} className="relative text-white hover:text-[#FFD23F] transition-colors p-2 hover:bg-white/10 rounded-full">
                <ShoppingCart size={22} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#FF6B6B] text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-[#1A3D7C]">
                    {cartCount}
                  </span>
                )}
              </button>

              <Link
                to="/portal"
                className="flex items-center gap-2 text-sm font-semibold text-white hover:text-[#FFD23F] transition-colors hover:bg-white/10 px-3 py-2 rounded-lg whitespace-nowrap"
                title="Área do Professor"
              >
                <UserCircle size={22} />
                <span className="hidden 2xl:inline">Portal</span>
              </Link>
            </div>

            {/* Botão de Ação Principal (CTA) */}
            <button
              onClick={openBooking}
              className="ml-4 bg-[#FFD23F] text-[#1A3D7C] px-6 py-2.5 rounded-full font-bold hover:bg-[#FFCA45] transition-all shadow-lg hover:shadow-[#FFD23F]/20 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
            >
              Agende agora
            </button>
          </div>

          {/* Botão Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu Mobile - Dropdown */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="xl:hidden mt-4 pb-4 space-y-2 border-t border-white/10 pt-4"
          >
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 rounded-xl font-medium transition-colors ${
                  (location.pathname === item.path)
                    ? 'bg-[#FFD23F] text-[#1A3D7C]'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-white/10">
                <Link
                  to="/portal"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 text-white bg-white/5 py-3 rounded-xl hover:bg-white/10 font-medium"
                >
                  <UserCircle size={20} />
                  Portal
                </Link>
                <button 
                  onClick={() => { setIsOpen(false); toggleCart(); }} 
                  className="flex items-center justify-center gap-2 text-white bg-white/5 py-3 rounded-xl hover:bg-white/10 font-medium"
                >
                    <ShoppingCart size={20} />
                    Carrinho ({cartCount})
                </button>
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                openBooking();
              }}
              className="w-full block bg-[#FFD23F] text-[#1A3D7C] px-4 py-3 rounded-xl font-bold text-center hover:bg-[#FFCA45] transition-colors mt-4 shadow-lg"
            >
              Agende para sua escola
            </button>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
