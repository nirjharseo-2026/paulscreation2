'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 overflow-hidden">
      {/* Mesh Background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[#6900b3]/20 rounded-full blur-[120px]"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-[#00F5FF]/10 rounded-full blur-[150px]"
          animate={{
            x: [0, -60, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F5FF] animate-pulse shadow-[0_0_8px_#00F5FF]"></span>
            <span className="font-['var(--font-space-grotesk)'] text-[12px] font-bold uppercase tracking-[0.1em] text-slate-300">
              AI-Driven Digital Agency
            </span>
          </div>

          <h1 className="font-['var(--font-space-grotesk)'] text-[clamp(40px,8vw,80px)] font-bold leading-[1.1] tracking-tight text-white mb-8">
            We Build the Web.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5FF] to-[#6f00be]">
              We Automate the Future.
            </span>
          </h1>

          <p className="font-['var(--font-inter)'] text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
            Web Design & AI Automation Agency — built for businesses that want to lead, not follow. We merge high-end aesthetics with intelligent systems to scale your operations.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <Link 
              href="/services" 
              className="px-10 py-5 bg-[#00F5FF] text-black font-['var(--font-space-grotesk)'] text-[13px] font-bold uppercase tracking-[0.1em] rounded-full shadow-[0_0_30px_rgba(0,245,255,0.3)] hover:shadow-[0_0_40px_rgba(0,245,255,0.5)] transition-all transform hover:-translate-y-1"
            >
              See Our Services
            </Link>
            <Link 
              href="/contact" 
              className="px-10 py-5 border border-[#00F5FF] text-[#00F5FF] font-['var(--font-space-grotesk)'] text-[13px] font-bold uppercase tracking-[0.1em] rounded-full hover:bg-[#00F5FF]/10 transition-all transform hover:-translate-y-1"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Static grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}
      ></div>
    </section>
  );
}
