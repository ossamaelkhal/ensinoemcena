import { Link } from 'react-router-dom';
import { MessageCircle, PlayCircle, Sparkles, ChevronDown } from 'lucide-react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export default function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Configuração Spring para suavizar o movimento
  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Transformações para o efeito Parallax reverso (fundo move oposto ao mouse)
  const x = useTransform(springX, [-0.5, 0.5], [20, -20]);
  const y = useTransform(springY, [-0.5, 0.5], [20, -20]);

  // Transformações para o "Spotlight" (segue o mouse)
  const spotlightX = useTransform(springX, [-0.5, 0.5], [-100, 100]); 
  const spotlightY = useTransform(springY, [-0.5, 0.5], [-100, 100]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    // Normaliza para -0.5 a 0.5
    mouseX.set((clientX / innerWidth) - 0.5);
    mouseY.set((clientY / innerHeight) - 0.5);
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f172a]"
    >
      
      {/* 1. CAMADA DE VÍDEO INTERATIVA (Parallax) */}
      <motion.div 
        style={{ x, y, scale: 1.1 }} // Scale 1.1 para evitar bordas brancas ao mover
        className="absolute inset-0 z-0"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
          poster="https://images.unsplash.com/photo-1507676184212-d03ab07a11d0?q=80&w=2071&auto=format&fit=crop"
        >
          {/* Vídeo: Partículas Mágicas / Teatro Etéreo */}
          <source 
            src="https://videos.pexels.com/video-files/6953559/6953559-uhd_2560_1440_25fps.mp4" 
            type="video/mp4" 
          />
        </video>
        
        {/* Overlay Gradiente Sofisticado */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A3D7C]/70 via-[#0f172a]/50 to-[#0f172a] mix-blend-multiply" />
        
        {/* Spotlight Interativo (Luz que segue o mouse) */}
        <motion.div 
            style={{ x: spotlightX, y: spotlightY }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,210,63,0.15)_0%,transparent_50%)] pointer-events-none mix-blend-screen"
        />
      </motion.div>

      {/* 2. ELEMENTOS FLUTUANTES (Profundidade) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Esfera Roxa */}
        <motion.div 
          style={{ x: useTransform(springX, [-0.5, 0.5], [-30, 30]), y: useTransform(springY, [-0.5, 0.5], [-30, 30]) }}
          className="absolute top-20 right-20 w-[600px] h-[600px] bg-[#7A3EB1]/20 rounded-full blur-[120px]"
        />
        {/* Esfera Dourada */}
        <motion.div 
           style={{ x: useTransform(springX, [-0.5, 0.5], [30, -30]), y: useTransform(springY, [-0.5, 0.5], [30, -30]) }}
           className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#FFD23F]/10 rounded-full blur-[100px]"
        />
      </div>

      {/* 3. CONTEÚDO PRINCIPAL */}
      <div className="container mx-auto px-4 relative z-20 text-center flex flex-col items-center justify-center h-full pt-20">
        
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-2 text-[#FFD23F] text-xs md:text-sm font-bold mb-8 shadow-2xl tracking-[0.2em] uppercase"
        >
          <Sparkles size={14} />
          <span>Excelência em Teatro Pedagógico</span>
        </motion.div>

        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tight drop-shadow-xl"
        >
          Onde a educação <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD23F] via-[#FFE5A0] to-[#FFD23F]">
            ganha vida
          </span>
        </motion.h1>

        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
        >
          Transforme o currículo escolar em uma experiência inesquecível.
          <br className="hidden md:block" />
          Arte, emoção e BNCC no mesmo palco.
        </motion.p>

        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 w-full justify-center items-center"
        >
          <Link
            to="/contato"
            className="group relative px-10 py-5 bg-[#FFD23F] text-[#1A3D7C] rounded-full font-bold text-lg overflow-hidden shadow-[0_0_40px_-10px_rgba(255,210,63,0.4)] hover:shadow-[0_0_60px_-10px_rgba(255,210,63,0.6)] transition-all transform hover:-translate-y-1 w-full sm:w-auto text-center"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              <MessageCircle size={20} strokeWidth={2.5} />
              Solicitar Orçamento
            </span>
            <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 ease-in-out skew-x-12" />
          </Link>
          
          <Link
            to="/espetaculos"
            className="group px-10 py-5 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center gap-3 w-full sm:w-auto text-center"
          >
            <PlayCircle size={20} className="text-[#FFD23F] group-hover:scale-110 transition-transform" />
            Ver Catálogo
          </Link>
        </motion.div>

      </div>

      {/* Scroll Down Hint */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 z-20 pointer-events-none"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
