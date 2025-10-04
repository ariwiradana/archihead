import React from "react";
import { BiEnvelope, BiLogoInstagram, BiLogoWhatsapp } from "react-icons/bi";
import ButtonOutlinedWhite from "./ui/ButtonOutlinedWhite";
import Link from "next/link";

const Footer = () => {
  return (
    <section id="Contact" className="bg-dark">
      <div className="container mx-auto px-4 py-8 md:px-8 md:py-12 xl:px-10 xl:py-16">
        <div className="flex flex-col justify-between gap-x-28 gap-y-6 border-b border-b-white/10 pb-8 md:flex-row md:pb-12 xl:pb-16">
          <div>
            <p className="mb-2 text-white/70">Let&apos;s Connect</p>
            <h2 className="max-w-lg text-3xl text-white md:text-3xl md:font-medium xl:text-4xl">
              Let&apos;s build meaningful spaces together.
            </h2>
            <p className="mt-7 text-sm font-light text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
              libero iste eos explicabo sint culpa!
            </p>
            <div className="mt-12 flex gap-x-7 text-2xl">
              <BiEnvelope />
              <BiLogoWhatsapp />
              <BiLogoInstagram />
            </div>
          </div>
          <div className="flex w-full max-w-md flex-col gap-5">
            <fieldset>
              <label htmlFor="contact-name" className="text-sm text-white">
                Name
              </label>
              <input
                type="text"
                id="contact-name"
                className="mt-2 w-full bg-white/5 p-4 outline-0 focus:border-white/10"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="contact-message" className="text-sm text-white">
                Message
              </label>
              <textarea
                rows={5}
                id="contact-message"
                className="mt-2 w-full bg-white/5 p-4 outline-0 focus:border-white/10"
              />
            </fieldset>
            <div className="mt-3 flex justify-end">
              <ButtonOutlinedWhite title="Send Message" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-6 pt-5 md:flex-row">
          <div className="flex gap-x-8">
            {["About", "Projects", "Contact"].map((nav) => (
              <Link
                key={`Contact ${nav}`}
                href={`/${nav}`}
                className="text-sm font-light text-white/70"
              >
                {nav}
              </Link>
            ))}
          </div>
          <p className="text-sm font-light text-white/50 md:text-sm md:text-white/70">
            © Archihead 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
