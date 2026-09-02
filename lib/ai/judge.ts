import type { AIResponse } from './types';

export async function judgeAnswers(prompt:string, answers:AIResponse[]){
  const combined = answers.map((item)=>`${item.model}: ${item.answer}`).join('\n\n');

  return {
    model:'AI Judge',
    answer:`Анализ запроса: ${prompt}\n\nЛучшие ответы:\n${combined}`
  };
}
