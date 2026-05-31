import React, { useState } from 'react';
import { Sparkles, Info, ShoppingCart, Heart, Plus, Minus, Share2, Menu, X } from 'lucide-react';
import FlavorParticles from './components/FlavorParticles';
import NutritionalPanel from './components/NutritionalPanel';
import CheckoutModal from './components/CheckoutModal';

// Static Image Imports from Assets
import blueBag from './assets/Blue.png';
import whiteBag from './assets/White.png';
import greenBag from './assets/Green.png';
import redBag from './assets/Red.png';
import yellowBag from './assets/Yellow.png';

const themes = {
  blue: {
    id: "blue",
    name: "India's Magic Masala",
    price: 5.0,
    desc: "A powerful combination of spicy masalas and select farm potatoes. A true explosion of rich traditional Indian spices that tingles your taste buds in every bite.",
    color1: "#5F8DD3",
    color2: "#83A6DD",
    ellipseColor1: "bg-[#5F8DD3]",
    ellipseColor2: "bg-[#83A6DD]",
    image: blueBag,
    bagShadow: "drop-shadow-[-20px_20px_40px_rgba(95,141,211,0.65)]",
    glowColor: "rgba(95, 141, 211, 0.4)",
  },
  white: {
    id: "white",
    name: "West Indies Sweet Chilli",
    price: 5.0,
    desc: "A sweet tropical kick combined with the heat of authentic red hot chillies. Experience a distinct Caribbean warmth in every crunchy bite.",
    color1: "#797B7C",
    color2: "#8C8E92",
    ellipseColor1: "bg-[#797B7C]",
    ellipseColor2: "bg-[#8C8E92]",
    image: whiteBag,
    bagShadow: "drop-shadow-[-20px_20px_40px_rgba(121,123,124,0.65)]",
    glowColor: "rgba(121, 123, 124, 0.4)",
  },
  green: {
    id: "green",
    name: "American Style Cream & Onion",
    price: 5.0,
    desc: "A delicious combination of rich, cool sour cream and spring onions. A smooth, velvety flavor profile that creates the ultimate comforting snack.",
    color1: "#02654B",
    color2: "#017659",
    ellipseColor1: "bg-[#02654B]",
    ellipseColor2: "bg-[#017659]",
    image: greenBag,
    bagShadow: "drop-shadow-[-20px_20px_40px_rgba(2,101,75,0.65)]",
    glowColor: "rgba(2, 101, 75, 0.4)",
  },
  red: {
    id: "red",
    name: "Spanish Tomato Tangy",
    price: 5.0,
    desc: "The absolute perfect blend of juicy Spanish tomatoes and sweet spices. A crisp, appetizing tang that leaves a delightful lingering taste.",
    color1: "#FF6A3C",
    color2: "#FF8A65",
    ellipseColor1: "bg-[#FF6A3C]",
    ellipseColor2: "bg-[#FF8A65]",
    image: redBag,
    bagShadow: "drop-shadow-[-20px_20px_40px_rgba(255,106,60,0.65)]",
    glowColor: "rgba(255, 106, 60, 0.4)",
  },
  yellow: {
    id: "yellow",
    name: "Classic Salted Potato Chips",
    price: 5.0,
    desc: "Crispy sliced potatoes salted to absolute perfection. Pure simplicity and the iconic timeless flavor that has captivated snackers for generations.",
    color1: "#FFB61D",
    color2: "#FFCC5E",
    ellipseColor1: "bg-[#FFB61D]",
    ellipseColor2: "bg-[#FFCC5E]",
    image: yellowBag,
    bagShadow: "drop-shadow-[-20px_20px_40px_rgba(255,182,29,0.65)]",
    glowColor: "rgba(255, 182, 29, 0.4)",
  }
};

export default function App() {
  const [flavor, setFlavor] = useState('blue');
  const [quantity, setQuantity] = useState(1);
  const [isNutritionOpen, setIsNutritionOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [bagAnimationKey, setBagAnimationKey] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeTheme = themes[flavor];

  const handleFlavorChange = (flavorKey) => {
    setFlavor(flavorKey);
    setBagAnimationKey(prev => prev + 1);
  };

  const handleBuyNow = () => {
    setIsCheckoutOpen(true);
  };

  const handleLike = () => {
    setIsLiked(prev => !prev);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Shareable link copied to clipboard!");
  };

  return (
    <div 
      className="relative w-screen min-h-screen overflow-x-hidden flex flex-col py-4 px-4 sm:py-6 sm:px-8 md:px-16 text-white select-none font-montserrat transition-colors duration-700 ease-in-out"
      style={{ backgroundColor: activeTheme.color1 }}
    >
      {/* PERFECT CENTRIC BACKGROUND ELLIPSES */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className={`rounded-full ${activeTheme.ellipseColor1} absolute w-[1676px] h-[1676px] left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] transition-all duration-700 ease-in-out`} />
        <div className={`rounded-full ${activeTheme.ellipseColor2} absolute w-[1340px] h-[1340px] left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] transition-all duration-700 ease-in-out`} />
        <div className={`rounded-full ${activeTheme.ellipseColor1} absolute w-[1076px] h-[1076px] left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] transition-all duration-700 ease-in-out`} />
        <div className={`rounded-full ${activeTheme.ellipseColor2} absolute w-[810px] h-[810px] left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] transition-all duration-700 ease-in-out`} />
        <div className={`rounded-full ${activeTheme.ellipseColor1} absolute w-[546px] h-[546px] left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] transition-all duration-700 ease-in-out`} />
        <div className={`rounded-full ${activeTheme.ellipseColor2} absolute w-[328px] h-[328px] left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] transition-all duration-700 ease-in-out`} />
      </div>

      {/* Dynamic Canvas Particles */}
      <FlavorParticles flavor={flavor} />

      {/* Header Navigation Section */}
      <header className="relative z-20 flex justify-between items-center w-full shrink-0 mb-2">
        {/* Left Brand Cursive Logo */}
        <span className="text-3xl sm:text-4xl md:text-[50px] font-bold font-oleoScript tracking-wide cursor-pointer hover:scale-105 transition-transform">
          Lays
        </span>

        {/* Central Rounded Navigation Capsule — desktop only */}
        <nav className="hidden lg:flex items-center justify-between px-8 bg-white rounded-full w-[580px] h-[50px] shadow-lg border border-white/10 overflow-hidden">
          <div className="flex items-center w-full justify-between">
            {['Home', 'Shop', 'About Us', 'Contact', 'Blog'].map((item, idx) => (
              <button
                key={idx}
                className={`text-[#0D0F24] font-montserrat text-[16px] whitespace-nowrap transition-all duration-300 hover:text-yellow-600 cursor-pointer ${
                  idx === 0 ? 'font-bold underline decoration-2 decoration-yellow-500' : 'font-semibold'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-3 sm:gap-6">
          {/* Cart button */}
          <button
            onClick={handleBuyNow}
            className="relative p-2.5 sm:p-3 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-500 text-slate-950 shadow-[0_4px_20px_rgba(255,182,29,0.35)] border border-yellow-300/30 hover:from-yellow-400 hover:to-amber-600 hover:scale-110 active:scale-90 transition-all duration-300 cursor-pointer"
          >
            <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
            {cartItemsCount > 0 && (
              <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-600 text-white font-bold text-[10px] flex items-center justify-center border-2 border-slate-950 shadow-md">
                {cartItemsCount}
              </div>
            )}
          </button>

          {/* Specs button — hide label text on xs */}
          <button
            onClick={() => { setIsNutritionOpen(true); }}
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full bg-slate-950/45 backdrop-blur-md border border-white/15 hover:border-yellow-400/50 hover:bg-slate-950/65 hover:scale-105 active:scale-95 transition-all duration-300 text-[10px] sm:text-[11px] font-bold tracking-widest uppercase cursor-pointer text-slate-200 hover:text-white"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 animate-pulse" />
            <span>Specs</span>
            <Info className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400/80" />
          </button>

          {/* Right Brand Logo — hidden on xs & sm */}
          <span className="text-4xl md:text-[50px] font-bold font-oleoScript tracking-wide cursor-pointer hover:scale-105 transition-transform hidden md:inline">
            Lays
          </span>

          {/* Hamburger — shown on < lg */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="lg:hidden p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="relative z-20 lg:hidden mb-3">
          <nav className="flex flex-col gap-1 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4">
            {['Home', 'Shop', 'About Us', 'Contact', 'Blog'].map((item, idx) => (
              <button
                key={idx}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-white font-montserrat text-[15px] py-2 px-3 rounded-xl text-left transition-all hover:bg-white/10 cursor-pointer ${
                  idx === 0 ? 'font-bold' : 'font-semibold'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* Main Content Layout */}
      <main className="relative z-10 flex-1 w-full">

        {/* ── DESKTOP LAYOUT (lg+): 3-col grid ── */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-center h-full min-h-[calc(100vh-160px)]">

          {/* Col 1: Description */}
          <section className="lg:col-span-4 flex flex-col justify-center space-y-6 text-left pl-4 lg:pl-16">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-anton leading-[1.1] tracking-wide uppercase select-none drop-shadow-md">
                Eat our <span className="underline decoration-yellow-400 decoration-3 underline-offset-4">{flavor === 'blue' ? 'Magic Masala' : flavor === 'red' ? 'Spanish Tomato' : flavor === 'green' ? 'Cream & Onion' : flavor === 'white' ? 'Sweet Chilli' : 'Classic Salted'}</span> Potato Chips
              </h1>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-[40px] font-anton text-white drop-shadow">${activeTheme.price.toFixed(1)}</span>
                <span className="text-xs font-semibold uppercase text-slate-200 font-montserrat tracking-widest">per 30g pack</span>
              </div>
              <p className="text-sm sm:text-[16px] leading-[22px] font-montserrat font-semibold text-white/90 max-w-[420px] drop-shadow-sm">{activeTheme.desc}</p>
            </div>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="border-2 border-white rounded-[50px] w-[180px] h-[50px] flex items-center justify-between px-3.5 font-semibold shrink-0">
                <button onClick={() => setQuantity(prev => prev + 1)} className="w-[30px] h-[30px] bg-white rounded-full text-[#0D0F24] hover:bg-slate-200 transition-colors flex items-center justify-center cursor-pointer font-bold"><Plus className="w-3.5 h-3.5" /></button>
                <span className="text-[16px] font-bold font-montserrat select-none w-8 text-center text-white">{quantity}</span>
                <button onClick={() => setQuantity(prev => Math.max(1, prev - 1))} className="w-[30px] h-[30px] bg-white rounded-full text-[#0D0F24] hover:bg-slate-200 transition-colors flex items-center justify-center cursor-pointer font-bold"><Minus className="w-3.5 h-3.5" /></button>
              </div>
              <button onClick={handleBuyNow} className="w-[180px] h-[50px] bg-white text-[#0D0F24] font-montserrat font-bold text-[16px] rounded-[50px] shadow-[0_2px_10px_rgba(0,0,0,0.1)] flex items-center justify-center cursor-pointer hover:bg-yellow-400 hover:scale-105 active:scale-95 transition-all uppercase tracking-wider shrink-0">Buy Now</button>
            </div>
            <div className="flex gap-4 pt-2">
              <button onClick={handleLike} className={`flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 transition-all text-xs font-semibold cursor-pointer ${isLiked ? 'bg-red-500/20 text-red-400 border-red-500/30' : 'bg-white/5 text-white/80 hover:bg-white/10'}`}>
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-400 text-red-400' : ''}`} />
                <span>{isLiked ? 'Wishlist' : 'Add to Wishlist'}</span>
              </button>
              <button onClick={handleShare} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/20 hover:bg-white/10 hover:text-white transition-all text-xs text-white/80 font-semibold cursor-pointer">
                <Share2 className="w-4 h-4" /><span>Share</span>
              </button>
            </div>
          </section>

          {/* Col 2: Bag Image */}
          <section className="lg:col-span-4 flex justify-center items-center relative h-[550px] xl:h-[630px]">
            <div className="absolute w-[500px] h-[500px] rounded-full blur-[90px] transition-all duration-1000 -z-10" style={{ backgroundColor: activeTheme.glowColor }} />
            <div className="flex items-center justify-center w-full h-full translate-x-[50px] xl:translate-x-[75px] 2xl:translate-x-[90px]">
              <div className="shrink-bounce flex items-center justify-center w-full h-full group">
                <img key={bagAnimationKey} src={activeTheme.image} alt={activeTheme.name} className={`w-[520px] xl:w-[580px] 2xl:w-[630px] max-w-none h-auto object-contain select-none pointer-events-none animate-bag-spin-in mix-blend-multiply transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-105 ${activeTheme.bagShadow}`} />
              </div>
            </div>
          </section>

          {/* Col 3: Flavor Selector */}
          <section className="lg:col-span-4 flex items-center justify-end h-full pr-20">
            <div className="flex flex-col items-center justify-between gap-0 py-3 px-2 h-full max-h-[calc(100vh-140px)]">
              {Object.values(themes).map((item, idx) => {
                const isActive = flavor === item.id;
                const rotations = [-12, 8, -10, 12, -8];
                const offsets = [38, -32, 36, -34, 30];
                const rot = rotations[idx]; const tx = offsets[idx];
                return (
                  <button key={item.id} onClick={() => handleFlavorChange(item.id)} className="relative group flex-shrink-0 cursor-pointer focus:outline-none" style={{ background: 'none', border: 'none', padding: 0 }}>
                    <img src={item.image} alt={item.name} className="pointer-events-none select-none object-contain mix-blend-multiply" style={{ width: '85px', height: '108px', transform: isActive ? `rotate(${rot}deg) translateX(${tx}px) scale(1.15)` : `rotate(${rot}deg) translateX(${tx}px) scale(1)`, filter: isActive ? 'drop-shadow(0 8px 22px rgba(0,0,0,0.4)) brightness(1.12)' : 'drop-shadow(0 3px 8px rgba(0,0,0,0.22)) brightness(0.92)', transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1), filter 0.35s ease', opacity: isActive ? 1 : 0.85 }} />
                    {isActive && <div className="absolute inset-0 pointer-events-none rounded-full" style={{ transform: `rotate(${rot}deg) translateX(${tx}px)`, boxShadow: `0 0 24px 8px ${item.color1}55`, transition: 'all 0.35s ease' }} />}
                    <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-slate-900/90 border border-white/10 px-3 py-1.5 rounded-lg text-[9px] font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-yellow-400 whitespace-nowrap shadow-xl backdrop-blur-sm">{item.name}</div>
                  </button>
                );
              })}
            </div>
          </section>
        </div>

        {/* ── MOBILE LAYOUT (< lg): stacked ── */}
        <div className="lg:hidden flex flex-col items-center gap-4 pb-8">

          {/* Flavor Selector — horizontal scrollable strip */}
          <div className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none]">
            <div className="flex items-center gap-2 px-2 py-3 w-max mx-auto">
              {Object.values(themes).map((item) => {
                const isActive = flavor === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleFlavorChange(item.id)}
                    className="relative flex flex-col items-center gap-1 cursor-pointer focus:outline-none shrink-0"
                    style={{ background: 'none', border: 'none', padding: '4px 8px' }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="pointer-events-none select-none object-contain mix-blend-multiply"
                      style={{
                        width: '60px', height: '76px',
                        filter: isActive ? 'drop-shadow(0 6px 16px rgba(0,0,0,0.5)) brightness(1.15)' : 'drop-shadow(0 2px 6px rgba(0,0,0,0.2)) brightness(0.9)',
                        transform: isActive ? 'scale(1.18)' : 'scale(1)',
                        transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1), filter 0.3s ease',
                        opacity: isActive ? 1 : 0.75,
                      }}
                    />
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white mt-0.5" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Central Bag Image */}
          <div className="relative flex justify-center items-center w-full h-[260px] sm:h-[340px]">
            <div className="absolute w-[300px] h-[300px] rounded-full blur-[70px] -z-10 transition-all duration-1000" style={{ backgroundColor: activeTheme.glowColor }} />
            <div className="shrink-bounce flex items-center justify-center w-full h-full group">
              <img
                key={bagAnimationKey}
                src={activeTheme.image}
                alt={activeTheme.name}
                className={`w-[220px] sm:w-[300px] max-w-none h-auto object-contain select-none pointer-events-none animate-bag-spin-in mix-blend-multiply transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-105 ${activeTheme.bagShadow}`}
              />
            </div>
          </div>

          {/* Description & Actions */}
          <section className="w-full max-w-md px-2 flex flex-col gap-4 text-center sm:text-left">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl font-anton leading-tight tracking-wide uppercase select-none drop-shadow-md">
                Eat our <span className="underline decoration-yellow-400 decoration-3 underline-offset-4">{flavor === 'blue' ? 'Magic Masala' : flavor === 'red' ? 'Spanish Tomato' : flavor === 'green' ? 'Cream & Onion' : flavor === 'white' ? 'Sweet Chilli' : 'Classic Salted'}</span> Potato Chips
              </h1>
              <div className="flex items-baseline gap-2 justify-center sm:justify-start">
                <span className="text-2xl sm:text-3xl font-anton text-white drop-shadow">${activeTheme.price.toFixed(1)}</span>
                <span className="text-xs font-semibold uppercase text-slate-200 font-montserrat tracking-widest">per 30g pack</span>
              </div>
              <p className="text-sm leading-relaxed font-montserrat font-semibold text-white/90 drop-shadow-sm">{activeTheme.desc}</p>
            </div>

            {/* Quantity + Buy Now */}
            <div className="flex items-center justify-center sm:justify-start gap-3 flex-wrap">
              <div className="border-2 border-white rounded-[50px] w-[160px] h-[46px] flex items-center justify-between px-3 font-semibold shrink-0">
                <button onClick={() => setQuantity(prev => prev + 1)} className="w-[28px] h-[28px] bg-white rounded-full text-[#0D0F24] hover:bg-slate-200 transition-colors flex items-center justify-center cursor-pointer"><Plus className="w-3 h-3" /></button>
                <span className="text-[15px] font-bold font-montserrat select-none w-8 text-center text-white">{quantity}</span>
                <button onClick={() => setQuantity(prev => Math.max(1, prev - 1))} className="w-[28px] h-[28px] bg-white rounded-full text-[#0D0F24] hover:bg-slate-200 transition-colors flex items-center justify-center cursor-pointer"><Minus className="w-3 h-3" /></button>
              </div>
              <button onClick={handleBuyNow} className="flex-1 min-w-[140px] h-[46px] bg-white text-[#0D0F24] font-montserrat font-bold text-[14px] rounded-[50px] shadow-[0_2px_10px_rgba(0,0,0,0.1)] flex items-center justify-center cursor-pointer hover:bg-yellow-400 hover:scale-105 active:scale-95 transition-all uppercase tracking-wider">Buy Now</button>
            </div>

            {/* Wishlist & Share */}
            <div className="flex gap-3 justify-center sm:justify-start">
              <button onClick={handleLike} className={`flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/20 transition-all text-xs font-semibold cursor-pointer ${isLiked ? 'bg-red-500/20 text-red-400 border-red-500/30' : 'bg-white/5 text-white/80 hover:bg-white/10'}`}>
                <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-red-400 text-red-400' : ''}`} />
                <span>{isLiked ? 'Wishlist' : 'Add to Wishlist'}</span>
              </button>
              <button onClick={handleShare} className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 border border-white/20 hover:bg-white/10 hover:text-white transition-all text-xs text-white/80 font-semibold cursor-pointer">
                <Share2 className="w-3.5 h-3.5" /><span>Share</span>
              </button>
            </div>
          </section>
        </div>

      </main>



      {/* Slide-out Nutritional Drawer */}
      <NutritionalPanel
        flavor={flavor}
        isOpen={isNutritionOpen}
        onClose={() => { setIsNutritionOpen(false); }}
      />

      {/* Confetti Checkout drawer */}
      <CheckoutModal
        flavor={flavor}
        quantity={quantity}
        price={activeTheme.price}
        image={activeTheme.image}
        isOpen={isCheckoutOpen}
        onClose={() => { setIsCheckoutOpen(false); }}
      />
    </div>
  );
}
