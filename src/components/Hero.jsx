import React from "react";
import hero from "../assets/hero.png";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative h-[600px] bg-cover bg-center flex items-center justify-center mt-18"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="absolute inset-0 bg-black opacity-25"></div>

      <div className="z-10 p-6 rounded-lg text-center text-white">
        <h1 className="text-3xl md:text-5xl font-bold">
          Find local professionals for any project
        </h1>
        <p className="mt-2">Millions of people use SkillLink to turn their ideas into reality.</p>
        <div className="flex mt-6 max-w-lg mx-auto bg-white rounded-lg overflow-hidden p-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-black" size={18} />
          <input
            type="text"
            placeholder="Search for services"
            className="flex-1 px-4 py-2 rounded-l-lg text-black mr-2"
          />
          <button className="bg-green-700 px-4 py-2 rounded-lg text-white cursor-pointer hover:bg-green-800 transition-colors hover:shadow-lg">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
