import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, DollarSign, Calendar, TrendingUp, AlertCircle, ShoppingBag, PieChart as PieChartIcon } from 'lucide-react';
import { DataService } from '../../services/dataService';
import { Lead } from '../../types/schema';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export default function Dashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  const stats = [
    { title: 'Leads Totais', value: leads.length, icon: Users, color: 'text-blue-600', bg: 'bg-blue-100' },
    { title: 'Pipeline Estimado', value: 'R$ 45.200', icon: DollarSign, color: 'text-green-600', bg: 'bg-green-100' },
    { title: 'Agendamentos', value: '12', icon: Calendar, color: 'text-purple-600', bg: 'bg-purple-100' },
    { title: 'Conversão', value: '18%', icon: TrendingUp, color: 'text-orange-600', bg: 'bg-orange-100' },
  ];

  // Dados para os Gráficos (Simulação Inteligente baseada nos leads)
  const dataInteresse = [
    { name: 'Vila da Fonética', value: 40 },
    { name: 'Português com Classe', value: 30 },
    { name: 'Tuco', value: 20 },
    { name: 'Palestras', value: 10 },
  ];

  const dataOrigem = [
    { name: 'Site (Orgânico)', value: 65 },
    { name: 'Indicação', value: 25 },
    { name: 'Instagram', value: 10 },
  ];

  const COLORS = ['#1A3D7C', '#7A3EB1', '#FFD23F', '#FF6B6B'];

  useEffect(() => {
    // Em um cenário real, buscaríamos do CRMService e processaríamos os dados
    const loadData = async () => {
        // Mock leads para visualização imediata
        setLeads([
            { nome: 'Escola Pequeno Príncipe', tipo: 'escola', interesse: 'Vila da Fonética', status: 'novo', dataCriacao: new Date(), email: '', telefone: '', mensagem: '' },
            { nome: 'Maria Silva', tipo: 'responsavel', interesse: 'Livro Português', status: 'qualificado', dataCriacao: new Date(), email: '', telefone: '', mensagem: '' },
            { nome: 'Colégio Santo Agostinho', tipo: 'escola', interesse: 'Palestra Educadores', status: 'em_negociacao', dataCriacao: new Date(), email: '', telefone: '', mensagem: '' },
        ] as Lead[]);
        setLoading(false);
    };
    loadData();
  }, []);

  return (
    <div className="space-y-8 p-2">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-[#1A3D7C]">Inteligência de Negócio</h1>
          <p className="text-gray-500">Visão estratégica da Ensino em Cena.</p>
        </div>
        <Link to="/" className="text-sm text-[#1A3D7C] hover:underline">Ir para o site</Link>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4"
          >
            <div className={`p-4 rounded-xl ${stat.bg} ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">{stat.title}</p>
              <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Gráfico de Interesses */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
            <PieChartIcon size={20} className="text-[#1A3D7C]" />
            Demanda por Produto
          </h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dataInteresse}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tick={{fontSize: 12}} axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip cursor={{fill: '#f3f4f6'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}} />
                <Bar dataKey="value" fill="#1A3D7C" radius={[4, 4, 0, 0]}>
                    {dataInteresse.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Gráfico de Origem */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 mb-6">Origem dos Leads</h3>
          <div className="h-[300px] w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={dataOrigem}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {dataOrigem.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36}/>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Lista de Leads Recentes */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-800">Últimas Oportunidades</h2>
          <Link to="/portal/crm" className="text-sm text-[#1A3D7C] font-bold hover:underline">Gerenciar Pipeline →</Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
              <tr>
                <th className="p-4">Cliente</th>
                <th className="p-4">Interesse</th>
                <th className="p-4">Status</th>
                <th className="p-4">Tipo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {leads.map((lead, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-medium text-gray-800">{lead.nome}</td>
                  <td className="p-4 text-gray-600">{lead.interesse}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-bold 
                      ${lead.status === 'novo' ? 'bg-blue-100 text-blue-700' : 
                        lead.status === 'qualificado' ? 'bg-yellow-100 text-yellow-700' : 
                        'bg-purple-100 text-purple-700'}`}>
                      {lead.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="p-4">
                      {lead.tipo === 'escola' ? (
                          <span className="flex items-center gap-1 text-xs font-bold text-[#1A3D7C]">
                              <Users size={14} /> Escola
                          </span>
                      ) : (
                          <span className="flex items-center gap-1 text-xs font-bold text-green-600">
                              <ShoppingBag size={14} /> Família
                          </span>
                      )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
