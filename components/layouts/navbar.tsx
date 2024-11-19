import { NavbarItems } from "@/constants/navbarItems";
import { syne } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import { BiChevronDown, BiMenu } from "react-icons/bi";

interface NavbarProps {
  page?: string;
}

const Navbar: FC<NavbarProps> = ({ page }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    if (page === "home") {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        // const viewportHeight = window.innerHeight;

        if (scrollY > 20) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      setIsScrolled(true);
    }
  }, [page]);

  return (
    <section
      className={`fixed inset-0 z-30 h-16 px-6 transition-all duration-500 ease-in-out md:h-24 md:px-16 lg:h-24 lg:px-20 ${isScrolled ? "bg-white shadow-sm" : "bg-transparent"}`}
    >
      <nav
        className={`mx-auto flex h-full w-full max-w-screen-2xl items-center justify-between ${isScrolled ? "text-dark" : "text-white"}`}
      >
        <ul className="flex items-center gap-x-2">
          <div className="relative aspect-square w-8 md:w-9 lg:w-12">
            <Image
              sizes="300px"
              priority
              fill
              className="object-contain"
              alt="logo"
              src={isScrolled ? "/logo-black.svg" : "/logo-white.svg"}
            />
          </div>
          <li
            className={`${syne.className} text-base font-bold uppercase md:text-lg lg:text-2xl`}
          >
            <Link href="/">Archihead</Link>
          </li>
        </ul>
        <ul
          className={`flex items-center gap-x-4 lg:gap-x-9 ${syne.className}`}
        >
          {NavbarItems.map((nav) => (
            <li
              key={nav.path}
              className={`hidden border-b px-[10px] py-1 text-base font-medium md:block ${
                nav.path === "home" && !isScrolled
                  ? "border-b-white"
                  : nav.path === "home" && isScrolled
                    ? "border-b-dark"
                    : "border-b-transparent"
              }`}
            >
              <Link href={nav.path}>{nav.title}</Link>
            </li>
          ))}
          <li
            className={`relative transition-colors duration-500 ease-in-out ${isScrolled ? "text-white" : "text-dark"}`}
          >
            <select
              style={{
                appearance: "none",
                WebkitAppearance: "none",
                MozAppearance: "none",
              }}
              name="language-nav"
              id="language-nav"
              className={`relative flex rounded-full py-1 pl-3 pr-7 text-xs font-medium outline-none lg:text-sm ${syne.className} ${isScrolled ? "bg-dark" : "bg-white"}`}
            >
              <option value="en">EN</option>
              <option value="id">ID</option>
            </select>
            <div className="absolute right-1 top-1/2 z-20 -translate-y-1/2 transform lg:right-2">
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
