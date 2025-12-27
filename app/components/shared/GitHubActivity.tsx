"use client";

import GitHubCalendar from "react-github-calendar";
import { Slide } from "../../animation/Slide";

export default function GitHubActivity() {
    return (
        <Slide delay={0.1}>
            <section className="space-y-10">
                <div>
                    <p className="uppercase text-sm tracking-[0.3em] text-zinc-500 mb-2">
                        Activity
                    </p>
                    <h2 className="text-3xl font-incognito font-semibold tracking-tight">
                        GitHub Contributions
                    </h2>
                </div>

                <div className="dark:bg-zinc-900/40 bg-white/70 p-8 rounded-3xl border dark:border-zinc-800 border-zinc-200 backdrop-blur-md overflow-hidden flex justify-center items-center">
                    <GitHubCalendar
                        username="ghreeb1"
                        blockSize={13}
                        blockMargin={4}
                        fontSize={12}
                        theme={{
                            light: ["#f4f4f5", "#dcfce7", "#86efac", "#22c55e", "#15803d"],
                            dark: ["#18181b", "#064e3b", "#065f46", "#059669", "#10b981"],
                        }}
                    />
                </div>
            </section>
        </Slide>
    );
}
