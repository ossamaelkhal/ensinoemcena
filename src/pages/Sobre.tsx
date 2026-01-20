import { BookOpen, Users, Lightbulb, Heart, Mic2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BrandPattern, 
  LogoPrincipal, 
  FoneLogo, 
  ElementA, 
  ElementStar, 
  ElementCircle, 
  ElementBook, 
  ElementE, 
  ElementExclamation,
  RosePhoto
} from '../components/BrandElements';

export default function Sobre() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#1A3D7C]">
        <BrandPattern />
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=80" 
            alt="Teatro na Escola" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A3D7C] via-transparent to-[#1A3D7C]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring" }}
            className="w-48 mx-auto mb-8"
          >
            <LogoPrincipal className="w-full h-auto drop-shadow-xl" />
          </motion.div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Aqui, o aprender é um <span className="text-[#FFD23F]">espetáculo</span>.
          </motion.h1>
        </div>
      </section>

      {/* A Fundadora */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute -right-20 top-20 w-96 h-96 bg-[#FFD23F]/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto">
            <div className="md:w-1/3 relative">
              <div className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl transform -rotate-3 border-8 border-white relative z-10 hover:rotate-0 transition-transform duration-500">
                <RosePhoto className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1A3D7C] to-transparent p-8 pt-24">
                  <p className="text-white font-bold text-2xl">Rose Gomes</p>
                  <p className="text-[#FFD23F] font-medium uppercase tracking-wider text-sm">Fundadora</p>
                </div>
              </div>
              <ElementCircle className="absolute -top-12 -left-12 w-48 h-48 text-[#7A3EB1]/20 z-0 animate-pulse" />
            </div>

            <div className="md:w-2/3 space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A3D7C] leading-tight">
                A Magia por trás da cortina
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  A <strong>Ensino em Cena®</strong> é a materialização do sonho da professora <strong>Rose Gomes</strong>. Unindo a precisão da Língua Portuguesa com a liberdade do Teatro, ela criou uma metodologia onde as vogais têm personalidade e a gramática tem humor.
                </p>
                <p>
                  Nossa missão é transformar o processo de aprendizagem em uma experiência significativa, lúdica e memorável, utilizando a linguagem teatral como ferramenta pedagógica para promover o desenvolvimento integral de crianças e adolescentes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O Fonê e a Identidade Visual */}
      <section className="py-24 bg-[#1A3D7C] text-white relative overflow-hidden">
        <BrandPattern />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto mb-20">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-block bg-[#FFD23F] text-[#1A3D7C] px-4 py-1 rounded-full font-bold text-sm mb-6 uppercase tracking-widest">
                Nosso Mascote
              </div>
              <h2 className="text-4xl font-bold mb-6">Conheça o Fonê</h2>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                O Fonê é o personagem lúdico que representa a essência criativa da nossa marca. Com suas curvas que evocam movimento e voz, ele simboliza a alegria de aprender brincando.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-80 h-80 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#FFD23F]/20 rounded-full blur-3xl"></div>
                <FoneLogo className="w-full h-full drop-shadow-2xl text-[#FFD23F]" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            <div className="flex flex-col items-center text-center group">
              <ElementA className="w-20 h-20 text-[#FFD23F] mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold text-white text-lg">Aprendizagem</h4>
            </div>
            <div className="flex flex-col items-center text-center group">
              <ElementStar className="w-20 h-20 text-[#FF6B6B] mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold text-white text-lg">Magia</h4>
            </div>
            <div className="flex flex-col items-center text-center group">
              <ElementCircle className="w-20 h-20 text-[#7A3EB1] mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold text-white text-lg">Foco</h4>
            </div>
            <div className="flex flex-col items-center text-center group">
              <ElementBook className="w-32 h-16 text-[#FFD23F] mb-8 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold text-white text-lg">Conhecimento</h4>
            </div>
            <div className="flex flex-col items-center text-center group">
              <ElementE className="w-20 h-20 text-[#FF6B6B] mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold text-white text-lg">Movimento</h4>
            </div>
            <div className="flex flex-col items-center text-center group">
              <ElementExclamation className="w-10 h-20 text-[#7A3EB1] mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold text-white text-lg">Missão Única</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Serviços (Linkáveis) */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-[#1A3D7C] mb-6">Além dos Espetáculos</h2>
            <p className="text-xl text-gray-600">Clique nos itens abaixo para conhecer nosso catálogo completo.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Mic2, color: "text-[#1A3D7C]", bg: "bg-[#1A3D7C]", title: "Palestras", desc: "Para Educadores" },
              { icon: Users, color: "text-[#7A3EB1]", bg: "bg-[#7A3EB1]", title: "Treinamentos", desc: "Para Gestores" },
              { icon: BookOpen, color: "text-[#FFD23F]", bg: "bg-[#FFD23F]", title: "Oficinas", desc: "Para Estudantes" },
              { icon: Heart, color: "text-[#FF6B6B]", bg: "bg-[#FF6B6B]", title: "Workshops", desc: "Para Famílias" }
            ].map((item, idx) => (
              <Link to="/palestras" key={idx}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-transparent hover:border-current transition-all group h-full cursor-pointer"
                  style={{ borderColor: item.color.replace('text-', '') }}
                >
                  <div className={`w-16 h-16 ${item.bg}/10 rounded-2xl flex items-center justify-center ${item.color} mb-6 group-hover:scale-110 transition-transform`}>
                    <item.icon size={32} />
                  </div>
                  <h3 className={`text-xl font-bold ${item.color} mb-3`}>{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
