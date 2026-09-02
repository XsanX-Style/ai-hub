export default function ModelCard({model,answer}:{model:string,answer:string}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
      <h2 className="text-xl font-bold mb-3">{model}</h2>
      <p className="text-zinc-300 whitespace-pre-wrap">{answer}</p>
    </div>
  );
}
