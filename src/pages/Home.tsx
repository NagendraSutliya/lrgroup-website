import HeroSlider from '../components/HeroSlider';
import ServiceRow from '../components/ServiceRow';
import SolutionsSlider from '../components/SolutionsSlider';
import StatsBanner from '../components/StatsBanner';
import ResellerCTA from '../components/ResellerCTA';
import { MonitorSmartphone, Landmark } from 'lucide-react';

export default function Home() {
  return (
    <main>
      <HeroSlider />
      
      <ServiceRow 
        title="Enterprise Software Development"
        description="We engineer scalable, secure, and robust software solutions tailored to your unique business requirements. Our agile methodology ensures rapid deployment without compromising on quality."
        features={[
          "Custom Web Applications",
          "Native Android & iOS Apps",
          "Legacy System Modernization",
          "Cloud Infrastructure Setup"
        ]}
        imageSrc="/software-dev.png"
        imageAlt="Software Development Dashboard"
        icon={<MonitorSmartphone />}
      />
      
      <StatsBanner />

      <ServiceRow 
        title="Next-Gen Fintech APIs"
        description="Empower your financial services with our highly secure and blazing-fast banking APIs. From BBPS integrations to custom wallet solutions, we provide the infrastructure for modern finance."
        features={[
          "AEPS & BBPS Integration",
          "Payment Gateway Setup",
          "Digital Wallet Solutions",
          "PCI DSS Compliant Architecture"
        ]}
        imageSrc="/fintech-api.png"
        imageAlt="Fintech API Dashboard"
        icon={<Landmark />}
        reverse={true}
      />

      <SolutionsSlider />
      
      <ResellerCTA />
    </main>
  );
}
