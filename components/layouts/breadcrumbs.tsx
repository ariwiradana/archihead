import { syne } from "@/lib/fonts";
import Link from "next/link";
import React, { FC } from "react";
import { BiHomeAlt } from "react-icons/bi";

interface BreadcrumbsProps {
  path: string;
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ path }) => {
  return (
    <ul
      className={`flex items-center gap-x-4 text-dark ${syne.className} text-base font-medium`}
    >
      <li>
        <Link href="/">
          <BiHomeAlt className="text-xl transition-colors ease-in-out hover:text-dark/70" />
        </Link>
      </li>
      <li>/</li>
      <li>{path}</li>
    </ul>
  );
};

export default Breadcrumbs;
