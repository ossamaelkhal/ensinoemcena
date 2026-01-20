import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../../context/CartContext'; // Caminho corrigido para 2 níveis acima

export default function CartDrawer() {
  // Usando o hook e as propriedades corretas
  const { isCartOpen, toggleCart, items, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 z-50 flex justify-end"
          onClick={toggleCart} // Usa a função toggle
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="w-full max-w-md h-full bg-white flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold text-[#1A3D7C]">Meu Carrinho</h2>
              <button onClick={toggleCart} className="p-2 rounded-full hover:bg-gray-100">
                <X />
              </button>
            </div>

            {/* Itens */}
            <div className="flex-grow p-6 overflow-y-auto">
              {items.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-gray-500">Seu carrinho está vazio.</p>
                  <Link to="/loja" onClick={toggleCart} className="mt-4 inline-block bg-[#1A3D7C] text-white font-bold py-2 px-6 rounded-full">
                    Ver Produtos
                  </Link>
                </div>
              ) : (
                // Mapeando os `items` corretos
                items.map(item => <CartItemCard key={item.id} item={item} onRemove={removeFromCart} onUpdate={updateQuantity} />)
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
                <div className="p-6 border-t">
                    <div className="flex justify-between items-center font-bold text-lg mb-4">
                        <span>Subtotal</span>
                        {/* Usando o cartTotal calculado */}
                        <span>R$ {cartTotal.toFixed(2)}</span>
                    </div>
                    <Link to="/checkout" onClick={toggleCart} className="w-full block text-center bg-[#FFD23F] text-[#1A3D7C] font-bold py-3 px-6 rounded-full text-lg hover:bg-yellow-400 transition-all">
                        Finalizar Compra
                    </Link>
                </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Card de Item (consistente com o outro CartDrawer)
function CartItemCard({ item, onRemove, onUpdate }: any) {
  return (
    <div className="flex gap-4 mb-4 bg-gray-50 p-4 rounded-lg">
      {/* Assumindo que `imagem` é a propriedade correta */}
      <img src={item.imagem} alt={item.nome} className="w-20 h-20 rounded-md object-cover" />
      <div className="flex-grow">
        {/* Assumindo que `nome` é a propriedade correta */}
        <h3 className="font-bold text-gray-800">{item.nome}</h3>
        <p className="text-sm text-gray-500">R$ {item.preco.toFixed(2)}</p>
        <div className="flex items-center gap-2 mt-2">
          <button onClick={() => onUpdate(item.id, -1)} className="p-1 rounded-full border hover:bg-gray-200"><Minus size={14}/></button>
          <span className="font-bold w-6 text-center">{item.quantidade}</span>
          <button onClick={() => onUpdate(item.id, 1)} className="p-1 rounded-full border hover:bg-gray-200"><Plus size={14}/></button>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end">
        <button onClick={() => onRemove(item.id)} className="text-red-500 hover:text-red-700 p-1">
          <Trash2 size={18} />
        </button>
        <p className="font-extrabold text-lg text-gray-800">R$ {(item.preco * item.quantidade).toFixed(2)}</p>
      </div>
    </div>
  );
}
