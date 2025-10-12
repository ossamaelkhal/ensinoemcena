import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Elenco from './pages/Elenco';
import Espetaculos from './pages/Espetaculos';
import EspetaculoDetalhes from './pages/EspetaculoDetalhes';
import Loja from './pages/Loja';
import Contato from './pages/Contato';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/elenco" element={<Elenco />} />
            <Route path="/espetaculos" element={<Espetaculos />} />
            <Route path="/espetaculos/:slug" element={<EspetaculoDetalhes />} />
            <Route path="/loja" element={<Loja />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
