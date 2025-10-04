import Link from "next/link";
import React from "react";
import ButtonPrimary from "./ui/ButtonPrimary";

const Navbar = () => {
  return (
    <nav className="bg-white">
      <ul className="container mx-auto grid grid-cols-2 px-4 py-4 md:px-8 md:py-6 xl:px-10">
        <li className="flex items-center">
          <Link href="/" className="text-dark text-xl uppercase">
            Archihead
          </Link>
        </li>
        <li className="flex justify-end">
          <ButtonPrimary title="Hire Us" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
