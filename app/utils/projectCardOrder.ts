const projectCardOrder = [
  "virtual-dressing-system-vds-v2",
  "matchi-ai-job-matcher",
  "usage-metering-billing-engine",
  "house-price-prediction-ml-pipeline",
  "llm-finetuning-vm-allocation",
];

export function orderProjectsForCards<T extends { slug: string }>(projects: T[]) {
  const order = new Map(projectCardOrder.map((slug, index) => [slug, index]));
  return [...projects].sort(
    (a, b) => (order.get(a.slug) ?? projectCardOrder.length) - (order.get(b.slug) ?? projectCardOrder.length),
  );
}
