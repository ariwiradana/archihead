"use client";
import React, { useMemo } from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";

const About = () => {
  const stats = useMemo(
    () => [
      { value: "10+", label: "Design Crafted" },
      { value: "5+", label: "Happy Clients" },
      { value: "20+", label: "Project Finished" },
    ],
    [],
  );

  return (
    <section id="About" className="bg-white">
      <div className="border-b-dark/10 container mx-auto border-b px-4 py-8 md:px-8 md:py-12 xl:px-10 xl:py-16">
        <h1 className="text-dark text-6xl leading-14 xl:text-8xl xl:leading-20">
          Architectural Based
          <br />
          Creative Studio.
        </h1>

        <div className="mt-6 xl:mt-8">
          <div className="flex flex-col gap-x-24 gap-y-3 xl:flex-row">
            {/* Badge Section */}
            <div>
              <div className="border-dark/10 inline-flex h-auto items-center gap-x-3 rounded-full border px-4 py-2">
                <BsFillGrid3X3GapFill className="text-dark text-sm" />
                <p className="text-dark text-sm whitespace-nowrap">About Us</p>
              </div>
            </div>

            {/* Description + Stats */}
            <div>
              <p className="text-dark/70 font-light">
                Archihead adalah studio arsitektur berbasis di Bali dengan
                pengalaman lebih dari 5 tahun dalam industri desain dan
                pembangunan. Selama perjalanan tersebut, kami telah menangani
                puluhan proyek arsitektur dan interior mulai dari hunian
                pribadi, villa tropis, hingga ruang komersial. Setiap karya kami
                lahir dari komitmen menghadirkan desain kontekstual yang menyatu
                dengan alam, budaya, dan kebutuhan modern.
              </p>

              {/* Stats Section */}
              <div className="mt-6 flex items-center gap-x-6 xl:mt-8">
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
