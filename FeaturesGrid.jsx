import { motion } from 'framer-motion';
import { Award, ChefHat, Bike } from 'lucide-react';
import { features } from './data';
import { CoffeeCupArt, LeafArt } from './LineArt';

const icons = { Award, ChefHat, Bike };

export default function FeaturesGrid() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <CoffeeCupArt className="absolute -left-8 top-12 w-32 h-32 text-accent/[0.07]" />
      <LeafArt className="absolute -right-8 bottom-12 w-36 h-36 text-accent/[0.07]" />

      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-accent mb-3">Why Choose Us</p>
          <h2 className="font-heading text-4xl md:text-5xl font-light">A Taste Above the Rest</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {features.map((feature, i) => {
            const Icon = icons[feature.icon];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 border border-accent/30 rounded-full">
                  <Icon className="w-7 h-7 text-accent" strokeWidth={1} />
                </div>
                <h3 className="font-heading text-2xl mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm max-w-xs mx-auto">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
