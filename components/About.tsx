"use client";
import Image from "next/image";
import React, { useState } from "react";
import ButtonPrimary from "./ui/ButtonPrimary";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <section id="About" className="bg-white">
      <div className="container mx-auto flex flex-col justify-between gap-6 px-4 pb-10 md:flex-row md:gap-8 md:px-8 md:pb-12 xl:gap-10 xl:px-10 xl:pb-16">
        <div className="relative aspect-[6/4] min-w-[35vw] xl:min-w-[25vw]">
          <Image
            fill
            className="object-cover"
            src="/images/img1.png"
            alt="Archihead About Image"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-dark/70 mb-2">About</p>
          <h2 className="text-dark max-w-xl text-4xl font-medium md:text-5xl">
            Crafting Spaces, Telling Stories
          </h2>
          <div className="relative mt-4">
            <p
              className={`text-dark/70 overflow-hidden text-sm leading-5 font-light transition-all duration-500 ease-in-out ${
                isExpanded ? "max-h-[1000px]" : "max-h-20"
              }`}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              sapiente delectus itaque adipisci animi perspiciatis veritatis
              eos, magni harum in libero ex repellendus molestias enim nulla ea
              nostrum dignissimos dolorem minima earum illum distinctio vero,
              aperiam facilis! Sequi dolore ea mollitia doloribus veritatis qui
              eveniet similique maiores sint culpa aut iure nam excepturi harum
              <br />
              <br />
              iusto exercitationem necessitatibus est voluptates cum nemo at,
              dolorum quisquam. Ullam architecto inventore dignissimos vero quo
              ex a accusantium porro praesentium in, molestiae ducimus animi
              repellat, dolorum quia. Enim iste, consequuntur quas nulla numquam
              ratione accusamus, laborum nisi temporibus assumenda obcaecati
              eius vel aliquid fugiat quos.
            </p>
            <div
              className={`absolute inset-x-0 bottom-0 z-10 w-full bg-gradient-to-b from-white/0 via-white/80 to-white transition-all delay-200 duration-500 ease-in-out ${
                isExpanded ? "h-0" : "h-16"
              }`}
            ></div>
          </div>
          <div className="mt-8">
            <ButtonPrimary
              onClick={() => setIsExpanded((state) => !state)}
              title={isExpanded ? "Read Less" : "Read More"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
