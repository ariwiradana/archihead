"use client";

import { forwardRef, ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
}

// 👇 forwardRef wrapper
const ButtonPrimaryIcon = forwardRef<HTMLButtonElement, Props>(
  ({ icon, className = "", ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={`aspect-square rounded-full p-2 border border-dark/50 text-dark hover:bg-dark hover:text-white hover:border-dark transition-all ease-in-out duration-300 cursor-pointer ${className}`}
      >
        {icon}
      </button>
    );
  }
);

ButtonPrimaryIcon.displayName = "ButtonPrimaryIcon";

export default ButtonPrimaryIcon;
