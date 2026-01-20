import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Força bruta: reseta o scroll instantaneamente antes do browser pintar o frame
    document.documentElement.scrollTo(0, 0);
    document.body.scrollTo(0, 0); // Fallback para Safari antigo
    
    // Garantia dupla para navegadores que tentam restaurar posição
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
