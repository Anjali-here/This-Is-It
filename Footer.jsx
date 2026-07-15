import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { branches, navLinks, SWIGGY_URL } from './data';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-20">
        {/* Brand + Quick Links */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 pb-12 border-b border-background/10">
          <div>
            <h3 className="font-heading text-3xl mb-4">
              this is it<span className="text-primary">.</span>cafe
            </h3>
            <p className="text-background/60 text-sm leading-relaxed mb-6 max-w-sm">
              A cozy sanctuary for coffee lovers and food enthusiasts. Crafted with love, served with passion, since 2015.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 border border-background/20 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 border border-background/20 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-10 h-10 border border-background/20 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wider text-background/50 mb-5">Explore</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-background/80 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Branches */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {branches.map((branch) => (
            <div key={branch.name}>
              <h4 className="text-sm uppercase tracking-wider text-background/50 mb-5">{branch.name}</h4>
              <ul className="space-y-3 text-sm text-background/80">
                <li className="flex gap-3">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-primary" strokeWidth={1} />
                  <span>{branch.address}</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="w-4 h-4 flex-shrink-0 text-primary" strokeWidth={1} />
                  <a href={`tel:${branch.phone}`} className="hover:text-primary transition-colors">{branch.phone}</a>
                </li>
                <li className="flex gap-3">
                  <Mail className="w-4 h-4 flex-shrink-0 text-primary" strokeWidth={1} />
                  <a href={`mailto:${branch.email}`} className="hover:text-primary transition-colors">{branch.email}</a>
                </li>
                <li className="flex gap-3">
                  <Clock className="w-4 h-4 flex-shrink-0 text-primary" strokeWidth={1} />
                  <span>{branch.hours}</span>
                </li>
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">© 2026 This Is It Cafe. All rights reserved.</p>
          <a
            href={SWIGGY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline"
          >
            Order Online →
          </a>
        </div>
      </div>
    </footer>
  );
}
