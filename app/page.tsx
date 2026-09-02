"use client";

import { useState } from 'react';
import AICard from '@/components/AICard';
import JudgeCard from '@/components/JudgeCard';

export default function Home(){
  const [prompt,setPrompt]=useState('');
  const [results,setResults]=useState<any[]>([]);
  const [judge,setJudge]=useState('');
  const [loading,setLoading]=useState(false);

  async function ask(){
    if(!prompt) return;
    setLoading(true);

    const res=await fetch('/api/ask',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({prompt})
    });

    const data=await res.json();
    setResults(data.results || []);
    setJudge(data.judge?.answer || '');
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-black text-white p-6 md:p-10">
      <h1 className="text-5xl font-bold">AI HUB</h1>
      <p className="mt-3 text-zinc-400">Multi AI workspace</p>

      <textarea
        className="mt-8 w-full max-w-4xl h-36 bg-zinc-900 rounded-2xl p-5 outline-none border border-zinc-800"
        value={prompt}
        onChange={(e)=>setPrompt(e.target.value)}
        placeholder="Введите задачу для всех ИИ..."
      />

      <button onClick={ask} className="mt-4 px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-500">
        {loading ? 'ИИ анализируют...' : 'Спросить все ИИ'}
      </button>

      {judge && <div className="mt-8"><JudgeCard answer={judge}/></div>}

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {results.map((item,index)=>(
          <AICard key={index} model={item.model} answer={item.answer}/>
        ))}
      </div>
    </main>
  );
}
