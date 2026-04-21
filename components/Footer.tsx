import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0b0e14] border-t border-white/5 py-20 mt-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-xl font-bold text-white tracking-tighter flex items-center gap-2 mb-4">
              Paulscreations 
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F5FF]"></span>
            </Link>
            <p className="font-['var(--font-inter)'] text-sm text-slate-500 max-w-sm mb-8 leading-relaxed">
              Architecting the intersection of premium design and autonomous intelligence. Leading the way in digital transformation with high-end aesthetics and smart automation.
            </p>
            <div className="font-['var(--font-inter)'] text-xs text-slate-600 uppercase tracking-widest">
              © 2024 Paulscreations — Design. Automate. Grow.
            </div>
          </div>

          {/* Platform Links */}
          <div className="col-span-1">
            <h4 className="font-['var(--font-space-grotesk)'] text-sm text-white font-bold mb-6 uppercase tracking-wider"> Platform </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link href="/" className="text-[#00F5FF] flex items-center gap-2 group transition-colors">
                  <span className="w-1 h-1 rounded-full bg-[#00F5FF]"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-500 hover:text-[#00F5FF] transition-colors">About</Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-500 hover:text-[#00F5FF] transition-colors">Services</Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-span-1">
            <h4 className="font-['var(--font-space-grotesk)'] text-sm text-white font-bold mb-6 uppercase tracking-wider"> Company </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link href="/reviews" className="text-slate-500 hover:text-[#00F5FF] transition-colors">Reviews</Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-500 hover:text-[#00F5FF] transition-colors">Contact</Link>
              </li>
              <li>
                <Link href="#" className="text-slate-500 hover:text-[#00F5FF] transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
