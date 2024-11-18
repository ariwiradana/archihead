import { syne } from "@/lib/fonts";
import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: ReactNode;
}

const ButtonLight: FC<ButtonProps> = ({ title, icon, ...props }) => {
  return (
    <button
      className={`lg:py-3 py-2 pl-4 pr-[10px] ${syne.className} text-sm lg:text-base flex items-center gap-x-3 bg-white text-dark rounded-full hover:bg-white/40 hover:text-white ring-0 border-none hover:backdrop-blur transition-all outline-none ease-in-out duration-500`}
      {...props}
    >
      <span>{title}</span>
      <div className="w-[28px] h-[28px] rounded-full bg-dark text-white flex justify-center items-center lg:text-xl">
        {icon}
      </div>
    </button>
  );
};

export default ButtonLight;
