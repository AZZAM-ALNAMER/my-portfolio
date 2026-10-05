import Image from "next/image";
import Link from "next/link";
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
    <header className="text-sm py-6 md:px-16 px-6 border-b dark:border-zinc-800 border-zinc-200 z-30 md:mb-28 mb-10">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/">
          <Image
            src={profileData.profileImage.src}
            width={38}
            height={38}
            alt={profileData.profileImage.alt}
            className="rounded-full object-cover"
            priority
          />
        </Link>

        <nav className="md:block hidden">
          <ul className="flex items-center gap-x-8">
            {data.map((link, id) => (
              <li key={id}>
                <Link
                  href={link.href}
                  className="font-incognito dark:text-white text-zinc-600 dark:hover:text-primary-color hover:text-zinc-900 duration-300 text-base"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-x-4">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
