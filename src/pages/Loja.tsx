import { ShoppingCart, ExternalLink, Package, Book, Gift } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

export default function Loja() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('todos');
  const { addToCart } = useCart(); // Restaurado

  const categorias = [
    { id: 'todos', nome: 'Todos', icon: Package },
    { id: 'livro', nome: 'Livros', icon: Book },
    { id: 'material', nome: 'Didáticos', icon: ExternalLink },
    { id: 'brinde', nome: 'Lembranças', icon: Gift },
  ];

  const produtos = [
    {
      id: 1,
      nome: 'Livro "Português com Classe"',
      categoria: 'livro',
      descricao: 'Uma aventura divertida pelas classes gramaticais. Ideal para reforçar o aprendizado em casa ou na escola.',
      preco: 69.90,
      imagem: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&q=80',
      estoque: 120,
      destaque: true
    },
    {
      id: 2,
      nome: 'Kit Sala de Aula - Fonética',
      categoria: 'material',
      descricao: 'Conjunto de cartazes e atividades impressas para trabalhar a Vila da Fonética com turmas de alfabetização.',
      preco: 149.90,
      imagem: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
      estoque: 50,
      destaque: false
    },
    {
      id: 3,
      nome: 'Camiseta "Eu Amo Teatro"',
      categoria: 'brinde',
      descricao: 'Camiseta 100% algodão com estampa exclusiva da Ensino em Cena.',
      preco: 45.00,
      imagem: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80',
      estoque: 100,
      destaque: false
    },
    {
      id: 4,
      nome: 'E-book de Jogos Pedagógicos',
      categoria: 'material',
      descricao: 'Arquivo digital com 50 jogos teatrais para sala de aula. Envio imediato por e-mail.',
      preco: 29.90,
      imagem: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600&q=80',
      estoque: 999,
      destaque: false
    }
  ];

  const produtosFiltrados = categoriaSelecionada === 'todos'
    ? produtos
    : produtos.filter(p => p.categoria === categoriaSelecionada);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-[#1A3D7C] py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Lojinha pedagógica
          </motion.h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Recursos didáticos, livros e lembranças para levar a magia do teatro para casa.
          </p>
        </div>
      </section>

      <section className="sticky top-0 z-30 bg-white shadow-sm py-4 border-b border-gray-100">
        <div className="container mx-auto px-4 overflow-x-auto">
          <div className="flex justify-center min-w-max gap-4">
            {categorias.map((categoria) => {
              const Icon = categoria.icon;
              return (
                <button
                  key={categoria.id}
                  onClick={() => setCategoriaSelecionada(categoria.id)}
                  className={`
                    flex items-center gap-2 px-6 py-2 rounded-full font-semibold transition-all duration-300
                    ${categoriaSelecionada === categoria.id
                      ? 'bg-[#1A3D7C] text-white shadow-md transform scale-105' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
                  `}
                >
                  <Icon size={18} />
                  {categoria.nome}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence>
            {produtosFiltrados.map((produto) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={produto.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all border border-gray-100 flex flex-col"
              >
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  {produto.destaque && (
                    <span className="absolute top-4 left-4 z-10 bg-[#FFD23F] text-[#1A3D7C] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      Mais vendido
                    </span>
                  )}
                  <img
                    src={produto.imagem}
                    alt={produto.nome}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <button 
                      onClick={() => addToCart(produto)} // Restaurado
                      className="bg-white text-[#1A3D7C] px-6 py-3 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform"
                    >
                      <ShoppingCart size={20} />
                      Adicionar
                    </button>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-[#1A3D7C] mb-2 leading-tight">{produto.nome}</h3>
                  <p className="text-gray-500 text-sm mb-4 flex-grow line-clamp-3">{produto.descricao}</p>
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-400 uppercase font-bold">Preço</span>
                      <span className="text-2xl font-bold text-[#1A3D7C]">R$ {produto.preco.toFixed(2).replace('.', ',')}</span>
                    </div>
                    <button 
                      onClick={() => addToCart(produto)}
                      className="w-10 h-10 rounded-full bg-[#1A3D7C] flex items-center justify-center text-white hover:bg-[#FFD23F] hover:text-[#1A3D7C] transition-colors"
                    >
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}
