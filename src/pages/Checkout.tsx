import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import { ShoppingCart, User, Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { DataService } from '../services/dataService';
import { useState } from 'react';

export default function Checkout() {
  const { items, cartTotal, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const whatsappNumber = '5531991873104';

  const handleFinishOrder = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const orderDetails = {
        ...data,
        produtos: items.map(item => `${item.quantidade}x ${item.nome}`).join(', '), 
        valorTotal: cartTotal,
        data: new Date(),
        status: 'pendente'
    };

    console.log("Processando pedido...", orderDetails);

    // Tenta salvar no Firebase (se disponível)
    const result = await DataService.saveOrder(orderDetails as any); 
    
    // Constrói mensagem do WhatsApp
    const produtosMsg = items.map(i => `• ${i.quantidade}x ${i.nome}`).join('\n');
    const msg = `
*NOVO PEDIDO - SITE* 🛍️

*Cliente:* ${data.nome}
*Email:* ${data.email}
*Tel:* ${data.telefone}

*Produtos:*
${produtosMsg}

*Total:* R$ ${cartTotal.toFixed(2)}

*Endereço:*
${data.endereco}
    `.trim();

    const linkZap = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;

    // Feedback visual
    if (result.success) {
        // Se salvou no banco, ótimo
        console.log("Pedido salvo no banco com ID:", result.orderId);
    } else {
        // Se falhou no banco, o Zap é o backup
        console.warn("Pedido não salvo no banco, indo via WhatsApp apenas.");
    }

    // Ação final para o usuário
    setTimeout(() => {
        window.open(linkZap, '_blank');
        clearCart();
        setIsSubmitting(false);
        // Opcional: Redirecionar para uma página de "Obrigado"
        window.location.href = '/'; 
    }, 1500);
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-20 min-h-[60vh] flex flex-col justify-center items-center">
        <div className="bg-gray-100 p-6 rounded-full mb-4">
            <ShoppingCart size={48} className="text-gray-400" />
        </div>
        <h2 className="text-2xl font-bold text-gray-700 mt-4">Seu carrinho está vazio.</h2>
        <p className="text-gray-500 mb-6">Volte para a loja para adicionar produtos.</p>
        <a href="/loja" className="bg-[#1A3D7C] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#2a55a3] transition-colors">
            Ir para a Loja
        </a>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto max-w-4xl"
      >
        <h1 className="text-4xl font-bold text-[#1A3D7C] text-center mb-10">Finalizar Compra</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário de Dados */}
          <div className="bg-white p-8 rounded-2xl shadow-lg order-2 lg:order-1">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <User size={22} /> Seus Dados para Entrega
            </h2>
            <form onSubmit={handleFinishOrder} className="space-y-4">
              <div className="relative">
                <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"/>
                <input required type="text" name="nome" placeholder="Nome completo" className="w-full p-3 pl-10 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#1A3D7C] outline-none" />
              </div>
              <div className="relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"/>
                <input required type="email" name="email" placeholder="Seu melhor e-mail" className="w-full p-3 pl-10 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#1A3D7C] outline-none" />
              </div>
              <div className="relative">
                <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"/>
                <input required type="text" name="telefone" placeholder="Telefone / WhatsApp" className="w-full p-3 pl-10 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#1A3D7C] outline-none" />
              </div>
              <hr className="my-6 border-gray-100"/>
              <div className="relative">
                <MapPin size={16} className="absolute left-4 top-5 text-gray-400"/>
                <textarea required name="endereco" placeholder="Endereço completo para entrega (Rua, Número, Bairro, Cidade/Estado, CEP)" rows={4} className="w-full p-3 pl-10 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#1A3D7C] outline-none resize-none"></textarea>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-800 flex items-start gap-2">
                <MessageCircle size={16} className="mt-0.5 shrink-0" />
                <p>Ao finalizar, você será redirecionado para o WhatsApp para confirmar o pedido e combinar o pagamento diretamente com nossa equipe.</p>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg ${
                    isSubmitting 
                    ? 'bg-gray-400 text-gray-100 cursor-not-allowed' 
                    : 'bg-green-600 text-white hover:bg-green-700 hover:-translate-y-1'
                }`}
              >
                {isSubmitting ? 'Processando...' : (
                    <>
                        <Send size={18}/>
                        Finalizar no WhatsApp
                    </>
                )}
              </button>
            </form>
          </div>

          {/* Resumo do Pedido */}
          <div className="bg-white p-8 rounded-2xl shadow-lg h-fit order-1 lg:order-2 sticky top-24">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <ShoppingCart size={22} /> Resumo
            </h2>
            <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
              {items.map(item => (
                <div key={item.id} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                  <div>
                    <p className="font-bold text-gray-700 text-sm">{item.nome}</p>
                    <p className="text-xs text-gray-500">Qtd: {item.quantidade}</p>
                  </div>
                  <p className="font-bold text-sm">R$ {(item.preco * item.quantidade).toFixed(2)}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-bold">R$ {cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center mb-4 text-sm text-green-600">
                  <span>Frete</span>
                  <span className="font-bold">A combinar</span>
              </div>
              <div className="flex justify-between font-bold text-xl text-[#1A3D7C] pt-4 border-t border-gray-100">
                <p>Total Estimado</p>
                <p>R$ {cartTotal.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
