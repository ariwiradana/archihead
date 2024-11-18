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
      className={`w-8 h-8 rounded-full ${syne.className} ${
        disabled
          ? "pointer-events-none opacity-40"
          : "hover:bg-white/40 hover:text-white"
      } flex items-center justify-center bg-white text-dark rounded-full  ring-0 border-none hover:backdrop-blur transition-all outline-none ease-in-out duration-500 text-lg`}
      {...props}
    >
      {icon}
    </button>
  );
};

export default ButtonSwiperAction;
