'use client';

import { useState } from 'react';

const starterMessages = [
  'I am considering switching careers and need help deciding whether to stay or move toward a new path.',
  'I want to decide whether to continue school or start working in a field I am unsure about.',
  'I need help balancing my finances, my personal life, and my long-term goals.',
];

const initialMessages = [
  { sender: 'bot', text: 'Hi! I am LifeGuide. Tell me about your situation and I will help you break it down into options and next steps.' },
];

export default function ChatPage() {
  const [messages, setMessages] = useState(initialMessages);
  const [draft, setDraft] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!draft.trim() || isLoading) return;

    const userMessage = { sender: 'user', text: draft.trim() };
    const prompt = draft.trim();
    setMessages((current) => [...current, userMessage]);
    setDraft('');
    setIsLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt,
          profile: {
            audience: 'adult',
            goal: 'Life decision support',
          },
        }),
      });

      const data = await response.json();

      setMessages((current) => [
        ...current,
        { sender: 'bot', text: data.reply || 'Here is a path: define the problem, compare options, consider risks, then choose one lower-risk next step.' },
      ]);
    } catch (error) {
      setMessages((current) => [
        ...current,
        {
          sender: 'bot',
          text: 'I could not reach the AI service right now, but the decision process is still the same: clarify the issue, compare options, review risk, and take the next low-regret action.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">AI Coach</p>
        <h1 className="mt-3 text-4xl font-black text-slate-900">Ask LifeGuide anything</h1>
      </div>

      <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-soft">
        <div className="mb-6 flex flex-wrap gap-3">
          {starterMessages.map((message) => (
            <button
              key={message}
              onClick={() => setDraft(message)}
              className="rounded-full border border-brand-200 bg-brand-50 px-3 py-2 text-sm text-brand-700 transition hover:border-brand-400"
            >
              {message}
            </button>
          ))}
        </div>

        <div className="h-[420px] space-y-4 overflow-y-auto rounded-3xl bg-slate-50 p-4">
          {messages.map((message, index) => (
            <div key={`${message.sender}-${index}`} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
                  message.sender === 'user' ? 'bg-slate-900 text-white' : 'bg-white text-slate-800'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}

          {isLoading ? (
            <div className="flex justify-start">
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-700 shadow-sm">LifeGuide is thinking...</div>
            </div>
          ) : null}
        </div>

        <div className="mt-6 flex gap-3">
          <input
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder="Describe your scenario or decision..."
            className="flex-1 rounded-full border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:bg-white"
            onKeyDown={(event) => {
              if (event.key === 'Enter') sendMessage();
            }}
          />
          <button onClick={sendMessage} disabled={isLoading} className="rounded-full bg-brand-600 px-6 py-3 font-semibold text-white transition hover:bg-brand-500 disabled:cursor-not-allowed disabled:opacity-60">
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </div>
    </div>
  );
}
