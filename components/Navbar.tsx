"use client";
import Link from "next/link";
import React from "react";
import ButtonOutlinedWhite from "./ui/ButtonOutlinedWhite";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import ButtonPrimary from "./ui/ButtonPrimary";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const scrollY = useScrollPosition();
  const pathname = usePathname();

  const progress = Math.min(scrollY / 300, 1);
  const paddingTop = pathname === "/" ? 32 * (1 - progress) : 0;

  return (
    <nav
      style={{
        paddingTop,
      }}
      className={`fixed inset-x-0 z-50 flex justify-center ${paddingTop === 0 ? "border-b-dark/10 border-b bg-white" : "bg-transparent"}`}
    >
      <ul
        className={`flex items-center justify-between gap-x-28 rounded-full pr-1.5 pl-4 backdrop-blur-sm transition-all ease-out xl:w-auto xl:pr-2 xl:pl-5 ${paddingTop === 0 ? "text-dark w-full bg-white py-3 md:w-auto" : "bg-dark/90 w-auto py-1.5 text-white xl:py-2"}`}
      >
        <Link href="/" className="text-base uppercase xl:text-lg">
          ARCHIHEAD
        </Link>
        <div className="hidden gap-x-12 xl:flex">
          {["About", "Projects", "Contact"].map((nav) => (
            <Link key={`Nav ${nav}`} href="/" className="text-sm">
              {nav}
            </Link>
          ))}
        </div>
        <div>
          {paddingTop === 0 ? (
            <ButtonPrimary title="Let's Talk" />
          ) : (
            <ButtonOutlinedWhite title="Let's Talk" />
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
