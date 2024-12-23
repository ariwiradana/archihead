import { syne } from "@/lib/fonts";
import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { useSwiper } from "swiper/react";

interface ButtonSwiperActionProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  disabled?: boolean;
  action: "next" | "prev";
}

const ButtonSwiperAction: FC<ButtonSwiperActionProps> = ({
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
      } flex items-center justify-center rounded-full border-none bg-white text-lg text-dark outline-none ring-0 transition-all duration-500 ease-in-out`}
      {...props}
    >
      {icon}
    </button>
  );
};

export default ButtonSwiperAction;
