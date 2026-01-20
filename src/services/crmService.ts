import { Lead } from '../types/schema';
import { db } from '../lib/firebase';
import { collection, getDocs, updateDoc, doc, addDoc, Timestamp, query, orderBy } from 'firebase/firestore';

// Mock Data Rico
const MOCK_LEADS: Lead[] = [
  { id: '1', nome: 'Diretora Ana', email: 'ana@escola.com', telefone: '3199999999', instituicao: 'Colégio Saber', tipo: 'escola', interesse: 'Vila da Fonética - +150 alunos', mensagem: 'Urgente para outubro', dataCriacao: new Date(), status: 'qualificado', score: 90, valorEstimado: 4500, notas: 'Entrar em contato pela manhã.' },
  { id: '2', nome: 'Pai João', email: 'joao@gmail.com', telefone: '3188888888', tipo: 'responsavel', interesse: 'Aniversário', mensagem: 'Orçamento para festa', dataCriacao: new Date(), status: 'novo', score: 30, valorEstimado: 800, notas: '' },
  { id: '3', nome: 'Coord. Maria', email: 'maria@colegio.com', telefone: '3177777777', instituicao: 'Escola Futuro', tipo: 'escola', interesse: 'Projeto Leitura', mensagem: 'Queremos agendar para 2025', dataCriacao: new Date(), status: 'em_negociacao', score: 85, valorEstimado: 12000, notas: 'Enviado proposta v1. Aguardando aprovação da direção.' },
];

export const CRMService = {
  // Função para adicionar um novo lead
  async addLead(leadData: Partial<Lead>): Promise<string | null> {
    if (!db) {
      console.log('Modo MOCK: Lead seria adicionado aqui', leadData);
      return 'mock_id_' + Date.now(); // Simula retorno de um novo ID
    }
    try {
      const score = this.calculateScore(leadData);
      
      const docRef = await addDoc(collection(db, 'leads'), {
        ...leadData,
        dataCriacao: Timestamp.fromDate(new Date()),
        status: 'novo',
        score: score,
      });
      return docRef.id;
    } catch (error) {
      console.error("Erro ao adicionar lead:", error);
      return null;
    }
  },

  calculateScore(lead: Partial<Lead>): number {
    let score = 0;
    if (lead.tipo === 'escola') score += 50;
    if (lead.tipo === 'responsavel') score += 10;
    if (lead.interesse?.includes('+ de 150') || lead.interesse?.includes('150')) score += 40;
    if (lead.interesse?.includes('Projeto')) score += 30;
    if (lead.instituicao) score += 10;
    if (lead.telefone) score += 10;
    return Math.min(100, score);
  },

  async getLeads(): Promise<Lead[]> {
    if (!db) return MOCK_LEADS;
    try {
      const q = query(collection(db, 'leads'), orderBy('dataCriacao', 'desc'));
      const snapshot = await getDocs(q);
      if (snapshot.empty) return MOCK_LEADS;
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Lead));
    } catch (e) {
      return MOCK_LEADS;
    }
  },

  async updateStatus(leadId: string, newStatus: Lead['status']): Promise<boolean> {
    if (!db) return true;
    try {
      await updateDoc(doc(db, 'leads', leadId), { status: newStatus });
      return true;
    } catch (e) { return false; }
  },

  async updateLead(leadId: string, data: Partial<Lead>): Promise<boolean> {
    if (!db) return true;
    try {
      await updateDoc(doc(db, 'leads', leadId), data);
      return true;
    } catch (e) { return false; }
  }
};
