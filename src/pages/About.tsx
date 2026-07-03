import { Link } from 'react-router-dom';
import { CreditCard, Coins, Banknote, MessageSquare, CreditCard as CreditCardLead, FileText, CheckSquare, ChevronRight, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <main className="bg-white overflow-hidden">
      {/* 1. Hero Section */}
      <section 
        className="relative py-24 bg-slate-100 bg-cover bg-center" 
        style={{ backgroundImage: "url('/software-dev.png')" }}
      >
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-0"></div>
        <div className="w-full max-w-7xl mx-auto px-8 relative z-10 text-slate-800">
          <div className="text-sm font-semibold mb-3 text-[#a6192e] flex items-center gap-2">
            <Link to="/" className="hover:underline">Home</Link>
            <ChevronRight size={14} />
            <span>About Us</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-heading font-extrabold text-[#00a8e8] mb-4">
            About Us
          </h1>
          <p className="text-lg lg:text-xl font-medium text-slate-700 max-w-2xl leading-relaxed">
            IT (Information Technology) Software and Solution Providing Company in India. | Building Bharat's Digital Banking Ecosystem.
          </p>
        </div>
      </section>

      {/* 2. Welcome to LR GROUP */}
      <section className="py-20">
        <div className="w-full max-w-7xl mx-auto px-8 text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-slate-800 inline-block relative">
            Welcome To LR GROUP
            <span className="block w-16 h-1 bg-[#a6192e] mx-auto mt-4 rounded-full relative">
              <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-2 border-[#a6192e] rounded-full"></span>
            </span>
          </h2>
        </div>
        
        <div className="w-full max-w-7xl mx-auto px-8 grid grid-cols-1 xl:grid-cols-[1fr_400px] gap-16 items-start">
          <div className="text-sm text-slate-700 leading-relaxed space-y-4 text-justify font-medium">
            <p>
              <strong>L MRP INFOTECH</strong> is a NexGen B2B FinTech Company, redefining the API infrastructure for the Banking, Financial & Verification ecosystems... We're building one of the world's largest Financial & Verification API stacks...
            </p>
            <p>
              <strong>LR GROUP</strong> is an official trademark and logo of L MRP INFOTECH. This directly stands to strict standards and only the product offered from L MRP and its service standards attached there with, led its legally represent the entire L MRP Way of Life'.
            </p>
            <p className="font-bold text-slate-900 mt-6">What are we?</p>
            <p>
              One of the country's best India Software company, LMRP Infotech Pvt. Ltd was established in the year <strong>2018</strong> by two visionary entrepreneurs, Mr. LR Samota and Mr. Rahul Samota. The main purpose of calling LR GROUP was to enhance consumer delight while enriching the lives of people associated with the business by promoting free enterprise and success in togetherness...The Year 2018 saw India and Bharat moving to the era of digital payments. built on payment, and compliance. This has been purely been possible through JAM - JanDhan Accounts, Aadhar & Mobile / smartphones penetration. Keeping this above in view and the need for better, faster & secure technological solutions, led to the birth of lr group in <strong>2018</strong>. India is expected to be a 10 trillion dollar economy in a few years, and banking & fintech are going to play a big role in achieving these. Fintech's have taken the opportunity in <strong>2018</strong> to launch and implement various innovations for consumer growth and this has led to stronger partnership between the banking ecosystem and the Fintech's...
            </p>
          </div>
          
          <div className="flex justify-center items-center h-full">
            <div className="flex flex-wrap gap-2 justify-center content-center h-full font-heading font-black uppercase text-center leading-none select-none w-full max-w-md">
              <span className="text-[2.5rem] text-[#00a8e8]">SEND</span>
              <span className="text-[2.5rem] text-[#00a8e8]">PAYMENTS</span>
              <span className="text-[1.8rem] text-slate-400 w-full tracking-wide">REMITTANCES</span>
              
              <div className="flex gap-4 items-center">
                <span className="text-[2.2rem] text-[#00a8e8] [writing-mode:vertical-rl] tracking-widest">COLLECTIONS</span>
                <div className="flex flex-col gap-2 items-start">
                  <span className="text-[2.5rem] text-[#00a8e8]">UTILITY</span>
                  <span className="text-[3.5rem] text-slate-700 tracking-tight">LEND</span>
                  <span className="text-[2rem] text-slate-400 tracking-wide">TRAVEL</span>
                </div>
                <div className="flex flex-col gap-2 items-start">
                  <span className="text-[3rem] text-[#00a8e8]">SPEND</span>
                  <span className="text-[2.5rem] text-[#00a8e8]">CARDS</span>
                  <span className="text-[2.5rem] text-[#00a8e8]">INVEST</span>
                </div>
              </div>
              
              <span className="text-[3rem] text-[#00a8e8] w-full text-left">IDENTITY</span>
              
              <div className="flex items-center gap-2 w-full justify-center">
                <span className="text-[4rem] text-slate-400">ATM</span>
                <span className="text-[2rem] text-[#00a8e8] [writing-mode:vertical-rl] tracking-wider">WITHDRAWAL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Partner With Us / What Sets Us Apart */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="w-full max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <div>
            <h3 className="text-2xl font-heading font-bold text-slate-800 mb-8 relative pb-4">
              Why Partner With Us ?
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#a6192e] rounded-full"></span>
              <span className="absolute -bottom-1 left-4 w-3 h-3 bg-white border-2 border-[#a6192e] rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {[
                "LR GROUP is a platform to provide unbiased access to opportunities.",
                "We provide the best technological know-how to promote entrepreneurship.",
                "We help develop a recurring earning potential.",
                "We enable people to become self reliant even with minimal skill set.",
                "We help maintain a work/home balance.",
                "We offer a zero stress work environment.",
                "We help you become your own Boss."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[15px] font-bold text-slate-700">
                  <CheckSquare size={18} className="text-[#a6192e] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-heading font-bold text-slate-800 mb-8 relative pb-4">
              What Sets Us Apart?
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#a6192e] rounded-full"></span>
              <span className="absolute -bottom-1 left-4 w-3 h-3 bg-white border-2 border-[#a6192e] rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {[
                "Immediate on boarding",
                "Quick service delivery",
                "All device compatibility",
                "Web & Mobile App based service transactions",
                "Real time commission payout",
                "Our tailor-made business plans",
                "Our urban & rural existence"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[15px] font-bold text-slate-700">
                  <CheckSquare size={18} className="text-[#a6192e] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* 4. End to end expertise */}
      <section className="bg-[#0f4366] py-12 text-center text-white">
        <h2 className="text-2xl lg:text-3xl font-heading font-bold">We offer our end to end expertise in</h2>
      </section>
      
      <section className="py-20 bg-white">
        <div className="w-full max-w-7xl mx-auto px-8 relative">
          <div className="flex flex-wrap lg:flex-nowrap justify-between gap-8 relative z-10 pt-16">
            
            {/* Horizontal connection line */}
            <div className="hidden lg:block absolute top-[4.5rem] left-[8%] right-[8%] h-[2px] bg-slate-300 z-0"></div>

            {[
              { title: "Cardly & tDaaS Platform", icon: <CreditCard size={32} />, color: "bg-[#e83e3e]" },
              { title: "Digital Gold & Silver API", icon: <Coins size={32} />, color: "bg-[#00a8e8]" },
              { title: "Cash withdrawal & Cash Deposit", icon: <Banknote size={32} />, color: "bg-[#2eb872]" },
              { title: "SMS", icon: <MessageSquare size={32} />, color: "bg-[#f26522]" },
              { title: "Credit Card lead Generation", icon: <CreditCardLead size={32} />, color: "bg-[#7154b8]" },
              { title: "Bill Payments : BBPS", icon: <FileText size={32} />, color: "bg-[#f9c20a]" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center w-full lg:w-1/6 relative z-10">
                <div className="w-[2px] h-16 bg-slate-300 absolute -top-16 left-1/2 -translate-x-1/2 hidden lg:block"></div>
                <div className={`w-24 h-24 rounded-full ${item.color} flex items-center justify-center text-white mb-6 shadow-xl border-4 border-white`}>
                  {item.icon}
                </div>
                <p className="text-[15px] font-bold text-slate-800 text-center px-2">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Milestones */}
      <section className="py-24 bg-white">
        <div className="w-full max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {[
            {
              year: "2022",
              items: [
                "1000+ Partner",
                "AePS, PrePaid Card DMT Service API launched",
                "User friendly APIs",
                "2 Mln+ Customers Walk In"
              ]
            },
            {
              year: "2023",
              items: [
                "2000+ Partner",
                "Neo/Zero Balance Banking launched",
                "User friendly APIs",
                "6 Mln+ Customers Walk In"
              ]
            },
            {
              year: "2024",
              items: [
                "3000+ Partner",
                "Best Verification API Provider Licensed",
                "User friendly APIs",
                "1.5 Mln+ per month Customers Walk In"
              ]
            }
          ].map((milestone, idx) => (
            <div key={idx} className="flex flex-col relative pt-8">
              
              {/* Connecting line between Chevrons */}
              {idx !== 2 && (
                <div className="hidden md:block absolute top-[4.5rem] -right-8 w-16 h-4 bg-slate-800/10 z-0" style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}></div>
              )}

              <div className="relative h-24 flex items-center justify-center mb-8 mx-auto w-[120%] -ml-[10%]">
                {/* Custom Chevron Shape */}
                <svg viewBox="0 0 300 100" className="absolute inset-0 w-full h-full text-[#00a8e8] drop-shadow-md" preserveAspectRatio="none">
                  <polygon points="0,0 260,0 300,50 260,100 0,100 40,50" fill="currentColor" />
                </svg>
                {/* Globe Icon */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#00a8e8] rounded-full border-[6px] border-white flex items-center justify-center text-white shadow-sm z-20">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </div>
                <h3 className="text-[2rem] font-black text-white relative z-10 pt-2 tracking-wide">{milestone.year}</h3>
              </div>
              
              <ul className="space-y-4 px-6 mt-4">
                {milestone.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-bold text-slate-600">
                    <CheckSquare size={16} className="text-slate-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
        </div>
      </section>

      {/* 6. Reseller CTA */}
      <section className="bg-[#1f5c87] py-16 text-center text-white">
        <div className="w-full max-w-7xl mx-auto px-8">
          <h2 className="text-2xl lg:text-[28px] font-bold mb-10 tracking-tight">Become a Reseller Program and earn upto Rs. 50 K per month.</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-10 py-3.5 bg-[#00a8e8] rounded-full font-black text-white shadow-lg hover:bg-sky-500 transition-colors tracking-wide">
              ENROLL NOW
            </button>
            <button className="px-10 py-3.5 bg-[#d11124] rounded-full font-black text-white shadow-lg hover:bg-red-700 transition-colors flex items-center gap-3 tracking-wide">
              <PhoneCall size={20} className="fill-white" /> CALL NOW
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
