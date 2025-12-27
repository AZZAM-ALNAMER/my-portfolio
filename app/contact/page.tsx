import Image from "next/image";
import { Metadata } from "next";
import { Slide } from "../animation/Slide";
import { profileData } from "../data/profile";
import { BiEnvelope, BiLogoDiscord, BiLogoGithub, BiLogoLinkedin, BiMap } from "react-icons/bi";
import { HiCalendar, HiExternalLink } from "react-icons/hi";
import Interactive from "../components/shared/Interactive";
import Social from "../components/shared/Social";

export const metadata: Metadata = {
    title: "Contact | Mohamed Khaled Ghareeb",
    description: "Get in touch with Mohamed Khaled Ghareeb—AI & Machine Learning Engineer.",
};

export default function Contact() {
    const contactLinks = [
        {
            label: "Email",
            value: profileData.email,
            icon: BiEnvelope,
            href: `mailto:${profileData.email}`,
            id: "email",
        },
        ...profileData.contactLinks.map((link) => ({
            ...link,
            icon: link.id === "linkedin" ? BiLogoLinkedin : link.id === "github" ? BiLogoGithub : BiLogoDiscord,
        })),
    ];

    return (
        <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20 space-y-24 min-h-screen">
            <section className="flex lg:flex-row flex-col items-center justify-between gap-12">
                <div className="lg:max-w-3xl max-w-full">
                    <Slide>
                        <p className="uppercase tracking-[0.3em] text-sm text-zinc-500 mb-4">
                            Get in touch
                        </p>
                        <h1 className="font-incognito font-semibold tracking-tight text-4xl sm:text-5xl mb-6 leading-tight">
                            Let&apos;s Build Something Together
                        </h1>
                        <p className="text-base dark:text-zinc-300 text-zinc-600 leading-relaxed max-w-2xl">
                            I&apos;m currently open to new opportunities and collaborations. Whether you have a question, a project idea, or just want to say hi, feel free to reach out!
                        </p>
                    </Slide>

                    <div className="grid grid-cols-1 gap-6 mt-12">
                        {contactLinks.map((link, index) => {
                            const url = "url" in link ? link.url : link.href;
                            const value = "value" in link ? link.value : link.label;

                            return (
                                <Slide key={link.id} delay={0.1 * index}>
                                    <Interactive>
                                        <a
                                            href={url}
                                            target={"url" in link ? "_blank" : "_self"}
                                            rel={"url" in link ? "noreferrer noopener" : ""}
                                            className="group flex flex-wrap items-center justify-between gap-4 border dark:border-zinc-800 border-zinc-200 rounded-3xl p-6 dark:bg-zinc-900/40 bg-white/70 backdrop-blur-md transition-all duration-300 hover:border-tertiary-color/50 shadow-sm hover:shadow-xl dark:shadow-black/20"
                                        >
                                            <div className="flex items-center gap-5">
                                                <div className="p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800 group-hover:bg-tertiary-color/10 group-hover:scale-110 transition-all duration-300">
                                                    <link.icon className="text-2xl text-tertiary-color" />
                                                </div>
                                                <div>
                                                    <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-1">
                                                        {link.label}
                                                    </p>
                                                    <p className="text-lg font-semibold dark:text-zinc-100 text-zinc-800">
                                                        {value}
                                                    </p>
                                                </div>
                                            </div>
                                            <HiExternalLink className="text-xl text-zinc-400 group-hover:text-tertiary-color transition-colors" />
                                        </a>
                                    </Interactive>
                                </Slide>
                            );
                        })}
                    </div>
                </div>

                <Slide delay={0.2}>
                    <div className="relative group max-w-md mx-auto lg:mx-0">
                        <div className="absolute inset-0 blur-[80px] bg-gradient-to-br from-tertiary-color/20 via-primary-color/10 to-transparent rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
                        <div className="relative animate-float bg-gradient-to-b from-zinc-100 to-white dark:from-zinc-800 dark:to-zinc-900 border dark:border-zinc-700 border-zinc-200 rounded-[32px] p-6 shadow-2xl overflow-hidden">
                            <Image
                                src="/assets/contact-illustration.png"
                                alt="Contact illustration"
                                width={400}
                                height={400}
                                className="rounded-2xl object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </Slide>
            </section>

            <section className="grid md:grid-cols-2 grid-cols-1 gap-10">
                <Slide delay={0.4}>
                    <div className="border dark:border-zinc-800 border-zinc-200 rounded-3xl p-8 dark:bg-zinc-900/40 bg-white/70 backdrop-blur-md">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 rounded-xl bg-tertiary-color/10">
                                <BiMap className="text-2xl text-tertiary-color" />
                            </div>
                            <h2 className="text-xl font-bold font-incognito">Location</h2>
                        </div>
                        <p className="text-zinc-600 dark:text-zinc-400">
                            Based in {profileData.location}, available for remote work and open to relocation.
                        </p>
                    </div>
                </Slide>

                <Slide delay={0.5}>
                    <div className="border dark:border-zinc-800 border-zinc-200 rounded-3xl p-8 dark:bg-zinc-900/40 bg-white/70 backdrop-blur-md">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 rounded-xl bg-tertiary-color/10">
                                <HiCalendar className="text-2xl text-tertiary-color" />
                            </div>
                            <h2 className="text-xl font-bold font-incognito">Availability</h2>
                        </div>
                        <p className="text-zinc-600 dark:text-zinc-400">
                            {profileData.availability}
                        </p>
                    </div>
                </Slide>
            </section>

            <section className="pb-24">
                <Slide delay={0.6}>
                    <div className="flex flex-col items-center justify-center text-center space-y-6">
                        <h2 className="text-2xl font-bold font-incognito">Follow Me</h2>
                        <Social type="social" />
                    </div>
                </Slide>
            </section>
        </main>
    );
}
