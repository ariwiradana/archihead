import { syne } from "@/lib/fonts";
import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: ReactNode;
  disabled?: boolean;
}

const ButtonLight: FC<ButtonProps> = ({
  title,
  icon,
  disabled = false,
  ...props
}) => {
  return (
    <button
      className={`py-2 pl-4 pr-[10px] lg:py-3 ${syne.className} flex items-center gap-x-3 rounded-full border-none bg-white text-sm font-medium text-dark outline-none ring-0 transition-all duration-500 ease-in-out lg:text-base ${disabled ? "pointer-events-none opacity-30" : "hover:bg-white/40 hover:text-white hover:backdrop-blur"}`}
      {...props}
    >
      <span>{title}</span>
      <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-dark text-white lg:text-xl">
        {icon}
      </div>
    </button>
  );
};

export default ButtonLight;
