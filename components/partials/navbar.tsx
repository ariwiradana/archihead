import { NavbarItems } from "@/constants/navbarItems";
import { syne } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { BiChevronDown, BiMenu } from "react-icons/bi";

const Navbar: FC = () => {
  return (
    <section className="lg:h-[109px] h-20 md:h-24 fixed inset-0 z-30 px-6 md:px-16 lg:px-20">
      <nav className="max-w-screen-2xl mx-auto flex justify-between items-center h-full w-full text-white">
        <ul className="flex items-center gap-x-2">
          <div className="relative w-8 md:w-9 lg:w-12 aspect-square">
            <Image sizes="100px" priority fill className="object-contain" alt="logo" src="/logo-white.svg" />
          </div>
          <li
            className={`${syne.className} uppercase font-bold text-base md:text-lg lg:text-2xl`}
          >
            <Link href="/">Archihead</Link>
          </li>
        </ul>
        <ul className={`flex items-center gap-x-4 lg:gap-x-9 ${syne.className}`}>
          {NavbarItems.map((nav) => (
            <li
              key={nav.path}
              className={`py-1 px-[10px] font-medium border-b text-base hidden md:block ${
                nav.path === "home" ? "border-b-white" : "border-b-transparent"
              }`}
            >
              <Link href={nav.path}>{nav.title}</Link>
            </li>
          ))}
          <li className="relative text-dark">
            <select
              style={{
                appearance: "none",
                WebkitAppearance: "none",
                MozAppearance: "none",
              }}
              name="language-nav"
              id="language-nav"
              className={`py-1 pl-3 pr-7 bg-white rounded-full text-xs lg:text-sm font-medium relative outline-none flex ${syne.className}`}
            >
              <option value="en">EN</option>
              <option value="id">ID</option>
            </select>
            <div className="absolute right-1 lg:right-2 top-1/2 transform -translate-y-1/2 z-20">
              <BiChevronDown className="text-lg" />
            </div>
          </li>
          <li className="flex items-center md:hidden">
            <button className="text-2xl">
              <BiMenu />
            </button>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
