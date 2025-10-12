export interface Espetaculo {
  id: string;
  titulo: string;
  slug: string;
  sinopse: string;
  descricao_completa: string;
  publico_alvo: string;
  duracao: string;
  imagem_url: string;
  video_url?: string;
  ordem: number;
  ativo: boolean;
  created_at: string;
}

export interface Elenco {
  id: string;
  nome: string;
  slug: string;
  biografia: string;
  foto_url: string;
  especialidades: string[];
  ordem: number;
  ativo: boolean;
  created_at: string;
}

export interface Produto {
  id: string;
  nome: string;
  slug: string;
  descricao: string;
  preco: number;
  categoria: 'livro' | 'material' | 'brinde' | 'ingresso' | 'kit';
  imagem_url: string;
  estoque: number;
  destaque: boolean;
  link_compra?: string;
  ativo: boolean;
  created_at: string;
}

export interface Depoimento {
  id: string;
  nome: string;
  cargo: string;
  escola?: string;
  tipo: 'gestor' | 'professor' | 'aluno';
  depoimento: string;
  foto_url?: string;
  nota: number;
  aprovado: boolean;
  created_at: string;
}

export interface ContatoForm {
  nome: string;
  email: string;
  telefone: string;
  escola?: string;
  mensagem: string;
  tipo: 'agendamento' | 'informacao' | 'parceria' | 'outro';
}
