import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Accessibility, Type, Sun, Moon, X } from 'lucide-react';

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100); // %
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    // Aplica as mudanças no HTML root
    const root = document.documentElement;
    root.style.fontSize = `${fontSize}%`;
    
    if (highContrast) {
      root.classList.add('high-contrast');
      document.body.style.filter = 'contrast(1.2) grayscale(0.1)';
    } else {
      root.classList.remove('high-contrast');
      document.body.style.filter = 'none';
    }
  }, [fontSize, highContrast]);

  return (
    <div className="fixed left-6 bottom-6 z-50 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="mb-4 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 w-64 origin-bottom-left"
          >
            <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-2">
              <h3 className="font-bold text-[#1A3D7C] flex items-center gap-2">
                <Accessibility size={18} /> Acessibilidade
              </h3>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X size={16} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-500 font-bold mb-2 uppercase">Tamanho do Texto</p>
                <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
                  <button 
                    onClick={() => setFontSize(Math.max(90, fontSize - 10))}
                    className="flex-1 py-1 text-sm font-bold hover:bg-white rounded shadow-sm transition-all"
                  >
                    A-
                  </button>
                  <span className="flex items-center text-xs font-mono text-gray-500">{fontSize}%</span>
                  <button 
                    onClick={() => setFontSize(Math.min(130, fontSize + 10))}
                    className="flex-1 py-1 text-sm font-bold hover:bg-white rounded shadow-sm transition-all"
                  >
                    A+
                  </button>
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-500 font-bold mb-2 uppercase">Visual</p>
                <button
                  onClick={() => setHighContrast(!highContrast)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-all ${highContrast ? 'bg-[#1A3D7C] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  <span className="flex items-center gap-2 text-sm font-medium">
                    {highContrast ? <Sun size={16} /> : <Moon size={16} />}
                    {highContrast ? 'Contraste Normal' : 'Alto Contraste'}
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 ${isOpen ? 'bg-[#1A3D7C] text-white' : 'bg-white text-[#1A3D7C] hover:bg-[#1A3D7C] hover:text-white border-2 border-[#1A3D7C]'}`}
        title="Opções de Acessibilidade"
      >
        <Accessibility size={24} />
      </button>
    </div>
  );
}
