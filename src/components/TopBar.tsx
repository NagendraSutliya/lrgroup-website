import { Mail, Phone, Share2, Globe } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-primary-dark text-white py-2 text-sm font-medium border-b border-white/10 hidden md:block">
      <div className="w-full max-w-7xl mx-auto px-8 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <a href="mailto:info@lrgroup.in" className="flex items-center gap-2 text-white/90 hover:text-accent transition-colors duration-200">
            <Mail size={16} />
            <span>info@lrgroup.in</span>
          </a>
          <a href="tel:+919876543210" className="flex items-center gap-2 text-white/90 hover:text-accent transition-colors duration-200">
            <Phone size={16} />
            <span>+91-9876543210</span>
          </a>
        </div>
        <div className="flex items-center gap-6">
          <div className="bg-white/10 px-3 py-1 rounded-full text-xs tracking-wider font-semibold border border-white/20">
            ISO 9001:2015 CERTIFIED
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/90 hover:text-accent hover:-translate-y-[2px] transition-all duration-200"><Share2 size={16} /></a>
            <a href="#" className="text-white/90 hover:text-accent hover:-translate-y-[2px] transition-all duration-200"><Globe size={16} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
