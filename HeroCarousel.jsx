import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ShoppingBag, ChevronDown } from 'lucide-react';
import { heroSlides, SWIGGY_URL } from './data';

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, reduceMotion]);

  const slide = heroSlides[index];

  return (
    <section className="relative h-[85vh] min-h-[560px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/35" />
        </motion.div>
      </AnimatePresence>

      <div className="relative h-full container mx-auto px-4 md:px-8 flex items-center">
        <motion.div
          key={`text-${index}`}
          initial={{ opacity: 0, x: reduceMotion ? 0 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl text-white"
        >
          <p className="text-sm uppercase tracking-[0.2em] mb-4 text-white/80">{slide.tagline}</p>
          <h1 className="font-heading text-5xl md:text-7xl font-light leading-tight mb-6">{slide.title}</h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg leading-relaxed">{slide.description}</p>
          <a
            href={SWIGGY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-sm font-medium uppercase tracking-wider hover:bg-primary/90 transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
            Order Now
          </a>
        </motion.div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${i === index ? 'w-8 bg-primary' : 'w-2 bg-white/50 hover:bg-white/70'}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs uppercase tracking-wider [writing-mode:vertical-rl]">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </div>
    </section>
  );
}
