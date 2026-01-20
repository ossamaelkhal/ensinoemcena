import { useEffect, useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { motion } from 'framer-motion';
import { CRMService } from '../../services/crmService'; // Corrigido o caminho da importação
import { Lead, LeadStatus } from '../../types/schema';
import { Plus, Users, DollarSign, Edit2, MoreVertical, Trash2 } from 'lucide-react';

const ItemTypes = { LEAD: 'lead' };

// O NOVO FUNIL DE VENDAS PROFISSIONAL
const statuses: LeadStatus[] = [
  'novo',
  'em_cadencia',
  'conversando',
  'reuniao_agendada',
  'reuniao_realizada',
  'proposta',
  'em_negociacao',
  'fechado',
  'perdido',
  'nao_aprovado'
];

const statusLabels: Record<LeadStatus, string> = {
  novo: 'Novos Leads',
  em_cadencia: 'Em Cadência',
  conversando: 'Conversando',
  reuniao_agendada: 'Reunião Agendada',
  reuniao_realizada: 'Reunião Realizada',
  proposta: 'Proposta Enviada',
  em_negociacao: 'Em Negociação',
  fechado: 'Fechado',
  perdido: 'Perdido',
  nao_aprovado: 'Não Aprovado'
};

const statusColors: Record<LeadStatus, string> = {
    novo: 'bg-blue-100 text-blue-800',
    em_cadencia: 'bg-purple-100 text-purple-800',
    conversando: 'bg-indigo-100 text-indigo-800',
    reuniao_agendada: 'bg-yellow-100 text-yellow-800',
    reuniao_realizada: 'bg-amber-100 text-amber-800',
    proposta: 'bg-orange-100 text-orange-800',
    em_negociacao: 'bg-teal-100 text-teal-800',
    fechado: 'bg-green-100 text-green-800',
    perdido: 'bg-red-100 text-red-800',
    nao_aprovado: 'bg-gray-200 text-gray-700'
};

// LeadCard Component
const LeadCard = ({ lead, onEdit }: { lead: Lead; onEdit: (lead: Lead) => void }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.LEAD,
    item: { id: lead.id, status: lead.status },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  }));

  return (
    <motion.div
      ref={drag}
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`p-4 mb-4 bg-white rounded-xl shadow-sm border border-gray-100 cursor-grab ${isDragging ? 'opacity-50' : 'opacity-100'}`}
    >
      <div className="flex justify-between items-start">
        <p className="font-bold text-sm text-gray-800 leading-tight">{lead.nome}</p>
        <button onClick={() => onEdit(lead)} className="p-1 text-gray-400 hover:text-gray-600"><Edit2 size={14} /></button>
      </div>
      <p className="text-xs text-gray-500 mt-1 mb-3">{lead.interesse}</p>
      <div className="flex items-center justify-between">
        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${statusColors[lead.status] || statusColors.novo}`}>
          {statusLabels[lead.status]}
        </span>
        <div className="flex items-center text-xs text-gray-500 font-semibold">
            <DollarSign size={12} className="mr-1" />
            <span>{lead.valorEstimado || 0}</span>
        </div>
      </div>
    </motion.div>
  );
};

// Column Component
const Column = ({ status, leads, moveLead }: { status: LeadStatus, leads: Lead[], moveLead: (id: string, newStatus: LeadStatus) => void }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.LEAD,
    drop: (item: { id: string }) => moveLead(item.id, status),
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  }));

  const totalValue = leads.reduce((sum, lead) => sum + (lead.valorEstimado || 0), 0);

  return (
    <div 
      ref={drop}
      className={`w-72 flex-shrink-0 bg-gray-50 rounded-2xl ${isOver ? 'ring-2 ring-[#1A3D7C]' : ''}`}>
      <div className="p-4 sticky top-0 bg-gray-50 rounded-t-2xl z-10">
        <h3 className="font-bold text-sm text-gray-600 uppercase tracking-wide flex justify-between items-center">
          {statusLabels[status]}
          <span className="text-xs text-gray-400 font-mono">{leads.length}</span>
        </h3>
        <p className="text-xs font-bold text-gray-400 mt-1">R$ {totalValue.toLocaleString('pt-BR')}</p>
      </div>
      <div className="p-2 h-full overflow-y-auto" style={{maxHeight: 'calc(100vh - 200px)'}}>
        {leads.map((lead) => <LeadCard key={lead.id} lead={lead} onEdit={() => {}} />)}
      </div>
    </div>
  );
};

// Modal de Edição (simplificado)
const EditModal = ({ lead, onClose, onSave }: { lead: Lead | null, onClose: () => void, onSave: (lead: Lead, updates: Partial<Lead>) => void }) => {
    const [valor, setValor] = useState(lead?.valorEstimado || 0);
    const [notas, setNotas] = useState(lead?.notas || '');

    if (!lead) return null;

    const handleSave = () => {
        onSave(lead, { valorEstimado: Number(valor), notas });
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-96">
                <h2 className="text-lg font-bold mb-4">Editar Lead: {lead.nome}</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Valor Estimado (R$)</label>
                    <input type="number" value={valor} onChange={e => setValor(Number(e.target.value))} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Notas</label>
                    <textarea value={notas} onChange={e => setNotas(e.target.value)} rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"></textarea>
                </div>
                <div className="flex justify-end gap-2">
                    <button onClick={onClose} className="px-4 py-2 rounded-md border">Cancelar</button>
                    <button onClick={handleSave} className="px-4 py-2 rounded-md bg-[#1A3D7C] text-white">Salvar</button>
                </div>
            </div>
        </div>
    )
}

// CRM Component
export default function CRM() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [editingLead, setEditingLead] = useState<Lead | null>(null);

  useEffect(() => {
    const fetchLeads = async () => {
      const data = await CRMService.getLeads();
      setLeads(data);
    };
    fetchLeads();
  }, []);

  const moveLead = async (id: string, newStatus: LeadStatus) => {
    await CRMService.updateStatus(id, newStatus);
    setLeads((prev) => prev.map((lead) => (lead.id === id ? { ...lead, status: newStatus } : lead)));
  };

  const handleSaveLead = async (lead: Lead, updates: Partial<Lead>) => {
    await CRMService.updateLead(lead.id, updates);
    setLeads(prev => prev.map(l => l.id === lead.id ? {...l, ...updates} : l));
    setEditingLead(null);
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-[#1A3D7C]">Pipeline de Vendas</h1>
            {/* Botão de Adicionar novo lead */}
        </div>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {statuses.map((status) => (
            <Column
              key={status}
              status={status}
              leads={leads.filter((lead) => lead.status === status)}
              moveLead={moveLead}
            />
          ))}
        </div>
      </div>
      <EditModal lead={editingLead} onClose={() => setEditingLead(null)} onSave={handleSaveLead} />
    </DndProvider>
  );
}
