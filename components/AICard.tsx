export default function AICard({model,answer}: {model:string; answer:string}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition hover:border-blue-500">
      <h3 className="text-xl font-bold">{model}</h3>
      <p className="mt-3 whitespace-pre-wrap text-zinc-300">{answer}</p>
    </div>
  );
}
