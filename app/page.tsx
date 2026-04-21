import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { motion } from 'motion/react';
import { Zap, Bot, Layout, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const servicesSummary = [
  {
    icon: <Layout className="text-[#00F5FF]" size={28} />,
    title: 'High-End Web Design',
    desc: 'Crafting premium, bespoke digital experiences that convert visitors into loyal customers.',
    colorHover: 'hover:border-[#00F5FF]/50'
  },
  {
    icon: <Bot className="text-[#6900b3]" size={28} />,
    title: 'AI Automation',
    desc: 'Intelligent systems designed to handle your manual tasks, from lead gen to customer support.',
    colorHover: 'hover:border-[#6900b3]/50'
  },
  {
    icon: <Zap className="text-[#ffcc00]" size={28} />,
    title: 'Digital Systems',
    desc: 'Scalable cloud infrastructure and custom integrations to streamline your business workflow.',
    colorHover: 'hover:border-[#ffcc00]/50'
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Services Section */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-['var(--font-space-grotesk)'] text-[clamp(32px,5vw,48px)] font-bold tracking-tight text-white mb-6">
              Solutions That Scale<br />
              <span className="text-slate-500">Your Business.</span>
            </h2>
            <p className="font-['var(--font-montserrat)'] text-slate-400">
              We specialize in the bridge between design and intelligence. Our team builds digital infrastructure that works for you, giving you more time to focus on growth.
            </p>
          </div>
          <Link href="/services" className="group flex items-center gap-3 text-[#00F5FF] font-['var(--font-space-grotesk)'] font-bold uppercase tracking-widest text-xs border-b border-[#00F5FF]/20 pb-2 hover:border-[#00F5FF] transition-all">
            All Services <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesSummary.map((service, index) => (
            <div 
              key={index}
              className={`p-10 rounded-3xl bg-white/[0.02] border border-white/10 transition-all duration-500 group ${service.colorHover}`}
            >
              <div className="mb-8 p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="font-['var(--font-space-grotesk)'] text-xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="font-['var(--font-montserrat)'] text-sm text-slate-400 leading-relaxed mb-8">
                {service.desc}
              </p>
              <Link href="/services" className="text-xs font-['var(--font-space-grotesk)'] font-bold uppercase tracking-widest text-[#00F5FF] opacity-0 group-hover:opacity-100 transition-all">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Quote / Stats */}
      <section className="py-24 bg-[#0b0e14] relative overflow-hidden">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
         
         <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <blockquote className="font-['var(--font-space-grotesk)'] text-[clamp(24px,4vw,36px)] font-bold text-white leading-tight italic">
                &quot;We don&apos;t just build websites. We architect high-performance digital ecosystems.&quot;
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00F5FF] to-[#6900b3]"></div>
                <div>
                  <div className="text-white font-bold text-sm">Paul Carter</div>
                  <div className="text-slate-500 text-xs uppercase tracking-widest">Founder & Lead Designer</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-12">
               <div>
                  <div className="text-[#00F5FF] text-4xl font-bold font-['var(--font-space-grotesk)'] mb-2 tracking-tighter">50+</div>
                  <div className="text-slate-500 text-xs uppercase tracking-widest font-bold">Premium Projects</div>
               </div>
               <div>
                  <div className="text-[#00F5FF] text-4xl font-bold font-['var(--font-space-grotesk)'] mb-2 tracking-tighter">98%</div>
                  <div className="text-slate-500 text-xs uppercase tracking-widest font-bold">Client Success</div>
               </div>
               <div>
                  <div className="text-[#00F5FF] text-4xl font-bold font-['var(--font-space-grotesk)'] mb-2 tracking-tighter">15k+</div>
                  <div className="text-slate-500 text-xs uppercase tracking-widest font-bold">Hours Automated</div>
               </div>
               <div>
                  <div className="text-[#00F5FF] text-4xl font-bold font-['var(--font-space-grotesk)'] mb-2 tracking-tighter">24/7</div>
                  <div className="text-slate-500 text-xs uppercase tracking-widest font-bold">Agency Support</div>
               </div>
            </div>
         </div>
      </section>

      {/* CTA Final */}
      <section className="py-24">
         <div className="max-w-5xl mx-auto px-8">
            <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/10 rounded-[40px] p-16 text-center overflow-hidden relative">
               <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#00F5FF]/5 rounded-full blur-[100px]"></div>
               <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#6900b3]/5 rounded-full blur-[100px]"></div>
               
               <h2 className="font-['var(--font-space-grotesk)'] text-[clamp(28px,6vw,48px)] font-bold text-white mb-8 relative z-10">
                Ready to lead the future?<br /> Let&apos;s build it.
               </h2>
               <p className="text-slate-400 max-w-xl mx-auto mb-12 font-['var(--font-montserrat)'] relative z-10">
                Join the exclusive list of companies leveraging AI and high-end design to dominate their niche.
               </p>
               <Link 
                href="/contact"
                className="inline-block px-12 py-6 bg-white text-black font-['var(--font-space-grotesk)'] text-sm font-bold uppercase tracking-widest rounded-full hover:bg-[#00F5FF] transition-all relative z-10 shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
               >
                Start Your Project
               </Link>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
