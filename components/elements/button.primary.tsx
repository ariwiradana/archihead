import { syne } from "@/lib/fonts";
import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: ReactNode;
}

const ButtonPrimary: FC<ButtonProps> = ({ title, icon, ...props }) => {
  return (
    <button
      className={`py-2 pl-4 pr-[10px] lg:py-3 ${syne.className} bg-primary hover:bg-primary/60 flex items-center gap-x-3 rounded-full border-none text-sm font-medium text-white outline-none ring-0 transition-all duration-500 ease-in-out hover:backdrop-blur lg:text-base`}
      {...props}
    >
      <span>{title}</span>
      <div className="text-primary flex h-[28px] w-[28px] items-center justify-center rounded-full bg-white lg:text-xl">
        {icon}
      </div>
    </button>
  );
};

export default ButtonPrimary;
