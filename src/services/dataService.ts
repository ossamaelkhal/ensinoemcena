import { db } from '../lib/firebase';
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { Pedido, Espetaculo, MembroElenco, BlogPost } from '../types/schema';

// Coleções do Firestore
const pedidosCollectionRef = db ? collection(db, "pedidos") : null;
// Desativando leitura do Firebase temporariamente para garantir integridade da demonstração
const espetaculosCollectionRef = null; 
const elencoCollectionRef = null;

// Helper para imagens locais
const getAssetPath = (folder: string, filename: string) => `/assets_marca/${folder}/${filename}`;

// --- DADOS REAIS (USANDO ASSETS LOCAIS) ---
const MOCK_ESPETACULOS: Espetaculo[] = [
  {
    id: '1',
    slug: 'vila-da-fonetica',
    titulo: 'Vila da fonética',
    sinopseCurta: 'Uma aventura lúdica na qual as vogais e as consoantes enfrentam traças para salvar a literatura.',
    sinopseLonga: 'Na vila da fonética, as vogais A, E, I, O, U se unem às consoantes para formar palavras e dar vida a inúmeras histórias. No entanto, duas traças vorazes e maldosas tentam atrapalhar essa construção, criando desafios para todos.\n\nO espetáculo aborda de forma leve e divertida as regras da língua portuguesa, transformando o aprendizado em uma experiência memorável.',
    faixaEtaria: 'Educação infantil e ensino fundamental I',
    duracao: '50 minutos',
    temas: ['Fonética', 'Separação de sílabas', 'Estímulo à leitura', 'Gestão de emoções'],
    bncc: ['EF01LP05', 'EF15LP03', 'EO.02.a'],
    imagemCapa: getAssetPath('espetaculos/capas', 'vila-da-fonetica.jpg'),
    galeria: [],
    videoTrailer: '',
    disponivel: true,
    objetivos: ['Auxiliar no desenvolvimento da fonética', 'Estimular a leitura', 'Desenvolver a consciência fonológica', 'Trabalhar a socialização'],
    diferenciais: ['Interação constante com a plateia', 'Músicas originais e cativantes', 'Cenário colorido e lúdico']
  },
  {
    id: '2',
    slug: 'portugues-com-classe',
    titulo: 'Português com classe',
    sinopseCurta: 'As classes gramaticais se unem para salvar a língua portuguesa.',
    sinopseLonga: 'As classes gramaticais chegam para trabalhar na fábrica da língua portuguesa e descobrem o desaparecimento de seu diretor, o Senhor Aurélio. A chegada da Inteligência Artificial abala a todos, ameaçando substituir o trabalho humano e a própria essência da linguagem.\n\nNessa trama envolvente, o substantivo, adjetivo, verbo e companhia precisam provar seu valor, trabalhando em equipe para salvar a fábrica da língua portuguesa.',
    faixaEtaria: 'Ensino fundamental II e Ensino médio',
    duracao: '60 minutos',
    temas: ['Morfologia', 'Inteligência artificial', 'Trabalho em equipe', 'Ética digital'],
    bncc: ['EF06LP04', 'EM13LGG103', 'EF69LP56'],
    imagemCapa: getAssetPath('espetaculos/capas', 'portugues-com-classe.jpg'),
    galeria: [],
    disponivel: true,
    objetivos: ['Revisar classes gramaticais de forma lúdica', 'Discutir o papel da tecnologia na educação', 'Estimular o pensamento crítico'],
    diferenciais: ['Abordagem atual sobre IA', 'Humor inteligente', 'Conexão direta com o currículo de gramática']
  },
  {
    id: '3',
    slug: 'tuco-controle-maluco',
    titulo: 'Tuco e o controle maluco',
    sinopseCurta: 'Um cientista viaja o mundo dormindo e descobre que aprender inglês é divertido.',
    sinopseLonga: 'Tuco é um cientista curioso que inventa um controle remoto capaz de transportá-lo para qualquer lugar do mundo... enquanto dorme! Em suas viagens oníricas, ele descobre que aprender inglês é a chave para se conectar com novas culturas e fazer amigos globais.',
    faixaEtaria: 'Inglês básico (infantil e fund. I)',
    duracao: '40 minutos',
    temas: ['Inglês básico', 'Diversidade cultural', 'Geografia', 'Imaginação'],
    bncc: ['EF06LI04', 'EF06LI19'],
    imagemCapa: getAssetPath('espetaculos/capas', 'tuco-controle-maluco.jpg'),
    galeria: [],
    disponivel: true,
    objetivos: ['Introduzir vocabulário básico de inglês', 'Despertar interesse por outras culturas', 'Mostrar que aprender línguas pode ser divertido'],
    diferenciais: ['Bilinguismo acessível', 'Props criativos', 'Muita interação']
  },
  {
    id: '4',
    slug: 'helena-antipoff',
    titulo: 'Helena Antipoff - no olho do furacão',
    sinopseCurta: 'A vida da educadora que revolucionou a educação inclusiva no Brasil.',
    sinopseLonga: 'A peça teatral, Helena Antipoff no olho do furacão, traz um olhar dramático sobre a vida dessa psicóloga e educadora russa que adotou Minas Gerais como seu laboratório, revolucionando a educação inclusiva no Brasil. A peça retrata sua luta, seus ideais e seu propósito de transformar o olhar de quem ensina a pessoa com deficiência.',
    faixaEtaria: 'Fund. II, médio e educadores',
    duracao: '45 minutos',
    temas: ['Inclusão', 'História da educação', 'Direitos humanos', 'Biografia'],
    bncc: ['EF09HI13', 'EM13CHS102'],
    imagemCapa: getAssetPath('espetaculos/capas', 'vila-da-fonetica.jpg'), 
    galeria: [],
    disponivel: true,
    objetivos: ['Resgatar a memória dessa educadora', 'Discutir inclusão e preconceito', 'Inspirar educadores a ensinarem com afeto'],
    diferenciais: ['Pesquisa histórica rigorosa', 'Carga dramática emocionante', 'Foco na valorização humana']
  }
];

const MOCK_ELENCO: MembroElenco[] = [
    {
      id: '1',
      nome: 'Rose Gomes',
      foto: getAssetPath('rose_gomes', 'perfil.png'),
      especialidades: ['Direção artística', 'Dramaturgia', 'Educação'],
      biografia: 'Fundadora da Ensino em Cena. Professora de língua portuguesa com mais de 20 anos de experiência em sala de aula, unindo arte e educação para transformar vidas.',
      funcao: 'Fundadora & diretora'
    }
];

const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'como-usar-teatro-na-bncc',
    titulo: 'Como alinhar o teatro às competências da BNCC?',
    resumo: 'Descubra como as artes cênicas podem ser a ferramenta chave para desenvolver as 10 competências gerais na sua escola.',
    conteudo: `
      <p class="mb-4">A Base Nacional Comum Curricular (BNCC) trouxe novos desafios para os gestores escolares, exigindo abordagens mais integradas e ativas. Nesse cenário, o teatro surge não apenas como entretenimento, mas como uma metodologia pedagógica poderosa.</p>
      
      <h3 class="text-2xl font-bold text-[#1A3D7C] mt-8 mb-4">O teatro como metodologia ativa</h3>
      <p class="mb-4">Muito além de uma apresentação de fim de ano, o teatro trabalha diretamente competências socioemocionais como empatia, comunicação e colaboração. Quando um aluno assiste a uma peça como "Português com classe", ele não está apenas vendo atores; ele está visualizando conceitos abstratos de gramática ganhando vida.</p>
      
      <h3 class="text-2xl font-bold text-[#1A3D7C] mt-8 mb-4">Competências trabalhadas</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Comunicação:</strong> expressar sentimentos e ideias.</li>
        <li><strong>Repertório cultural:</strong> valorizar manifestações artísticas.</li>
        <li><strong>Empatia e cooperação:</strong> colocar-se no lugar do outro através das personagens.</li>
      </ul>

      <p class="mb-4">Para coordenadores que buscam inovar, incluir espetáculos profissionais no calendário escolar é uma forma eficiente de cumprir a BNCC de maneira leve e engajadora.</p>
    `,
    dataPublicacao: '10 de março de 2024',
    autor: 'Rose Gomes',
    imagemCapa: 'https://images.unsplash.com/photo-1507676184212-d03ab07a11d0?w=800&q=80',
    categoria: 'Gestão escolar',
    tags: ['BNCC', 'Gestão', 'Artes'],
    tempoLeitura: '5 min'
  },
  {
    id: '2',
    slug: 'alfabetizacao-ludica',
    titulo: 'Alfabetização sem trauma: o poder da ludicidade',
    resumo: 'Crianças que brincam aprendem mais rápido. Veja como transformar o processo de leitura em uma aventura mágica.',
    conteudo: `
      <p class="mb-4">A alfabetização é um dos momentos mais críticos da vida escolar. A pressão para ler e escrever pode gerar ansiedade nas crianças. Mas e se as letras fossem amigas?</p>
      
      <p class="mb-4">Na metodologia "Vila da fonética", transformamos fonemas em personagens. O \'A\' não é apenas um triângulo com um traço; é uma personagem com personalidade, cor e som específicos. Essa associação emocional facilita a retenção na memória de longo prazo.</p>
      
      <h3 class="text-2xl font-bold text-[#1A3D7C] mt-8 mb-4">Dicas para pais e professores</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Crie histórias para cada letra.</li>
        <li>Use músicas e rimas.</li>
        <li>Traga elementos sensoriais (cheiros, texturas) associados às vogais.</li>
      </ul>
    `,
    dataPublicacao: '15 de março de 2024',
    autor: 'Equipe Pedagógica',
    imagemCapa: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
    categoria: 'Dicas pedagógicas',
    tags: ['Alfabetização', 'Educação infantil'],
    tempoLeitura: '4 min'
  },
  {
    id: '3',
    slug: 'bastidores-vila-da-fonetica',
    titulo: 'Por trás das cortinas: a criação da Vila da fonética',
    resumo: 'Conheça o processo criativo que transformou regras gramaticais em personagens inesquecíveis.',
    conteudo: `
      <p class="mb-4">Criar um espetáculo que ensina enquanto diverte é um desafio enorme. Nossa equipe de figurinistas, roteiristas e pedagogos trabalhou por 6 meses para garantir que cada detalhe da "Vila da fonética" fosse pedagogicamente correto.</p>
      
      <p class="mb-4">Você sabia que as cores das roupas das vogais foram escolhidas com base na psicologia das cores para estimular diferentes áreas do cérebro infantil? O amarelo do \'E\' traz energia e realização, enquanto o tom amadeirado do \'O\' traz força e estabilidade.</p>
    `,
    dataPublicacao: '20 de março de 2024',
    autor: 'Rose Gomes',
    imagemCapa: getAssetPath('espetaculos/capas', 'vila-da-fonetica.jpg'),
    categoria: 'Bastidores',
    tags: ['Curiosidades', 'Elenco'],
    tempoLeitura: '3 min'
  }
];

export const DataService = {

  // Forçando retorno do MOCK para garantir visualização correta
  getEspetaculos: async (): Promise<Espetaculo[]> => {
    return MOCK_ESPETACULOS;
  },

  getEspetaculoBySlug: async (slug: string): Promise<Espetaculo | null> => {
     return MOCK_ESPETACULOS.find(e => e.slug === slug) || null;
  },

  getElenco: async (): Promise<MembroElenco[]> => {
    return MOCK_ELENCO;
  },

  getBlogPosts: async (): Promise<BlogPost[]> => {
    return MOCK_BLOG_POSTS;
  },

  getBlogPostBySlug: async (slug: string): Promise<BlogPost | null> => {
    return MOCK_BLOG_POSTS.find(p => p.slug === slug) || null;
  },

  saveOrder: async (pedidoData: Omit<Pedido, 'id'>) => {
    try {
      if (!pedidosCollectionRef) throw new Error("Conexão com Firebase não disponível.");
      const docRef = await addDoc(pedidosCollectionRef, pedidoData);
      return { success: true, orderId: docRef.id };
    } catch (error) {
      console.error("Erro ao salvar pedido (modo offline/mock): ", error);
      return { success: false, error: (error as Error).message };
    }
  },
  
  seedDatabase: async () => {
      return { success: false, message: 'Função desativada em produção' };
  }
};

export const CRMService = {
    addLead: async (data: any) => { console.warn("Use crmService.ts"); return null; } 
};
