import React from 'react';
import { X, Sparkles, Flame, Percent } from 'lucide-react';

export default function NutritionalPanel({ flavor, isOpen, onClose }) {
  const nutritionalData = {
    blue: {
      name: "India's Magic Masala",
      desc: "An exotic blend of spicy masalas and crunchy potato slices. A true explosion of traditional Indian spices that tingles your taste buds.",
      ingredients: ["Potatoes", "Vegetable Oil", "Spices & Condiments (Onion, Garlic, Chilli, Coriander, Turmeric)", "Salt", "Sugar"],
      calories: 162,
      fat: "10.2g",
      fatPct: 15,
      sodium: "290mg",
      sodiumPct: 12,
      protein: "2.1g",
      proteinPct: 4,
      carbs: "15.4g",
      carbsPct: 6,
    },
    red: {
      name: "Spanish Tomato Tangy",
      desc: "Made with the delicious tang of ripe Spanish tomatoes and a blend of savory spices. Perfect balance of sweet, juicy, and sour flavors.",
      ingredients: ["Potatoes", "Vegetable Oil", "Tomato Powder", "Sugar", "Spices (Chilli, Onion, Garlic)", "Salt", "Acidity Regulators"],
      calories: 156,
      fat: "9.8g",
      fatPct: 14,
      sodium: "260mg",
      sodiumPct: 11,
      protein: "2.0g",
      proteinPct: 4,
      carbs: "16.1g",
      carbsPct: 6,
    },
    green: {
      name: "American Style Cream & Onion",
      desc: "A classic combinations of rich, cool sour cream and fresh green spring onions. Smooth, velvety, and deeply comforting flavor profile.",
      ingredients: ["Potatoes", "Vegetable Oil", "Milk Solids (Sour Cream Powder, Whey Powder)", "Sugar", "Spring Onion Powder", "Salt"],
      calories: 160,
      fat: "10.5g",
      fatPct: 16,
      sodium: "245mg",
      sodiumPct: 10,
      protein: "2.3g",
      proteinPct: 5,
      carbs: "14.9g",
      carbsPct: 5,
    },
    white: {
      name: "West Indies Sweet Chilli",
      desc: "A sweet tropical kick combined with heat of authentic red hot chillies. Experience a distinct Caribbean warmth in every crunch.",
      ingredients: ["Potatoes", "Vegetable Oil", "Sweet Chilli Seasoning", "Chilli Powder", "Garlic Powder", "Soy Sauce Powder", "Salt"],
      calories: 158,
      fat: "10.0g",
      fatPct: 15,
      sodium: "275mg",
      sodiumPct: 11,
      protein: "2.2g",
      proteinPct: 4,
      carbs: "15.6g",
      carbsPct: 6,
    },
    yellow: {
      name: "Classic Salted",
      desc: "Pure simplicity. Crispy sliced potatoes sprinkled with the perfect amount of fine sea salt. The timeless chip that never goes out of style.",
      ingredients: ["Potatoes", "Vegetable Oil", "Refined Iodized Sea Salt"],
      calories: 165,
      fat: "10.8g",
      fatPct: 17,
      sodium: "230mg",
      sodiumPct: 9,
      protein: "1.9g",
      proteinPct: 4,
      carbs: "14.7g",
      carbsPct: 5,
    },
  };

  const data = nutritionalData[flavor] || nutritionalData.blue;

  return (
    <div
      className={`fixed z-50 text-white flex flex-col
        sm:top-0 sm:left-0 sm:h-full sm:w-[420px] sm:border-r sm:border-white/10 sm:max-h-full
        bottom-0 left-0 right-0 w-full max-h-[60vh] sm:rounded-none rounded-t-3xl
        bg-slate-900/95 backdrop-blur-xl shadow-2xl
        transform transition-transform duration-500 ease-out
        p-5 sm:p-6
        ${isOpen
          ? 'translate-y-0 sm:translate-y-0 sm:translate-x-0'
          : 'translate-y-full sm:translate-y-0 sm:-translate-x-full'
        }`}
    >
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="text-yellow-400 w-5 h-5 animate-pulse" />
          <h2 className="text-lg font-bold font-montserrat uppercase tracking-wider text-yellow-400">
            Flavor Breakdown
          </h2>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white/80 hover:text-white cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Scroll container with scrollbar-hiding classes */}
      <div className="flex-1 overflow-y-auto space-y-5 [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none]">
        {/* Description Section */}
        <div>
          <h3 className="text-2xl font-bold font-anton uppercase text-white mb-1.5">
            {data.name}
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed font-montserrat">
            {data.desc}
          </p>
        </div>

        {/* Nutritional Facts Grid */}
        <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
          <div className="flex items-center gap-2 mb-3">
            <Flame className="text-orange-400 w-4 h-4" />
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-montserrat">
              Nutrition Values (per 30g pack)
            </h4>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-black/20 rounded-xl p-3 text-center border border-white/5">
              <span className="text-2xl font-bold font-anton text-orange-400">{data.calories}</span>
              <p className="text-[10px] text-slate-400 uppercase font-montserrat mt-1">Calories</p>
            </div>
            <div className="bg-black/20 rounded-xl p-3 text-center border border-white/5">
              <span className="text-2xl font-bold font-anton text-yellow-400">{data.fat}</span>
              <p className="text-[10px] text-slate-400 uppercase font-montserrat mt-1">Total Fat</p>
            </div>
          </div>

          {/* Progress Metrics */}
          <div className="mt-6 space-y-4">
            {/* Fat Progress */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-slate-300 font-montserrat">Fat DV%</span>
                <span className="text-yellow-400">{data.fatPct}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-yellow-400 h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${data.fatPct * 5}%` }} // Multiply to show progress clearly on standard 2000 cal scale
                ></div>
              </div>
            </div>

            {/* Sodium Progress */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-slate-300 font-montserrat">Sodium ({data.sodium})</span>
                <span className="text-red-400">{data.sodiumPct}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-red-400 h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${data.sodiumPct * 5}%` }}
                ></div>
              </div>
            </div>

            {/* Protein Progress */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-slate-300 font-montserrat">Protein ({data.protein})</span>
                <span className="text-green-400">{data.proteinPct}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-green-400 h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${data.proteinPct * 15}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Ingredients List */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300 font-montserrat mb-2 border-b border-white/10 pb-1.5">
            Ingredients Used
          </h4>
          <ul className="space-y-1.5">
            {data.ingredients.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-xs text-slate-300 font-montserrat">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-white/5 text-[10px] text-center text-slate-500 font-montserrat shrink-0">
        100% Vegetarian product made from farm-grown select potatoes.
      </div>
    </div>
  );
}
