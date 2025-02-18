import { syne } from "@/lib/fonts";
import Image from "next/image";
import React, { FC } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import ButtonLight from "../elements/button.light";
import { useTranslations } from "next-intl";

const AboutUs: FC = () => {
  const t = useTranslations();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionTop - 96,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="mx-auto max-w-screen-2xl md:px-6 md:py-10 md:p-16 lg:p-20"
      id="About"
    >
      <div className="flex flex-col-reverse gap-10 md:rounded-xl bg-dark p-8 md:gap-16 md:p-16 lg:grid lg:grid-cols-5 lg:p-[60px]">
        <div
          className={`h-full ${syne.className} flex flex-col justify-center lg:col-span-3`}
        >
          <h2
            style={{ lineHeight: "40px" }}
            className="mb-8 text-4xl font-medium text-white md:text-5xl"
          >
            {t("about.title")}
          </h2>
          <p className="mb-3 text-base text-white/70">{t("about.desc")}</p>
          <div className="mb-6 md:mb-9 grid gap-4 md:grid-cols-3 md:gap-8 lg:gap-14">
            <div>
              <h3 className="text-[42px] text-white">3+</h3>
              <p className="text-base text-white/70">{t("about.years")}</p>
            </div>
            <div>
              <h3 className="text-[42px] text-white">100+</h3>
              <p className="text-base text-white/70">{t("about.customer")}</p>
            </div>
            <div>
              <h3 className="text-[42px] text-white">30+</h3>
              <p className="text-base text-white/70">{t("about.project")}</p>
            </div>
          </div>
          <div>
            <ButtonLight
              aria-label="button-about-contact"
              onClick={() => scrollToSection("Contact")}
              title={t("about.button")}
              icon={<FiArrowUpRight />}
            />
          </div>
        </div>
        <div className="relative col-span-2 w-full aspect-[4/3] md:aspect-video lg:aspect-square">
          <Image
            sizes="400px"
            alt="about-us-image"
            fill
            src="/images/sample/image (6).jpg"
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
