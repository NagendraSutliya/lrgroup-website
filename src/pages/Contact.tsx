import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <main>
      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(220,38,38,0.05)_0%,rgba(255,255,255,0)_70%)] rounded-full blur-[40px] -z-10"></div>
        <div className="w-full max-w-7xl mx-auto px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl font-heading font-extrabold mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-slate-500">
              Have a project in mind or want to explore our API solutions? Reach out to our team today.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-16">
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-heading mb-8">Contact Information</h2>
              
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Our Office</h4>
                  <p className="text-slate-500 leading-relaxed">
                    123 Tech Park, Cyber City Phase 2<br />
                    New Delhi, India 110001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Phone</h4>
                  <p className="text-slate-500 leading-relaxed">
                    +91 98765 43210<br />
                    +91 11 2345 6789
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Email</h4>
                  <p className="text-slate-500 leading-relaxed">
                    info@lrgroup.in<br />
                    support@lrgroup.in
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="flex-1 bg-white p-10 rounded-[2rem] shadow-xl border border-slate-100"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              <form className="flex flex-col gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="inline-flex items-center justify-center px-6 py-4 rounded-xl font-bold text-lg bg-primary-gradient text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all gap-2 mt-2">
                  <Send size={20} /> Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
