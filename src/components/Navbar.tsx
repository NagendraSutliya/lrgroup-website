import { useState } from 'react';
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/' },
  { 
    name: 'About Us', 
    href: '/about',
    dropdown: [
      { name: 'Management team', href: '/team' },
      { name: 'Company Profile', href: '#' }
    ]
  },
  {
    name: 'Products & Services',
    href: '/services',
    dropdown: [
      { name: 'Nex-Gen Banking', href: '#' },
      { name: 'Web Design & App Development', href: '#' },
      { name: 'Fintech', href: '#' },
      { name: 'Taxtion & Insurance', href: '#' },
      { name: 'Graphic Design', href: '#' },
      { name: 'Digital Marketing', href: '#' }
    ]
  },
  {
    name: 'Solution',
    href: '/products',
    dropdown: [
      { name: 'API Solutions', href: '#' },
      { name: 'Education Softwaresss', href: '#' },
      { name: 'eCommerce Portal', href: '#' },
      { name: 'Reseller Software', href: '#' },
      { name: 'IVR | ERP | CRM | Bulk SMS & Email', href: '#' }
    ]
  },
  { name: 'Contact us', href: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className={`sticky top-0 z-50 bg-white/85 backdrop-blur-glass border-b border-white/30 shadow-sm transition-all duration-300`}>
      <div className="w-full max-w-7xl mx-auto px-8">
        <nav className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3 no-underline">
            <div className="w-10 h-10 bg-primary-gradient rounded-lg flex items-center justify-center text-white font-bold text-2xl font-heading">
              LR
            </div>
            <div className="font-heading font-extrabold text-2xl text-primary-dark tracking-tight">
              LR<span className="text-secondary">Group</span>
            </div>
          </Link>

          <div className="hidden lg:flex gap-8 items-center h-full">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative h-full flex items-center group"
                onMouseEnter={() => setOpenDropdown(link.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link 
                  to={link.href} 
                  className="font-semibold text-slate-700 flex items-center gap-1 hover:text-primary transition-colors py-2 relative"
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={14} className="mt-0.5 text-slate-500 group-hover:text-primary transition-transform duration-200" />}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </Link>
                
                {/* Desktop Dropdown */}
                {link.dropdown && (
                  <AnimatePresence>
                    {openDropdown === link.name && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-[100%] left-0 w-64 bg-[#a6192e] border-t-2 border-[#00a8e8] shadow-xl z-50"
                      >
                        <div className="flex flex-col">
                          {link.dropdown.map((subLink, idx) => (
                            <Link 
                              key={subLink.name} 
                              to={subLink.href}
                              className={`px-5 py-3 text-white text-sm font-medium hover:bg-black/20 transition-colors ${idx !== link.dropdown.length - 1 ? 'border-b border-white/10' : ''}`}
                            >
                              {subLink.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden lg:inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold bg-primary-gradient text-white shadow-[0_4px_14px_0_rgba(30,58,138,0.39)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(30,58,138,0.5)] hover:bg-primary-gradient-hover transition-all duration-300 gap-2">
              Enquire Now <ChevronRight size={18} />
            </button>
            <button 
              className="lg:hidden text-slate-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-surface lg:hidden border-t border-slate-200"
          >
            <div className="w-full max-w-7xl mx-auto px-8 py-4">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <div key={link.name} className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <Link 
                        to={link.href} 
                        onClick={() => !link.dropdown && setMobileMenuOpen(false)} 
                        className="font-semibold text-slate-900 py-2 flex-1"
                      >
                        {link.name}
                      </Link>
                      {link.dropdown && (
                        <button 
                          className="p-2"
                          onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                        >
                          <ChevronDown size={18} className={`transition-transform ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                        </button>
                      )}
                    </div>
                    
                    {/* Mobile Dropdown */}
                    {link.dropdown && openDropdown === link.name && (
                      <div className="flex flex-col pl-4 border-l-2 border-[#a6192e] ml-2 mt-1 mb-2 gap-2">
                        {link.dropdown.map((subLink) => (
                          <Link 
                            key={subLink.name} 
                            to={subLink.href} 
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-sm font-medium text-slate-600 py-1"
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <button className="inline-flex items-center justify-center px-6 py-3 mt-4 rounded-full font-semibold bg-primary-gradient text-white shadow-[0_4px_14px_0_rgba(30,58,138,0.39)]">
                  Enquire Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
