import Image from "next/image";
import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

function HomePage() {
  return (
    <main className="px-10 py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="md:mt-6 px-2">
        <h3 className="text-[#2563eb] tracking-[0.06rem] text-[0.8rem] my-2 uppercase font-semibold">
          Welcome to Vanex
        </h3>

        <h1 className="text-[2.3rem] font-extrabold">
          We Build Digital Products That{" "}
          <span className="text-[#2563eb]">Drive Success</span>
        </h1>

        <p className="text-[#64748b] my-6">
          Decode Labs is a creative digital agency helping brands grow with
          strategy, design and technology.
        </p>

        <div className="flex xs:flex-row flex-col gap-4 w-full">
          <a href="#contact" className="w-full md:w-auto">
            <button className="w-full bg-[#2563eb] px-6 py-3 hover:bg-[#1d4ed8] cursor-pointer rounded-md text-white text-[0.9rem] font-semibold transition-all duration-200 ease-in-out">
              Get Started
            </button>
          </a>

          <a href="#services" className="w-full md:w-auto">
            <button className="w-full border px-6 py-3 cursor-pointer rounded-md text-[0.9rem] hover:text-[#2563eb] hover:border-[#2563eb] font-semibold transition-all duration-200 ease-in-out flex justify-center items-center">
              <IoMdArrowDropright className="text-2xl" />
              Our Services
            </button>
          </a>
        </div>
      </div>

      <div className="w-full flex justify-center md:justify-end items-center md:pt-10 lg:pt-0">
        <Image
          src="/images/home1.jpg"
          alt="homepage image"
          width={600}
          height={600}
          className="w-full max-w-130 sm:max-w-180 lg:max-w-150 h-auto rounded-xl"
        />
      </div>
    </main>
  );
}

export default HomePage;
