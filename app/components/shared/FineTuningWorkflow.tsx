import React from "react";

const steps = [
  ["▤", "Input Data", "VM Allocation Logs\n(Google Drive JSON / CSV)"],
  ["⌘", "Training Engine", "Unsloth 4-bit QLoRA\non Mistral-7B (T4 GPU)"],
  ["↗", "Deployment Export", "GGUF Conversion +\nOllama Local Inference"],
];

export default function FineTuningWorkflow({ compact = false }: { compact?: boolean }) {
  return <section aria-label="Fine-tuning workflow" className={`h-full rounded-2xl border border-zinc-200 bg-white shadow-lg shadow-zinc-200/60 ${compact ? "flex items-center p-3 sm:p-4" : "p-6 sm:p-8"}`}>
    {!compact && <><p className="text-xs font-bold uppercase tracking-[.22em] text-[#0A66C2]">Model lifecycle</p><h2 className="mb-6 mt-2 text-xl font-bold text-zinc-900">From allocation logs to local inference</h2></>}
    <div className={`flex w-full items-stretch ${compact ? "gap-1 sm:gap-2" : "flex-col gap-3 md:flex-row md:items-center md:gap-2"}`}>
      {steps.map(([icon,title,detail],i)=><React.Fragment key={title}>{i>0&&<div aria-hidden className={`flex shrink-0 items-center justify-center font-semibold ${compact ? "text-base sm:text-xl" : "text-center text-2xl md:w-8"}`} style={{color:"#0A66C2"}}><span className={!compact ? "md:hidden" : undefined}>↓</span><span className={`hidden ${!compact ? "md:inline" : "sm:inline"}`}>→</span></div>}<div className={`flex min-w-0 flex-1 items-start rounded-xl border border-blue-100 bg-blue-50/60 ${compact ? "flex-col gap-1 p-2 sm:gap-2 sm:p-3" : "min-h-36 gap-4 p-5"}`}><span className={`flex shrink-0 items-center justify-center rounded-xl bg-white font-bold text-[#0A66C2] shadow-sm ${compact ? "h-7 w-7 text-base sm:h-9 sm:w-9 sm:text-xl" : "h-11 w-11 text-2xl"}`}>{icon}</span><div className="min-w-0"><p className={`font-bold tracking-[.12em] text-blue-600 ${compact ? "text-[7px] sm:text-[9px]" : "text-[10px] tracking-[.18em]"}`}>STEP 0{i+1}</p><h3 className={`mt-1 font-bold leading-tight text-zinc-900 ${compact ? "text-[9px] sm:text-xs" : ""}`}>{title}</h3><p className={`mt-1 whitespace-pre-line leading-tight text-zinc-600 ${compact ? "hidden text-[8px] sm:block sm:text-[9px]" : "mt-2 text-sm leading-5"}`}>{detail}</p></div></div></React.Fragment>)}
    </div>
  </section>;
}
