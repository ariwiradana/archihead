import { syne } from "@/lib/fonts";
import React, { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const Input: FC<InputProps> = ({ label, id = "input", ...props }) => {
  return (
    <div className={`${syne.className}`}>
      <label className="ml-2 text-sm text-white/70" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        {...props}
        className="mt-1 w-full rounded-lg bg-white/10 px-6 py-5 text-white outline-none placeholder:text-white/70"
      />
    </div>
  );
};

export default Input;
