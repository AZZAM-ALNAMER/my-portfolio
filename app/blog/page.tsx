import { Metadata } from "next";
import { Slide } from "../animation/Slide";
import PageHeading from "@/app/components/shared/PageHeading";
import Interactive from "../components/shared/Interactive";
import {
  HiSparkles,
  HiLightningBolt,
  HiTerminal,
  HiDatabase,
  HiShieldCheck,
} from "react-icons/hi";

export const metadata: Metadata = {
  title: "Blog | Azzam Hesham Al-Sarari",
  description: "Notes on AI engineering, LLMs, and agentic systems by Azzam Hesham Al-Sarari.",
  openGraph: {
    title: "Blog | Azzam Hesham Al-Sarari",
    description: "Notes on AI engineering, LLMs, and agentic systems by Azzam Hesham Al-Sarari.",
  },
};

const upcomingPosts = [
  {
    title: "Optimizing RAG Pipelines for Production",
    description: "A comprehensive guide on balancing latency, cost, and retrieval accuracy in large-scale RAG systems.",
    tag: "Architectural Deep Dive",
    icon: HiDatabase,
    status: "In Progress",
  },
  {
    title: "Fine-tuning Small Language Models",
    description: "Why bigger isn't always better. How I fine-tuned 7B models to outperform GPT-4 on specific domain tasks.",
    tag: "Machine Learning",
    icon: HiSparkles,
    status: "Writing",
  },
  {
    title: "MLOps: Beyond the Notebook",
    description: "Closing the gap between research and production with automated pipelines, Docker, and AWS.",
    tag: "Infrastructure",
    icon: HiTerminal,
    status: "Drafting",
  },
  {
    title: "Real-time AI Observability",
    description: "Implementing robust monitoring and grounding checks for healthcare and legal AI assistants.",
    tag: "Observability",
    icon: HiShieldCheck,
    status: "Planning",
  },
];

export default function Blog() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-28 mt-16 pb-24">
      <PageHeading
        title="Blog & Insights"
        description="I'm currently documenting my engineering journey—focusing on LLM optimization, production-grade RAG pipelines, and MLOps best practices."
      />

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-12">
        {upcomingPosts.map((post, index) => (
          <Slide key={post.title} delay={0.1 * index}>
            <Interactive>
              <article className="group relative overflow-hidden rounded-3xl border dark:border-zinc-800 border-zinc-200 p-8 h-full dark:bg-zinc-900/40 bg-white/70 backdrop-blur-md transition-all duration-300 hover:border-tertiary-color/50 shadow-sm hover:shadow-xl dark:shadow-black/20">
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border dark:border-zinc-700 border-zinc-100 group-hover:border-tertiary-color/30 transition-colors">
                      <post.icon className="text-2xl text-tertiary-color" />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full border dark:border-zinc-800 border-zinc-100 text-zinc-500">
                      {post.status}
                    </span>
                  </div>

                  <span className="inline-block text-[10px] uppercase tracking-[0.2em] font-bold text-tertiary-color mb-3">
                    {post.tag}
                  </span>

                  <h2 className="text-2xl font-bold font-incognito tracking-tight mb-4 group-hover:text-tertiary-color transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 line-clamp-2">
                    {post.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-bold text-zinc-400 dark:text-zinc-500">
                    <span>Coming Soon</span>
                    <HiLightningBolt className="animate-pulse" />
                  </div>
                </div>

                {/* Decorative background element */}
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-tertiary-color/5 blur-3xl rounded-full group-hover:bg-tertiary-color/10 transition-colors duration-500" />
              </article>
            </Interactive>
          </Slide>
        ))}
      </div>

      <Slide delay={0.5}>
        <section className="mt-20 p-8 rounded-3xl border dark:border-zinc-800 border-zinc-200 dark:bg-zinc-900/20 bg-zinc-50/50 text-center">
          <h3 className="text-xl font-bold mb-4">Want to request a topic?</h3>
          <p className="text-zinc-500 max-w-lg mx-auto mb-8">
            I&apos;m always open to discussing technical challenges and sharing my findings.
            If there&apos;s something specific you&apos;d like to see covered, let&apos;s connect.
          </p>
          <a
            href="https://www.linkedin.com/in/azzam-alsarari-908b94346/?isSelfProfile=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-x-2 bg-primary-color hover:bg-secondary-color text-white px-8 py-4 rounded-xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Send a Request
          </a>
        </section>
      </Slide>
    </main>
  );
}
