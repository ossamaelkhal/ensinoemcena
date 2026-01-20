import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedRoutes from './components/AnimatedRoutes';
import { CartProvider } from './context/CartContext';
import { BookingProvider } from './context/BookingContext';
import { AuthProvider } from './context/AuthContext';
import CartDrawer from './components/shop/CartDrawer';
import BookingWizard from './components/shop/BookingWizard';
import ScrollToTop from './components/ScrollToTop';
import AccessibilityWidget from './components/AccessibilityWidget'; // Novo

function App() {
  return (
    <AuthProvider>
      <BookingProvider>
        <CartProvider>
          <Router>
            <ScrollToTop />
            <div className="min-h-screen flex flex-col bg-gray-50">
              <Header />
              <CartDrawer />
              <BookingWizard />
              <AccessibilityWidget /> {/* Inclusão Real */}
              <main className="flex-grow">
                <AnimatedRoutes />
              </main>
              <Footer />
            </div>
          </Router>
        </CartProvider>
      </BookingProvider>
    </AuthProvider>
  );
}

export default App;
