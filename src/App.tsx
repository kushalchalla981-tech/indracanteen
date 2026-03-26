/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Utensils, 
  Target, 
  Activity, 
  Rocket, 
  CheckCircle2, 
  XCircle, 
  MessageSquare, 
  Info,
  Clock,
  MapPin,
  TrendingUp,
  Heart
} from 'lucide-react';

interface SlideProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

const Slide = ({ children, title, subtitle }: SlideProps) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="w-full h-full flex flex-col p-8 md:p-16"
  >
    {title && (
      <div className="mb-8">
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-brand-green mb-2 tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg md:text-xl text-slate-500 font-medium uppercase tracking-widest">
            {subtitle}
          </p>
        )}
        <div className="h-1 w-24 bg-brand-orange mt-4" />
      </div>
    )}
    <div className="flex-1 overflow-y-auto">
      {children}
    </div>
  </motion.div>
);

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // 1. Title Slide
    {
      id: 'title',
      content: (
        <div className="h-full flex flex-col justify-center items-center text-center relative overflow-hidden">
          <motion.div 
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 z-0 flex items-center justify-center"
          >
            <Utensils size={600} className="text-brand-green" />
          </motion.div>
          
          <div className="z-10">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-6"
            >
              <span className="px-4 py-1.5 bg-brand-green text-white text-sm font-bold rounded-full uppercase tracking-widest">
                SDG Case Study
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-6xl md:text-9xl font-serif font-bold text-brand-green leading-tight mb-4"
            >
              Indira <br /> Canteen
            </motion.h1>
            
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-xl md:text-3xl text-slate-600 font-light max-w-2xl mx-auto italic"
            >
              Affordable Food for Urban Poor in Karnataka
            </motion.p>
            
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="h-1 w-32 bg-brand-orange mx-auto mt-12"
            />
          </div>
        </div>
      )
    },
    // 2. Introduction
    {
      id: 'intro',
      content: (
        <Slide title="Background" subtitle="Introduction">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl font-serif leading-relaxed text-slate-800">
                Launched by the Government of Karnataka in <span className="text-brand-orange font-bold">2017</span>, 
                this food subsidy scheme began in Bengaluru before expanding statewide.
              </p>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex gap-6 items-start">
                <div className="p-3 bg-brand-green/10 rounded-2xl text-brand-green">
                  <Info size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">The Mission</h4>
                  <p className="text-slate-600 leading-relaxed">
                    To provide hygienic, nutritious meals at highly subsidized prices for the urban poor, 
                    daily wage workers, and economically weaker sections of society.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 grid grid-cols-1 gap-8 relative">
              <div className="absolute -top-6 -right-6 bg-brand-orange text-white p-6 rounded-3xl shadow-xl z-10">
                <p className="text-3xl font-bold">2017</p>
                <p className="text-[10px] uppercase tracking-widest font-medium">Launch</p>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green shrink-0 group-hover:bg-brand-green group-hover:text-white transition-colors">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-800">175+ Canteens</h4>
                    <p className="text-slate-500 text-sm">Spread across Bengaluru and major urban hubs</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green shrink-0 group-hover:bg-brand-green group-hover:text-white transition-colors">
                    <Activity size={28} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-800">Daily Service</h4>
                    <p className="text-slate-500 text-sm">Providing 3 meals a day to thousands of workers</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green shrink-0 group-hover:bg-brand-green group-hover:text-white transition-colors">
                    <Utensils size={28} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-800">Quality Assured</h4>
                    <p className="text-slate-500 text-sm">Standardized nutrition and hygiene protocols</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      )
    },
    // 3. Objectives
    {
      id: 'objectives',
      content: (
        <Slide title="Core Objectives" subtitle="Strategic Goals">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
            {[
              { icon: <Target />, title: "Food Security", desc: "Ensuring every urban poor individual has access to reliable meals." },
              { icon: <Utensils />, title: "Nutritious Meals", desc: "Providing balanced diets at a fraction of the market cost." },
              { icon: <TrendingUp />, title: "Reduce Malnutrition", desc: "Actively fighting hunger and nutritional deficiencies in cities." },
              { icon: <Heart />, title: "Support Migrants", desc: "A safety net for daily laborers and migrant populations." }
            ].map((obj, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-center"
              >
                <div className="w-14 h-14 bg-brand-green text-white rounded-2xl flex items-center justify-center mb-6">
                  {obj.icon}
                </div>
                <h3 className="text-2xl font-bold text-brand-green mb-3">{obj.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed">{obj.desc}</p>
              </motion.div>
            ))}
          </div>
        </Slide>
      )
    },
    // 4. Progress & Pricing
    {
      id: 'progress',
      content: (
        <Slide title="Progress So Far" subtitle="Impact & Operations">
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-stretch">
              {[
                { label: 'Breakfast', price: '₹5', color: 'bg-brand-green', icon: <Clock size={20} /> },
                { label: 'Lunch', price: '₹10', color: 'bg-brand-orange', icon: <Utensils size={20} /> },
                { label: 'Dinner', price: '₹10', color: 'bg-brand-green', icon: <Clock size={20} /> }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="flex-1 bg-white rounded-[40px] p-8 shadow-sm border border-slate-100 flex flex-col items-center text-center group"
                >
                  <div className={`w-12 h-12 ${item.color} text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-2">{item.label}</p>
                  <p className={`text-6xl font-serif font-bold ${item.color.replace('bg-', 'text-')}`}>{item.price}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors">
                    <MapPin size={24} />
                  </div>
                  <p className="text-xl font-medium text-slate-700">Statewide presence across Bengaluru & major cities</p>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors">
                    <Activity size={24} />
                  </div>
                  <p className="text-xl font-medium text-slate-700">Thousands of citizens served every single day</p>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors">
                    <CheckCircle2 size={24} />
                  </div>
                  <p className="text-xl font-medium text-slate-700">Strict hygiene and quality standards maintained</p>
                </div>
              </div>
              <div className="bg-brand-green text-white rounded-[40px] p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                  <p className="text-brand-cream/60 font-medium mb-4 uppercase tracking-widest text-sm">Collaborative Model</p>
                  <p className="text-3xl font-serif italic leading-relaxed">
                    "Run with the combined support of <br /> 
                    <span className="text-brand-orange font-bold">Local Bodies</span> & <span className="text-brand-cream font-bold">NGOs</span>"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      )
    },
    // 5. Future Plans
    {
      id: 'future',
      content: (
        <Slide title="Future Vision" subtitle="Expansion & Innovation">
          <div className="relative py-12">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-200 -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-12 relative">
              {[
                { icon: <Rocket />, title: "Wider Coverage", desc: "Expansion to more cities and remote towns in Karnataka." },
                { icon: <Utensils />, title: "Menu Variety", desc: "Continuous improvement in food quality and diverse menu options." },
                { icon: <Activity />, title: "Tech Integration", desc: "Using technology for better supply chain and canteen management." },
                { icon: <TrendingUp />, title: "High Demand Focus", desc: "Increasing canteen density in industrial and high-demand areas." }
              ].map((plan, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className={`flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} hidden md:block`}>
                    <h4 className="text-2xl font-bold text-brand-green mb-2">{plan.title}</h4>
                    <p className="text-slate-600">{plan.desc}</p>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-brand-orange text-white flex items-center justify-center z-10 shadow-lg shrink-0">
                    {plan.icon}
                  </div>
                  <div className="flex-1 md:hidden">
                    <h4 className="text-xl font-bold text-brand-green mb-1">{plan.title}</h4>
                    <p className="text-slate-600 text-sm">{plan.desc}</p>
                  </div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </Slide>
      )
    },
    // 6. Pros & Cons
    {
      id: 'proscons',
      content: (
        <Slide title="Analysis" subtitle="Pros & Challenges">
          <div className="grid md:grid-cols-2 gap-8 h-full">
            <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-brand-green text-white rounded-2xl flex items-center justify-center">
                  <CheckCircle2 />
                </div>
                <h3 className="text-3xl font-serif font-bold text-brand-green">Advantages</h3>
              </div>
              <div className="space-y-6">
                {[
                  { text: "Highly affordable for daily wage workers", value: 95 },
                  { text: "Significant reduction in urban hunger", value: 88 },
                  { text: "Balanced and hygienic food options", value: 82 },
                  { text: "Crucial support for migrant populations", value: 90 }
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-sm font-bold text-slate-600 uppercase tracking-wider">
                      <span>{item.text}</span>
                      <span>{item.value}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${item.value}%` }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
                        className="h-full bg-brand-green"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-brand-orange text-white rounded-2xl flex items-center justify-center">
                  <XCircle />
                </div>
                <h3 className="text-3xl font-serif font-bold text-brand-orange">Challenges</h3>
              </div>
              <ul className="space-y-6">
                {[
                  "Quality inconsistency in some locations",
                  "Long waiting times during peak hours",
                  "Significant financial burden on government",
                  "Maintenance issues in older canteens"
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="flex gap-4 items-start text-lg text-slate-700 bg-brand-orange/5 p-4 rounded-2xl border border-brand-orange/10"
                  >
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-brand-orange shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </Slide>
      )
    },
    // 7. Conclusion & Views
    {
      id: 'conclusion',
      content: (
        <Slide title="Conclusion" subtitle="Final Summary">
          <div className="space-y-12">
            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100">
              <p className="text-2xl md:text-3xl font-serif leading-relaxed text-slate-800 italic">
                "Indira Canteen is a successful welfare initiative that plays a crucial role in 
                improving food accessibility and nutrition among the urban poor. Despite operational 
                challenges, it has made a significant positive impact on society."
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-brand-orange">
                  <MessageSquare size={32} />
                  <h3 className="text-2xl font-bold uppercase tracking-widest">Personal View</h3>
                </div>
                <p className="text-xl text-slate-600 leading-relaxed">
                  It is a highly effective and humane scheme. With better maintenance and 
                  quality control, it can serve as a <span className="text-brand-green font-bold">national model</span> for 
                  food security in India.
                </p>
              </div>
              <div className="flex justify-center">
                <motion.div 
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  className="w-48 h-48 bg-brand-green rounded-full flex items-center justify-center text-white shadow-2xl"
                >
                  <Heart size={80} fill="currentColor" />
                </motion.div>
              </div>
            </div>
          </div>
        </Slide>
      )
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="h-screen w-screen bg-brand-cream flex flex-col relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-green/5 rounded-bl-full -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-brand-orange/5 rounded-tr-full -z-10" />
      
      {/* Progress Bar */}
      <div className="h-1.5 w-full bg-slate-200 z-50">
        <motion.div 
          className="h-full bg-brand-orange"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 relative">
        <AnimatePresence mode="wait">
          <div key={currentSlide} className="h-full w-full">
            {slides[currentSlide].content}
          </div>
        </AnimatePresence>
      </main>

      {/* Navigation Controls */}
      <div className="p-6 flex justify-between items-center z-50">
        <div className="flex items-center gap-4">
          <span className="text-slate-400 font-mono text-sm">
            {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>
          <div className="h-4 w-px bg-slate-300" />
          <span className="text-slate-500 text-xs uppercase tracking-widest font-bold hidden sm:block">
            Indira Canteen Case Study
          </span>
        </div>

        <div className="flex gap-4">
          <button 
            onClick={prevSlide}
            className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-brand-green hover:text-white transition-all shadow-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-brand-green hover:text-white transition-all shadow-sm"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Footer Decoration */}
      <div className="absolute bottom-24 right-8 hidden lg:block">
        <p className="writing-mode-vertical text-[10px] uppercase tracking-[0.4em] text-slate-300 font-bold rotate-180">
          Sustainable Development Goals • Food Security • Karnataka
        </p>
      </div>
    </div>
  );
}
