import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ServiceRowProps {
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
  icon: ReactNode;
  reverse?: boolean;
}

export default function ServiceRow({
  title,
  description,
  features,
  imageSrc,
  imageAlt,
  icon,
  reverse = false,
}: ServiceRowProps) {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="w-full max-w-7xl mx-auto px-8">
        <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl bg-primary/5 text-primary mx-auto lg:mx-0 mb-6">
              {icon}
            </div>
            <h2 className="text-4xl mb-6">{title}</h2>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed">{description}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-left">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 font-medium text-slate-900">
                  <CheckCircle2 size={20} className="text-secondary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <button className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
              Learn More
            </button>
          </motion.div>

          <motion.div 
            className="flex-1 relative group w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(59,130,246,0.1)_0%,rgba(255,255,255,0)_70%)] rounded-full blur-[40px] -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none z-10"></div>
              <img 
                src={imageSrc} 
                alt={imageAlt} 
                className="w-full h-auto block transform transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
