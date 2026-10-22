import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Slide } from "../../animation/Slide";
import { profileData } from "@/app/data/profile";
import ProjectGallery from "@/app/components/shared/ProjectGallery";
import FineTuningShowcase from "@/app/components/shared/FineTuningShowcase";
import Link from "next/link";
import HousePriceShowcase from "@/app/components/shared/HousePriceShowcase";
import FlyrankShowcase from "@/app/components/shared/FlyrankShowcase";

type Props = {
  params: {
    project: string;
  };
};

// Dynamic metadata for SEO
// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.project;
  const project = profileData.projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.name} | Project`,
    description: project.impact,
    openGraph: {
      title: project.name,
      description: project.impact,
    },
  };
}

export default function Project({ params }: Props) {
  const slug = params.project;
  const project = profileData.projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
    return null;
  }

  const projectIndex = profileData.projects.findIndex((item) => item.slug === slug);
  const previousProject = profileData.projects[projectIndex - 1];
  const nextProject = profileData.projects[projectIndex + 1];

  return (
    <main className="max-w-6xl mx-auto lg:px-16 px-8">
      <Slide>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start justify-between flex-wrap mb-4 gap-4">
            <h1 className="font-incognito font-black tracking-tight sm:text-5xl text-3xl mb-4 max-w-md">
              {project.name}
            </h1>
            <div className="flex flex-col items-start md:items-end w-full md:w-auto">
              {project.period && (
                <span className="text-zinc-500 text-sm">{project.period}</span>
              )}
            </div>
          </div>

          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-6">
            {project.impact}
          </p>

          {slug === "usage-metering-billing-engine" ? (
            <>
              <FlyrankShowcase />
              <div className="mt-8">
                <ProjectGallery images={project.images} projectName={project.name} contain />
              </div>
            </>
          ) : slug === "house-price-prediction-ml-pipeline" ? (
            <HousePriceShowcase />
          ) : slug === "llm-finetuning-vm-allocation" ? (
            <FineTuningShowcase />
          ) : (
            <ProjectGallery images={project.images} projectName={project.name} />
          )}

          <div className="mt-8 dark:text-zinc-300 text-zinc-600 leading-relaxed space-y-8">
            <p className="leading-7">{project.focus}</p>

            {project.achievements && project.achievements.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold mb-4 text-zinc-800 dark:text-zinc-200">
                  Key Achievements
                </h2>
                <ul className="list-disc list-inside space-y-2 marker:text-zinc-400">
                  {project.achievements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {"limitations" in project && project.limitations && (
              <div className="rounded-xl border border-zinc-200 bg-[#F3F2EF]/60 p-5 dark:border-zinc-800 dark:bg-zinc-900/40">
                <h2 className="mb-2 text-lg font-semibold text-zinc-800 dark:text-zinc-200">Known Limitations &amp; Planned Improvements</h2>
                <p className="leading-7">{project.limitations}</p>
              </div>
            )}

            <div>
              <h2 className="text-xl font-semibold mb-4 text-zinc-800 dark:text-zinc-200">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2 text-xs">
                {project.stack.map((tech) => (
                  <span
                    key={`${project.slug}-${tech}`}
                    className="px-3 py-1 rounded-full border dark:border-zinc-800 border-zinc-200 bg-zinc-50 dark:bg-zinc-800/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.links && project.links.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold mb-4 text-zinc-800 dark:text-zinc-200">
                  Links
                </h2>
                <div className="flex flex-wrap gap-4">
                  {project.links.map((link) => (
                    <a
                      href={link.url}
                      key={link.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 rounded-md border border-primary-color px-5 py-3 font-medium transition-colors ${
                        link.label === "Live Demo"
                          ? "bg-primary-color text-white hover:bg-secondary-color"
                          : "bg-white text-primary-color hover:border-secondary-color hover:text-secondary-color"
                      }`}
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          <nav className="mt-12 flex items-center justify-between gap-4 border-t border-zinc-200 pt-6 text-sm dark:border-zinc-800" aria-label="Project navigation">
            {previousProject ? <Link href={"/projects/" + previousProject.slug} className="text-zinc-600 transition-colors hover:text-primary-color">← Previous Project: {previousProject.name}</Link> : <span />}
            {nextProject ? <Link href={"/projects/" + nextProject.slug} className="text-right text-zinc-600 transition-colors hover:text-primary-color">Next Project: {nextProject.name} →</Link> : <Link href="/projects" className="text-right text-zinc-600 transition-colors hover:text-primary-color">More projects coming soon →</Link>}
          </nav>
        </div>
      </Slide>
    </main>
  );
}
