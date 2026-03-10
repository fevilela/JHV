import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";

export function News() {
  return (
    <section id="news" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center p-4 bg-muted rounded-full mb-8 text-primary"
        >
          <Newspaper className="w-8 h-8" />
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6"
        >
          Notícias Recentes
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto bg-muted/30 border border-border rounded-3xl p-12 shadow-sm"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">Verifique em breve</h3>
          <p className="text-muted-foreground text-lg">
            Assim que novos posts forem publicados, você poderá vê-los aqui. Fique atento às nossas atualizações do setor agrícola.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
