import { motion } from 'framer-motion';
import { ArrowRight, UserPlus } from 'lucide-react';

export default function ResellerCTA() {
  return (
    <section className="py-24 bg-background">
      <div className="w-full max-w-7xl mx-auto px-8">
        <motion.div 
          className="bg-gradient-to-br from-surface-alt to-surface rounded-[2rem] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between shadow-lg border border-black/5 relative overflow-hidden gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -top-[50%] -right-[10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(220,38,38,0.1)_0%,transparent_70%)] rounded-full"></div>
          
          <div className="max-w-[600px] relative z-10 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl mb-6">Become an <span className="text-gradient-red">Authorized Reseller</span></h2>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
              Join our growing network of partners and start offering our cutting-edge Fintech APIs and software solutions to your clients. Earn attractive commissions and build a sustainable tech business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold bg-secondary-gradient text-white shadow-[0_4px_14px_0_rgba(220,38,38,0.39)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(220,38,38,0.5)] hover:bg-secondary-gradient-hover transition-all duration-300 gap-2">
                <UserPlus size={18} /> Join Network
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 gap-2">
                View Reseller Plans <ArrowRight size={18} />
              </button>
            </div>
          </div>
          
          <div className="hidden lg:block relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
               <div className="w-[200px] h-[200px] bg-secondary-gradient rounded-full flex items-center justify-center text-white shadow-[0_20px_40px_rgba(220,38,38,0.3)]">
                 <UserPlus size={80} />
               </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
