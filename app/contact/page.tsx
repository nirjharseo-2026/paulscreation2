import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-40 pb-20 px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          {/* Info Column */}
          <div className="flex-1">
            <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
                <span className="font-['var(--font-space-grotesk)'] text-[10px] font-bold uppercase tracking-[0.2em] text-[#00F5FF]"> Contact </span>
            </div>
            <h1 className="font-['var(--font-space-grotesk)'] text-[clamp(40px,8vw,64px)] font-bold text-white leading-tight tracking-tight mb-8 italic">
              Let&apos;s Scale <span className="font-normal text-slate-500">Together.</span>
            </h1>
            <p className="font-['var(--font-montserrat)'] text-lg text-slate-400 max-w-xl leading-relaxed mb-12">
              Ready to automate your workflow or redesign your digital identity? Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-8">
               <div className="flex items-center gap-6 group">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:border-[#00F5FF]/50 transition-colors">
                    <Mail className="text-[#00F5FF]" size={24} />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs uppercase tracking-widest mb-1">Email Us</div>
                    <div className="text-white font-bold font-['var(--font-space-grotesk)'] text-lg">hello@paulscreations.com</div>
                  </div>
               </div>
               <div className="flex items-center gap-6 group">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:border-[#6900b3]/50 transition-colors">
                    <Phone className="text-[#6900b3]" size={24} />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs uppercase tracking-widest mb-1">Call Us</div>
                    <div className="text-white font-bold font-['var(--font-space-grotesk)'] text-lg">+1 (234) 567-890</div>
                  </div>
               </div>
               <div className="flex items-center gap-6 group">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:border-[#ffcc00]/50 transition-colors">
                    <MapPin className="text-[#ffcc00]" size={24} />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs uppercase tracking-widest mb-1">Headquarters</div>
                    <div className="text-white font-bold font-['var(--font-space-grotesk)'] text-lg">Digital Workspace, London</div>
                  </div>
               </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="flex-1">
             <div className="p-10 md:p-16 rounded-[40px] bg-white/[0.02] border border-white/10 backdrop-blur-xl relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-[#00F5FF]/10 rounded-full blur-[100px]"></div>
                
                <form className="space-y-8 relative z-10">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                         <label className="text-xs uppercase tracking-widest text-slate-500 font-bold ml-1">Your Name</label>
                         <input 
                          type="text" 
                          placeholder="John Doe"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#00F5FF] transition-colors"
                         />
                      </div>
                      <div className="space-y-2">
                         <label className="text-xs uppercase tracking-widest text-slate-500 font-bold ml-1">Email Address</label>
                         <input 
                          type="email" 
                          placeholder="john@example.com"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#00F5FF] transition-colors"
                         />
                      </div>
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-slate-500 font-bold ml-1">Service Required</label>
                      <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#00F5FF] transition-colors appearance-none">
                         <option className="bg-[#0b0e14]">Web Design</option>
                         <option className="bg-[#0b0e14]">AI Automation</option>
                         <option className="bg-[#0b0e14]">Full Stack Development</option>
                         <option className="bg-[#0b0e14]">Other</option>
                      </select>
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-slate-500 font-bold ml-1">Project Brief</label>
                      <textarea 
                        rows={5}
                        placeholder="Tell us about your goals..."
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#00F5FF] transition-colors resize-none"
                      ></textarea>
                   </div>
                   
                   <button className="w-full py-6 bg-[#00F5FF] text-black font-['var(--font-space-grotesk)'] font-bold uppercase tracking-[0.2em] text-[13px] rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(0,245,255,0.2)]">
                      Send Implementation Request <Send size={16} />
                   </button>
                </form>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
