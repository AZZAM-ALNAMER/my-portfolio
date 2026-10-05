import Image from "next/image";
import { Metadata } from "next";
import { BiLogoGithub, BiLogoLinkedin, BiMap } from "react-icons/bi";
import { Slide } from "../animation/Slide";
import Social from "../components/shared/Social";
import { profileData } from "../data/profile";
import Interactive from "../components/shared/Interactive";
import {
  HiCode,
  HiLightningBolt,
  HiSparkles,
  HiEye,
  HiDatabase,
  HiGlobe,
  HiCheckCircle,
  HiBriefcase,
  HiCalendar,
  HiTerminal,
  HiAcademicCap,
  HiBadgeCheck,
} from "react-icons/hi";
import GitHubActivity from "../components/shared/GitHubActivity";

const iconMap: { [key: string]: any } = {
  HiCode,
  HiLightningBolt,
  HiSparkles,
  HiEye,
  HiDatabase,
  HiGlobe,
};

const story = [
  "I’m an AI Engineer with hands-on experience building production-ready systems across the full AI stack, from LLM fine-tuning and agentic pipeline design to computer vision and RAG architecture.",
  "I’ve delivered end-to-end projects spanning multi-agent orchestration, semantic search, and generative AI integration, and have applied LLM mathematical reasoning to real-world optimization and resource-allocation problems.",
  "I’m based in Ankara, Turkey. I speak Arabic (native), English (fluent), and Turkish (conversational).",
];

const keyFacts = [
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    icon: BiLogoLinkedin,
    href: profileData.contactLinks[0].url,
  },
  {
    label: "GitHub",
    value: "View GitHub profile",
    icon: BiLogoGithub,
    href: profileData.contactLinks[1].url,
  },
  {
    label: "Role",
    value: profileData.title,
  },
  {
    label: "Location",
    value: profileData.location,
    icon: BiMap,
  },
  {
    label: "Languages",
    value: profileData.languages
      .map((lang) => `${lang.name} · ${lang.level}`)
      .join(" | "),
  },
];

export const metadata: Metadata = {
  title: "About | Azzam Hesham Al-Sarari",
  description:
    "Learn more about Azzam Hesham Al-Sarari, an AI Engineer working across LLMs, agentic AI, and computer vision.",
  openGraph: {
    title: "About | Azzam Hesham Al-Sarari",
    description:
      "AI Engineer building intelligent systems with LLMs, agentic AI, and computer vision.",
  },
};

export default function About() {
  return (
    <main className="relative lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6 lg:mt-28 mt-16 space-y-24">
      <section className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
        <div>
          <Slide>
            <p className="uppercase tracking-[0.3em] text-sm text-zinc-500 mb-4">
              {profileData.title}
            </p>
            <h1 className="font-incognito font-semibold tracking-tight text-4xl sm:text-5xl mb-6 leading-tight">
              {profileData.name}
            </h1>
            <p className="text-base dark:text-zinc-300 text-zinc-600 leading-relaxed">
              {profileData.summary}
            </p>
          </Slide>
          <Slide delay={0.08}>
            <div className="flex flex-wrap gap-3 mt-6">
              {profileData.preferredRoles.map((role) => (
                <span
                  key={role}
                  className="text-xs uppercase tracking-[0.25em] dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-full px-4 py-2 text-zinc-600 dark:text-zinc-300"
                >
                  {role}
                </span>
              ))}
            </div>
          </Slide>
          <Slide delay={0.12}>
            <div className="mt-8 space-y-4 text-sm dark:text-zinc-300 text-zinc-600">
              {keyFacts.map((fact) => {
                const Content = (
                  <div
                    key={fact.label}
                    className={`flex items-center gap-3 border dark:border-zinc-800 border-zinc-200 rounded-xl px-4 py-3 transition-colors ${fact.href
                      ? "hover:border-tertiary-color/50 dark:hover:border-tertiary-color/50"
                      : ""
                      }`}
                  >
                    {fact.icon ? (
                      <fact.icon className="text-lg text-tertiary-color" />
                    ) : null}
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                        {fact.label}
                      </p>
                      <p className="font-semibold text-zinc-800 dark:text-white">
                        {fact.value}
                      </p>
                    </div>
                  </div>
                );

                if (fact.href) {
                  return (
                    <a
                      key={fact.label}
                      href={fact.href}
                      className="block transform active:scale-[0.98] transition-all"
                    >
                      {Content}
                    </a>
                  );
                }

                return Content;
              })}
            </div>
          </Slide>
        </div>
        <Slide delay={0.06}>
          <div className="relative">
            <div className="absolute inset-0 blur-[90px] bg-gradient-to-br from-tertiary-color/30 via-primary-color/20 to-zinc-300 dark:to-zinc-700 rounded-full" />
            <div className="relative animate-float bg-gradient-to-b from-zinc-100 to-white dark:from-zinc-800 dark:to-zinc-900 border dark:border-zinc-700 border-zinc-200 rounded-[28px] p-6 shadow-2xl">
              <Image
                src={profileData.profileImage.src}
                alt={profileData.profileImage.alt}
                width={480}
                height={520}
                className="rounded-2xl object-cover border-4 border-zinc-100 dark:border-zinc-800 shadow-lg"
                priority
              />
              <div className="mt-6 text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                  Operating Base
                </p>
                <h3 className="text-2xl font-semibold mt-2">
                  {profileData.location}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mt-2">
                  {profileData.education.specialization}
                </p>
              </div>
            </div>
          </div>
        </Slide>
      </section>

      <section className="space-y-6">
        <Slide>
          <h2 className="text-3xl font-incognito font-semibold tracking-tight">
            Why I Build Intelligent Systems
          </h2>
        </Slide>
        <div className="space-y-5 text-zinc-600 dark:text-zinc-300 leading-relaxed">
          {story.map((paragraph) => (
            <Slide key={paragraph}>
              <p>{paragraph}</p>
            </Slide>
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <Slide>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="uppercase text-sm tracking-[0.3em] text-zinc-500 mb-2">
                Systems I Ship
              </p>
              <h2 className="text-3xl font-incognito font-semibold tracking-tight">
                Experience Highlights
              </h2>
            </div>
            <Social type="social" />
          </div>
        </Slide>
        <div className="space-y-8">
          {profileData.experiences.map((experience: any, index: number) => (
            <Slide key={experience.company} delay={0.1 * index}>
              <Interactive>
                <article className="group relative overflow-hidden rounded-3xl border dark:border-zinc-800 border-zinc-200 p-8 dark:bg-zinc-900/40 bg-white/70 backdrop-blur-md transition-all duration-300 hover:border-tertiary-color/50 shadow-sm hover:shadow-xl dark:shadow-black/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-tertiary-color/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800 group-hover:bg-tertiary-color/10 group-hover:scale-110 transition-all duration-300">
                        <HiBriefcase className="text-2xl text-tertiary-color" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold dark:text-zinc-100 text-zinc-800 transition-colors group-hover:dark:text-white">
                          {experience.role}
                        </h3>
                        <p className="text-lg text-zinc-500 dark:text-zinc-400 font-medium">
                          {experience.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100/50 dark:bg-zinc-800/50 border dark:border-zinc-700 border-zinc-200">
                      <HiCalendar className="text-tertiary-color/70" />
                      <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                        {experience.period}
                      </span>
                    </div>
                  </div>

                  <div className="relative z-10 space-y-4 mb-8">
                    {experience.details.map((detail: string, i: number) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-tertiary-color shrink-0 shadow-[0_0_8px_rgba(var(--tertiary-rgb),0.6)]" />
                        <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="relative z-10 flex flex-wrap gap-2">
                    {experience.stack.map((tool: string) => (
                      <span
                        key={`${experience.company}-${tool}`}
                        className="px-4 py-1.5 rounded-xl text-xs font-bold uppercase tracking-widest bg-white dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 border dark:border-zinc-700 border-zinc-200 shadow-sm transition-all duration-300 group-hover:border-tertiary-color/30 group-hover:text-tertiary-color group-hover:dark:text-tertiary-color"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Aesthetic Background Decoration */}
                  <div className="absolute -top-12 -right-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none">
                    <HiBriefcase className="text-[200px]" />
                  </div>
                </article>
              </Interactive>
            </Slide>
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <Slide>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="uppercase text-sm tracking-[0.3em] text-zinc-500 mb-3">
                Selected Work
              </p>
              <h2 className="font-incognito text-4xl font-semibold tracking-tight">
                Projects in Production
              </h2>
            </div>
            <p className="text-zinc-500 max-w-sm text-sm lg:text-base">
              Shipping AI systems that stay fast, factual, and reliable.
            </p>
          </div>
        </Slide>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
          {profileData.projects.map((project: any, index: number) => (
            <Slide key={project.name} delay={0.1 * index}>
              <Interactive>
                <article className="group relative overflow-hidden rounded-3xl border dark:border-zinc-800 border-zinc-200 p-8 h-full dark:bg-zinc-900/40 bg-white/70 backdrop-blur-md transition-all duration-300 hover:border-tertiary-color/50 shadow-sm hover:shadow-xl dark:shadow-black/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-tertiary-color/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 flex items-start justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800 group-hover:bg-tertiary-color/10 group-hover:scale-110 transition-all duration-300">
                      <HiLightningBolt className="text-2xl text-tertiary-color" />
                    </div>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-2 dark:text-zinc-100 text-zinc-800 transition-colors group-hover:dark:text-white">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-px w-8 bg-tertiary-color/30" />
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-tertiary-color">
                        {project.impact}
                      </p>
                    </div>
                    <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-8">
                      {project.description}
                    </p>
                  </div>

                  <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                    {project.stack.slice(0, 5).map((tech: string) => (
                      <span
                        key={`${project.name}-${tech}`}
                        className="px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border dark:border-zinc-700 border-zinc-200 transition-colors group-hover:border-tertiary-color/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 5 && (
                      <span className="px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border dark:border-zinc-700 border-zinc-200">
                        + {project.stack.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Aesthetic Background Decoration */}
                  <div className="absolute -bottom-12 -right-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none">
                    <HiTerminal className="text-[180px]" />
                  </div>
                </article>
              </Interactive>
            </Slide>
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <Slide>
          <div>
            <p className="uppercase text-sm tracking-[0.3em] text-zinc-500 mb-2">
              Toolkit
            </p>
            <h2 className="text-3xl font-incognito font-semibold tracking-tight">
              Core Skills & Tooling
            </h2>
          </div>
        </Slide>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {profileData.skills.map((skill: any) => {
            const Icon = iconMap[skill.icon] || HiCode;
            return (
              <Slide key={skill.category}>
                <Interactive>
                  <article className="group relative overflow-hidden rounded-3xl border dark:border-zinc-800 border-zinc-200 p-6 h-full dark:bg-zinc-900/40 bg-white/70 backdrop-blur-md transition-all duration-300 hover:border-tertiary-color/50 shadow-sm hover:shadow-xl dark:shadow-black/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-tertiary-color/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10 flex items-center justify-between mb-6">
                      <div className="p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800 group-hover:bg-tertiary-color/10 group-hover:scale-110 transition-all duration-300">
                        <Icon className="text-2xl text-tertiary-color" />
                      </div>
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-xl font-bold mb-4 dark:text-zinc-100 text-zinc-800">
                        {skill.category}
                      </h3>
                      <ul className="space-y-3">
                        {skill.items.map((item: string) => (
                          <li key={item} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                            <HiCheckCircle className="text-tertiary-color/60 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Corner decoration icon */}
                    <div className="absolute -bottom-6 -right-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none">
                      <Icon className="text-9xl" />
                    </div>
                  </article>
                </Interactive>
              </Slide>
            );
          })}
        </div>
      </section>

      <section className="space-y-6">
        <Slide>
          <h2 className="text-3xl font-incognito font-semibold tracking-tight">
            Key Achievements
          </h2>
        </Slide>
        <Slide delay={0.05}>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
            {profileData.achievements.map((achievement: string, index: number) => (
              <Interactive key={index}>
                <article className="group flex items-start gap-4 rounded-2xl border dark:border-zinc-800 border-zinc-200 p-5 dark:bg-zinc-900/30 bg-white/70 backdrop-blur-sm transition-all duration-300 hover:border-tertiary-color/50">
                  <div className="mt-1 p-2 rounded-lg bg-tertiary-color/10 group-hover:bg-tertiary-color/20 transition-colors">
                    <HiCheckCircle className="text-xl text-tertiary-color" />
                  </div>
                  <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-medium">
                    {achievement}
                  </p>
                </article>
              </Interactive>
            ))}
          </div>
        </Slide>
      </section>

      <section id="certifications" className="space-y-10">
        <Slide>
          <div>
            <p className="uppercase text-sm tracking-[0.3em] text-zinc-500 mb-3">
              Technical Credentials
            </p>
            <h2 className="font-incognito text-4xl font-semibold tracking-tight">
              Certifications
            </h2>
          </div>
        </Slide>
        <Slide delay={0.05}>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
            {profileData.certifications.map((cert: any, index: number) => (
              <Slide key={cert.name} delay={0.1 * index}>
                <Interactive>
                  <article className="group relative overflow-hidden rounded-3xl border dark:border-zinc-800 border-zinc-200 p-8 h-full dark:bg-zinc-900/40 bg-white/70 backdrop-blur-md transition-all duration-300 hover:border-tertiary-color/50 shadow-sm hover:shadow-xl dark:shadow-black/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-tertiary-color/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 mb-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800 group-hover:bg-tertiary-color/10 group-hover:scale-110 transition-all duration-300">
                          <HiBadgeCheck className="text-2xl text-tertiary-color" />
                        </div>
                        <h3 className="text-xl font-bold dark:text-zinc-100 text-zinc-800 transition-colors group-hover:dark:text-white">
                          {cert.name}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100/50 dark:bg-zinc-800/50 border dark:border-zinc-700 border-zinc-200">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                          {cert.year}
                        </span>
                      </div>
                    </div>

                    <div className="relative z-10 mb-6">
                      <p className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-tertiary-color/10 text-tertiary-color text-xs font-bold uppercase tracking-widest mb-4">
                        {cert.issuer}
                      </p>
                      <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-medium">
                        {cert.detail}
                      </p>
                    </div>

                    {/* Aesthetic Background Decoration */}
                    <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none">
                      <HiAcademicCap className="text-[180px]" />
                    </div>
                  </article>
                </Interactive>
              </Slide>
            ))}
          </div>
        </Slide>
      </section>

      <GitHubActivity />

      <section id="credentials" className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 pb-24">
        {/* Education Card */}
        <Slide>
          <Interactive>
            <article className="h-full rounded-2xl border dark:border-zinc-800 border-zinc-200 p-6 dark:bg-zinc-900/30 bg-white/70 backdrop-blur-md">
              <p className="uppercase text-xs tracking-[0.4em] text-zinc-500 mb-4 font-semibold">
                Education
              </p>
              <h3 className="text-2xl font-incognito font-semibold mb-3">
                {profileData.education.degree}
              </h3>
              <p className="text-tertiary-color font-medium mb-3">
                {profileData.education.institution}
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                {profileData.education.specialization}
              </p>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-500 mt-auto">
                <span className="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                {profileData.education.graduation}
              </div>
            </article>
          </Interactive>
        </Slide>

        {/* Certifications Card */}
        <Slide delay={0.05}>
          <Interactive>
            <article className="h-full rounded-2xl border dark:border-zinc-800 border-zinc-200 p-6 dark:bg-zinc-900/30 bg-white/70 backdrop-blur-md">
              <p className="uppercase text-xs tracking-[0.4em] text-zinc-500 mb-4 font-semibold">
                Certifications
              </p>
              <ul className="space-y-6">
                {profileData.certifications.slice(0, 3).map((cert: any) => (
                  <li key={cert.name} className="space-y-1">
                    <p className="font-bold text-zinc-800 dark:text-zinc-200">
                      {cert.name}
                    </p>
                    <p className="text-xs text-zinc-500 uppercase tracking-widest">
                      {cert.issuer}
                    </p>
                  </li>
                ))}
              </ul>
              {profileData.certifications.length > 3 && (
                <p className="mt-6 text-xs text-zinc-400 font-medium">
                  + {profileData.certifications.length - 3} more credentials
                </p>
              )}
            </article>
          </Interactive>
        </Slide>

        {/* Working Style Card */}
        <Slide delay={0.1}>
          <Interactive>
            <article className="h-full rounded-2xl border dark:border-zinc-800 border-zinc-200 p-6 dark:bg-zinc-900/30 bg-white/70 backdrop-blur-md">
              <p className="uppercase text-xs tracking-[0.4em] text-zinc-500 mb-4 font-semibold">
                Working Style
              </p>
              <ul className="space-y-4">
                {profileData.preferences.map((pref: string) => (
                  <li key={pref} className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                    <HiCheckCircle className="text-tertiary-color shrink-0 mt-0.5" />
                    <span>{pref}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t dark:border-zinc-800 border-zinc-200">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-3 font-semibold">
                  Languages
                </p>
                <div className="flex flex-wrap gap-2">
                  {profileData.languages.map((lang: any) => (
                    <span
                      key={lang.name}
                      className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-[10px] uppercase tracking-widest text-zinc-600 dark:text-zinc-400 font-bold border dark:border-zinc-700 border-zinc-200"
                    >
                      {lang.name}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Interactive>
        </Slide>
      </section>
    </main>
  );
}
