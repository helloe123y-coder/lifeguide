import Link from 'next/link';

export const metadata = {
  title: 'LifeGuide | Profile',
  description: 'Build your personalized LifeGuide profile.',
};

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">User profile</p>
        <h1 className="mt-3 text-4xl font-black text-slate-900">Tell LifeGuide about you</h1>
      </div>

      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
        <form className="grid gap-6 md:grid-cols-2">
          <label className="space-y-2">
            <span className="text-sm font-semibold text-slate-700">Full name</span>
            <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:bg-white" placeholder="Jane Doe" />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-semibold text-slate-700">Age</span>
            <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:bg-white" placeholder="18" />
          </label>

          <label className="space-y-2 md:col-span-2">
            <span className="text-sm font-semibold text-slate-700">Audience</span>
            <select className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:bg-white">
              <option>Youth</option>
              <option>Adult</option>
            </select>
          </label>

          <label className="space-y-2 md:col-span-2">
            <span className="text-sm font-semibold text-slate-700">What decision matters most right now?</span>
            <textarea className="min-h-28 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:bg-white" placeholder="I need help deciding between education, work, or a new path." />
          </label>

          <label className="space-y-2 md:col-span-2">
            <span className="text-sm font-semibold text-slate-700">Values and priorities</span>
            <textarea className="min-h-24 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:bg-white" placeholder="Family, growth, stability, education" />
          </label>

          <label className="space-y-2 md:col-span-2">
            <span className="text-sm font-semibold text-slate-700">Support network</span>
            <textarea className="min-h-24 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:bg-white" placeholder="Mentor, parents, teacher, community" />
          </label>

          <label className="space-y-2 md:col-span-2">
            <span className="text-sm font-semibold text-slate-700">Challenges and obstacles</span>
            <textarea className="min-h-24 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:bg-white" placeholder="Limited time, uncertainty, stress, financial pressure" />
          </label>
        </form>

        <div className="mt-8 flex justify-end">
          <Link href="/chat" className="rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-700">
            Save profile and continue
          </Link>
        </div>
      </div>
    </div>
  );
}
