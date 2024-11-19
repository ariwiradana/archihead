import { syne } from "@/lib/fonts";
import Image from "next/image";
import React, { FC } from "react";
import ButtonLight from "../elements/button.light";
import { FiArrowUpRight } from "react-icons/fi";

const AboutUs: FC = () => {
  return (
    <section
      className="mx-auto max-w-screen-2xl px-6 py-10 md:p-16 lg:p-20"
      id="about"
    >
      <div className="flex flex-col-reverse gap-10 rounded-xl bg-dark p-8 md:gap-16 md:p-16 lg:grid lg:grid-cols-5 lg:p-[60px]">
        <div
          className={`h-full ${syne.className} flex flex-col justify-center lg:col-span-3`}
        >
          <h2
            style={{ lineHeight: "40px" }}
            className="mb-8 text-4xl font-semibold text-white md:text-5xl"
          >
            We are expertise to craft stunning space
          </h2>
          <p className="mb-3 text-base text-white/70">
            Lorem Ipsum&apos;is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry&apos;s
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled
          </p>
          <div className="mb-9 grid gap-4 md:grid-cols-3 md:gap-8 lg:gap-14">
            <div>
              <h3 className="text-[42px] text-white">3+</h3>
              <p className="text-base text-white/70">
                Years of experience to handling projects
              </p>
            </div>
            <div>
              <h3 className="text-[42px] text-white">100+</h3>
              <p className="text-base text-white/70">
                Happy customers with our services
              </p>
            </div>
            <div>
              <h3 className="text-[42px] text-white">30+</h3>
              <p className="text-base text-white/70">
                Masterpieces project builds
              </p>
            </div>
          </div>
          <div>
            <ButtonLight title="Get In Touch" icon={<FiArrowUpRight />} />
          </div>
        </div>
        <div className="relative col-span-2 aspect-square w-full md:aspect-video lg:aspect-square">
          <Image
            alt="about-us-image"
            fill
            src="/images/sample/image (1).jpg"
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
