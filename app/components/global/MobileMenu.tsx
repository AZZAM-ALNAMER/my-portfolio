"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  HiOutlineX,
  HiHome,
  HiCode,
  HiBriefcase,
  HiMail,
  HiBeaker,
} from "react-icons/hi";
import { profileData } from "@/app/data/profile";

export default function MobileMenu() {
  const [navShow, setNavShow] = useState(false);
  const data = [
    {
      title: "Home",
      href: "/#home",
      icon: HiHome,
    },
    {
      title: "Skills",
      href: "/#skills",
      icon: HiCode,
    },
    {
      title: "Projects",
      href: "/projects",
      icon: HiBeaker,
    },
    {
      title: "Experience",
      href: "/#experience",
      icon: HiBriefcase,
    },
    {
      title: "Contact",
      href: "/contact",
      icon: HiMail,
    },
  ];

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = "auto";
      } else {
        document.body.style.overflow = "hidden";
      }
      return !status;
    });
  };

  return (
    <>
      <button
        aria-label="Toggle Menu"
        onClick={onToggleNav}
        className="md:hidden dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-md p-2"
      >
        <RxHamburgerMenu className="text-xl" />
      </button>
      <div
        className={`md:hidden fixed left-0 top-0 z-[60] h-full w-full transform duration-[600ms] ease-[cubic-bezier(0.7,0,0,1)] dark:bg-zinc-900 bg-white ${navShow ? "translate-x-0 rounded-none" : "translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between mt-6 px-8">
          <Link href="/#home" onClick={onToggleNav}>
            <Image
              src={profileData.profileImage.src}
              width={40}
              height={40}
              alt={profileData.profileImage.alt}
              className="rounded-full object-cover"
              priority
            />
          </Link>

          <button
            aria-label="Toggle Menu"
            onClick={onToggleNav}
            className={`md:hidden dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-full p-2 duration-500 ${!navShow ? "-rotate-[360deg]" : null
              }`}
          >
            <HiOutlineX className="text-xl" />
          </button>
        </div>
        <nav className="flex flex-col mt-6">
          {data.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="flex items-center gap-x-2 font-incognito font-semibold text-lg dark:shadow-line-dark shadow-line-light p-6 group"
              onClick={onToggleNav}
            >
              <link.icon
                className="text-zinc-500 group-hover:dark:text-white group-hover:text-zinc-800 duration-300"
                aria-hidden="true"
              />
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
