import { motion } from "framer-motion";
import { Target, Eye, Gem } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Fornecer serviços e soluções inovadoras para aumentar a produtividade agrícola, promovendo o sucesso do empresário rural."
    },
    {
      icon: Eye,
      title: "Visão",
      description: "Ser referência no mercado agrícola, inspirando liderança e transformando vidas através de nossos valores de compromisso e integridade."
    },
    {
      icon: Gem,
      title: "Valor",
      description: "Compromisso e integridade são nossos pilares, refletindo a qualidade e seriedade de nossos projetos, visando um futuro próspero."
    }
  ];

  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block"
          >
            Nossa Essência
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6"
          >
            Compromisso com o Futuro do Campo
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Na JHV Agronegócio, incentivamos o empresário rural a liderar com autoridade, oferecendo soluções inovadoras para aumentar a produtividade agrícola com total integridade.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-border/50 hover:shadow-[0_20px_40px_rgba(20,163,83,0.08)] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:bg-primary/10 transition-colors"></div>
              
              <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                <item.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
