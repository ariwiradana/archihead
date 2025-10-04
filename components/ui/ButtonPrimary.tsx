import { NextPage } from "next";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const ButtonPrimary: NextPage<Props> = ({ title, ...props }) => {
  return (
    <button
      className="bg-dark py-2 px-4 rounded-full text-white font-light text-sm cursor-pointer"
      {...props}
    >
      {title}
    </button>
  );
};

export default ButtonPrimary;
