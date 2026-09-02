export type AIResponse = {
  model: string;
  answer: string;
  latency?: number;
};

export type AIProvider = {
  name: string;
  ask(prompt: string): Promise<string>;
};
