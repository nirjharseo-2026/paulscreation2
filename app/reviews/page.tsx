import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    author: 'Sarah Jenkins',
    role: 'CEO, Nexus Global',
    content: 'Paulscreations transformed our digital presence. Their AI automation saved us 20 hours a week in lead management.',
    stars: 5,
    avatar: 'https://picsum.photos/seed/person1/100/100'
  },
  {
    author: 'Marcus Thorne',
    role: 'Founder, Apex Real Estate',
    content: 'The high-end design they built for us actually matches our luxury brand. Its hard to find an agency that gets both tech and aesthetics.',
    stars: 5,
    avatar: 'https://picsum.photos/seed/person2/100/100'
  },
  {
    author: 'Elena Rodriguez',
    role: 'Marketing Lead, FlowSaaS',
    content: 'Professional, punctual, and highly skilled. Their custom CRM integration is seamless.',
    stars: 5,
    avatar: 'https://picsum.photos/seed/person3/100/100'
  }
];

export default function Reviews() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-40 pb-20 px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
             <span className="font-['var(--font-space-grotesk)'] text-[10px] font-bold uppercase tracking-[0.2em] text-[#00F5FF]"> Wall of Love </span>
          </div>
          <h1 className="font-['var(--font-space-grotesk)'] text-[clamp(40px,8vw,64px)] font-bold text-white leading-tight mb-8">
            Real Stories from <span className="italic">Elite Partners.</span>
          </h1>
          <div className="flex justify-center gap-1 mb-12">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-[#ffcc00] fill-[#ffcc00]" size={20} />
            ))}
            <span className="ml-4 font-['var(--font-space-grotesk)'] text-white font-bold">5.0 Agency Rating</span>
          </div>
        </div>
      </section>

      <section className="py-12 px-8 mb-32 max-w-7xl mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {reviews.map((r, i) => (
            <div key={i} className="break-inside-avoid p-10 rounded-[32px] bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all group">
              <Quote className="text-[#00F5FF]/30 mb-8 group-hover:text-[#00F5FF] transition-colors" size={32} />
              <p className="font-['var(--font-inter)'] text-lg text-slate-300 leading-relaxed mb-10">
                &quot;{r.content}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 text-white">
                  <Image 
                    src={r.avatar} 
                    alt={r.author} 
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                   <div className="text-white font-bold font-['var(--font-space-grotesk)']">{r.author}</div>
                   <div className="text-slate-500 text-xs uppercase tracking-widest">{r.role}</div>
                </div>
              </div>
            </div>
          ))}

          {/* Call to Trust */}
          <div className="break-inside-avoid p-12 rounded-[32px] bg-[#00F5FF]/10 border border-[#00F5FF]/20 text-center">
            <h3 className="font-['var(--font-space-grotesk)'] text-2xl font-bold text-white mb-6 underline decoration-[#00F5FF]">Your Brand Next?</h3>
            <p className="font-['var(--font-inter)'] text-sm text-slate-400 mb-8 leading-relaxed">
              We only take on 3 new partners per month to ensure absolute quality. Secure your spot in our pipeline.
            </p>
            <button className="w-full py-4 bg-white text-black font-bold font-['var(--font-space-grotesk)'] uppercase tracking-widest text-xs rounded-xl hover:bg-[#00F5FF] transition-all">
              Book Discovery Call
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
