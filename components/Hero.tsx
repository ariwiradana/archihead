import React from "react";

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-10 md:px-8 md:py-12 xl:px-10 xl:py-16">
        <h1 className="text-dark text-5xl leading-12 font-medium md:text-6xl md:font-normal xl:text-7xl xl:leading-16">
          ARCHITECTURAL BASED <br />
          CREATIVE STUDIO
        </h1>
        <div className="mt-6 flex flex-col items-center justify-between gap-y-6 md:mt-8 md:flex-row xl:mt-12">
          <p className="text-dark/70 text-sm font-light md:max-w-[40vw]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis hic quasi atque ex dicta illum pariatur, sapiente
            consectetur. Tempore, sapiente!
          </p>
          <div className="divide-dark/10 flex items-center justify-center divide-x">
            <div className="pr-4 md:px-8 md:text-center">
              <h4 className="text-dark text-xl">100+</h4>
              <p className="text-dark/70 text-sm font-light">Design Crafted</p>
            </div>
            <div className="px-4 md:px-8 md:text-center">
              <h4 className="text-dark text-xl">20+</h4>
              <p className="text-dark/70 text-sm font-light">Happy Client</p>
            </div>
            <div className="pl-4 md:px-8 md:text-center">
              <h4 className="text-dark text-xl">100+</h4>
              <p className="text-dark/70 text-sm font-light">
                Project Finished
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
