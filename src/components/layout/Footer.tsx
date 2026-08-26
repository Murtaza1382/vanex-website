import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiMaildotcom } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-[#0b1220] text-[#64748b] px-2 py-2">
      <main className=" grid grid-cols-6 m-4 gap-4 py-10 px-6">
        <div className="md:col-span-2 col-span-6 mr-4 mb-8">
          <h1 className="text-xl font-bold mb-4">Vanex.</h1>
          <p>
            Vanex is a creative digital agency helping brands grow with
            strategy, design and technology.
          </p>
          <div className="text-md flex gap-6 mt-6">
            <a href="#" className=" text-2xl font-bold hover:text-white">
              <FaFacebook />
            </a>
            <a href="#" className=" text-2xl font-bold hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="text-2xl font-bold hover:text-white">
              <FaLinkedin />
            </a>
            <a href="#" className="text-2xl font-bold hover:text-white">
              <SiMaildotcom />
            </a>
          </div>
        </div>
        <div className="flex flex-col mb-6 items-start md:col-span-1 sm:col-span-3 col-span-6 gap-2">
          <h1 className="text-white font-bold">Quick Links</h1>
          <Link
            href="#"
            className="hover:text-white transition-all duration-250 ease-in-out"
          >
            Home
          </Link>
          <Link
            href="#"
            className="hover:text-white transition-all duration-250 ease-in-out"
          >
            About
          </Link>
          <Link
            href="#"
            className="hover:text-white transition-all duration-250 ease-in-out"
          >
            Services
          </Link>
          <Link
            href="#"
            className="hover:text-white transition-all duration-250 ease-in-out"
          >
            Portfolio
          </Link>
          <Link
            href="#"
            className="hover:text-white transition-all duration-250 ease-in-out"
          >
            Contact
          </Link>
        </div>
        <div className="flex flex-col mb-6 items-start md:col-span-1 sm:col-span-3 col-span-6 gap-2">
          <h1 className="text-white font-bold">Services</h1>
          <Link
            href="#"
            className="hover:text-white transition-all duration-250 ease-in-out"
          >
            Web Development
          </Link>
          <Link
            href="#"
            className="hover:text-white transition-all duration-250 ease-in-out"
          >
            Mobile Development
          </Link>
          <Link
            href="#"
            className="hover:text-white transition-all duration-250 ease-in-out"
          >
            UI/UX Design
          </Link>
          <Link
            href="#"
            className="hover:text-white transition-all duration-250 ease-in-out"
          >
            Digital Marketing
          </Link>
        </div>
        <div className="flex flex-col mb-6 items-start md:col-span-1 sm:col-span-3 col-span-6 gap-2">
          <h1 className="text-white font-bold">Support</h1>
          <Link
            href="#"
            className="hover:text-white transition-all duration-250 ease-in-out"
          >
            Help Center
          </Link>
          <Link
            href="#"
            className="hover:text-white transition-all duration-250 ease-in-out"
          >
            Terms & Conditions
          </Link>
          <Link
            href="#"
            className="hover:text-white transition-all duration-250 ease-in-out"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="hover:text-white transition-all duration-250 ease-in-out"
          >
            FQA
          </Link>
        </div>
        <div className="flex flex-col items-start md:col-span-1 sm:col-span-3 col-span-6 gap-2">
          <h1 className="text-white font-bold">Contact Us</h1>
          <Link
            href="#"
            className="hover:text-white transition-all duration-250 ease-in-out"
          >
            info2024@vanex.com
          </Link>
          <Link
            href="#"
            className="hover:text-white transition-all duration-250 ease-in-out"
          >
            +1 234 567 890
          </Link>
          <Link
            href="#"
            className="hover:text-white transition-all duration-250 ease-in-out"
          >
            123 Street, New York, USA
          </Link>
        </div>
      </main>
      <div className="flex justify-center items-center border-t border-[#64748b] pt-5 pb-3 ">
        <p>&copy; 2026 Vanex. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
