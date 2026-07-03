import { motion } from 'framer-motion';
import { ChevronRight, Code, ShieldCheck, PlayCircle } from 'lucide-react';

export default function HeroSlider() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-surface overflow-hidden">
      {/* Background blobs for modern feel */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[10%] -right-[5%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(59,130,246,0.15)_0%,rgba(255,255,255,0)_70%)] rounded-full blur-[40px]"></div>
        <div className="absolute -bottom-[10%] -left-[5%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(220,38,38,0.1)_0%,rgba(255,255,255,0)_70%)] rounded-full blur-[40px]"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-center justify-between gap-16 z-10 py-16 lg:py-0">
        <motion.div 
          className="flex-1 max-w-[600px] flex flex-col items-center text-center lg:items-start lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 px-4 py-2 rounded-full text-primary-dark font-semibold text-sm mb-6">
            <ShieldCheck size={18} />
            <span>Trusted Enterprise IT Solutions Partner</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl leading-[1.1] mb-6">
            Empowering Your Business With <br />
            <span className="text-gradient">Next-Gen</span>{' '}
            <span className="relative inline-block">
              Technology
              <span className="absolute bottom-[10%] left-0 w-full h-[30%] bg-secondary/15 -z-10 -rotate-2"></span>
            </span>
          </h1>
          
          <p className="text-xl text-slate-500 mb-10 leading-relaxed">
            LMRP Infotech Pvt Ltd delivers scalable software development, robust Fintech APIs, and cutting-edge Graphics Design to accelerate your digital transformation journey.
          </p>
          
          <div className="flex gap-4 items-center justify-center lg:justify-start">
            <button className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold bg-primary-gradient text-white shadow-[0_4px_14px_0_rgba(30,58,138,0.39)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(30,58,138,0.5)] hover:bg-primary-gradient-hover transition-all duration-300 gap-2">
              Explore Services <ChevronRight size={18} />
            </button>
            <button className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 gap-2">
              <PlayCircle size={18} /> Watch Video
            </button>
          </div>
        </motion.div>

        <motion.div 
          className="flex-1 relative flex justify-center items-center w-full max-w-[600px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <img 
            src="/hero-isometric.png" 
            alt="Enterprise Technology Illustration" 
            className="w-full h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.1)]"
          />
          
          <div className="hidden lg:flex absolute top-[10%] -right-[5%] bg-white/85 backdrop-blur-glass border border-white/30 p-4 rounded-2xl shadow-glass items-center gap-4 animate-[bounce_6s_infinite]">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl text-white bg-primary-gradient">
              <Code size={24} />
            </div>
            <div>
              <h4 className="text-xl font-extrabold mb-1">1000+</h4>
              <p className="text-sm text-slate-500 m-0">Projects Delivered</p>
            </div>
          </div>
          
          <div className="hidden lg:flex absolute bottom-[15%] -left-[5%] bg-white/85 backdrop-blur-glass border border-white/30 p-4 rounded-2xl shadow-glass items-center gap-4 animate-[bounce_6s_infinite_reverse]">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl text-white bg-secondary-gradient">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="text-xl font-extrabold mb-1">99.9%</h4>
              <p className="text-sm text-slate-500 m-0">API Uptime</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
