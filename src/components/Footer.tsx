import { Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Facebook = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Youtube = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-gradient-to-l from-sky-100 to-sky-500 pt-16 pb-8 border-t border-slate-200">
      <div className="w-full max-w-7xl mx-auto px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          
          {/* Column 1 */}
          <div className="flex flex-col lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-gradient rounded-lg flex items-center justify-center text-white font-bold text-2xl font-heading">
                LR
              </div>
              <div className="font-heading font-extrabold text-2xl text-primary-dark tracking-tight">
                LR<span className="text-secondary">Group</span>
              </div>
            </div>
            <p className="text-sm text-slate-600 mb-6">
              An Assisted B2C & B2B company.Innovative Digital Solution
            </p>
            
            <h3 className="text-[#00a8e8] font-bold text-lg mb-2">Our Address</h3>
            <p className="font-bold text-slate-800 text-sm mb-2">
              LMRP INFOTECH PRIVATE LIMITED
            </p>
            <p className="text-sm text-slate-600 mb-4 leading-relaxed">
              Alankar Colony , Kalwar Rd, Near SBI Bank, Jaipur,<br />
              Rajasthan 303706
            </p>
            
            <div className="flex flex-col gap-2 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-slate-700" />
                <a href="mailto:info@lrgroup.in" className="hover:text-primary transition-colors">info@lrgroup.in</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-slate-700" />
                <a href="tel:+919680204664" className="hover:text-primary transition-colors">+91 9680204664</a>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-slate-800 text-xl font-heading mb-6">Products & Services</h3>
            <ul className="flex flex-col gap-3 text-sm text-slate-600 font-medium">
              <li><Link to="#" className="hover:text-primary transition-colors">API Solutions</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Education Softwares</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">eCommerce Portal</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Reseller Software</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">IVR | ERP | CRM | Bulk SMS & Email</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-slate-800 text-xl font-heading mb-6">Company</h3>
            <ul className="flex flex-col gap-3 text-sm text-slate-600 font-medium">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">API Partner</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-slate-800 text-xl font-heading mb-6">Follow Us</h3>
            <ul className="flex flex-col gap-3 text-sm text-slate-600 font-medium">
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Facebook size={16} /> Facebook
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Youtube size={16} /> Youtube
                </a>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Bottom row */}
        <div className="flex flex-wrap gap-2 mt-12 pt-6">
          <Link to="#" className="px-3 py-1 border border-slate-300 text-xs text-slate-600 hover:bg-slate-100 transition-colors uppercase">PRIVACY POLICY</Link>
          <Link to="#" className="px-3 py-1 border border-slate-300 text-xs text-slate-600 hover:bg-slate-100 transition-colors uppercase">CUSTOMER GRIEVANCE</Link>
          <Link to="#" className="px-3 py-1 border border-slate-300 text-xs text-slate-600 hover:bg-slate-100 transition-colors uppercase">REFUND AND CANCELLATION</Link>
          <Link to="#" className="px-3 py-1 border border-slate-300 text-xs text-slate-600 hover:bg-slate-100 transition-colors uppercase">TERMS & CONDITIONS</Link>
        </div>
      </div>
    </footer>
  );
}
