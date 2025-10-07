import { NextPage } from "next";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const ButtonOutlinedWhite: NextPage<Props> = ({ title, ...props }) => {
  return (
    <button
      className="cursor-pointer rounded-full border border-white/10 bg-transparent px-4 py-2 text-sm font-light whitespace-nowrap text-white transition-all duration-300 ease-in-out hover:border-white/20"
      {...props}
    >
      {title}
    </button>
  );
};

export default ButtonOutlinedWhite;
