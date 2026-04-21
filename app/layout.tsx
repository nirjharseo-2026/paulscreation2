import type { Metadata } from 'next';
import { Montserrat, Space_Grotesk } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Paulscreations - Web Design & AI Automation',
  description: 'Web Design & AI Automation Agency — architecting digital ecosystems that look premium and perform autonomously.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${spaceGrotesk.variable} dark`}>
      <body className="bg-[#0b0e14] text-[#e0e2eb] antialiased selection:bg-[#00f5ff]/30 selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
