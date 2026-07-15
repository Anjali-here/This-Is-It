import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { menuItems, SWIGGY_URL } from './data';

export default function SpecialsGrid() {
  const specials = menuItems.filter((item) => item.is_featured);

  return (
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-accent mb-3">Chef's Selection</p>
          <h2 className="font-heading text-4xl md:text-5xl font-light">Our Specials</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {specials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
                <img
                  src={item.image_url}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <a
                  href={SWIGGY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Order ${item.name}`}
                  className="absolute bottom-4 right-4 w-11 h-11 bg-primary text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 hover:bg-primary/90"
                >
                  <Plus className="w-5 h-5" />
                </a>
              </div>
              <div className="flex justify-between items-baseline">
                <h3 className="font-heading text-xl">{item.name}</h3>
                <span className="text-primary font-medium">₹{item.price}</span>
              </div>
              <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/menu"
            className="inline-block border border-foreground text-foreground px-8 py-3 rounded-full text-sm uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors"
          >
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}
