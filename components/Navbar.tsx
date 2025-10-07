"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ButtonOutlinedWhite from "./ui/ButtonOutlinedWhite";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import ButtonPrimary from "./ui/ButtonPrimary";
import { usePathname, useRouter } from "next/navigation";
import { scrollToDiv } from "@/utils/scrollToDiv";
import { projects } from "@/constants/Projects";
import Image from "next/image";

const Navbar = () => {
  const scrollY = useScrollPosition();
  const pathname = usePathname();
  const router = useRouter();

  const progress = Math.min(scrollY / 300, 1);
  const paddingTop = pathname === "/" ? 32 * (1 - progress) : 0;

  const [activeNav, setActiveNav] = useState("Beranda");

  useEffect(() => {
    if (pathname) {
      const detailProjectSlug = projects.some((p) => `/${p.slug}` === pathname);
      if (detailProjectSlug) setActiveNav("Proyek");
      history.replaceState(null, "", window.location.pathname);
    }
  }, [pathname]);

  return (
    <nav
      style={{
        paddingTop,
      }}
      className={`fixed inset-x-0 z-50 flex justify-center ${paddingTop === 0 ? "border-b-dark/10 border-b bg-white" : "bg-transparent"}`}
    >
      <ul
        className={`flex items-center justify-between gap-x-12 rounded-full ${paddingTop ? "pr-1.5 pl-4" : "px-4"} transition-all ease-out xl:w-auto xl:gap-x-28 xl:pr-2 xl:pl-5 ${paddingTop === 0 ? "text-dark w-full bg-white py-3 md:w-auto" : "bg-dark/90 w-auto py-1.5 text-white xl:py-2"}`}
      >
        <Link
          href="/"
          className="flex items-center gap-x-2 text-[15px] font-medium uppercase xl:text-base"
        >
          <Image
            src={paddingTop ? "/logo-light.svg" : "/logo-dark.svg"}
            width={30}
            height={30}
            alt="Logo Archihead"
          />
          <span>ARCHIHEAD</span>
        </Link>
        <div className="hidden gap-x-12 xl:flex">
          {["Beranda", "Tentang", "Proyek", "Kontak"].map((nav) => (
            <button
              key={`Nav ${nav}`}
              onClick={() => {
                setActiveNav(nav);
                if (pathname === "/") {
                  scrollToDiv(nav, 30);
                } else {
                  router.push(`/#${nav}`);
                }
              }}
              className={`relative cursor-pointer text-sm transition-colors duration-300 ${
                paddingTop !== 0
                  ? nav === activeNav
                    ? "text-white"
                    : "text-white/60"
                  : nav === activeNav
                    ? "text-dark"
                    : "text-dark/60"
              }`}
            >
              {nav}
            </button>
          ))}
        </div>
        <Link href={`https://wa.me/6282289354168`} target="_blank">
          {paddingTop === 0 ? (
            <ButtonPrimary title="Hubungi Kami" />
          ) : (
            <ButtonOutlinedWhite title="Hubungi Kami" />
          )}
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
