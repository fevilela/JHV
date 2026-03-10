import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* landing page hero scenic agricultural field landscape */}
        <img
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop"
          alt="Campos agrícolas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-semibold mb-6 border border-white/30">
              Excelência no Campo
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 text-balance"
          >
            Bem Vindo à<br />
            <span className="text-secondary-foreground drop-shadow-md">JHV Agronegócio</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/90 mb-10 leading-relaxed max-w-xl"
          >
            Serviço online e semipresencial, oferecendo informações detalhadas e soluções para os desafios enfrentados na gestão, regularização e marketing agrícola. Permita-nos ajudá-lo a alcançar o sucesso sustentável em sua operação.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all hover:shadow-xl hover:-translate-y-1 group"
            >
              Saiba Mais
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
            >
              Falar com Consultor
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none z-10 rotate-180">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[50px] sm:h-[100px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-background"
          ></path>
        </svg>
      </div>
    </section>
  );
}
