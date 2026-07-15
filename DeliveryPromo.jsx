import { ShoppingBag } from 'lucide-react';
import { SWIGGY_URL, ZOMATO_URL } from './data';
import { WheatArt } from './LineArt';

export default function DeliveryPromo() {
  return (
    <section className="py-24 md:py-32 bg-foreground text-background relative overflow-hidden">
      <WheatArt className="absolute left-4 top-8 w-28 h-28 text-background/[0.05]" />
      <WheatArt className="absolute right-4 bottom-8 w-28 h-28 text-background/[0.05] rotate-180" />

      <div className="container mx-auto px-4 md:px-8 text-center relative">
        <p className="text-sm uppercase tracking-[0.2em] text-background/60 mb-4">Online Delivery</p>
        <h2 className="font-heading text-4xl md:text-6xl font-light mb-6 max-w-2xl mx-auto leading-tight">
          Your favorite meal, delivered to your doorstep
        </h2>
        <p className="text-background/70 mb-10 max-w-xl mx-auto leading-relaxed">
          Order now through our delivery partners and enjoy 20% off your first order. Fresh, hot, and fast.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={SWIGGY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-sm font-medium uppercase tracking-wider hover:bg-primary/90 transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
            Order on Swiggy
          </a>
          <a
            href={ZOMATO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-background/30 text-background px-8 py-4 rounded-full text-sm font-medium uppercase tracking-wider hover:bg-background/10 transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
            Order on Zomato
          </a>
        </div>
      </div>
    </section>
  );
}
