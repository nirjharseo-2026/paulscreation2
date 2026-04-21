import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Globe, Cpu, LineChart, Code2, Layers, Infinity } from 'lucide-react';

const detailedServices = [
  {
    icon: <Globe className="text-[#00F5FF]" size={32} />,
    title: 'Bespoke Web Design',
    desc: 'High-performance, visually stunning websites built from the ground up to represent your brand excellence.',
    price: 'Starting at $5,000'
  },
  {
    icon: <Cpu className="text-[#6900b3]" size={32} />,
    title: 'AI System Integration',
    desc: 'Automate repetitive workflows with custom AI models, chatbots, and data processing tools.',
    price: 'Starting at $3,500'
  },
  {
    icon: <LineChart className="text-[#ffcc00]" size={32} />,
    title: 'Growth Ecosystems',
    desc: 'Full-stack marketing automation and CRM setups that turn leads into high-ticket revenue.',
    price: 'Starting at $4,000'
  },
  {
    icon: <Code2 className="text-[#00F5FF]" size={32} />,
    title: 'Custom Software',
    desc: 'Bespoke web applications and enterprise-grade tools tailored to your unique specifications.',
    price: 'Consultation Required'
  },
  {
    icon: <Layers className="text-[#6900b3]" size={32} />,
    title: 'Brand Architecture',
    desc: 'Defining your visual language and market positioning through strategic identity design.',
    price: 'Starting at $2,500'
  }
];

export default function Services() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-40 pb-20 px-8 text-center bg-[#0b0e14]">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
             <span className="font-['var(--font-space-grotesk)'] text-[10px] font-bold uppercase tracking-[0.2em] text-[#00F5FF]"> Solutions </span>
          </div>
          <h1 className="font-['var(--font-space-grotesk)'] text-[clamp(40px,8vw,64px)] font-bold text-white leading-tight mb-8">
            Our <span className="text-[#00F5FF]">Arsenal</span> of Capabilities.
          </h1>
          <p className="font-['var(--font-inter)'] text-lg text-slate-400 max-w-2xl mx-auto mb-12">
            We provide a localized focus with global impact. Our services are designed to give you a competitive edge through technical superiority.
          </p>
        </div>
      </section>

      {/* List */}
      <section className="py-12 px-8 mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {detailedServices.map((s, i) => (
            <div key={i} className="p-12 rounded-[32px] bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] hover:border-[#00F5FF]/30 transition-all duration-500 group flex flex-col justify-between min-h-[400px]">
              <div>
                <div className="mb-10 p-5 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <h3 className="font-['var(--font-space-grotesk)'] text-3xl font-bold text-white mb-6 italic">{s.title}</h3>
                <p className="font-['var(--font-inter)'] text-slate-400 leading-relaxed mb-8 max-w-md">{s.desc}</p>
              </div>
              <div className="flex justify-between items-center pt-8 border-t border-white/5">
                <span className="font-['var(--font-space-grotesk)'] text-[12px] font-bold uppercase tracking-widest text-slate-500">{s.price}</span>
                <button className="text-[#00F5FF] font-['var(--font-space-grotesk)'] font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                   Inquire Now
                </button>
              </div>
            </div>
          ))}
          
          {/* Custom Card */}
          <div className="p-12 rounded-[32px] bg-gradient-to-br from-[#00F5FF]/10 to-[#6900b3]/10 border border-white/10 flex flex-col justify-center items-center text-center">
             <Infinity className="text-white mb-6" size={48} />
             <h3 className="font-['var(--font-space-grotesk)'] text-3xl font-bold text-white mb-6">Unlimited Potential</h3>
             <p className="font-['var(--font-inter)'] text-slate-400 leading-relaxed mb-10 max-w-sm">
                Need something outside the box? We specialize in custom R&D and bleeding-edge integrations.
             </p>
             <button className="px-10 py-5 bg-white text-black font-['var(--font-space-grotesk)'] text-xs font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-all">
               Special Project Query
             </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
