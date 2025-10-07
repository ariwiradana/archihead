"use client";
import React, { useMemo } from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";

const About = () => {
  const stats = useMemo(
    () => [
      { value: "10+", label: "Desain Dibuat" },
      { value: "5+", label: "Klien Terpercaya" },
      { value: "20+", label: "Proyek Diselesaikan" },
    ],
    [],
  );

  return (
    <section
      id="Tentang"
      className="bg-white"
      aria-labelledby="tentang-heading"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <meta itemProp="name" content="Archihead" />
      <meta
        itemProp="description"
        content="Studio arsitektur berbasis di Bali yang menghadirkan desain modern kontekstual."
      />
      <div className="border-b-dark/10 container mx-auto border-b px-4 py-8 md:px-8 md:py-12 xl:px-10 xl:py-16">
        <h1 className="text-dark text-5xl leading-12 xl:text-8xl xl:leading-20">
          Studio Desain <br /> Arsitektur Modern
        </h1>

        <h2 className="sr-only">Tentang Archihead</h2>

        <div className="mt-6 xl:mt-8">
          <div className="flex flex-col space-y-4 gap-x-24 gap-y-3 xl:flex-row">
            <div>
              <div className="border-dark/10 inline-flex h-auto items-center gap-x-3 rounded-full border px-4 py-2">
                <BsFillGrid3X3GapFill className="text-dark text-sm" />
                <p className="text-dark text-sm whitespace-nowrap">
                  Tentang Kami
                </p>
              </div>
            </div>
            <div>
              <p className="text-dark/70 leading-relaxed font-normal">
                Archihead adalah studio arsitektur berbasis di Bali dengan
                pengalaman lebih dari 5 tahun dalam industri desain dan
                pembangunan. Selama perjalanan tersebut, kami telah menangani
                puluhan proyek arsitektur dan interior mulai dari hunian
                pribadi, villa tropis, hingga ruang komersial. Setiap karya kami
                lahir dari komitmen menghadirkan desain kontekstual yang menyatu
                dengan alam, budaya, dan kebutuhan modern.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 xl:mt-8">
                {stats.map((item, index) => (
                  <React.Fragment key={item.label}>
                    <div>
                      <h5 className="text-dark text-2xl">{item.value}</h5>
                      <p className="text-dark/70 font-light">{item.label}</p>
                    </div>
                    {index < stats.length - 1 && (
                      <div className="bg-dark/10 h-14 w-[1px]" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
