import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Slide } from "../../animation/Slide";
import Link from "next/link";
import PageHeading from "@/app/components/shared/PageHeading";

type Props = {
  params: {
    post: string;
  };
};

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Post | Azzam Hesham Al-Sarari`,
    description: "This post is not available yet.",
    openGraph: {
      title: "Post | Azzam Hesham Al-Sarari",
      description: "This post is not available yet.",
    },
  };
}

export default async function Post({ params }: Props) {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-28 mt-16 pb-24">
      <Slide className="flex items-center gap-2 mb-12">
        <Link
          href="/blog"
          className="text-sm font-bold text-tertiary-color hover:underline"
        >
          ← Back to Insights
        </Link>
      </Slide>

      <section className="">
        <PageHeading
          title="Deep Dive in Progress"
          description="This article is currently being drafted. I'm focusing on providing high-quality, production-ready insights that you can actually use."
        />

        <div className="mt-12 rounded-3xl border dark:border-zinc-800 border-zinc-200 p-8 dark:bg-zinc-900/40 bg-zinc-50/50 backdrop-blur-md relative overflow-hidden group">
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-2xl font-bold mb-4 font-incognito">Coming Soon: {params.post.replace(/-/g, ' ')}</h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
              I&apos;m preparing a set of deep dives on RAG pipelines, LLM fine-tuning,
              and production deployment (Docker/AWS). If you want to be notified when this post or a specific topic drops, let&apos;s connect.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/azzam-alsarari-908b94346/?isSelfProfile=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-x-2 bg-tertiary-color text-white px-8 py-4 rounded-xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Request this Topic
              </a>
              <Link
                href="/blog"
                className="inline-flex items-center gap-x-2 border dark:border-zinc-800 border-zinc-200 px-8 py-4 rounded-xl font-bold dark:text-white text-zinc-700 hover:border-tertiary-color duration-200"
              >
                Explore other topics
              </Link>
            </div>
          </div>

          {/* Decorative background element */}
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-tertiary-color/5 blur-3xl rounded-full group-hover:bg-tertiary-color/10 transition-colors duration-500" />
        </div>
      </section>
    </main>
  );
}
