import { NextPage } from "next";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const ButtonOutlinedDark: NextPage<Props> = ({ title, ...props }) => {
  return (
    <button
      className="border-dark/10 text-dark hover:border-dark/20 cursor-pointer rounded-full border bg-transparent px-4 py-2 text-sm font-light transition-all duration-300 ease-in-out"
      {...props}
    >
      {title}
    </button>
  );
};

export default ButtonOutlinedDark;
