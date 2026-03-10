import { useState, useEffect } from "react";
import { Leaf, Menu, X } from "lucide-react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Sobre Nós", href: "#about" },
    { name: "Áreas de Atuação", href: "#services" },
    { name: "Notícias", href: "#news" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="bg-primary text-white p-2 rounded-xl group-hover:scale-110 transition-transform duration-300">
            <Leaf className="w-6 h-6" />
          </div>
          <span className={`font-display font-bold text-xl tracking-tight ${scrolled ? "text-foreground" : "text-white"}`}>
            JHV Agronegócio
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium text-sm transition-colors hover:text-secondary ${
                scrolled ? "text-foreground/80" : "text-white/90 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Fale Conosco
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 rounded-lg ${scrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-white p-6 md:hidden flex flex-col"
          >
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-2">
                <div className="bg-primary text-white p-2 rounded-xl">
                  <Leaf className="w-6 h-6" />
                </div>
                <span className="font-display font-bold text-xl text-foreground">JHV</span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="text-foreground/60 hover:text-foreground p-2">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="flex flex-col gap-6 items-center justify-center flex-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-display font-semibold text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg w-full text-center shadow-lg"
              >
                Fale Conosco
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
