import { syne } from "@/lib/fonts";
import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  disabled?: boolean;
}

const ButtonIcon: FC<ButtonIconProps> = ({
  icon,
  disabled = false,
  ...props
}) => {
  return (
    <button
      className={`h-8 w-8 rounded-full ${syne.className} ${
        disabled && "pointer-events-none opacity-40"
      } flex items-center justify-center rounded-full border-none bg-white text-lg text-dark outline-none ring-0 transition-all duration-500 ease-in-out`}
      {...props}
    >
      {icon}
    </button>
  );
};

export default ButtonIcon;
