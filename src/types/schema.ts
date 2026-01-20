export type LeadStatus = 'novo' | 'em_cadencia' | 'conversando' | 'reuniao_agendada' | 'reuniao_realizada' | 'proposta' | 'em_negociacao' | 'fechado' | 'perdido' | 'nao_aprovado';

export interface Lead {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  tipo: 'escola' | 'responsavel' | 'empresa';
  interesse: string; // Ex: 'Vila da Fonética', 'Palestra', 'Produto X'
  mensagem?: string;
  status: LeadStatus;
  dataCriacao: Date;
  valorEstimado?: number;
  notas?: string;
}

export interface Pedido {
    id: string;
    nome: string;
    email: string;
    telefone: string;
    endereco: string;
    produtos: string; // Ex: "2x Livro Vila, 1x Livro Português"
    valorTotal: number;
    data: Date;
    status: 'pendente' | 'pago' | 'enviado' | 'concluido';
}

export interface Produto {
  id: string;
  titulo: string;
  resumo: string;
  preco: number;
  categoria: string;
  imagem?: string;
}

export interface Espetaculo {
  id: string;
  slug: string;
  titulo: string;
  sinopseCurta: string;
  sinopseLonga: string;
  faixaEtaria: string;
  duracao: string;
  temas: string[];
  bncc: string[];
  imagemCapa: string;
  galeria: string[];
  videoTrailer?: string;
  disponivel: boolean;
  objetivos?: string[];
  diferenciais?: string[];
}

export interface MembroElenco {
  id: string;
  nome: string;
  foto: string;
  especialidades: string[];
  biografia: string;
  funcao: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  titulo: string;
  resumo: string;
  conteudo: string; // HTML ou Markdown
  dataPublicacao: string;
  autor: string;
  imagemCapa: string;
  categoria: 'Gestão Escolar' | 'Dicas Pedagógicas' | 'Novidades' | 'Bastidores';
  tags: string[];
  tempoLeitura: string;
}
