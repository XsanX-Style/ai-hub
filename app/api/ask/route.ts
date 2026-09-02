import { NextResponse } from 'next/server';
import { aggregateAnswers } from '@/lib/ai/aggregator';

export async function POST(req:Request){
  const {prompt}=await req.json();

  if(!prompt){
    return NextResponse.json({error:'Prompt required'},{status:400});
  }

  const results=await aggregateAnswers(prompt);

  return NextResponse.json({results});
}
