"use client";

import Image from "next/image";
import React, { useState } from "react";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const images = [
    {
      id: 1,
      src: "/images/web1.jpg",
      category: "Web Design",
      description: "Finance Dashboard",
    },
    {
      id: 2,
      src: "/images/web2.jpg",
      category: "Web Design",
      description: "Free Images Website",
    },
    {
      id: 3,
      src: "/images/mobile1.jpg",
      category: "Mobile App",
      description: "Task Management App",
    },
    {
      id: 4,
      src: "/images/mobile2.jpg",
      category: "Mobile App",
      description: "Beauty Salon App",
    },
    {
      id: 5,
      src: "/images/marketing1.jpg",
      category: "Marketing",
      description: "Social Media Marketing",
    },
    {
      id: 6,
      src: "/images/branding1.jpg",
      category: "Branding",
      description: "Company Branding",
    },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((image) => image.category === selectedCategory);

  return (
    <section className="mb-10">
      <div className="flex flex-col justify-center items-center mt-4">
        <h3 className="text-[0.7rem] uppercase font-bold tracking-[0.06em] text-[#2563eb] mb-3">
          our portfolio
        </h3>
        <h1 className="text-[2.1rem] font-extrabold mb-4">Our Recent Work</h1>
      </div>
      <div className="flex flex-col justify-center items-center mt-4">
        <div className="flex flex-wrap justify-center items-center gap-4 mb-4 text-[0.9rem]">
          <button
            className={` px-6 py-2 rounded-3xl ${selectedCategory === "all" ? "bg-[#2563eb] text-white" : "bg-[#eef4ff] text-[#64748b] hover:bg-[#2563eb] hover:text-white transition-all duration-200 ease-in-out"} `}
            onClick={() => setSelectedCategory("all")}
          >
            All
          </button>
          <button
            className={` px-6 py-2 rounded-3xl ${selectedCategory === "Web Design" ? "bg-[#2563eb] text-white" : "bg-[#eef4ff] text-[#64748b] hover:bg-[#2563eb] hover:text-white transition-all duration-200 ease-in-out"} `}
            onClick={() => setSelectedCategory("Web Design")}
          >
            Web Design
          </button>
          <button
            className={` px-6 py-2 rounded-3xl ${selectedCategory === "Mobile App" ? "bg-[#2563eb] text-white" : "bg-[#eef4ff] text-[#64748b] hover:bg-[#2563eb] hover:text-white transition-all duration-200 ease-in-out"} `}
            onClick={() => setSelectedCategory("Mobile App")}
          >
            Mobile App
          </button>
          <button
            className={` px-6 py-2 rounded-3xl ${selectedCategory === "Brnading" ? "bg-[#2563eb] text-white" : "bg-[#eef4ff] text-[#64748b] hover:bg-[#2563eb] hover:text-white transition-all duration-200 ease-in-out"} `}
            onClick={() => setSelectedCategory("Branding")}
          >
            Branding
          </button>
          <button
            className={` px-6 py-2 rounded-3xl ${selectedCategory === "Marketing" ? "bg-[#2563eb] text-white" : "bg-[#eef4ff] text-[#64748b] hover:bg-[#2563eb] hover:text-white transition-all duration-200 ease-in-out"} `}
            onClick={() => setSelectedCategory("Marketing")}
          >
            Marketing
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-6 px-8">
          {filteredImages.map((image) => (
            <div
              className="flex flex-col border border-[#eef4ff] shadow-[0_2px_8px_rgba(20,30,60,0.06)] hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(20,30,60,0.1)] transition-all duration-200 ease-in-out mt-8 rounded-lg"
              key={image.id}
            >
              <Image
                src={image.src}
                alt={`${image.category} image`}
                width={400}
                height={400}
                className="sm:w-70 w-full h-60 rounded-md object-cover"
              />
              <div className="my-4 px-4">
                <h3 className="text-[1rem] font-bold">{image.description}</h3>
                <span className="text-[0.8rem] text-[#64748b]">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
