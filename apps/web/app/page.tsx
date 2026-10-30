import Link from 'next/link';

const featureCards = [
  {
    title: 'Personal profile',
    text: 'Capture your goals, values, obstacles, and support network so LifeGuide can tailor guidance to your situation.',
  },
  {
    title: 'AI-guided conversations',
    text: 'Describe a challenge or decision, and LifeGuide turns it into a clear, structured pathway with next steps.',
  },
  {
    title: 'Scenario modeling',
    text: 'Compare options, weigh risks, and understand which decision path offers the most value and lowest regret.',
  },
];

const audienceCards = [
  {
    title: 'For youth',
    description: 'Guidance for education, confidence, relationships, identity, and important life decisions during early growth.',
    href: '/youth',
  },
  {
    title: 'For adults',
    description: 'Support for career moves, finances, wellness, life transitions, parenting, and long-term planning.',
    href: '/adults',
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-20 pt-12">
      <section className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
            Personalized decision guidance
          </div>

          <div className="space-y-5">
            <h1 className="max-w-xl text-5xl font-black leading-tight tracking-tight text-slate-900 md:text-6xl">
              LifeGuide helps you make better decisions with clarity and confidence.
            </h1>
            <p className="max-w-2xl text-lg text-slate-600">
              A personalized decision-making platform for youth and adults, combining a profile, AI chat assistant, and scenario planning engine into one experience.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/profile" className="rounded-full bg-brand-600 px-6 py-3 font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-500">
              Build your profile
            </Link>
            <Link href="/chat" className="rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:border-slate-400 hover:text-slate-900">
              Open AI coach
            </Link>
          </div>

          <div className="flex flex-wrap gap-10 pt-4 text-sm text-slate-500">
            <div>
              <p className="text-3xl font-black text-slate-900">24/7</p>
              <p>AI support</p>
            </div>
            <div>
              <p className="text-3xl font-black text-slate-900">2</p>
              <p>Audience paths</p>
            </div>
            <div>
              <p className="text-3xl font-black text-slate-900">1</p>
              <p>Shared engine</p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
          <div className="rounded-[1.5rem] bg-slate-900 p-6 text-white">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Decision snapshot</p>
                <h2 className="mt-2 text-2xl font-bold">Your current path</h2>
              </div>
              <div className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-300">
                Focused
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-2xl bg-white/5 p-4">
                <div className="flex justify-between text-sm text-slate-300">
                  <span>Career clarity</span>
                  <span>82%</span>
                </div>
                <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-slate-700">
                  <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 p-4">
                <div className="flex justify-between text-sm text-slate-300">
                  <span>Life confidence</span>
                  <span>76%</span>
                </div>
                <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-slate-700">
                  <div className="h-full w-[76%] rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400" />
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 p-4">
                <div className="flex justify-between text-sm text-slate-300">
                  <span>Scenario readiness</span>
                  <span>91%</span>
                </div>
                <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-slate-700">
                  <div className="h-full w-[91%] rounded-full bg-gradient-to-r from-amber-400 to-orange-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">How it works</p>
          <h2 className="mt-3 text-3xl font-black text-slate-900">A decision support flow built for real life</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featureCards.map((card) => (
            <div key={card.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-lg font-bold text-brand-700">
                {card.title.charAt(0)}
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">{card.title}</h3>
              <p className="text-slate-600">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Choose your pathway</p>
          <h2 className="mt-3 text-3xl font-black text-slate-900">Support for every stage of life</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {audienceCards.map((card) => (
            <Link key={card.title} href={card.href} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-5 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                {card.title}
              </div>
              <p className="text-lg leading-8 text-slate-600">{card.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
