import { motion } from "framer-motion";
import { LayoutDashboard, FileCheck, Megaphone } from "lucide-react";

export function Services() {
  const services = [
    {
      id: "gestao",
      icon: LayoutDashboard,
      title: "Gestão",
      description: "A gestão agrícola envolve planejamento, organização e controle das atividades agrícolas. Os gestores precisam alocar recursos de forma eficiente e adotar tecnologias modernas para maximizar a produtividade.",
      image: "https://images.unsplash.com/photo-1592982537447-6f296b01e6ca?q=80&w=800&auto=format&fit=crop" // agricultural tech / drone
    },
    {
      id: "regularizacao",
      icon: FileCheck,
      title: "Regularização",
      description: "A regularização rural é fundamental para garantir a segurança jurídica dos proprietários, promover o desenvolvimento sustentável e facilitar o acesso a políticas públicas e crédito agrícola.",
      image: "https://images.unsplash.com/photo-1505424297051-c3ad50b055ae?q=80&w=800&auto=format&fit=crop" // documents / handshake concept
    },
    {
      id: "agromarketing",
      icon: Megaphone,
      title: "Agro Marketing",
      description: "Estratégias de marketing aplicadas ao setor agrícola para promover a visibilidade dos produtos, identificar necessidades do mercado, criar valor para clientes e impulsionar o crescimento.",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop" // fresh produce / market
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block"
            >
              Nossos Serviços
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-display font-bold text-foreground"
            >
              Áreas de Atuação
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a href="#contact" className="hidden md:inline-flex bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors shadow-lg">
              Solicitar Consultoria
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(20,163,83,0.12)] transition-all duration-500 flex flex-col"
            >
              <div className="h-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute -bottom-6 left-6 z-20 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg text-primary">
                  <service.icon className="w-6 h-6" />
                </div>
              </div>
              
              <div className="p-8 pt-10 flex-1 flex flex-col">
                <h3 className="text-2xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-1">
                  {service.description}
                </p>
                
                <div className="mt-8 pt-6 border-t border-border/50">
                  <a href="#contact" className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                    Saber mais <span className="text-xl">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
