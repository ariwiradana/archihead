import { NextPage } from "next";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const ButtonOutlinedWhite: NextPage<Props> = ({ title, ...props }) => {
  return (
    <button
      className="bg-transparent border border-white hover:bg-white hover:text-dark transition-all ease-in-out duration-300 py-2 px-4 rounded-full text-white font-light text-sm cursor-pointer"
      {...props}
    >
      {title}
    </button>
  );
};

export default ButtonOutlinedWhite;
