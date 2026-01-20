import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
import { Lead, LeadStatus } from '../../types/schema';
import { CRMService } from '../../services/crmService';
import { Phone, Mail, Building, User, DollarSign, AlertCircle, X, Save, Filter } from 'lucide-react';

const COLUMNS: { id: LeadStatus; label: string; color: string }[] = [
  { id: 'novo', label: 'Novos Leads', color: 'bg-blue-100 text-blue-800' },
  { id: 'qualificado', label: 'Qualificados 🔥', color: 'bg-yellow-100 text-yellow-800' },
  { id: 'em_negociacao', label: 'Em Negociação', color: 'bg-purple-100 text-purple-800' },
  { id: 'ganho', label: 'Fechados 💰', color: 'bg-green-100 text-green-800' },
  { id: 'perdido', label: 'Perdidos', color: 'bg-gray-100 text-gray-600' }
];

export default function CRMBoard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [filterType, setFilterType] = useState<'all' | 'escola' | 'responsavel'>('all');

  useEffect(() => {
    loadLeads();
  }, []);

  const loadLeads = async () => {
    const data = await CRMService.getLeads();
    setLeads(data);
    setLoading(false);
  };

  const pipelineValue = leads
    .filter(l => l.status !== 'perdido')
    .reduce((acc, curr) => acc + (curr.valorEstimado || 0), 0);

  const filteredLeads = leads.filter(l => filterType === 'all' || l.tipo === filterType);

  const getLeadsByStatus = (status: LeadStatus) => filteredLeads.filter(l => l.status === status);

  const moveLead = async (leadId: string, currentStatus: LeadStatus, direction: 'next' | 'prev') => {
    const statusOrder: LeadStatus[] = ['novo', 'qualificado', 'em_negociacao', 'ganho'];
    const currentIndex = statusOrder.indexOf(currentStatus);
    const nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    
    if (nextIndex >= 0 && nextIndex < statusOrder.length) {
        const newStatus = statusOrder[nextIndex];
        setLeads(prev => prev.map(l => l.id === leadId ? { ...l, status: newStatus } : l));
        await CRMService.updateStatus(leadId, newStatus);
    }
  };

  const saveLeadDetails = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedLead?.id) return;
    
    await CRMService.updateLead(selectedLead.id, {
        notas: selectedLead.notas,
        valorEstimado: selectedLead.valorEstimado
    });
    
    setLeads(prev => prev.map(l => l.id === selectedLead.id ? selectedLead : l));
    setSelectedLead(null);
  };

  if (loading) return <div className="p-10 text-center">Carregando CRM Inteligente...</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-6 overflow-x-hidden">
      {/* Header & KPIs */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
                <h1 className="text-3xl font-bold text-[#1A3D7C]">Pipeline de Vendas</h1>
                <p className="text-gray-500">Gestão de oportunidades e relacionamento.</p>
            </div>
            <div className="flex gap-2">
                <button onClick={() => setFilterType('all')} className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${filterType === 'all' ? 'bg-[#1A3D7C] text-white' : 'bg-white text-gray-600'}`}>Todos</button>
                <button onClick={() => setFilterType('escola')} className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${filterType === 'escola' ? 'bg-[#1A3D7C] text-white' : 'bg-white text-gray-600'}`}>Escolas</button>
            </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 inline-flex items-center gap-4">
            <div className="p-3 bg-green-100 text-green-700 rounded-lg">
                <DollarSign size={24} />
            </div>
            <div>
                <p className="text-xs text-gray-500 uppercase font-bold">Valor em Pipeline</p>
                <p className="text-2xl font-bold text-gray-800">R$ {pipelineValue.toLocaleString('pt-BR')}</p>
            </div>
        </div>
      </div>

      {/* Board */}
      <div className="flex gap-6 overflow-x-auto pb-4">
        {COLUMNS.map(col => (
          <div key={col.id} className="flex-1 min-w-[300px] bg-gray-50 rounded-xl flex flex-col h-full max-h-[75vh]">
            <div className={`p-4 rounded-t-xl font-bold flex justify-between items-center sticky top-0 ${col.color}`}>
              {col.label}
              <span className="bg-white/50 px-2 py-0.5 rounded text-xs text-black/60">
                {getLeadsByStatus(col.id).length}
              </span>
            </div>
            
            <div className="p-3 flex-1 overflow-y-auto space-y-3">
              {getLeadsByStatus(col.id).map(lead => (
                <motion.div
                  layoutId={lead.id}
                  key={lead.id}
                  onClick={() => setSelectedLead(lead)}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all cursor-pointer relative group border-l-4"
                  style={{ borderLeftColor: lead.tipo === 'escola' ? '#1A3D7C' : '#FFD23F' }}
                >
                  {lead.score && lead.score > 70 && (
                    <div className="absolute top-2 right-2 text-xs font-bold text-orange-500 flex items-center gap-1">
                        <AlertCircle size={12} /> {lead.score}
                    </div>
                  )}

                  <h4 className="font-bold text-gray-800 mb-1">{lead.nome}</h4>
                  {lead.instituicao && (
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <Building size={12} /> {lead.instituicao}
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded">
                        {lead.valorEstimado ? `R$ ${lead.valorEstimado}` : '-'}
                    </span>
                    {lead.status !== 'ganho' && lead.status !== 'perdido' && (
                        <button 
                            onClick={(e) => { e.stopPropagation(); moveLead(lead.id!, lead.status, 'next'); }}
                            className="w-6 h-6 bg-gray-100 hover:bg-green-100 text-gray-400 hover:text-green-600 rounded-full flex items-center justify-center transition-colors"
                        >
                            →
                        </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal de Detalhes */}
      <AnimatePresence>
        {selectedLead && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden"
                >
                    <div className="bg-[#1A3D7C] p-6 text-white flex justify-between items-start">
                        <div>
                            <h2 className="text-2xl font-bold">{selectedLead.nome}</h2>
                            <p className="opacity-80 text-sm flex items-center gap-2">
                                {selectedLead.tipo === 'escola' ? <Building size={14} /> : <User size={14} />}
                                {selectedLead.instituicao || 'Particular'}
                            </p>
                        </div>
                        <button onClick={() => setSelectedLead(null)}><X /></button>
                    </div>

                    <div className="p-6 space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <a 
                                href={`https://wa.me/${selectedLead.telefone}`} target="_blank"
                                className="flex items-center justify-center gap-2 bg-green-50 text-green-700 p-3 rounded-lg hover:bg-green-100 font-bold transition-colors"
                            >
                                <Phone size={18} /> WhatsApp
                            </a>
                            <a 
                                href={`mailto:${selectedLead.email}`}
                                className="flex items-center justify-center gap-2 bg-blue-50 text-blue-700 p-3 rounded-lg hover:bg-blue-100 font-bold transition-colors"
                            >
                                <Mail size={18} /> E-mail
                            </a>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-xl text-sm text-gray-600">
                            <p className="font-bold text-gray-800 mb-1">Mensagem Original:</p>
                            "{selectedLead.mensagem}"
                        </div>

                        <form onSubmit={saveLeadDetails} className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Valor Estimado do Negócio (R$)</label>
                                <input 
                                    type="number" 
                                    className="w-full p-3 border rounded-lg"
                                    value={selectedLead.valorEstimado || ''}
                                    onChange={e => setSelectedLead({...selectedLead, valorEstimado: Number(e.target.value)})}
                                    placeholder="0,00"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Notas / Histórico</label>
                                <textarea 
                                    className="w-full p-3 border rounded-lg h-24 resize-none"
                                    value={selectedLead.notas || ''}
                                    onChange={e => setSelectedLead({...selectedLead, notas: e.target.value})}
                                    placeholder="Ex: Liguei dia 10/10, pediu proposta..."
                                />
                            </div>
                            <button className="w-full bg-[#1A3D7C] text-white font-bold py-3 rounded-xl hover:bg-[#17386D] flex justify-center gap-2">
                                <Save size={20} /> Salvar Alterações
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        )}
      </AnimatePresence>
    </div>
  );
}
