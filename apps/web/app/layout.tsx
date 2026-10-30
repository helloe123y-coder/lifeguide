import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/profile', label: 'Profile' },
  { href: '/chat', label: 'AI Coach' },
  { href: '/scenarios', label: 'Scenario Builder' },
  { href: '/youth', label: 'Youth' },
  { href: '/adults', label: 'Adults' },
];

export const metadata = {
  title: 'LifeGuide',
  description: 'Lifecycle guidance and decision-making support for youth and adults.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-indigo-50">
          <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
              <Link href="/" className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-indigo-600 text-lg font-bold text-white shadow-lg shadow-brand-500/30">
                  L
                </div>
                <div>
                  <p className="text-xl font-black tracking-tight text-slate-900">LifeGuide</p>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">Decision support</p>
                </div>
              </Link>

              <nav className="hidden items-center gap-8 md:flex">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
                    {item.label}
                  </Link>
                ))}
              </nav>

              <Link href="/profile" className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-700">
                Start now
              </Link>
            </div>
          </header>

          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
