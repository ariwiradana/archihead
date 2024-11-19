import { syne } from "@/lib/fonts";
import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { useSwiper } from "swiper/react";

interface ButtonSwiperActionPrimaryProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  disabled?: boolean;
  action: "next" | "prev";
}

const ButtonSwiperActionPrimary: FC<ButtonSwiperActionPrimaryProps> = ({
  icon,
  disabled = false,
  action,
  ...props
}) => {
  const swiper = useSwiper();
  return (
    <button
      onClick={() =>
        action === "next" ? swiper.slideNext() : swiper.slidePrev()
      }
      className={`h-8 w-8 rounded-full ${syne.className} ${
        disabled && "pointer-events-none opacity-40"
      } bg-primary flex items-center justify-center rounded-full border-none text-lg text-white outline-none ring-0 transition-all duration-500 ease-in-out`}
      {...props}
    >
      {icon}
    </button>
  );
};

export default ButtonSwiperActionPrimary;
