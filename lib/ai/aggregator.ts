import type { AIResponse } from './types';
import { askOpenAI } from './openai';
import { askClaude } from './claude';
import { askGemini } from './gemini';

export async function aggregateAnswers(prompt:string):Promise<AIResponse[]> {
  const [gpt, claude, gemini] = await Promise.all([
    askOpenAI(prompt),
    askClaude(prompt),
    askGemini(prompt)
  ]);

  return [
    {
      model:'GPT',
      answer:gpt
    },
    {
      model:'Claude',
      answer:claude
    },
    {
      model:'Gemini',
      answer:gemini
    }
  ];
}
