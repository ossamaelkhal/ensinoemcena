import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layouts
import PortalLayout from '../layouts/PortalLayout';

// Pages
import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';
import Login from '../pages/admin/Login'; 
import Espetaculos from '../pages/Espetaculos';
import EspetaculoDetalhes from '../pages/EspetaculoDetalhes';
import Palestras from '../pages/Palestras';
import Loja from '../pages/Loja';
import Checkout from '../pages/Checkout';
import Ferramentas from '../pages/Ferramentas';
import Patrocine from '../pages/Patrocine';
import ParaEscolas from '../pages/ParaEscolas';
import ParaEducadores from '../pages/ParaEducadores';
import Elenco from '../pages/Elenco';
import ProjetoLeitura from '../pages/ProjetoLeitura';
import Blog from '../pages/Blog';
import BlogPostDetalhes from '../pages/BlogPostDetalhes';

// Portal (Dashboard)
import Dashboard from '../pages/portal/Dashboard';
import CRM from '../pages/portal/CRM';
import Configuracoes from '../pages/portal/Configuracoes';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Rotas Públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/espetaculos" element={<Espetaculos />} />
        <Route path="/espetaculos/:slug" element={<EspetaculoDetalhes />} />
        <Route path="/palestras" element={<Palestras />} />
        <Route path="/loja" element={<Loja />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/ferramentas" element={<Ferramentas />} />
        <Route path="/patrocine" element={<Patrocine />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/login" element={<Login />} />
        <Route path="/para-escolas" element={<ParaEscolas />} />
        <Route path="/para-educadores" element={<ParaEducadores />} />
        <Route path="/elenco" element={<Elenco />} />
        <Route path="/projeto-leitura" element={<ProjetoLeitura />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPostDetalhes />} />

        {/* Rota do Portal (protegida) */}
        <Route path="/portal" element={<PortalLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="crm" element={<CRM />} />
          <Route path="configuracoes" element={<Configuracoes />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
