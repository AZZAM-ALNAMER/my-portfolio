import { HiOutlineSearch } from "react-icons/hi";
import Link from "next/link";

type props = {
  title: string;
  description: string;
};

export default function NotFoundComponent({ title, description }: props) {
  return (
    <main className="min-h-[60vh] max-w-7xl mx-auto md:px-16 px-6">
      <header className="max-w-4xl">
        <div className="p-4 rounded-2xl bg-tertiary-color/10 inline-block">
          <HiOutlineSearch className="text-5xl text-tertiary-color" />
        </div>
        <h1 className="font-incognito font-black tracking-tight sm:text-6xl text-3xl lg:leading-[3.7rem] leading-tight mt-6 mb-3">
          {title}
        </h1>
        <p className="max-w-2xl text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
          {description}
        </p>
      </header>

      <div className="max-w-4xl grid lg:grid-cols-2 grid-cols-1 gap-4 mt-12">
        <Link
          href="/"
          className="rounded-2xl border dark:border-zinc-800 border-zinc-200 p-5 dark:bg-primary-bg/40 bg-white/80 hover:opacity-80 duration-200"
        >
          <h2 className="text-xl font-semibold mb-2">Home</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">
            Go back to the main overview.
          </p>
        </Link>

        <Link
          href="/projects"
          className="rounded-2xl border dark:border-zinc-800 border-zinc-200 p-5 dark:bg-primary-bg/40 bg-white/80 hover:opacity-80 duration-200"
        >
          <h2 className="text-xl font-semibold mb-2">Projects</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">
            Explore selected AI systems.
          </p>
        </Link>
      </div>
    </main>
  );
}
