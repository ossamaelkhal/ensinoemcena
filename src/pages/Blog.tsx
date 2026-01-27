import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, User, ArrowRight, Search, Tag } from 'lucide-react';
import { DataService } from '../services/dataService';
import { BlogPost } from '../types/schema';

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('Todos');

  const categories = ['Todos', 'Gestão escolar', 'Dicas pedagógicas', 'Novidades', 'Bastidores'];

  useEffect(() => {
    const load = async () => {
      const data = await DataService.getBlogPosts();
      setPosts(data);
      setFilteredPosts(data);
      setLoading(false);
    };
    load();
  }, []);

  const filterPosts = (category: string) => {
    setActiveCategory(category);
    if (category === 'Todos') {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter(post => post.categoria === category));
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center text-[#1A3D7C]">Carregando conteúdo...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section do Blog */}
      <section className="bg-[#1A3D7C] text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#7A3EB1] rounded-full blur-[120px] opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFD23F] rounded-full blur-[100px] opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Blog Ensino em Cena
          </motion.h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light">
            Insights sobre educação, arte e gestão escolar para transformar sua prática pedagógica.
          </p>
        </div>
      </section>

      {/* Navegação e Filtros */}
      <section className="py-10 border-b border-gray-200 bg-white sticky top-0 z-30 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => filterPosts(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat 
                    ? 'bg-[#1A3D7C] text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Posts */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full group"
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={post.imagemCapa} 
                  alt={post.titulo} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-[#1A3D7C] flex items-center gap-1 shadow-sm">
                  <Tag size={12} />
                  {post.categoria}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1"><Clock size={14} /> {post.tempoLeitura}</span>
                  <span className="flex items-center gap-1"><User size={14} /> {post.autor}</span>
                </div>

                <h2 className="text-xl font-bold text-[#1A3D7C] mb-4 leading-tight group-hover:text-[#7A3EB1] transition-colors">
                  <Link to={`/blog/${post.slug}`}>
                    {post.titulo}
                  </Link>
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {post.resumo}
                </p>

                <Link 
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-[#7A3EB1] font-bold text-sm hover:translate-x-1 transition-transform"
                >
                  Ler artigo completo <ArrowRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20 opacity-60">
            <Search size={48} className="mx-auto mb-4 text-gray-400" />
            <p className="text-xl text-gray-500">Nenhum artigo encontrado nesta categoria.</p>
          </div>
        )}
      </section>

      {/* Newsletter / CTA */}
      <section className="bg-[#FFD23F] py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#1A3D7C] mb-6">Não perca nenhum conteúdo</h2>
          <p className="text-[#1A3D7C] mb-8 max-w-2xl mx-auto">
            Junte-se a mais de 5.000 educadores que recebem nossas dicas exclusivas.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              className="px-6 py-4 rounded-full border-none outline-none focus:ring-2 focus:ring-[#1A3D7C] w-full"
            />
            <button className="bg-[#1A3D7C] text-white px-8 py-4 rounded-full font-bold hover:bg-[#2a55a3] transition-colors whitespace-nowrap">
              Inscrever-se
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
