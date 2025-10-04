"use client";
import React, { useMemo } from "react";
import { BiEnvelope, BiLogoInstagram, BiLogoWhatsapp } from "react-icons/bi";
import ButtonOutlinedWhite from "./ui/ButtonOutlinedWhite";
import Link from "next/link";
import { BsFillGrid3X3GapFill } from "react-icons/bs";

const Footer = () => {
  // ✅ Memoized data to prevent re-creation on each render
  const socialIcons = useMemo(
    () => [
      { icon: <BiEnvelope />, label: "Email" },
      { icon: <BiLogoWhatsapp />, label: "WhatsApp" },
      { icon: <BiLogoInstagram />, label: "Instagram" },
    ],
    [],
  );

  const navLinks = useMemo(() => ["About", "Projects", "Contact"], []);

  return (
    <section id="Contact" className="bg-dark">
      <div className="container mx-auto px-4 py-8 md:px-8 md:py-12 xl:px-10 xl:py-16">
        <div className="flex flex-col justify-between gap-x-28 gap-y-6 border-b border-b-white/10 pb-8 md:flex-row md:pb-12 xl:pb-16">
          {/* Left Section */}
          <div>
            <h2 className="text-whit3 mt-2 text-5xl">Contact Us</h2>
            <div className="mt-7 flex flex-col gap-x-6 gap-y-4 xl:flex-row">
              <div>
                <div className="inline-flex h-auto items-center gap-x-3 rounded-full border border-white/10 px-4 py-2">
                  <BsFillGrid3X3GapFill className="text-sm text-white" />
                  <p className="text-sm whitespace-nowrap text-white">
                    Stay Connected
                  </p>
                </div>
              </div>
              <p className="text-sm font-light text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
                libero iste eos explicabo sint culpa!
              </p>
            </div>

            {/* Social icons */}
            <div className="mt-12 flex gap-x-7 text-2xl">
              {socialIcons.map((s, i) => (
                <span key={i} aria-label={s.label}>
                  {s.icon}
                </span>
              ))}
            </div>
          </div>

          {/* Right Section (Form) */}
          <form
            className="flex w-full max-w-md flex-col gap-5"
            onSubmit={(e) => e.preventDefault()} // ✅ prevent reload
          >
            <fieldset>
              <label htmlFor="contact-name" className="text-sm text-white">
                Name
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                className="mt-2 w-full bg-white/5 p-4 outline-0 focus:border-white/10"
                required
              />
            </fieldset>

            <fieldset>
              <label htmlFor="contact-message" className="text-sm text-white">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                className="mt-2 w-full bg-white/5 p-4 outline-0 focus:border-white/10"
                required
              />
            </fieldset>

            <div className="mt-3 flex justify-end">
              <ButtonOutlinedWhite title="Send Message" />
            </div>
          </form>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col items-center justify-between gap-6 pt-5 md:flex-row">
          <div className="flex gap-x-8">
            {navLinks.map((nav) => (
              <Link
                key={nav}
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
