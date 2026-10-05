import Image from "next/image";
import Link from "next/link";
import { HiDownload } from "react-icons/hi";
import MobileMenu from "./MobileMenu";
import { profileData } from "@/app/data/profile";

export default function Navbar() {
  const data = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Experience",
      href: "/#experience",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  return (
    <header className="sticky top-0 z-50 mb-10 border-b border-zinc-200 bg-white px-6 py-4 text-sm md:mb-28 md:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-4 md:grid-cols-[1fr_auto_1fr]">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Image
            src={profileData.profileImage.src}
            width={52}
            height={52}
            alt={profileData.profileImage.alt}
            className="h-12 w-12 rounded-full border border-zinc-200 object-cover object-[center_30%]"
            priority
          />
          <span className="truncate text-sm font-semibold uppercase tracking-wide text-zinc-800 md:text-base">
            AZZAM AL-SARARI
          </span>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-x-8">
            {data.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  className="font-incognito text-base text-zinc-600 duration-300 hover:text-primary-color"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-self-end gap-2">
          <a
            href={profileData.cvUrl}
            download
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-primary-color px-3 py-2 font-semibold text-white transition-colors hover:bg-secondary-color sm:px-5"
          >
            <span className="hidden sm:inline">Download CV</span>
            <span className="sm:hidden">CV</span>
            <HiDownload aria-hidden="true" className="text-base" />
          </a>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
