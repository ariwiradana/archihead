import { syne } from "@/lib/fonts";
import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface ButtonIconPrimaryProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  disabled?: boolean;
}

const ButtonIconPrimary: FC<ButtonIconPrimaryProps> = ({
  icon,
  disabled = false,
  ...props
}) => {
  return (
    <button
      className={`h-8 w-8 rounded-full ${syne.className} ${
        disabled && "pointer-events-none opacity-40"
      } bg-primary flex items-center justify-center rounded-full border-none text-lg text-white outline-none ring-0 transition-all duration-500 ease-in-out`}
      {...props}
    >
      {icon}
    </button>
  );
};

export default ButtonIconPrimary;
