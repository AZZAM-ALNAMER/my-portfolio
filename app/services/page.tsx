import { Slide } from "../animation/Slide";
import Image from "next/image";
import { Metadata } from "next";
import PageHeading from "@/app/components/shared/PageHeading";
import { profileData } from "@/app/data/profile";
import {
    HiChatAlt2,
    HiDatabase,
    HiTranslate,
    HiEye,
    HiSparkles,
    HiTrendingUp
} from "react-icons/hi";
import Interactive from "@/app/components/shared/Interactive";

export const metadata: Metadata = {
    title: "Services | Mohamed Khaled Ghareeb",
    metadataBase: new URL("https://mohamedkhaledghareeb.com/services"),
    description: "AI & Machine Learning Services offered by Mohamed Khaled Ghareeb.",
    openGraph: {
        title: "Services | Mohamed Khaled Ghareeb",
        url: "https://mohamedkhaledghareeb.com/services",
        description: "AI & Machine Learning Services offered by Mohamed Khaled Ghareeb.",
        images: "/profile.jpg",
    },
};

const iconMap: { [key: string]: any } = {
    HiChatAlt2: HiChatAlt2,
    HiDatabase: HiDatabase,
    HiTranslate: HiTranslate,
    HiEye: HiEye,
    HiSparkles: HiSparkles,
    HiTrendingUp: HiTrendingUp,
};

export default function Services() {
    return (
        <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20 pb-20">
            <PageHeading
                title="Offered Services"
                description="Harnessing the power of state-of-the-art AI to build production-grade, scalable solutions."
            />

            <section className="grid grid-cols-1 gap-12 my-10 relative">
                {/* Background decorative glow */}
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-tertiary-color/10 blur-[100px] -z-10 rounded-full" />
                <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-primary-color/10 blur-[100px] -z-10 rounded-full" />

                {profileData.services.map((service: any, index: number) => {
                    const Icon = iconMap[service.icon] || HiSparkles;
                    return (
                        <Slide key={index} delay={0.1 + index * 0.05}>
                            <Interactive>
                                <article className="relative group overflow-hidden rounded-3xl border dark:border-zinc-800/50 border-zinc-200/50 dark:bg-zinc-900/40 bg-white/60 backdrop-blur-xl hover:border-tertiary-color/50 transition-all duration-500 shadow-xl dark:shadow-black/20 flex flex-col md:flex-row items-stretch">
                                    {/* Subtle gradient overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-tertiary-color/5 via-transparent to-primary-color/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Left Content (Text) */}
                                    <div className="relative z-10 flex-1 p-8 md:p-12 flex flex-col justify-center">
                                        <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800/80 group-hover:bg-tertiary-color/10 group-hover:scale-110 transition-all duration-500 mb-6 shadow-inner w-16 h-16">
                                            <Icon className="text-3xl text-tertiary-color group-hover:text-primary-color transition-colors duration-500" />
                                        </div>

                                        <h3 className="text-3xl font-incognito font-semibold mb-4 dark:text-zinc-100 text-zinc-800 tracking-tight">
                                            {service.title}
                                        </h3>

                                        <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-8 max-w-xl">
                                            {service.description}
                                        </p>

                                        <div className="flex items-center gap-2 text-sm font-semibold text-tertiary-color opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                                            <span>Learn more</span>
                                            <HiTrendingUp className="rotate-90" />
                                        </div>
                                    </div>

                                    {/* Right Content (Image) */}
                                    {service.image && (
                                        <div className="relative w-full md:w-[45%] lg:w-[40%] min-h-[300px] overflow-hidden bg-zinc-50/50 dark:bg-zinc-800/10 p-6 flex items-center justify-center">
                                            <div className="relative w-full h-full rounded-2xl border border-zinc-200 dark:border-zinc-700/50 shadow-sm overflow-hidden bg-white dark:bg-zinc-900/40">
                                                <Image
                                                    src={service.image}
                                                    alt={service.title}
                                                    fill
                                                    className="object-contain p-2 group-hover:scale-110 transition-transform duration-700"
                                                    sizes="(max-w-768px) 100vw, 40vw"
                                                />
                                            </div>
                                        </div>
                                    )}
                                </article>
                            </Interactive>
                        </Slide>
                    );
                })}
            </section>

            {/* Call to Action Section */}
            <Slide delay={0.5}>
                <section className="mt-20 p-10 rounded-3xl border dark:border-zinc-800 border-zinc-200 bg-zinc-50 dark:bg-zinc-900/20 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-tertiary-color/5 to-primary-color/5" />
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4">Ready to elevate your project?</h2>
                        <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                            Let&apos;s collaborate to build something extraordinary. I&apos;m currently open to new opportunities and projects.
                        </p>
                        <Interactive>
                            <a
                                href="mailto:qq11gharipqq11@gmail.com"
                                className="inline-flex items-center gap-2 bg-tertiary-color hover:bg-tertiary-color/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-tertiary-color/20"
                            >
                                Get in Touch
                            </a>
                        </Interactive>
                    </div>
                </section>
            </Slide>
        </main>
    );
}
