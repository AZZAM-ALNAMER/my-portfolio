import React from "react";

const blue = "#0A66C2";

const usageFlow = [
  ["◉", "Client", "Tenant request"],
  ["⇢", "POST /generate", "Meter a usage event"],
  ["↻", "Idempotency check", "Seen key → return original event"],
  ["✓", "Quota check", "429 at limit · 402 not included"],
  ["▤", "Insert usage event", "Persist once"],
];

const stripeFlow = [
  ["□", "Stripe Checkout", "Test mode"],
  ["↗", "Signed webhook", "Stripe-Signature header"],
  ["✓", "Verify signature", "Forged request → 400"],
  ["#", "Dedupe event ID", "Replay → ignored"],
  ["▣", "Update tenant plan", "Plan stays in sync"],
];

function FlowLane({ title, steps, compact = false }: { title: string; steps: string[][]; compact?: boolean }) {
  if (compact) return <div className="rounded-lg border border-zinc-200 bg-[#F3F2EF]/60 p-2">
    <h3 className="mb-1.5 text-[7px] font-bold uppercase tracking-[.12em] text-[#0A66C2]">{title}</h3>
    <div className="flex items-stretch gap-0.5">
      {steps.map(([icon, label, detail], index) => <React.Fragment key={label}>
        {index > 0 && <div aria-hidden="true" className="flex shrink-0 items-center text-[8px] font-bold text-[#0A66C2]">→</div>}
        <div className="flex min-w-0 flex-1 flex-col items-center justify-center rounded-md border border-blue-100 bg-white px-1 py-1.5 text-center">
          <span className="mb-0.5 flex h-4 w-4 items-center justify-center rounded bg-blue-50 text-[8px] font-bold text-[#0A66C2]">{icon}</span>
          <p className="text-[6px] font-bold leading-tight text-slate-900 sm:text-[7px]">{label}</p>
          <p className="mt-0.5 text-[5px] leading-tight text-slate-600 sm:text-[6px]">{detail}</p>
        </div>
      </React.Fragment>)}
    </div>
  </div>;
  return <div className="rounded-xl border border-zinc-200 bg-[#F3F2EF]/60 p-3 sm:p-4">
    <h3 className="mb-3 text-xs font-bold uppercase tracking-[.16em] text-[#0A66C2]">{title}</h3>
    <div className="flex flex-col gap-2 md:flex-row md:items-stretch md:gap-1">
      {steps.map(([icon, label, detail], index) => <React.Fragment key={label}>
        {index > 0 && <div aria-hidden="true" className="flex shrink-0 items-center justify-center text-lg font-bold text-[#0A66C2] md:w-5"><span className="md:hidden">↓</span><span className="hidden md:inline">→</span></div>}
        <div className="flex min-w-0 flex-1 items-center gap-3 rounded-lg border border-blue-100 bg-white p-3 md:flex-col md:items-start md:gap-2">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-[#0A66C2]">{icon}</span>
          <div className="min-w-0"><p className="text-xs font-bold leading-tight text-slate-900">{label}</p><p className="mt-1 text-[10px] leading-snug text-slate-600">{detail}</p></div>
        </div>
      </React.Fragment>)}
    </div>
  </div>;
}

export function FlyrankWorkflow({ compact = false }: { compact?: boolean }) {
  return <section aria-label="Usage metering and Stripe billing architecture" className={compact ? "flex h-full flex-col justify-center gap-1.5 bg-white p-2 sm:p-3" : "rounded-2xl border border-zinc-200 bg-white p-4 shadow-lg shadow-zinc-200/60 sm:p-6"}>
    {!compact && <>
      <p className="text-xs font-bold uppercase tracking-[.22em] text-[#0A66C2]">Service architecture</p>
      <h2 className="mb-5 mt-2 text-xl font-bold text-slate-900">Meter usage once. Keep billing in sync.</h2>
    </>}
    <div className={compact ? "space-y-1.5" : "space-y-4"}>
      <FlowLane compact={compact} title="Usage metering and quota enforcement" steps={usageFlow}/>
      <FlowLane compact={compact} title="Subscription plan synchronization" steps={stripeFlow}/>
    </div>
  </section>;
}

function CodeCard({ title, caption, lines }: { title: string; caption: string; lines: string[] }) {
  return <article className="overflow-hidden rounded-xl border border-slate-700 bg-[#1B1F23] shadow-sm">
    <div className="flex items-center gap-2 border-b border-white/10 bg-[#252a30] px-4 py-3"><i className="h-2.5 w-2.5 rounded-full bg-red-400"/><i className="h-2.5 w-2.5 rounded-full bg-yellow-400"/><i className="h-2.5 w-2.5 rounded-full bg-green-400"/><span className="ml-2 text-xs text-slate-300">{title}</span></div>
    <pre className="min-h-40 overflow-x-auto p-4 text-[11px] leading-5 text-emerald-300 sm:text-xs">{lines.join("\n")}</pre>
    <p className="border-t border-white/10 px-3 py-3 text-center text-[10px] font-semibold uppercase tracking-wide text-slate-400">{caption}</p>
  </article>;
}

export default function FlyrankShowcase() {
  return <div className="space-y-8">
    <FlyrankWorkflow />

    <section aria-label="API and billing examples">
      <p className="text-xs font-bold uppercase tracking-[.22em] text-[#0A66C2]">API &amp; billing examples</p>
      <h2 className="mb-5 mt-2 text-2xl font-bold text-slate-900">Requests, limits, and pricing</h2>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <CodeCard title="POST /generate" caption="API contract · idempotency key prevents duplicate events" lines={[
          "POST /generate",
          "Idempotency-Key: tenant-pro-1:request-42",
          "Content-Type: application/json",
          "",
          '{ "tenant_id": "tenant-pro-1",',
          '  "usage_type": "ai_tokens",',
          '  "input_tokens": 1000, "cached_input_tokens": 400,',
          '  "output_tokens": 500, "reasoning_tokens": 100 }',
          "",
          "→ 201 Created · retry returns original event",
        ]}/>
        <CodeCard title="quota_response.json" caption="Quota boundary · 429 limit · 402 plan does not include usage" lines={[
          "HTTP/1.1 429 Too Many Requests",
          "Content-Type: application/json",
          "",
          "{",
          '  "detail": "Plan quota exceeded",',
          '  "usage_type": "api_call",',
          '  "code": "quota_exceeded"',
          "}",
          "",
          "The request is rejected before a usage event is inserted.",
        ]}/>
        <CodeCard title="stripe_checkout_flow.txt" caption="Stripe test-mode checkout and verified webhook" lines={[
          "1. Create a Checkout Session for the tenant",
          "2. Customer completes checkout in Stripe test mode",
          "3. Stripe sends a signed subscription event",
          "4. Verify signature against the raw request body",
          "5. Ignore event IDs already processed",
          "6. Update the tenant plan",
          "",
          "Forged signature → 400 · duplicate event → ignored",
        ]}/>
        <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm lg:col-span-1">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-[#0A66C2]">Token pricing</p>
          <h3 className="mb-4 mt-2 font-bold text-slate-900">Integer micro-USD rates</h3>
          <dl className="divide-y divide-zinc-100 text-sm">
            {[["API call", "$0.002 / call"], ["Fresh input", "$1.00 / 1M tokens"], ["Cached input", "$0.25 / 1M tokens"], ["Output", "$4.00 / 1M tokens"], ["Reasoning", "Billed as output"]].map(([label, rate]) => <div key={label} className="flex justify-between gap-3 py-2"><dt className="text-slate-600">{label}</dt><dd className="text-right font-semibold text-slate-900">{rate}</dd></div>)}
          </dl>
        </div>
      </div>
    </section>
  </div>;
}
