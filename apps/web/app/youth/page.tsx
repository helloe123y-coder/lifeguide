import Link from 'next/link';

export default function YouthPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Youth</p>
        <h1 className="mt-3 text-4xl font-black text-slate-900">LifeGuide for young people</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
          <h3 className="text-xl font-bold text-slate-900">School and study</h3>
          <p className="mt-3 text-slate-600">Compare academic options, identify strengths, and build a plan that matches your goals.</p>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
          <h3 className="text-xl font-bold text-slate-900">Career choices</h3>
          <p className="mt-3 text-slate-600">Clarify whether to continue education, explore apprenticeships, or work toward a next practical step.</p>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
          <h3 className="text-xl font-bold text-slate-900">Identity and confidence</h3>
          <p className="mt-3 text-slate-600">Use structured reflection to better understand your values, support system, and sense of direction.</p>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <Link href="/profile" className="rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-700">
          Create youth profile
        </Link>
      </div>
    </div>
  );
}
