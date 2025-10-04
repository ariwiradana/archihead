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
        className={`border-dark/50 text-dark hover:bg-dark hover:border-dark aspect-square cursor-pointer rounded-full border p-2 transition-all duration-300 ease-in-out hover:text-white disabled:pointer-events-none disabled:opacity-50 ${className}`}
      >
        {icon}
      </button>
    );
  },
);

ButtonPrimaryIcon.displayName = "ButtonPrimaryIcon";

export default ButtonPrimaryIcon;
