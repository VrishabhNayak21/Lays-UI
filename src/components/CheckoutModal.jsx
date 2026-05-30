import React, { useState } from 'react';
import { X, Sparkles, CreditCard, ShoppingBag, MapPin, CheckCircle, Loader } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CheckoutModal({ flavor, quantity, price, image, isOpen, onClose }) {
  const [step, setStep] = useState('summary'); // 'summary', 'processing', 'success'
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');
  const [card, setCard] = useState('');

  const flavorNames = {
    blue: "India's Magic Masala",
    red: "Spanish Tomato Tangy",
    green: "American Style Cream & Onion",
    white: "West Indies Sweet Chilli",
    yellow: "Classic Salted",
  };

  const flavorColors = {
    blue: "bg-blue-600 hover:bg-blue-700",
    red: "bg-red-600 hover:bg-red-700",
    green: "bg-emerald-700 hover:bg-emerald-800",
    white: "bg-gray-800 hover:bg-black",
    yellow: "bg-yellow-500 hover:bg-yellow-600 text-[#0d0f24]",
  };

  const subtotal = quantity * price;
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const handleCheckout = (e) => {
    e.preventDefault();
    if (!name || !address || !card) {
      alert("Please fill in all checkout fields.");
      return;
    }
    setStep('processing');
    
    // Simulate transaction delay
    setTimeout(() => {
      setStep('success');
      
      // Gorgeous premium burst confetti!
      const duration = 2.5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

      const randomInRange = (min, max) => Math.random() * (max - min) + min;

      const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
      }, 250);
      
    }, 2000);
  };

  const resetModal = () => {
    setStep('summary');
    setAddress('');
    setName('');
    setCard('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md">
      <div className="relative w-full max-w-md bg-slate-900 border border-white/10 rounded-3xl p-5 md:p-6 text-white shadow-2xl overflow-hidden max-h-[95vh] flex flex-col">
        {/* Absolute Background Highlights - Added pointer-events-none to prevent blocking the X close button */}
        <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 pointer-events-none transition-colors duration-500 ${
          flavor === 'blue' ? 'bg-blue-500' :
          flavor === 'red' ? 'bg-red-500' :
          flavor === 'green' ? 'bg-green-500' :
          flavor === 'white' ? 'bg-gray-400' : 'bg-yellow-500'
        }`} />

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-yellow-400" />
            <h3 className="text-lg font-bold font-montserrat uppercase tracking-wider">
              {step === 'success' ? 'Order Confirmed!' : 'Secure Checkout'}
            </h3>
          </div>
          {step !== 'processing' && (
            <button
              onClick={resetModal}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white/80 z-10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Step Content - Added custom scrollbar hiding styles */}
        <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none]">
          {step === 'summary' && (
            <form onSubmit={handleCheckout} className="space-y-4">
              {/* Order details */}
              <div className="bg-white/5 rounded-xl p-3 border border-white/5 flex gap-3 items-center">
                <img
                  src={image}
                  alt={flavorNames[flavor]}
                  className="w-12 h-16 object-contain rotate-12 drop-shadow-md"
                />
                <div className="flex-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-yellow-400 font-montserrat">
                    Selected Flavor
                  </span>
                  <h4 className="font-anton uppercase text-base leading-tight mt-0.5">
                    {flavorNames[flavor]}
                  </h4>
                  <div className="flex justify-between text-xs text-slate-300 mt-1 font-montserrat">
                    <span>Qty: {quantity} bag{quantity > 1 ? 's' : ''}</span>
                    <span>${price.toFixed(2)} each</span>
                  </div>
                </div>
              </div>

              {/* Delivery Details */}
              <div className="space-y-2">
                <h5 className="text-xs uppercase font-bold text-slate-400 tracking-wider flex items-center gap-1.5 font-montserrat">
                  <MapPin className="w-3.5 h-3.5" /> Shipping Address
                </h5>
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-yellow-400 focus:bg-white/10 transition-all font-montserrat"
                  />
                  <input
                    type="text"
                    placeholder="123 Chip Street, Crispy Valley"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-yellow-400 focus:bg-white/10 transition-all font-montserrat"
                  />
                </div>
              </div>

              {/* Payment Details */}
              <div className="space-y-2">
                <h5 className="text-xs uppercase font-bold text-slate-400 tracking-wider flex items-center gap-1.5 font-montserrat">
                  <CreditCard className="w-3.5 h-3.5" /> Credit Card Info
                </h5>
                <input
                  type="text"
                  placeholder="xxxx xxxx xxxx xxxx"
                  maxLength={19}
                  value={card}
                  onChange={(e) => setCard(e.target.value)}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-yellow-400 focus:bg-white/10 transition-all font-montserrat"
                />
              </div>

              {/* Price Breakdown */}
              <div className="border-t border-white/10 pt-3 space-y-1.5 font-montserrat">
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Shipping</span>
                  <span className="text-green-400 font-bold uppercase">Free</span>
                </div>
                <div className="flex justify-between text-sm font-bold border-t border-white/5 pt-1.5">
                  <span>Total Amount</span>
                  <span className="text-yellow-400">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                type="submit"
                className={`w-full py-2.5 rounded-xl font-bold font-montserrat uppercase tracking-wider text-sm transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer ${
                  flavorColors[flavor] || flavorColors.blue
                }`}
              >
                <span>Authorize & Pay</span>
                <Sparkles className="w-4 h-4" />
              </button>
            </form>
          )}

          {step === 'processing' && (
            <div className="py-16 flex flex-col items-center justify-center text-center space-y-4">
              <Loader className="w-12 h-12 text-yellow-400 animate-spin" />
              <h4 className="text-lg font-bold font-montserrat uppercase tracking-wider">
                Processing Secure Order
              </h4>
              <p className="text-xs text-slate-400 max-w-xs font-montserrat">
                Please do not close this window. We are checking card authorization and frying up fresh chips!
              </p>
            </div>
          )}

          {step === 'success' && (
            <div className="py-8 flex flex-col items-center justify-center text-center space-y-6">
              <div className="w-20 h-20 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center text-green-400 animate-bounce">
                <CheckCircle className="w-10 h-10" />
              </div>
              <div>
                <h4 className="text-2xl font-bold font-anton uppercase tracking-wide">
                  Chips are on the Way!
                </h4>
                <p className="text-sm text-slate-300 font-montserrat mt-2">
                  Thank you, <span className="font-bold text-yellow-400">{name}</span>!
                </p>
                <p className="text-xs text-slate-400 font-montserrat mt-1 max-w-sm mx-auto leading-relaxed">
                  Your order of {quantity} bag{quantity > 1 ? 's' : ''} of {flavorNames[flavor]} is being prepared. They will arrive crisp, salty, and delicious at <span className="text-white font-medium">{address}</span>.
                </p>
              </div>

              <div className="bg-white/5 rounded-2xl p-4 border border-white/5 w-full font-montserrat text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400">Order ID:</span>
                  <span className="text-white font-bold tracking-wider">#LAYS-{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Estimated Delivery:</span>
                  <span className="text-green-400 font-bold">2-3 Business Days</span>
                </div>
              </div>

              <button
                onClick={resetModal}
                className={`px-8 py-3 rounded-xl font-bold font-montserrat uppercase tracking-wider text-sm transition-all duration-300 transform active:scale-95 ${
                  flavorColors[flavor] || flavorColors.blue
                }`}
              >
                Continue Cravings
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
