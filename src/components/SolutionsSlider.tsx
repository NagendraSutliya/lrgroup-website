import { motion } from 'framer-motion';
import { ArrowRight, Code2, GraduationCap, LayoutGrid } from 'lucide-react';

const solutions = [
  {
    icon: <Code2 size={28} />,
    title: 'API Solutions',
    desc: 'Robust and secure banking APIs, BBPS, and utility payment solutions designed for high volume transaction processing.',
    delay: 0.1,
  },
  {
    icon: <LayoutGrid size={28} />,
    title: 'Web & Android',
    desc: 'Custom web application and Android app development tailored to your enterprise requirements and user needs.',
    delay: 0.2,
  },
  {
    icon: <GraduationCap size={28} />,
    title: 'E-Learning Platforms',
    desc: 'Comprehensive learning management systems (LMS) designed for schools, colleges, and corporate training.',
    delay: 0.3,
  },
];

export default function SolutionsSlider() {
  return (
    <section className="py-20 bg-surface-alt">
      <div className="w-full max-w-7xl mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Tailored Digital <span className="text-gradient">Solutions</span></h2>
          <p className="text-lg text-slate-500">
            We deliver industry-specific digital products that solve complex business challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, idx) => (
            <motion.div 
              key={idx}
              className="bg-white rounded-3xl p-10 shadow-md border border-slate-100 transition-all duration-300 relative overflow-hidden flex flex-col group hover:-translate-y-1 hover:shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: solution.delay }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
              
              <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                {solution.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
              <p className="text-slate-500 mb-8 leading-relaxed flex-grow">{solution.desc}</p>
              
              <a href="#" className="inline-flex items-center gap-2 text-primary font-semibold mt-auto hover:text-primary-dark hover:gap-3 transition-all">
                Explore Solution <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
