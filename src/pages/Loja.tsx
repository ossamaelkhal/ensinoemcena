import { ShoppingCart, ExternalLink, Package } from 'lucide-react';
import { useState } from 'react';

export default function Loja() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('todos');

  const categorias = [
    { id: 'todos', nome: 'Todos' },
    { id: 'livro', nome: 'Livros' },
    { id: 'material', nome: 'Materiais Educativos' },
    { id: 'brinde', nome: 'Brindes' },
    { id: 'ingresso', nome: 'Ingressos' },
    { id: 'kit', nome: 'Kits Escolares' },
  ];

  const produtos = [
    {
      id: 1,
      nome: 'Livro Vila da Fonética',
      categoria: 'livro',
      descricao: 'Livro ilustrado com a história do espetáculo, atividades pedagógicas e QR code para conteúdo exclusivo.',
      preco: 45.00,
      imagem: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80',
      estoque: 150,
      destaque: true,
    },
    {
      id: 2,
      nome: 'Livro Português com Classe',
      categoria: 'livro',
      descricao: 'Guia divertido das classes gramaticais com exercícios interativos e ilustrações criativas.',
      preco: 42.00,
      imagem: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80',
      estoque: 120,
      destaque: true,
    },
    {
      id: 3,
      nome: 'Caderno de Atividades - Vogais',
      categoria: 'material',
      descricao: 'Caderno com atividades lúdicas para trabalhar as vogais com crianças de 4 a 7 anos.',
      preco: 28.00,
      imagem: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&q=80',
      estoque: 200,
      destaque: false,
    },
    {
      id: 4,
      nome: 'Kit Escolar Completo',
      categoria: 'kit',
      descricao: 'Livro + Ingresso + Caderno de Atividades + Brinde especial. Perfeito para escolas!',
      preco: 95.00,
      imagem: 'https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?w=400&q=80',
      estoque: 50,
      destaque: true,
    },
    {
      id: 5,
      nome: 'Camiseta Ensino em Cena',
      categoria: 'brinde',
      descricao: 'Camiseta 100% algodão com logo da companhia. Disponível em diversos tamanhos.',
      preco: 55.00,
      imagem: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80',
      estoque: 100,
      destaque: false,
    },
    {
      id: 6,
      nome: 'Ecobag Vila da Fonética',
      categoria: 'brinde',
      descricao: 'Ecobag resistente com ilustração das vogais. Perfeita para carregar livros!',
      preco: 35.00,
      imagem: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&q=80',
      estoque: 80,
      destaque: false,
    },
    {
      id: 7,
      nome: 'Ingresso Individual',
      categoria: 'ingresso',
      descricao: 'Ingresso para espetáculo (consulte disponibilidade de datas e espetáculos).',
      preco: 25.00,
      imagem: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400&q=80',
      estoque: 500,
      destaque: false,
    },
    {
      id: 8,
      nome: 'Material Didático para Professores',
      categoria: 'material',
      descricao: 'Guia pedagógico completo com planos de aula, atividades e recursos complementares.',
      preco: 38.00,
      imagem: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&q=80',
      estoque: 75,
      destaque: false,
    },
  ];

  const produtosFiltrados = categoriaSelecionada === 'todos'
    ? produtos
    : produtos.filter(p => p.categoria === categoriaSelecionada);

  const whatsappNumber = '5531991873104';

  const handleCompra = (produto: typeof produtos[0]) => {
    const mensagem = `Olá! Gostaria de comprar: ${produto.nome} - R$ ${produto.preco.toFixed(2)}`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#FFD23F] to-[#FFCA45] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-[#1A3D7C] mb-6">Nossa Loja</h1>
            <p className="text-xl text-[#1A3D7C]">
              Leve um pedacinho da magia para sua escola ou casa
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categorias.map((categoria) => (
              <button
                key={categoria.id}
                onClick={() => setCategoriaSelecionada(categoria.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  categoriaSelecionada === categoria.id
                    ? 'bg-[#1A3D7C] text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {categoria.nome}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {produtosFiltrados.map((produto) => (
              <div
                key={produto.id}
                className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1 ${
                  produto.destaque ? 'ring-2 ring-[#FFD23F]' : ''
                }`}
              >
                {produto.destaque && (
                  <div className="bg-[#FFD23F] text-[#1A3D7C] text-xs font-bold px-3 py-1 text-center">
                    DESTAQUE
                  </div>
                )}
                <div className="h-48 overflow-hidden bg-gray-200">
                  <img
                    src={produto.imagem}
                    alt={produto.nome}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[#1A3D7C] mb-2 line-clamp-1">
                    {produto.nome}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {produto.descricao}
                  </p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-[#FF6B6B]">
                      R$ {produto.preco.toFixed(2)}
                    </span>
                    {produto.estoque > 0 ? (
                      <span className="text-xs text-green-600 flex items-center">
                        <Package size={14} className="mr-1" />
                        Em estoque
                      </span>
                    ) : (
                      <span className="text-xs text-red-600">Esgotado</span>
                    )}
                  </div>
                  <button
                    onClick={() => handleCompra(produto)}
                    disabled={produto.estoque === 0}
                    className={`w-full py-2 rounded-lg font-semibold transition-colors flex items-center justify-center ${
                      produto.estoque > 0
                        ? 'bg-[#1A3D7C] text-white hover:bg-[#17386D]'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <ShoppingCart size={18} className="mr-2" />
                    Comprar via WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#7A3EB1] to-[#1A3D7C] rounded-xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Compras para Escolas</h2>
            <p className="text-lg mb-6">
              Oferecemos condições especiais para compras em quantidade. Entre em contato para solicitar orçamento personalizado!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Gostaria de um orçamento para compra escolar')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#FFD23F] text-[#1A3D7C] px-6 py-3 rounded-lg font-semibold hover:bg-[#FFCA45] transition-colors"
              >
                <ExternalLink size={20} className="mr-2" />
                Solicitar Orçamento
              </a>
              <a
                href="mailto:ensinoemcena@gmail.com"
                className="inline-flex items-center justify-center bg-white text-[#1A3D7C] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Enviar E-mail
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-[#1A3D7C] mb-6">
              Formas de Pagamento
            </h3>
            <p className="text-gray-700 mb-4">
              Aceitamos diversas formas de pagamento para sua comodidade:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4 shadow">
                <p className="font-semibold text-[#1A3D7C]">PIX</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow">
                <p className="font-semibold text-[#1A3D7C]">Boleto</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow">
                <p className="font-semibold text-[#1A3D7C]">Cartão</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow">
                <p className="font-semibold text-[#1A3D7C]">Transferência</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
