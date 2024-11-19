import { syne } from "@/lib/fonts";
import Link from "next/link";
import React, { FC } from "react";
import {
  BiLogoInstagram,
  BiLogoWhatsapp,
  BiSolidEnvelope,
  BiSolidPhone,
} from "react-icons/bi";

const Contact: FC = () => {
  return (
    <section
      className="mx-auto max-w-screen-2xl bg-dark p-6 md:px-16 md:pb-16 lg:p-20"
      id="contact"
    >
      <div
        className={`mb-10 flex w-full flex-col items-start gap-4 md:mb-20 lg:flex-row lg:items-center lg:justify-between lg:gap-10 ${syne.className}`}
      >
        <h2 className="whitespace-nowrap text-4xl font-semibold text-white md:text-5xl">
          Get In Touch
        </h2>
        <div className="h-[1px] w-[10%] bg-white lg:w-full"></div>
        <p className="text-base text-white/70 lg:text-end">
          We transform visions into reality, crafting innovative, sustainable
          spaces that inspire and shape the future.
        </p>
      </div>
      <div className={`flex justify-between ${syne.className}`}>
        <div className="flex min-w-[40vw] flex-col justify-between">
          <ul className="text-white">
            <li className="mb-5">
              <Link href="/" className="flex items-center gap-5">
                <BiSolidEnvelope className="text-xl" />
                <span className="text-lg">archihead@gmail.com</span>
              </Link>
            </li>
            <li className="mb-10">
              <Link href="/" className="flex items-center gap-5">
                <BiSolidPhone className="text-xl" />
                <span className="text-lg">+62 821 721 263</span>
              </Link>
            </li>
            <li className="mb-10">
              <p className="mb-1 text-lg text-white">Address</p>
              <p className="text-white/70">
                Jalan Slebew Barat No 15 B, Denpasar Barat, Bali, Indonesia,
                80361
              </p>
            </li>
            <li className="flex gap-6">
              <Link href="/">
                <BiLogoInstagram className="text-2xl text-white" />
              </Link>
              <Link href="/">
                <BiLogoWhatsapp className="text-2xl text-white" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="min-w-[60vw]"></div>
      </div>
    </section>
  );
};

export default Contact;
