export async function askOpenAI(prompt: string) {
  if (!process.env.OPENAI_API_KEY) return 'OpenAI API key missing';

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-5',
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  const data = await res.json();
  return data.choices?.[0]?.message?.content ?? 'No response';
}
