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
                        username="AZZAM-ALNAMER"
                        blockSize={13}
                        blockMargin={4}
                        fontSize={12}
                        theme={{
                            light: ["#F3F2EF", "#FFFFFF", "#0A66C2", "#0A66C2", "#004182"],
                            dark: ["#F3F2EF", "#FFFFFF", "#0A66C2", "#0A66C2", "#004182"],
                        }}
                    />
                </div>
            </section>
        </Slide>
    );
}
