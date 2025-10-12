import { useParams, Link } from 'react-router-dom';
import { Clock, Users, ArrowLeft, Calendar } from 'lucide-react';

export default function EspetaculoDetalhes() {
  const { slug } = useParams();

  const espetaculosData: Record<string, any> = {
    'vila-da-fonetica': {
      titulo: 'Vila da Fonética',
      sinopse: 'As vogais A, E, I, O, U vivem como amigos até que duas traças aparecem para destruir os livros.',
      descricao: 'Vila da Fonética é um espetáculo musical e interativo que apresenta as cinco vogais como personagens carismáticos que vivem em harmonia até que surgem dois antagonistas: as traças destruidoras de livros. A narrativa trabalha valores fundamentais como amizade, cooperação, coragem e a importância da leitura. Por meio de músicas originais, diálogos envolventes e momentos de interação com a plateia, as crianças são convidadas a participar ativamente da história, ajudando as vogais a proteger os livros e descobrir o poder transformador da literatura.',
      publico_alvo: 'Educação Infantil e Fundamental I (4 a 10 anos)',
      duracao: '50 minutos',
      imagem: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
      objetivos: [
        'Apresentar as vogais de forma lúdica e memorável',
        'Estimular o gosto pela leitura e pelos livros',
        'Trabalhar valores como amizade e cooperação',
        'Desenvolver habilidades socioemocionais',
        'Promover educação financeira de forma introdutória',
        'Conscientizar sobre alimentação saudável',
      ],
      diferenciais: [
        'Músicas originais criadas especificamente para o espetáculo',
        'Interação constante com a plateia',
        'Personagens que se conectam emocionalmente com as crianças',
        'Cenografia colorida e atrativa',
        'Figurinos criativos que representam cada vogal',
        'Material pedagógico complementar para professores',
      ],
    },
    'portugues-com-classe': {
      titulo: 'Português com Classe',
      sinopse: 'As classes gramaticais vivem uma crise quando descobrem que a fábrica da Língua Portuguesa está sob nova direção: a Inteligência Artificial.',
      descricao: 'Português com Classe é uma comédia inteligente que personifica as dez classes gramaticais (Substantivo, Verbo, Adjetivo, Advérbio, Pronome, Artigo, Numeral, Preposição, Conjunção e Interjeição) em uma trama contemporânea sobre tecnologia, identidade e trabalho em equipe. Quando descobrem que a IA assumirá o controle da fábrica da língua, as classes precisam superar suas diferenças e vaidades para provar seu valor. O espetáculo aborda de forma criativa conceitos gramaticais complexos, tornando-os acessíveis e divertidos através de situações cômicas e musicais.',
      publico_alvo: 'Fundamental II e Ensino Médio (11 a 17 anos)',
      duracao: '60 minutos',
      imagem: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
      objetivos: [
        'Tornar o estudo da gramática mais atrativo e significativo',
        'Apresentar as classes gramaticais de forma memorável',
        'Discutir temas contemporâneos como IA e tecnologia',
        'Trabalhar a importância do trabalho em equipe',
        'Estimular o pensamento crítico sobre língua e comunicação',
        'Promover o gosto pela Língua Portuguesa',
      ],
      diferenciais: [
        'Abordagem inovadora de conteúdo tradicionalmente árido',
        'Humor inteligente que agrada adolescentes',
        'Discussão sobre temas atuais (tecnologia, IA)',
        'Personificação criativa das classes gramaticais',
        'Alinhamento com conteúdos curriculares',
        'Estimula reflexão sobre comunicação e linguagem',
      ],
    },
    'tuco-controle-magico': {
      titulo: 'Tuco e o Controle Mágico',
      sinopse: 'Um cientista inventa um controle que ensina inglês sem precisar de escola. Ao dormir, viaja por países e culturas.',
      descricao: 'Tuco e o Controle Mágico é um espetáculo bilíngue que combina aventura, fantasia e aprendizado de inglês. O protagonista Tuco, um jovem cientista curioso, cria uma invenção revolucionária: um controle remoto capaz de ensinar idiomas durante o sono. Ao testar seu invento, ele embarca em uma jornada onírica visitando diferentes países, conhecendo culturas diversas e descobrindo que aprender uma nova língua vai muito além de vocabulário e gramática – é sobre conexão humana, compreensão cultural e abertura para o mundo. Produzido em parceria com a Bambina Trupe, escola de teatro bilíngue, o espetáculo intercala português e inglês de forma natural e pedagógica.',
      publico_alvo: 'Fundamental I e II (7 a 14 anos)',
      duracao: '55 minutos',
      imagem: 'https://images.unsplash.com/photo-1516575114784-7abf2c36b18f?w=800&q=80',
      objetivos: [
        'Despertar interesse pelo aprendizado de inglês',
        'Apresentar diferentes culturas de forma respeitosa',
        'Demonstrar a importância da comunicação intercultural',
        'Estimular curiosidade sobre o mundo',
        'Introduzir vocabulário e expressões em inglês',
        'Promover valorização da diversidade cultural',
      ],
      diferenciais: [
        'Espetáculo bilíngue (português/inglês)',
        'Parceria com escola de teatro bilíngue',
        'Viagem por diferentes países e culturas',
        'Abordagem lúdica do ensino de idiomas',
        'Figurinos e cenários que representam diferentes culturas',
        'Integração natural entre os dois idiomas',
      ],
      parceria: 'Bambina Trupe (Escola de Teatro Bilíngue)',
    },
    'janusz-korczak': {
      titulo: 'Janusz Korczak - O Mestre',
      sinopse: 'História inspiradora do educador polonês que dedicou sua vida às crianças e revolucionou a pedagogia.',
      descricao: 'Janusz Korczak - O Mestre é um espetáculo emocionante e profundo que narra a vida do médico, pedagogo e escritor polonês que revolucionou a educação no início do século XX. A montagem apresenta os princípios revolucionários de Korczak: respeito incondicional às crianças, direito à participação, educação para autonomia e dignidade humana. O espetáculo aborda tanto os momentos luminosos de seu orfanato modelo quanto os desafios enfrentados durante o Holocausto, quando recusou abandonar as crianças sob seus cuidados. Uma história comovente sobre amor, educação, coragem e princípios inabaláveis.',
      publico_alvo: 'Fundamental II e Ensino Médio (12 a 17 anos)',
      duracao: '65 minutos',
      imagem: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
      objetivos: [
        'Apresentar figura histórica importante da pedagogia',
        'Trabalhar temas como direitos humanos e dignidade',
        'Estimular reflexão sobre educação e respeito',
        'Abordar contextualmente o Holocausto',
        'Promover valores como coragem, amor e princípios',
        'Inspirar vocações pedagógicas',
      ],
      diferenciais: [
        'Conteúdo histórico relevante e emocionante',
        'Abordagem sensível de temas complexos',
        'Inspiração para educadores e estudantes',
        'Discussão sobre direitos das crianças',
        'Teatro documental com ficção',
        'Adequado para discussões interdisciplinares',
      ],
      parceria: 'Bambina Trupe',
    },
  };

  const espetaculo = slug ? espetaculosData[slug] : null;

  if (!espetaculo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#1A3D7C] mb-4">
            Espetáculo não encontrado
          </h1>
          <Link
            to="/espetaculos"
            className="text-[#7A3EB1] hover:text-[#FF6B6B] font-semibold"
          >
            Voltar para espetáculos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="relative h-96 overflow-hidden">
        <img
          src={espetaculo.imagem}
          alt={espetaculo.titulo}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A3D7C] to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <Link
              to="/espetaculos"
              className="inline-flex items-center text-white hover:text-[#FFD23F] mb-4 transition-colors"
            >
              <ArrowLeft className="mr-2" size={20} />
              Voltar
            </Link>
            <h1 className="text-5xl font-bold text-white">{espetaculo.titulo}</h1>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Users className="mr-3 text-[#7A3EB1]" size={24} />
                  <div>
                    <p className="text-sm text-gray-600">Público-alvo</p>
                    <p className="font-semibold text-[#1A3D7C]">
                      {espetaculo.publico_alvo}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-3 text-[#FF6B6B]" size={24} />
                  <div>
                    <p className="text-sm text-gray-600">Duração</p>
                    <p className="font-semibold text-[#1A3D7C]">{espetaculo.duracao}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="prose max-w-none mb-12">
              <h2 className="text-3xl font-bold text-[#1A3D7C] mb-4">Sobre o Espetáculo</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                {espetaculo.descricao}
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#1A3D7C] mb-4">
                Objetivos Pedagógicos
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {espetaculo.objetivos.map((objetivo: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#FFD23F] mr-2 text-xl">✓</span>
                    <span className="text-gray-700">{objetivo}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#1A3D7C] mb-4">Diferenciais</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {espetaculo.diferenciais.map((diferencial: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#7A3EB1] mr-2 text-xl">★</span>
                    <span className="text-gray-700">{diferencial}</span>
                  </li>
                ))}
              </ul>
            </div>

            {espetaculo.parceria && (
              <div className="bg-[#FFD23F] rounded-xl p-6 mb-12">
                <p className="text-[#1A3D7C] font-semibold">
                  <Calendar className="inline mr-2" size={20} />
                  Produzido em parceria com {espetaculo.parceria}
                </p>
              </div>
            )}

            <div className="bg-gradient-to-br from-[#1A3D7C] to-[#7A3EB1] rounded-xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Agende para sua escola</h3>
              <p className="mb-6">
                Entre em contato para verificar disponibilidade e valores
              </p>
              <Link
                to="/contato"
                className="inline-block bg-[#FFD23F] text-[#1A3D7C] px-8 py-3 rounded-lg font-semibold hover:bg-[#FFCA45] transition-colors"
              >
                Solicitar agendamento
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
