import Link from 'next/link';

export default function AdultsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Adults</p>
        <h1 className="mt-3 text-4xl font-black text-slate-900">LifeGuide for adults</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
          <h3 className="text-xl font-bold text-slate-900">Career transitions</h3>
          <p className="mt-3 text-slate-600">Evaluate whether to stay, switch direction, upskill, or pursue a different work-life balance.</p>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
          <h3 className="text-xl font-bold text-slate-900">Family and finances</h3>
          <p className="mt-3 text-slate-600">Balance responsibilities with long-term goals to make decisions that feel sustainable.</p>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
          <h3 className="text-xl font-bold text-slate-900">Life planning</h3>
          <p className="mt-3 text-slate-600">Clarify major moves, values, and the practical steps that support a more intentional future.</p>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <Link href="/profile" className="rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-700">
          Create adult profile
        </Link>
      </div>
    </div>
  );
}
