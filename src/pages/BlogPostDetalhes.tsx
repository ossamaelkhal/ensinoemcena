import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Clock, User, ArrowLeft, Calendar, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { DataService } from '../services/dataService';
import { BlogPost } from '../types/schema';

export default function BlogPostDetalhes() {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const load = async () => {
      if (slug) {
        const data = await DataService.getBlogPostBySlug(slug);
        setPost(data);
        setLoading(false);
      }
    };
    load();
  }, [slug]);

  if (loading) return <div className="min-h-screen flex items-center justify-center text-[#1A3D7C]">Carregando artigo...</div>;
  if (!post) return <div className="min-h-screen flex items-center justify-center">Artigo não encontrado.</div>;

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Barra de Progresso de Leitura */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-2 bg-[#FFD23F] origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Header do Artigo */}
      <header className="relative h-[60vh] min-h-[500px]">
        <div className="absolute inset-0">
          <img src={post.imagemCapa} alt={post.titulo} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A3D7C] via-[#1A3D7C]/60 to-transparent" />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white container mx-auto">
          <Link to="/blog" className="inline-flex items-center text-white/80 hover:text-[#FFD23F] mb-6 transition-colors bg-black/20 backdrop-blur px-4 py-2 rounded-full text-sm">
            <ArrowLeft size={16} className="mr-2" /> Voltar para o Blog
          </Link>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-[#FFD23F] text-[#1A3D7C] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              {post.categoria}
            </span>
            {post.tags.map(tag => (
              <span key={tag} className="bg-white/20 backdrop-blur text-white px-3 py-1 rounded-full text-xs">
                #{tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight max-w-4xl">
            {post.titulo}
          </h1>

          <div className="flex items-center gap-6 text-sm md:text-base text-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#FFD23F] rounded-full flex items-center justify-center text-[#1A3D7C] font-bold">
                {post.autor[0]}
              </div>
              <span>Por <strong>{post.autor}</strong></span>
            </div>
            <span className="flex items-center gap-2"><Calendar size={18} /> {post.dataPublicacao}</span>
            <span className="flex items-center gap-2"><Clock size={18} /> {post.tempoLeitura} de leitura</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
          
          {/* Conteúdo Principal */}
          <article className="lg:w-2/3">
            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed mb-10 border-l-4 border-[#FFD23F] pl-6 italic">
              {post.resumo}
            </p>
            
            <div 
              className="prose prose-lg prose-headings:text-[#1A3D7C] prose-a:text-[#7A3EB1] max-w-none text-gray-700 leading-loose"
              dangerouslySetInnerHTML={{ __html: post.conteudo }}
            />

            {/* Compartilhamento */}
            <div className="mt-16 pt-8 border-t border-gray-100">
              <h3 className="text-gray-900 font-bold mb-4 flex items-center gap-2">
                <Share2 size={20} /> Compartilhe este conhecimento:
              </h3>
              <div className="flex gap-4">
                <button className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"><Facebook size={20} /></button>
                <button className="p-3 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors"><Twitter size={20} /></button>
                <button className="p-3 bg-blue-800 text-white rounded-full hover:bg-blue-900 transition-colors"><Linkedin size={20} /></button>
              </div>
            </div>
          </article>

          {/* Sidebar Estratégica (Venda) */}
          <aside className="lg:w-1/3 space-y-8">
            <div className="bg-[#1A3D7C] text-white p-8 rounded-2xl shadow-xl sticky top-24">
              <h3 className="text-2xl font-bold text-[#FFD23F] mb-4">
                Gostou do tema?
              </h3>
              <p className="mb-6 text-blue-100">
                Leve essa experiência prática para seus alunos. O Teatro Ensino em Cena transforma esses conceitos em vivência real.
              </p>
              
              <div className="bg-white/10 p-4 rounded-lg mb-6 border border-white/10">
                <h4 className="font-bold text-white mb-2">Próximo Passo:</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">✓ Agende uma visita</li>
                  <li className="flex items-center gap-2">✓ Receba o material pedagógico</li>
                  <li className="flex items-center gap-2">✓ Transforme sua escola</li>
                </ul>
              </div>

              <Link 
                to="/contato"
                className="block w-full bg-[#FFD23F] text-[#1A3D7C] text-center font-bold py-4 rounded-xl hover:bg-[#FFCA45] transition-colors shadow-lg"
              >
                Falar com Consultor
              </Link>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h4 className="font-bold text-gray-800 mb-4">Tags Relacionadas</h4>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="text-xs font-bold text-gray-600 bg-white border border-gray-200 px-3 py-1 rounded hover:border-[#1A3D7C] hover:text-[#1A3D7C] transition-colors cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
