import { syne } from "@/lib/fonts";
import React, { FC, TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
  rows?: number;
}

const Textarea: FC<TextareaProps> = ({
  label,
  id = "input",
  rows = 6,
  ...props
}) => {
  return (
    <div className={`${syne.className}`}>
      <label className="ml-2 text-sm text-white/70" htmlFor={id}>
        {label}
      </label>
      <textarea
        rows={rows}
        id={id}
        {...props}
        className="w-full mt-1 rounded-lg bg-white/10 px-6 py-5 text-white outline-none placeholder:text-white/70"
      ></textarea>
    </div>
  );
};

export default Textarea;
