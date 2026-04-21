import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Eye, ShieldCheck, Heart } from 'lucide-react';

const values = [
  {
    icon: <Eye className="text-[#00F5FF]" />,
    title: 'Precision Vision',
    desc: 'Every pixel and Every line of code is intentional. We provide surgical focus on your brand identity.'
  },
  {
    icon: <ShieldCheck className="text-[#6900b3]" />,
    title: 'Absolute Trust',
    desc: 'We are loyal partners in your journey. Your security and business privacy are paramount to us.'
  },
  {
    icon: <Heart className="text-[#ff3e81]" />,
    title: 'Passion Driven',
    desc: 'We love building technology that solves real-world problems. Passion fuels our innovation.'
  }
];

export default function About() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-40 pb-20 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <div className="flex-1">
            <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
                <span className="font-['var(--font-space-grotesk)'] text-[10px] font-bold uppercase tracking-[0.2em] text-[#00F5FF]"> Our Story </span>
            </div>
            <h1 className="font-['var(--font-space-grotesk)'] text-[clamp(40px,8vw,64px)] font-bold text-white leading-tight tracking-tight mb-8">
              Pioneering <span className="italic font-normal">Digital Intelligence.</span>
            </h1>
            <p className="font-['var(--font-montserrat)'] text-lg text-slate-400 max-w-xl leading-relaxed mb-8">
              Paulscreations was founded on the belief that mid-sized businesses deserve high-end technology. We bridges the gap between boutique design aesthetics and enterprise-level automation.
            </p>
          </div>
          <div className="flex-1 relative">
            <div className="aspect-[4/5] rounded-[40px] bg-gradient-to-br from-[#00F5FF]/20 to-[#6900b3]/20 border border-white/10 overflow-hidden relative group">
                <Image 
                  src="https://picsum.photos/seed/agency-office/800/1000" 
                  alt="Office" 
                  fill
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <div key={i} className="group">
                <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:bg-[#00F5FF]/10 transition-colors">
                  {v.icon}
                </div>
                <h3 className="font-['var(--font-space-grotesk)'] text-xl font-bold text-white mb-4">{v.title}</h3>
                <p className="font-['var(--font-montserrat)'] text-sm text-slate-500 leading-relaxed max-w-xs">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-8">
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="font-['var(--font-space-grotesk)'] text-[clamp(24px,5vw,40px)] font-bold text-white mb-10 leading-tight">
            &quot;Design is not just what it looks like and feels like. Design is how it works &mdash; and how it scales.&quot;
           </h2>
           <p className="font-['var(--font-montserrat)'] text-slate-400 leading-relaxed mb-12 italic">
            In every project, we prioritize system stability and growth potential. We don&apos;t just build for today; we architect for your future legacy.
           </p>
           <div className="w-16 h-[1px] bg-[#00F5FF] mx-auto mb-10"></div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
