import { motion } from 'framer-motion';
import ServiceRow from '../components/ServiceRow';
import ResellerCTA from '../components/ResellerCTA';
import { MonitorSmartphone, Landmark, Code2 } from 'lucide-react';

export default function Services() {
  return (
    <main>
      <section className="py-20 bg-surface text-center">
        <div className="w-full max-w-7xl mx-auto px-8">
          <motion.h1 
            className="text-5xl font-heading font-extrabold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our <span className="text-gradient">Services</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-slate-500 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Comprehensive IT solutions designed to accelerate your digital transformation.
          </motion.p>
        </div>
      </section>

      <ServiceRow 
        title="Custom Software Development"
        description="We build scalable and robust software applications tailored to your specific business workflows. From concept to deployment, our agile team ensures high-quality deliverables."
        features={[
          "Enterprise ERP Systems",
          "CRM Solutions",
          "Cloud-Native Applications",
          "Legacy System Migration"
        ]}
        imageSrc="/software-dev.png"
        imageAlt="Software Development"
        icon={<Code2 />}
      />

      <ServiceRow 
        title="E-Banking & Fintech Solutions"
        description="Secure and compliant fintech infrastructure. We develop high-performance banking APIs, digital wallets, and payment gateways that process millions of transactions reliably."
        features={[
          "Custom Wallet Apps",
          "Payment Gateway Integration",
          "BBPS Solutions",
          "Secure Ledger Systems"
        ]}
        imageSrc="/fintech-api.png"
        imageAlt="Fintech Solutions"
        icon={<Landmark />}
        reverse={true}
      />
      
      <ServiceRow 
        title="Mobile App Development"
        description="Engaging and highly performant native applications for iOS and Android platforms, designed with user experience at the forefront."
        features={[
          "Native iOS (Swift)",
          "Native Android (Kotlin)",
          "Cross-Platform (React Native)",
          "App Store Optimization"
        ]}
        imageSrc="/software-dev.png"
        imageAlt="Mobile Apps"
        icon={<MonitorSmartphone />}
      />

      <ResellerCTA />
    </main>
  );
}
