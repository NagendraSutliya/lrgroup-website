import { Link } from 'react-router-dom';
import { ChevronRight, User } from 'lucide-react';

const teamMembers = [
  { name: "Mr. Rahul Devanda", role: "Director", image: "/Images/rahul.png" },
  { name: "Mr. Lala Ram", role: "Founder", image: "/Images/lalaram.png" },
  { name: "Mr.Vijendra Choudhary", role: "Account's (CA)", image: "/Images/vijendra.png" },
  { name: "Mr. Nagendra Kumar Sutliya", role: "SOFTWARE ENGINEER", image: "/Images/nagendra.png" },
  { name: "Adv. Ramkishor Rolaniya", role: "LEGAL", image: "/Images/ramkishor.png" },
  { name: "Mr. Mukesh Jakhar", role: "Product, Data Analytics", image: "" },
];

export default function Team() {
  const topRowMembers = teamMembers.slice(0, 2);
  const bottomRowMembers = teamMembers.slice(2);

  return (
    <main className="bg-white min-h-screen py-20">
      <div className="w-full max-w-7xl mx-auto px-8">
        
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-3xl lg:text-[34px] font-heading font-extrabold text-[#1a5b82] mb-6 tracking-tight">
            Our Team
          </h1>
          <p className="text-[12px] font-bold text-[#1a5b82] max-w-3xl leading-relaxed italic mb-6">
            LR GROUP is an official trademark and logo of LMRP INFOTECH PRIVATE LIMITED. This
            identity mark, in short, represents not only the product offered from Glaze and the
            service standards attached there with, but in totality, represents the entire 'LR GROUP
            of Life'.
          </p>
          <div className="flex items-center gap-1.5 text-[11px] font-bold">
            <Link to="/" className="text-[#1a5b82] hover:underline">Home</Link>
            <ChevronRight size={10} className="text-[#1a5b82] mt-0.5" />
            <span className="text-[#e23636]">Our Team</span>
          </div>
        </div>

        {/* Top Row Grid (Director & Founder) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {topRowMembers.map((member, idx) => (
            <div key={idx} className={`flex flex-col border border-slate-300 ${idx === 0 ? 'lg:col-start-2' : ''}`}>
              {/* Image Area */}
              <div className="p-8 flex justify-center items-center bg-[#fafafa] h-[220px]">
                <div className="w-36 h-36 rounded-full border border-slate-300 bg-white flex items-center justify-center overflow-hidden shadow-inner">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className='w-full h-full object-cover' onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden') }} />
                  ) : null}
                  <User size={56} className={`text-slate-200 ${member.image ? 'hidden' : ''}`} />
                </div>
              </div>
              
              {/* Divider Line */}
              <div className="w-full h-px bg-slate-300"></div>
              
              {/* Text Area */}
              <div className="p-4 flex flex-col items-center justify-center text-center bg-[#fafafa] h-24">
                <h3 className="text-[14px] font-bold text-slate-800 mb-1.5 leading-tight">
                  {member.name}
                </h3>
                <p className="text-[10px] font-extrabold text-[#00a8e8] uppercase tracking-wider">
                  {member.role}
                </p>
              </div>
              
              {/* Bottom Line */}
              <div className="w-full h-1 bg-slate-100 border-t border-slate-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom Row Grid (Remaining Members) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bottomRowMembers.map((member, idx) => (
            <div key={idx} className="flex flex-col border border-slate-300">
              {/* Image Area */}
              <div className="p-8 flex justify-center items-center bg-[#fafafa] h-[220px]">
                <div className="w-36 h-36 rounded-full border border-slate-300 bg-white flex items-center justify-center overflow-hidden shadow-inner">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className='w-full h-full object-cover' onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden') }} />
                  ) : null}
                  <User size={56} className={`text-slate-200 ${member.image ? 'hidden' : ''}`} />
                </div>
              </div>
              
              {/* Divider Line */}
              <div className="w-full h-px bg-slate-300"></div>
              
              {/* Text Area */}
              <div className="p-4 flex flex-col items-center justify-center text-center bg-[#fafafa] h-24">
                <h3 className="text-[14px] font-bold text-slate-800 mb-1.5 leading-tight">
                  {member.name}
                </h3>
                <p className="text-[10px] font-extrabold text-[#00a8e8] uppercase tracking-wider">
                  {member.role}
                </p>
              </div>
              
              {/* Bottom Line */}
              <div className="w-full h-1 bg-slate-100 border-t border-slate-300"></div>
            </div>
          ))}
        </div>
        
      </div>
    </main>
  );
}
