import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Lock } from 'lucide-react';

export default function AdminLogin() {
  const [pass, setPass] = useState('');
  const [error, setError] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(pass)) {
      navigate('/portal');
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1A3D7C]">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md text-center">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Lock className="text-[#1A3D7C]" size={32} />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Acesso Restrito</h1>
        <p className="text-gray-500 mb-6">Área exclusiva para gestores.</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="password" 
            placeholder="Senha de Acesso" 
            value={pass}
            onChange={e => setPass(e.target.value)}
            className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-[#1A3D7C] outline-none text-center text-lg"
          />
          {error && <p className="text-red-500 text-sm">Senha incorreta.</p>}
          
          <button className="w-full bg-[#FFD23F] text-[#1A3D7C] font-bold py-4 rounded-xl hover:bg-[#FFCA45] transition-colors">
            Entrar no Portal
          </button>
        </form>
      </div>
    </div>
  );
}
