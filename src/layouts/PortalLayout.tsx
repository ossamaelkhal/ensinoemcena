import { useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { 
  BookOpen, 
  LayoutDashboard, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  Users,
  BarChart3
} from 'lucide-react';

export default function PortalLayout() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', path: '/portal', icon: LayoutDashboard },
    { name: 'CRM / Pipeline', path: '/portal/crm', icon: BarChart3, badge: 'Novo' }, // CRM adicionado
    { name: 'Meus Materiais', path: '/portal/materiais', icon: BookOpen },
    { name: 'Alunos (IA)', path: '/portal/alunos', icon: Users, badge: 'Beta' },
    { name: 'Configurações', path: '/portal/config', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar Mobile Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <aside 
        className={`
          fixed md:static inset-y-0 left-0 z-50 w-64 bg-[#1A3D7C] text-white transform transition-transform duration-300 ease-in-out shadow-xl
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0 md:w-20 lg:w-64'}
        `}
      >
        <div className="h-full flex flex-col">
          {/* Logo Area */}
          <div className="h-16 flex items-center justify-between px-4 bg-[#0f244a]">
            <span className={`font-bold text-[#FFD23F] text-xl truncate ${!isSidebarOpen && 'md:hidden lg:block'}`}>
              Portal do Educador
            </span>
            <span className={`font-bold text-[#FFD23F] text-xl md:block lg:hidden ${isSidebarOpen ? 'hidden' : 'block'}`}>
              EC
            </span>
            <button 
              onClick={() => setSidebarOpen(false)} 
              className="md:hidden text-white"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 py-6 space-y-2 px-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    flex items-center px-4 py-3 rounded-lg transition-colors relative group
                    ${isActive ? 'bg-[#FFD23F] text-[#1A3D7C] font-bold' : 'text-gray-300 hover:bg-white/10 hover:text-white'}
                  `}
                >
                  <Icon size={22} className="flex-shrink-0" />
                  <span className={`ml-3 whitespace-nowrap transition-all duration-300 ${!isSidebarOpen && 'md:hidden lg:inline'}`}>
                    {item.name}
                  </span>
                  
                  {/* Badge */}
                  {item.badge && (
                    <span className={`absolute right-2 px-1.5 py-0.5 text-[10px] font-bold rounded bg-[#FF6B6B] text-white ${!isSidebarOpen && 'md:hidden lg:inline'}`}>
                      {item.badge}
                    </span>
                  )}

                  {!isSidebarOpen && (
                    <div className="hidden md:block lg:hidden absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 whitespace-nowrap z-50 pointer-events-none">
                      {item.name}
                    </div>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* User Profile & Logout */}
          <div className="p-4 bg-[#0f244a] border-t border-white/10">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-[#FFD23F] flex items-center justify-center text-[#1A3D7C] font-bold">
                AD
              </div>
              <div className={`ml-3 overflow-hidden ${!isSidebarOpen && 'md:hidden lg:block'}`}>
                <p className="text-sm font-medium text-white truncate">Administrador</p>
                <p className="text-xs text-gray-400 truncate">Ensino em Cena</p>
              </div>
              <Link to="/" className={`ml-auto text-gray-400 hover:text-white ${!isSidebarOpen && 'md:hidden lg:block'}`}>
                <LogOut size={18} />
              </Link>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm h-16 flex items-center px-4 md:hidden">
          <button 
            onClick={() => setSidebarOpen(true)}
            className="text-gray-600 hover:text-gray-900"
          >
            <Menu size={24} />
          </button>
          <span className="ml-4 font-bold text-[#1A3D7C]">Portal Admin</span>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
