import { NextResponse } from 'next/server';
import { aggregateAnswers } from '@/lib/ai/aggregator';
import { judgeAnswers } from '@/lib/ai/judge';

export async function POST(req:Request){
  const {prompt}=await req.json();

  if(!prompt){
    return NextResponse.json({error:'Prompt required'},{status:400});
  }

  try {
    const results=await aggregateAnswers(prompt);
    const judge=await judgeAnswers(prompt, results);

    return NextResponse.json({
      results,
      judge
    });
  } catch(error){
    return NextResponse.json(
      {error:'AI providers failed'},
      {status:500}
    );
  }
}
