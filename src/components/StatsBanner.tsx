import { motion } from 'framer-motion';

const statsData = [
  { label: 'Years Experience', endValue: 10, suffix: '+' },
  { label: 'Projects Completed', endValue: 1000, suffix: '+' },
  { label: 'Happy Clients', endValue: 2000, suffix: '+' },
  { label: 'Uptime', endValue: 99, suffix: '.9%' },
];

export default function StatsBanner() {
  return (
    <section className="relative bg-primary-dark text-white py-24 overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.4)_0%,transparent_50%),radial-gradient(circle_at_80%_50%,rgba(220,38,38,0.3)_0%,transparent_50%)] z-0"></div>

      <div className="w-full max-w-7xl mx-auto px-8 relative z-10">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          {statsData.map((stat, idx) => (
            <motion.div 
              key={idx}
              className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 hover:bg-white/10"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
            >
              <div className="text-5xl lg:text-6xl font-extrabold font-heading mb-2 bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                {stat.endValue}{stat.suffix}
              </div>
              <div className="text-lg text-white/80 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
