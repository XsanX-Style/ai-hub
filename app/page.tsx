"use client";

import { useState } from 'react';

export default function Home(){
  const [prompt,setPrompt]=useState('');
  const [results,setResults]=useState<any[]>([]);
  const [loading,setLoading]=useState(false);

  async function ask(){
    setLoading(true);
    const res=await fetch('/api/ask',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({prompt})
    });
    const data=await res.json();
    setResults(data.results || []);
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold">AI HUB</h1>
      <p className="mt-4 text-zinc-400">Multi AI workspace</p>

      <textarea
        className="mt-8 w-full max-w-3xl h-32 bg-zinc-900 rounded-xl p-4"
        value={prompt}
        onChange={(e)=>setPrompt(e.target.value)}
        placeholder="Введите запрос..."
      />

      <button onClick={ask} className="mt-4 px-6 py-3 bg-blue-600 rounded-xl">
        {loading ? 'Думают...' : 'Спросить ИИ'}
      </button>

      <div className="mt-8 grid gap-4 max-w-4xl">
        {results.map((item,index)=>(
          <div key={index} className="bg-zinc-900 p-5 rounded-xl">
            <h2 className="font-bold">{item.model}</h2>
            <p className="mt-3 whitespace-pre-wrap">{item.answer}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
