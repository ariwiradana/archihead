"use client";
import React, { useMemo, useState } from "react";
import { BiEnvelope, BiLogoInstagram, BiLogoWhatsapp } from "react-icons/bi";
import ButtonOutlinedWhite from "./ui/ButtonOutlinedWhite";
import Link from "next/link";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { scrollToDiv } from "@/utils/scrollToDiv";

const Footer = () => {
  // ✅ Memoized data to prevent re-creation on each render
  const socialIcons = useMemo(
    () => [
      {
        icon: <BiEnvelope />,
        label: "Email",
        path: "mailto:archihead@gmail.com",
      },
      {
        icon: <BiLogoWhatsapp />,
        label: "WhatsApp",
        path: "https://wa.me/6282289354168",
      },
      {
        icon: <BiLogoInstagram />,
        label: "Instagram",
        path: "https://www.instagram.com/archihead.id",
      },
    ],
    [],
  );

  const navLinks = useMemo(
    () => ["Beranda", "Tentang", "Proyek", "Kontak"],
    [],
  );

  const [form, setForm] = useState({
    name: "",
    message: "",
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = `Halo, saya ${form.name}\n\n${form.message}`;
    const url = `https://wa.me/6282289354168?text=${encodeURI(text)}`;
    window.open(url, "_blank");
    setForm({ name: "", message: "" });
  };

  return (
    <>
      <section
        id="Kontak"
        className="bg-dark"
        itemScope
        itemType="https://schema.org/ContactPage"
      >
        <div className="container mx-auto px-4 py-8 md:px-8 md:py-12 xl:px-10 xl:py-16">
          <div className="flex flex-col justify-between gap-x-28 gap-y-6 border-b border-b-white/10 pb-8 md:flex-row md:pb-12 xl:pb-16">
            {/* Left Section */}
            <div>
              <h2 className="mt-2 text-3xl xl:text-4xl text-white">Kolaborasi Bersama</h2>
              <div className="mt-7 flex flex-col gap-x-6 gap-y-4 xl:flex-row">
                <div>
                  <div className="inline-flex h-auto items-center gap-x-3 rounded-full border border-white/10 px-4 py-2">
                    <BsFillGrid3X3GapFill className="text-sm text-white" />
                    <p className="text-sm whitespace-nowrap text-white">
                      Kontak Kami
                    </p>
                  </div>
                </div>
                <p className="text-sm font-light text-white">
                  Terbuka untuk kolaborasi dalam arsitektur, desain interior,
                  dan konsep kreatif. Ceritakan idemu, mari kita realisasikan.
                  Hubungi kami sekarang.
                </p>
              </div>

              {/* Social icons */}
              <div className="mt-12 flex gap-x-7 text-2xl">
                {socialIcons.map((s) => (
                  <Link
                    target="_blank"
                    href={s.path}
                    key={s.path}
                    aria-label={s.label}
                    className="rounded-full transition-colors hover:text-white focus-visible:text-white focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none"
                  >
                    {s.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Section (Form) */}
            <form
              className="flex w-full max-w-md flex-col gap-5"
              onSubmit={onSubmit}
            >
              <fieldset>
                <label htmlFor="contact-name" className="text-sm text-white">
                  Nama
                </label>
                <input
                  placeholder="Masukkan nama kamu"
                  value={form.name}
                  onChange={(e) =>
                    setForm((state) => ({ ...state, name: e.target.value }))
                  }
                  type="text"
                  id="contact-name"
                  name="name"
                  className="mt-2 w-full bg-white/5 p-4 outline-0 placeholder:text-sm focus:border-white/10"
                  required
                />
              </fieldset>

              <fieldset>
                <label htmlFor="contact-message" className="text-sm text-white">
                  Pesan
                </label>
                <textarea
                  placeholder="Masukkan pesan kamu"
                  value={form.message}
                  onChange={(e) =>
                    setForm((state) => ({ ...state, message: e.target.value }))
                  }
                  id="contact-message"
                  name="message"
                  rows={5}
                  className="mt-2 w-full bg-white/5 p-4 outline-0 placeholder:text-sm focus:border-white/10"
                  required
                />
              </fieldset>

              <div className="mt-3 flex justify-end">
                <ButtonOutlinedWhite title="Kirim via WhatsApp" />
              </div>
            </form>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col items-center justify-between gap-6 pt-5 md:flex-row">
            <div className="flex gap-x-8">
              {navLinks.map((nav) => (
                <button
                  type="button"
                  aria-label={`Menuju section ${nav}`}
                  key={nav}
                  onClick={() => scrollToDiv(nav, 30)}
                  className="text-sm font-light text-white/70"
                >
                  {nav}
                </button>
              ))}
            </div>
            <p className="text-sm font-light text-white/50 md:text-sm md:text-white/70">
              © Archihead 2025
            </p>
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Archihead",
            url: "https://www.archihead.com",
            email: "archihead@gmail.com",
            sameAs: [
              "https://wa.me/6282289354168",
              "https://www.instagram.com/archihead.id",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer support",
              availableLanguage: "id",
              areaServed: "ID",
            },
            logo: "https://www.archihead.com/logo.png",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Bali",
              addressCountry: "ID",
            },
          }),
        }}
      />
    </>
  );
};

export default Footer;
