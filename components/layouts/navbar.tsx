import { syne } from "@/lib/fonts";
import { NavbarItem } from "@/types/navbarItem";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Sidebar from "./sidebar";
import { FiChevronDown, FiMenu } from "react-icons/fi";

interface NavbarProps {
  page?: string;
}

const Navbar: FC<NavbarProps> = ({ page }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const t = useTranslations();

  const NavbarItems: NavbarItem[] = [
    { title: t("navbar.home"), path: "Home" },
    { title: t("navbar.about"), path: "About" },
    { title: t("navbar.projects"), path: "Projects" },
    { title: t("navbar.contact"), path: "Contact" },
  ];

  useEffect(() => {
    if (page === "home") {
      const sections = document.querySelectorAll("section[id]");
      const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY > 20) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
      const handleIntersection = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      };

      const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        threshold: 0,
        rootMargin: "-50% 0px -50% 0px",
      });

      sections.forEach((section) => observer.observe(section));

      window.addEventListener("scroll", handleScroll);

      return () => {
        observer.disconnect();
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      setActiveSection("Projects");
      setIsScrolled(true);
    }
  }, [page]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionTop - 96,
        behavior: "smooth",
      });
    }
  };

  const router = useRouter();

  return (
    <section
      className={`fixed inset-0 z-30 h-16 px-6 transition-all duration-500 ease-in-out md:h-24 md:px-16 lg:h-24 lg:px-20 ${isScrolled ? "bg-white shadow-sm" : "bg-transparent"}`}
    >
      <Sidebar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        items={NavbarItems}
        isOpen={isOpenSidebar}
        setIsOpen={setIsOpenSidebar}
      />
      <nav
        className={`mx-auto flex h-full w-full max-w-screen-2xl items-center justify-between ${isScrolled ? "text-dark" : "text-white"}`}
      >
        <Link href="/">
          <ul className="flex items-center gap-x-2">
            <div className="relative aspect-square w-11 md:w-12 lg:w-14">
              <Image
                sizes="300px"
                priority
                fill
                className="object-contain"
                alt="logo"
                src={isScrolled ? "/logo-black.png" : "/logo-white.png"}
              />
            </div>
            <li
              className={`${syne.className} text-lg font-bold uppercase md:text-xl`}
            >
              Archihead
            </li>
          </ul>
        </Link>
        <ul
          className={`flex items-center gap-x-4 lg:gap-x-9 ${syne.className}`}
        >
          {NavbarItems.map((nav) => (
            <li
              key={nav.path}
              className={`relative hidden px-[10px] py-1 md:block`}
            >
              <button
                onClick={() => {
                  if (router.pathname !== "/[slug]") {
                    scrollToSection(nav.path);
                  } else {
                    router.push("/");
                  }
                }}
                className={`text-base font-medium outline-none ${isScrolled ? "text-dark" : "text-white"}`}
              >
                {nav.title}
              </button>
              <div
                className={`absolute left-1/2 h-[5px] w-[5px] -translate-x-1/2 transform rounded-full transition-all duration-700 ease-in-out ${isScrolled ? "bg-dark" : "bg-white"} ${nav.title === t(`navbar.${activeSection?.toLowerCase() ?? ""}`) ? "-bottom-1 opacity-100" : "-bottom-2 opacity-0"}`}
              ></div>
            </li>
          ))}
          <li
            className={`relative transition-colors duration-500 ease-in-out ${isScrolled ? "text-white" : "text-dark"}`}
          >
            <select
              onChange={(e) =>
                router.push(router.asPath, router.asPath, {
                  locale: e.target.value,
                })
              }
              value={router.locale}
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
              <FiChevronDown className="text-lg" />
            </div>
          </li>
          <li className="flex items-center md:hidden">
            <button onClick={() => setIsOpenSidebar(true)} className="text-2xl">
              <FiMenu />
            </button>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
