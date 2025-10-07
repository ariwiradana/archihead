import { NextPage } from "next";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: ReactNode;
  className?: string;
}

const ButtonPrimary: NextPage<Props> = ({
  title,
  icon,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`border-dark/10 bg-dark hover:border-dark/20 flex cursor-pointer items-center justify-center gap-x-2 rounded-full border py-2 text-sm font-light whitespace-nowrap text-white transition-all duration-300 ease-in-out ${className} ${icon ? "pr-3 pl-4" : "px-4"}`}
      {...props}
    >
      {title} {icon && <span>{icon}</span>}
    </button>
  );
};

export default ButtonPrimary;
