import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Slide } from "../animation/Slide";
import PageHeading from "../components/shared/PageHeading";
import { profileData } from "../data/profile";
import FineTuningWorkflow from "../components/shared/FineTuningWorkflow";
import { HousePriceWorkflow } from "../components/shared/HousePriceShowcase";

export const metadata: Metadata = {
  title: "Projects | Azzam Hesham Al-Sarari",
  description: "Selected AI engineering projects by Azzam Hesham Al-Sarari.",
  openGraph: {
    title: "Projects | Azzam Hesham Al-Sarari",
    description: "Selected AI engineering projects by Azzam Hesham Al-Sarari.",
  },
};

export default function Project() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <PageHeading
        title="Projects"
        description="A selection of AI and ML systems I’ve built—focused on performance, reliability, and production deployment."
      />

      <Slide>
        <section className="grid xl:grid-cols-2 grid-cols-1 gap-8 mb-12">
          {profileData.projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="flex flex-col gap-4 dark:bg-zinc-900/30 bg-zinc-50 border dark:border-zinc-800 border-zinc-200 p-6 rounded-2xl hover:border-tertiary-color dark:hover:border-primary-color transition-colors duration-300 group h-full"
            >
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 border dark:border-zinc-700 border-zinc-200">
                  {project.slug === "house-price-prediction-ml-pipeline" ? (
                    <HousePriceWorkflow compact />
                  ) : project.slug === "llm-finetuning-vm-allocation" ? (
                    <FineTuningWorkflow compact />
                  ) : <Image
                    src={
                      project.images && project.images.length > 0
                        ? project.images[0].src
                        : "/project.png"
                    }
                    fill
                    alt={project.name}
                    className="object-cover group-hover:scale-105 duration-500"
                  />}
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="text-2xl font-bold font-incognito tracking-tight">
                      {project.name}
                    </h2>
                    <span className="text-[10px] uppercase tracking-widest text-zinc-500 shrink-0 border border-zinc-200 dark:border-zinc-700 rounded-full px-2 py-1">
                      {project.period}
                    </span>
                  </div>

                  <div className="text-sm text-zinc-500 font-mono">
                    {project.role}
                  </div>

                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-[10px] uppercase tracking-wide rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border dark:border-zinc-700 border-zinc-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="px-2 py-1 text-[10px] uppercase tracking-wide rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-500 border dark:border-zinc-700 border-zinc-200">
                        +{project.stack.length - 4}
                      </span>
                    )}
                  </div>
                </div>
            </Link>
          ))}
        </section>
      </Slide>
    </main>
  );
}
