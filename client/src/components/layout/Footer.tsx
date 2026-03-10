import { Leaf, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0b1f14] text-white/70 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          
          <div className="flex items-center gap-2">
            <div className="bg-primary/20 text-primary-foreground p-2 rounded-xl">
              <Leaf className="w-6 h-6" />
            </div>
            <span className="font-display font-bold text-2xl text-white">
              JHV Agronegócio
            </span>
          </div>

          <div className="flex gap-4">
            <a 
              href="https://www.facebook.com/" 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/jhvagronegocio" 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} JHV AGRONEGÓCIO. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Compromisso e integridade no campo.</p>
        </div>
      </div>
    </footer>
  );
}
