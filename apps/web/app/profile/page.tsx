'use client';

import { useState } from 'react';

const initialForm = {
  fullName: '',
  age: '',
  stage: 'Youth',
  goal: '',
  values: '',
  support: '',
  challenges: '',
};

export default function ProfilePage() {
  const [form, setForm] = useState(initialForm);

  const handleChange = (field: keyof typeof initialForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Profile saved successfully. LifeGuide is ready to guide this user.');
  };

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">User profile</p>
        <h1 className="mt-3 text-4xl font-black text-slate-900">Tell LifeGuide about you</h1>
      </div>

      <form onSubmit={handleSubmit} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
        <div className="grid gap-6 md:grid-cols-2">
          <label className="space-y-2">
            <span className="text-sm font-semibold text-slate-700">Full name</span>
            <input
              value={form.fullName}
              onChange={(event) => handleChange('fullName', event.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:bg-white"
              placeholder="Jane Doe"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-semibold text-slate-700">Age</span>
            <input
              value={form.age}
              onChange={(event) => handleChange('age', event.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:bg-white"
              placeholder="18"
            />
          </label>

          <label className="space-y-2 md:col-span-2">
            <span className="text-sm font-semibold text-slate-700">Audience</span>
            <select
              value={form.stage}
              onChange={(event) => handleChange('stage', event.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:bg-white"
            >
              <option>Youth</option>
              <option>Adult</option>
            </select>
          </label>

          <label className="space-y-2 md:col-span-2">
            <span className="text-sm font-semibold text-slate-700">What goal or decision matters most right now?</span>
            <textarea
              value={form.goal}
              onChange={(event) => handleChange('goal', event.target.value)}
              className="min-h-28 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:bg-white"
              placeholder="I want to decide what path to take after graduation."
            />
          </label>

          <label className="space-y-2 md:col-span-2">
            <span className="text-sm font-semibold text-slate-700">Values and priorities</span>
            <textarea
              value={form.values}
              onChange={(event) => handleChange('values', event.target.value)}
              className="min-h-24 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:bg-white"
              placeholder="Family, growth, stability, education"
            />
          </label>

          <label className="space-y-2 md:col-span-2">
            <span className="text-sm font-semibold text-slate-700">Support network</span>
            <textarea
              value={form.support}
              onChange={(event) => handleChange('support', event.target.value)}
              className="min-h-24 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:bg-white"
              placeholder="Mentor, parents, teacher, community programs"
            />
          </label>

          <label className="space-y-2 md:col-span-2">
            <span className="text-sm font-semibold text-slate-700">Challenges and obstacles</span>
            <textarea
              value={form.challenges}
              onChange={(event) => handleChange('challenges', event.target.value)}
              className="min-h-24 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:bg-white"
              placeholder="Limited time, uncertainty, financial pressure, lack of confidence"
            />
          </label>
        </div>

        <div className="mt-8 flex justify-end">
          <button type="submit" className="rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-700">
            Save profile
          </button>
        </div>
      </form>
    </div>
  );
}
