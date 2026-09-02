export default function JudgeCard({answer}:{answer:string}) {
  return (
    <div className="rounded-2xl border border-blue-700 bg-blue-950/40 p-5">
      <h3 className="text-xl font-bold">🏆 AI Judge</h3>
      <p className="mt-3 whitespace-pre-wrap">{answer}</p>
    </div>
  );
}
