import Link from 'next/link';

const cards = [
  { title: 'Profile summary', value: 'Complete', detail: 'Age, goals, values, support network' },
  { title: 'AI guidance', value: '7 sessions', detail: 'Decision support and scenario checks' },
  { title: 'Scenario score', value: '88/100', detail: 'Based on current option evaluation' },
  { title: 'Confidence level', value: 'High', detail: 'Strong fit with user priorities' },
];

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Dashboard</p>
        <h1 className="mt-3 text-4xl font-black text-slate-900">LifeGuide overview</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <div key={card.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{card.title}</p>
            <p className="mt-4 text-3xl font-black text-slate-900">{card.value}</p>
            <p className="mt-2 text-sm text-slate-600">{card.detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-black text-slate-900">Decision insight</h2>
          <div className="mt-5 space-y-4 text-slate-700">
            <p>• The strongest option is the one that increases learning while minimizing downside.</p>
            <p>• Support systems matter: community and mentor input improve confidence.</p>
            <p>• Use the next 30 days to reduce uncertainty with one practical action.</p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-slate-900 p-8 text-white shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Quick actions</p>
          <div className="mt-6 space-y-3">
            <Link href="/chat" className="block rounded-2xl bg-white/5 px-4 py-3 text-sm font-medium text-white hover:bg-white/10">
              Open AI coach
            </Link>
            <Link href="/scenarios" className="block rounded-2xl bg-white/5 px-4 py-3 text-sm font-medium text-white hover:bg-white/10">
              Model a scenario
            </Link>
            <Link href="/profile" className="block rounded-2xl bg-white/5 px-4 py-3 text-sm font-medium text-white hover:bg-white/10">
              Update profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}



																																																																																																																												