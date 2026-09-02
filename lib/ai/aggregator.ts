import type { AIResponse } from './types';

export async function aggregateAnswers(prompt:string):Promise<AIResponse[]> {
  return [
    {
      model:'GPT',
      answer:'Provider подключается через API ключ.'
    },
    {
      model:'Claude',
      answer:'Provider подключается через API ключ.'
    },
    {
      model:'Gemini',
      answer:'Provider подключается через API ключ.'
    }
  ];
}
