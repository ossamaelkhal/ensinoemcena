import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, CreditCard, QrCode, MessageCircle } from 'lucide-react';
import { DataService } from '../../services/dataService';

export default function Checkout() {
  const { items, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    pagamento: 'pix'
  });

  if (items.length === 0 && step === 1) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Seu carrinho está vazio</h2>
          <button onClick={() => navigate('/loja')} className="text-[#1A3D7C] underline">Voltar para Loja</button>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Salvar pedido no Firebase
    await DataService.saveLead({
      nome: formData.nome,
      email: formData.email,
      telefone: formData.telefone,
      tipo: 'responsavel',
      interesse: 'Compra Loja',
      mensagem: `Pedido Loja: ${items.map(i => `${i.quantidade}x ${i.nome}`).join(', ')}. Total: R$ ${cartTotal.toFixed(2)}`
    });

    setLoading(false);
    setStep(2);
    clearCart();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const finalizeWhatsApp = () => {
    const msg = `Olá! Fiz um pedido no site:
    
*Cliente:* ${formData.nome}
*Itens:* ${items.map(i => `${i.quantidade}x ${i.nome}`).join(', ')}
*Total:* R$ ${cartTotal.toFixed(2)}
*Pagamento:* ${formData.pagamento.toUpperCase()}

Aguardo o link para pagamento!`;
    
    window.open(`https://wa.me/5531996739694?text=${encodeURIComponent(msg)}`, '_blank');
    navigate('/');
  };

  if (step === 2) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-[#1A3D7C] mb-2">Pedido Reservado!</h2>
          <p className="text-gray-600 mb-6">
            Para sua segurança, finalizamos o pagamento via WhatsApp com nossa equipe.
          </p>
          
          <button 
            onClick={finalizeWhatsApp}
            className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold hover:bg-[#20bd5a] flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-transform"
          >
            <MessageCircle size={24} />
            Pagar e Finalizar no WhatsApp
          </button>
          
          <p className="text-xs text-gray-400 mt-4">
            Você falará diretamente com um consultor da Ensino em Cena.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-[#1A3D7C] mb-8 text-center">Finalizar Compra</h1>
        
        <div className="flex flex-col lg:flex-row gap-8 max-w-4xl mx-auto">
          <div className="lg:w-2/3 bg-white p-8 rounded-2xl shadow-sm">
            <form id="checkout-form" onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">Seus Dados</h2>
                <div className="space-y-4">
                  <input required name="nome" placeholder="Nome Completo" onChange={handleInputChange} className="w-full p-3 border rounded-lg" />
                  <input required name="email" type="email" placeholder="E-mail" onChange={handleInputChange} className="w-full p-3 border rounded-lg" />
                  <input required name="telefone" placeholder="WhatsApp (com DDD)" onChange={handleInputChange} className="w-full p-3 border rounded-lg" />
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">Forma de Pagamento Preferida</h2>
                <div className="grid grid-cols-2 gap-4">
                  <label className={`border-2 rounded-xl p-4 flex flex-col items-center cursor-pointer transition-all ${formData.pagamento === 'pix' ? 'border-[#1A3D7C] bg-blue-50' : 'border-gray-100'}`}>
                    <input type="radio" name="pagamento" value="pix" className="hidden" defaultChecked onChange={handleInputChange} />
                    <QrCode size={24} className="mb-2 text-[#1A3D7C]" />
                    <span className="font-bold text-sm">PIX</span>
                  </label>
                  <label className={`border-2 rounded-xl p-4 flex flex-col items-center cursor-pointer transition-all ${formData.pagamento === 'cartao' ? 'border-[#1A3D7C] bg-blue-50' : 'border-gray-100'}`}>
                    <input type="radio" name="pagamento" value="cartao" className="hidden" onChange={handleInputChange} />
                    <CreditCard size={24} className="mb-2 text-[#1A3D7C]" />
                    <span className="font-bold text-sm">Cartão</span>
                  </label>
                </div>
              </div>
            </form>
          </div>

          <div className="lg:w-1/3">
            <div className="bg-white p-6 rounded-2xl shadow-lg sticky top-24">
              <h3 className="text-xl font-bold text-[#1A3D7C] mb-4">Resumo</h3>
              <div className="space-y-3 mb-6 max-h-60 overflow-y-auto">
                {items.map(item => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>{item.quantidade}x {item.nome}</span>
                    <span className="font-bold">R$ {(item.preco * item.quantidade).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4 flex justify-between text-xl font-bold text-[#1A3D7C]">
                <span>Total</span>
                <span>R$ {cartTotal.toFixed(2)}</span>
              </div>
              <button 
                type="submit"
                form="checkout-form"
                disabled={loading}
                className="w-full mt-6 bg-[#FFD23F] text-[#1A3D7C] py-4 rounded-xl font-bold hover:bg-[#FFCA45] transition-colors disabled:opacity-50"
              >
                {loading ? 'Processando...' : 'Confirmar Pedido'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
