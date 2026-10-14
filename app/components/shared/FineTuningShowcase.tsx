import React from "react";
import FineTuningWorkflow from "./FineTuningWorkflow";

const blue = "#0A66C2";

function Terminal({ title, caption, children }: { title: string; caption: string; children: React.ReactNode }) {
  return <div className="overflow-hidden rounded-2xl border border-zinc-700 bg-[#1B1F23] shadow-sm"><div className="flex items-center gap-2 border-b border-white/10 bg-[#252a30] px-4 py-3"><i className="h-2.5 w-2.5 rounded-full bg-red-400"/><i className="h-2.5 w-2.5 rounded-full bg-yellow-400"/><i className="h-2.5 w-2.5 rounded-full bg-green-400"/><span className="ml-2 text-xs text-zinc-300">{title}</span></div><pre className="min-h-52 overflow-x-auto p-5 text-xs leading-6 text-emerald-300 sm:text-sm">{children}</pre><p className="border-t border-white/10 px-4 py-3 text-center text-[10px] font-semibold uppercase tracking-[.12em] text-zinc-400">{caption}</p></div>;
}

export default function FineTuningShowcase() {
  const values = [1.32,1.21,1.13,1.05,.98,.92,.88,.82,.77,.73,.68,.64,.60,.56,.53,.49,.46,.43,.40,.37,.34,.31,.28,.26,.24,.22,.20,.18,.17,.15,.14,.13,.12,.11,.10,.095,.09,.086,.082,.08];
  const points = values.map((v, i) => `${48 + i * 10},${174 - (v / 1.4) * 136}`).join(" ");
  return <div className="space-y-8">
    <FineTuningWorkflow />
    <section aria-label="Project outputs"><p className="text-xs font-bold uppercase tracking-[.22em]" style={{color:blue}}>Project outputs</p><h2 className="mb-5 mt-2 text-2xl font-bold text-zinc-900">Training, inference &amp; quantization</h2><div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
      <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-4 font-bold text-zinc-900">Training Loss — 40 Steps</h3><svg viewBox="0 0 480 220" role="img" aria-label="Training loss chart declining from 1.32 to 0.08 across 40 steps" className="w-full">{[38,72,106,140,174].map(y=><line key={y} x1="48" x2="448" y1={y} y2={y} stroke="#e4e4e7" strokeDasharray="3 4"/>)}{["1.4","1.0","0.7","0.3","0"].map((label,i)=><text key={label} x="38" y={42+i*34} textAnchor="end" fill="#71717a" fontSize="10">{label}</text>)}<line x1="48" y1="174" x2="448" y2="174" stroke="#a1a1aa"/><polyline points={points} fill="none" stroke={blue} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><circle cx="438" cy="166" r="4" fill={blue}/><text x="48" y="198" fill="#71717a" fontSize="10">0</text><text x="248" y="198" textAnchor="middle" fill="#71717a" fontSize="10">20</text><text x="448" y="198" textAnchor="end" fill="#71717a" fontSize="10">40 steps</text><text x="14" y="108" transform="rotate(-90 14 108)" fill="#71717a" fontSize="10">Loss</text></svg><p className="mt-3 text-center text-xs font-semibold uppercase tracking-[.12em] text-zinc-500">Training Loss — Mistral 7B QLoRA Fine-Tuning</p></div>
      <Terminal title="model_inference_output.json" caption="Inference Output — VM to Physical Node Mapping">{`{
  "aypos_tester1": "compute2",
  "aypos_tester2": "compute1",
  "aypos_tester3": "compute3",
  "aypos_tester4": "compute2",
  "aypos_tester5": "compute1"
}`}</Terminal>
      <div className="lg:col-span-2"><Terminal title="quantization_log.txt" caption="GGUF Q4_K_M Quantization — 13.8 GB → 4.2 GB">{`llama_model_quantize_impl: model size = 13825.02 MB
llama_model_quantize_impl: quant size = 4169.52 MB
[ 291/291] blk.31.ffn_up.weight - converting to q4_K
Unsloth: Conversion completed!
Output: unsloth.Q4_K_M.gguf
main: total time = 885609.59 ms`}</Terminal></div>
    </div></section>
  </div>;
}
