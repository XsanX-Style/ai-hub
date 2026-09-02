import type { AIResponse } from './types';
import { askOpenAI } from './openai';
import { askClaude } from './claude';
import { askGemini } from './gemini';

export async function aggregateAnswers(prompt:string):Promise<AIResponse[]> {
  const results: AIResponse[] = [];

  const providers = [
    {
      model:'GPT',
      enabled:!!process.env.OPENAI_API_KEY,
      call:()=>askOpenAI(prompt)
    },
    {
      model:'Claude',
      enabled:!!process.env.ANTHROPIC_API_KEY,
      call:()=>askClaude(prompt)
    },
    {
      model:'Gemini',
      enabled:!!process.env.GOOGLE_API_KEY,
      call:()=>askGemini(prompt)
    }
  ];

  for (const provider of providers) {
    if (!provider.enabled) {
      results.push({
        model: provider.model,
        answer: 'Демо режим: API ключ модели не подключен.'
      });
      continue;
    }

    try {
      results.push({
        model: provider.model,
        answer: await provider.call()
      });
    } catch {
      results.push({
        model: provider.model,
        answer: 'Ошибка подключения к модели.'
      });
    }
  }

  return results;
}
