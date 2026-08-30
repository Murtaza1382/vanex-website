import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa";

const AboutPage = () => {
  return (
    <section className="flex md:flex-row flex-col md:gap-6 gap-4 md:px-4 px-6 lg:py-16 md:py-12 py-6 bg-[#eef4ff]">
      <div className="relative flex justify-start md:justify-start items-center md:pt-10 lg:pt-0 mt-8">
        <Image
          src="/images/team.jpg"
          alt="homepage image"
          width={600}
          height={600}
          className="w-full  h-auto rounded-xl"
        />
        <div className="absolute -bottom-7 left-6 bg-[#2563eb] flex flex-col px-6 py-5 rounded-2xl text-white">
          <span className="font-extrabold text-[1.5rem]">10+</span>
          <span className="text-[0.78rem] opacity-90">Years of Experience</span>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-[#2563eb] font-bold text-[0.8rem] tracking-[0.06em] uppercase mb-3">
          why choose us
        </h3>
        <h1 className="text-[2rem] font-extrabold leading-tight mb-4">
          We Create Solutions That Are Bold &amp; Effective
        </h1>
        <p className="text-[#64748b] mb-4">
          We combine creativity, technology and data to deliver solutions that
          drive real results.
        </p>
        <ul className="font-medium text-[0.95rem]">
          <li className="flex items-center gap-4 mb-4">
            <span className="text-[#2563eb]">
              <FaCheck />
            </span>
            <span>Experienced and skilled team</span>
          </li>
          <li className="flex items-center gap-4 mb-4">
            <span className="text-[#2563eb]">
              <FaCheck />
            </span>
            <span>High quality and reliable services</span>
          </li>
          <li className="flex items-center gap-4 mb-4">
            <span className="text-[#2563eb]">
              <FaCheck />
            </span>
            <span>Focused on customer satisfaction</span>
          </li>
          <li className="flex items-center gap-4 mb-4">
            <span className="text-[#2563eb]">
              <FaCheck />
            </span>
            <span>We deliver on time, every time</span>
          </li>
        </ul>
        <a href="#contact">
          <button className=" bg-[#2563eb] mt-6 px-6 py-4 hover:bg-[#1d4ed8] cursor-pointer rounded-md text-white text-[0.9rem] font-semibold transition-all duration-200 ease-in-out">
            Get Started
          </button>
        </a>
      </div>
    </section>
  );
};

export default AboutPage;
