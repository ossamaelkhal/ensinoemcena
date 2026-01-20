import { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  // Inicialização síncrona para evitar "falso negativo" no primeiro render
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const token = localStorage.getItem('admin_token');
    return token === 'ensino-secret-123';
  });

  const login = (password: string) => {
    if (password === 'admin123') { 
      localStorage.setItem('admin_token', 'ensino-secret-123');
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('admin_token');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
