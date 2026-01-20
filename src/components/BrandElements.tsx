import { motion } from 'framer-motion';
import { useState } from 'react';

// Utilitário para carregar imagem ou fallback SVG
const BrandAsset = ({ path, alt, className, FallbackComponent }: any) => {
  const [error, setError] = useState(false);

  if (error) return <FallbackComponent className={className} />;

  return (
    <img 
      src={path} 
      alt={alt} 
      className={className} 
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        if (target.src.includes('.jpg')) {
            target.src = target.src.replace('.jpg', '.png');
        } else if (target.src.includes('.png')) {
             if (!target.src.includes('tried_jpeg')) {
                 target.src = target.src.replace('.png', '.jpeg') + '?tried_jpeg=true';
             } else {
                 setError(true);
             }
        } else {
            setError(true);
        }
      }}
    />
  );
};

const SvgA = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="#FFD23F" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 80 Q 10 60, 50 20 Q 90 60, 80 80 M 30 60 Q 50 50, 70 60" />
  </svg>
);

const SvgStar = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="#FFD23F" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M50 5 L61 35 L95 35 L68 55 L79 85 L50 65 L21 85 L32 55 L5 35 L39 35 Z" />
  </svg>
);

const SvgCircle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="#FFD23F" strokeWidth="8">
    <circle cx="50" cy="50" r="40" />
  </svg>
);

const SvgBook = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 50" className={className} fill="none" stroke="#FFD23F" strokeWidth="8" strokeLinecap="round">
    <path d="M10 20 Q 25 10, 50 20 T 90 20" />
    <path d="M10 35 Q 25 25, 50 35 T 90 35" />
  </svg>
);

const SvgE = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="#FFD23F" strokeWidth="8" strokeLinecap="round">
    <path d="M70 40 Q 80 20, 50 20 Q 20 20, 20 50 Q 20 80, 50 80 L 80 80 M 20 50 L 80 50" />
  </svg>
);

const SvgExclamation = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 50 100" className={className} fill="none" stroke="#FFD23F" strokeWidth="8" strokeLinecap="round">
    <line x1="25" y1="10" x2="25" y2="60" />
    <circle cx="25" cy="80" r="4" fill="#FFD23F" stroke="none" />
  </svg>
);

const SvgFoneAnimated = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 250" className={className} fill="none" stroke="#FFD23F" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round">
    <motion.path d="M20 40 Q 50 20, 80 40 T 140 40 T 180 40" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, ease: "easeInOut" }} />
    <motion.path d="M20 65 Q 50 45, 80 65 T 140 65 T 180 65" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }} />
    <motion.path d="M40 150 Q 20 120, 60 80 Q 90 60, 100 120 Q 110 150, 90 180" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.4, ease: "easeInOut" }} />
    <motion.path d="M40 120 Q 80 110, 110 100" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }} />
    <motion.circle cx="140" cy="100" r="30" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }} />
    <motion.path d="M40 190 L 50 180 L 60 190 L 55 205 L 45 205 Z" initial={{ pathLength: 0, scale: 0 }} animate={{ pathLength: 1, scale: 1 }} transition={{ duration: 1, delay: 0.8 }} />
    <motion.path d="M120 150 Q 150 130, 160 160 Q 150 190, 120 220" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }} />
    <motion.line x1="100" y1="240" x2="160" y2="220" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 1.2 }} />
    <motion.circle cx="80" cy="250" r="6" fill="#FFD23F" stroke="none" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.4 }} />
  </svg>
);

export const LogoPrincipal = ({ className }: { className?: string }) => (
  <BrandAsset 
    path="/assets_marca/logo/logo-principal.png" 
    alt="Ensino em Cena"
    className={className}
    FallbackComponent={() => <span className={`text-[#FFD23F] font-bold text-2xl ${className}`}>Ensino em Cena</span>}
  />
);

export const FoneLogo = ({ className }: { className?: string }) => (
  <BrandAsset 
    path="/assets_marca/personagens/fone.png" 
    alt="Fonê"
    className={className}
    FallbackComponent={() => <SvgFoneAnimated className={className} />}
  />
);

export const PessoinhasGroup = ({ className }: { className?: string }) => (
  <BrandAsset
    path="/assets_marca/pessoinhas/aeiou.png"
    alt="Vogais da Vila"
    className={className}
    FallbackComponent={() => (
      <div className={`flex gap-2 ${className}`}>
        <span className="text-4xl font-bold text-[#FFD23F]">A</span>
        <span className="text-4xl font-bold text-[#FF6B6B]">E</span>
        <span className="text-4xl font-bold text-[#7A3EB1]">I</span>
        <span className="text-4xl font-bold text-[#1A3D7C]">O</span>
        <span className="text-4xl font-bold text-green-500">U</span>
      </div>
    )}
  />
);

export const RosePhoto = ({ className }: { className?: string }) => (
  <BrandAsset 
    path="/assets_marca/rose_gomes/perfil.png" 
    alt="Rose Gomes"
    className={className}
    FallbackComponent={() => <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=80" alt="Rose Placeholder" className={className} />}
  />
);

export const ElementA = ({ className }: { className?: string }) => (
  <BrandAsset path="/assets_marca/elementos/letra-a.png" alt="A de Aprendizagem" className={className} FallbackComponent={() => <SvgA className={className} />} />
);

export const ElementStar = ({ className }: { className?: string }) => (
  <BrandAsset path="/assets_marca/elementos/estrela.png" alt="Estrela Mágica" className={className} FallbackComponent={() => <SvgStar className={className} />} />
);

export const ElementCircle = ({ className }: { className?: string }) => (
  <BrandAsset path="/assets_marca/elementos/circulo.png" alt="Círculo de Luz" className={className} FallbackComponent={() => <SvgCircle className={className} />} />
);

export const ElementBook = ({ className }: { className?: string }) => (
  <BrandAsset path="/assets_marca/elementos/paginas-do-livro.png" alt="Páginas do Livro" className={className} FallbackComponent={() => <SvgBook className={className} />} />
);

export const ElementE = ({ className }: { className?: string }) => (
  <BrandAsset path="/assets_marca/elementos/letra-e.png" alt="E de Movimento" className={className} FallbackComponent={() => <SvgE className={className} />} />
);

export const ElementExclamation = ({ className }: { className?: string }) => (
  <BrandAsset path="/assets_marca/elementos/exclamacao.png" alt="Exclamação" className={className} FallbackComponent={() => <SvgExclamation className={className} />} />
);

export const EspetaculoCapa = ({ slug, titulo, className }: { slug: string, titulo: string, className?: string }) => {
    const path = `/assets_marca/espetaculos/capas/${slug}.jpg`;
    return (
        <BrandAsset 
            path={path} 
            alt={titulo} 
            className={className}
            FallbackComponent={() => (
                <div className={`${className} bg-gradient-to-br from-[#1A3D7C] to-[#7A3EB1] flex items-center justify-center text-white p-4 text-center`}>
                    <span className="font-bold text-lg">{titulo}</span>
                </div>
            )}
        />
    );
};

export const BrandPattern = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
    <ElementStar className="absolute top-10 left-[5%] w-24 h-24 text-[#FFD23F] rotate-12" />
    <ElementCircle className="absolute top-32 right-[10%] w-32 h-32 text-[#FFD23F]" />
    <ElementA className="absolute bottom-20 left-[20%] w-32 h-32 text-[#7A3EB1]" />
    <ElementExclamation className="absolute bottom-10 right-[5%] w-16 h-32 text-[#FFD23F]" />
  </div>
);
