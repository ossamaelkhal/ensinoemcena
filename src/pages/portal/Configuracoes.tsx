import { useState } from 'react';
import { Database, CheckCircle, AlertTriangle } from 'lucide-react';
import { DataService } from '../../services/dataService';

export default function Configuracoes() {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleMigration = async () => {
    if (!confirm('Isso vai enviar os dados de exemplo para o banco de dados REAL. Continuar?')) return;
    
    setLoading(true);
    const result = await DataService.seedDatabase();
    setStatus(result);
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-[#1A3D7C] mb-8">Configurações do Sistema</h1>

      <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Database className="text-[#1A3D7C]" />
          Banco de Dados
        </h2>
        
        <div className="bg-blue-50 p-4 rounded-lg mb-6 text-sm text-blue-800">
          Use esta função para inicializar o banco de dados do Firebase com os espetáculos e produtos padrão.
          Faça isso apenas na primeira configuração.
        </div>

        {status && (
          <div className={`p-4 rounded-lg mb-6 flex items-center gap-2 ${status.includes('Sucesso') ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
            {status.includes('Sucesso') ? <CheckCircle size={20} /> : <AlertTriangle size={20} />}
            {status}
          </div>
        )}

        <button 
          onClick={handleMigration}
          disabled={loading}
          className="bg-[#1A3D7C] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#17386D] disabled:opacity-50 transition-all shadow-lg flex items-center gap-2"
        >
          {loading ? 'Migrando...' : 'Inicializar Banco de Dados (Seed)'}
        </button>
      </div>
    </div>
  );
}
