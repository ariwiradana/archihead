import { syne } from "@/lib/fonts";
import Link from "next/link";
import React, { FC } from "react";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoWhatsapp,
  BiSolidEnvelope,
  BiSolidPhone,
} from "react-icons/bi";
import Input from "../elements/input";
import Textarea from "../elements/textarea";
import ButtonLight from "../elements/button.light";
import { FiArrowUpRight } from "react-icons/fi";

const Contact: FC = () => {
  return (
    <section
      className="mx-auto max-w-screen-2xl bg-dark px-6 py-10 md:p-16 lg:p-20"
      id="contact"
    >
      <div
        className={`mb-6 flex w-full flex-col items-start gap-6 md:mb-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10 ${syne.className}`}
      >
        <h2 className="whitespace-nowrap text-4xl font-medium text-white md:text-5xl">
          Get In Touch
        </h2>
        <div className="h-[1px] w-[10%] bg-white lg:w-full"></div>
        <p className="text-base text-white/70 lg:text-end">
          We transform visions into reality, crafting innovative, sustainable
          spaces that inspire and shape the future.
        </p>
      </div>
      <div
        className={`flex flex-col-reverse justify-between gap-10 lg:flex-row lg:gap-[120px] ${syne.className}`}
      >
        <div className="flex w-full flex-col justify-between gap-10 lg:w-[45vw]">
          <ul className="text-white">
            <li className="mb-2">
              <Link href="/" className="flex items-center gap-5">
                <BiSolidEnvelope className="text-xl lg:text-2xl" />
                <span className="text-base lg:text-lg">
                  archihead@gmail.com
                </span>
              </Link>
            </li>
            <li className="mb-8">
              <Link href="/" className="flex items-center gap-5">
                <BiSolidPhone className="text-xl lg:text-2xl" />
                <span className="text-base lg:text-lg">+62 821 721 263</span>
              </Link>
            </li>
            <li className="mb-8">
              <p className="text-lg text-white">Address</p>
              <p className="text-white/70">
                Jalan Slebew Barat No 15 B, Denpasar Barat, Bali, Indonesia,
                80361
              </p>
            </li>
            <li className="flex gap-6">
              <Link href="/">
                <BiLogoInstagram className="text-2xl text-white lg:text-3xl" />
              </Link>
              <Link href="/">
                <BiLogoFacebook className="text-2xl text-white lg:text-3xl" />
              </Link>
              <Link href="/">
                <BiLogoWhatsapp className="text-2xl text-white lg:text-3xl" />
              </Link>
            </li>
          </ul>
          <p className="text-sm text-white lg:text-base">
            © 2024 Archihead. All Rights Reserved
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 lg:w-[55vw]">
          <div className="grid w-full gap-3 md:grid-cols-2">
            <Input value="Somandika Nugraha" label="Name" id="name" />
            <Input label="Email" type="email" id="email" />
          </div>
          <Textarea label="Anything we should now?" id="textarea" />
          <div className="mt-4 flex lg:justify-end">
            <ButtonLight title="Send Message" icon={<FiArrowUpRight />} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
