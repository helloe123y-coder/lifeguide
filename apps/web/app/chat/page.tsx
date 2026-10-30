'use client';

import { useState } from 'react';

const starterMessages = [
  'I am considering switching careers and need guidance on whether I should stay or explore a new path.',
  'I want to decide whether to leave school for work or continue my education.',
  'I need help balancing my personal life, finances, and long-term goals.',
];

const initialMessages = [
  { sender: 'bot', text: 'Hi! I am LifeGuide. Tell me about your situation and I will help you break it down into decisions and next steps.' },
];

export default function ChatPage() {
  const [messages, setMessages] = useState(initialMessages);
  const [draft, setDraft] = useState('');

  const sendMessage = () => {
    if (!draft.trim()) return;

    const userMessage = { sender: 'user', text: draft.trim() };
    const reply = {
      sender: 'bot',
      text: `Here is a structured response for your situation: 1) define the problem clearly, 2) compare options, 3) review risks and support, and 4) pick a next step. For your scenario, your next best step is to identify the short-term action that reduces uncertainty the most.`,
    };

    setMessages((current) => [...current, userMessage, reply]);
    setDraft('');
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
          <button onClick={sendMessage} className="rounded-full bg-brand-600 px-6 py-3 font-semibold text-white transition hover:bg-brand-500">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
