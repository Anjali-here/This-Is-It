import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from './data';

export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((p) => (p - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next, reduceMotion]);

  const testimonial = testimonials[index];

  return (
    <section className="py-24 md:py-32 container mx-auto px-4 md:px-8">
      <div className="text-center mb-12">
        <p className="text-sm uppercase tracking-[0.2em] text-accent mb-3">Kind Words</p>
        <h2 className="font-heading text-4xl md:text-5xl font-light">What Our Guests Say</h2>
      </div>

      <div className="max-w-3xl mx-auto text-center relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <blockquote className="font-heading text-2xl md:text-3xl font-light italic leading-relaxed mb-6">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <p className="text-sm uppercase tracking-wider text-accent">— {testimonial.customer_name}</p>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-11 h-11 border border-border rounded-full flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-11 h-11 border border-border rounded-full flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all ${i === index ? 'w-8 bg-primary' : 'w-2 bg-border hover:bg-accent/50'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
