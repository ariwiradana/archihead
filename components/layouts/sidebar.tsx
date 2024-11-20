import { syne } from "@/lib/fonts";
import { NavbarItem } from "@/types/navbarItem";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FiChevronDown, FiX } from "react-icons/fi";

interface SidebarProps {
  items: NavbarItem[];
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  scrollToSection: (id: string) => void;
  activeSection: string | null;
}

const Sidebar = ({
  isOpen,
  items,
  setIsOpen,
  activeSection,
  scrollToSection,
}: SidebarProps) => {
  const router = useRouter();
  const t = useTranslations();
  return (
    <nav
      className={`fixed inset-y-0 z-50 w-full bg-dark/[98%] backdrop-blur-sm transition-all duration-500 ease-in-out ${isOpen ? "left-0" : "-left-full"}`}
    >
      <ul className="flex h-16 w-full items-center justify-between px-6">
        <Link href="/">
          <li className="flex items-center gap-x-2">
            <div className="relative aspect-square w-11">
              <Image
                sizes="300px"
                priority
                fill
                className="object-contain"
                alt="logo-sidebar"
                src="/logo-white.png"
              />
            </div>
            <h4
              className={`${syne.className} text-lg font-bold uppercase text-white`}
            >
              Archihead
            </h4>
          </li>
        </Link>
        <li className="flex items-center gap-x-4">
          <div
            className={`relative text-dark transition-colors duration-500 ease-in-out`}
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
              className={`relative flex rounded-full py-1 pl-3 pr-7 text-xs font-medium outline-none lg:text-sm ${syne.className} bg-white`}
            >
              <option value="en">EN</option>
              <option value="id">ID</option>
            </select>
            <div className="absolute right-1 top-1/2 z-20 -translate-y-1/2 transform lg:right-2">
              <FiChevronDown className="text-lg" />
            </div>
          </div>
          <button onClick={() => setIsOpen(false)}>
            <FiX className="text-2xl text-white" />
          </button>
        </li>
      </ul>
      <ul className="mt-6 flex flex-col gap-3 px-6">
        {items.map((nav) => (
          <li key={nav.path} className={`relative`}>
            <button
              onClick={() => {
                if (router.pathname !== "/[slug]") {
                  scrollToSection(nav.path);
                } else {
                  router.push("/");
                }
                setIsOpen(false);
              }}
              className={`w-full rounded-lg p-4 text-left text-base font-medium text-white outline-none hover:bg-white/10 ${nav.title === t(`navbar.${activeSection?.toLowerCase() ?? ""}`) ? "bg-white/10" : "bg-transparent"}`}
            >
              {nav.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
