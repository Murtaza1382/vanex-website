"use client";
import React, { useState } from "react";

type Contact = {
  name: string;
  email: string;
  message: string;
};

const ContactPage = () => {
  const [isOpen, setIsOpen] = useState<number>(1);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [contact, setContact] = useState<Contact>({
    name: "",
    email: "",
    message: "",
  });

  const handleClick = (value: number) => {
    if (isOpen == value) {
      setIsOpen(0);
    } else {
      setIsOpen(value);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmit(true);
    setContact({
      ...contact,
      name: "",
      email: "",
      message: "",
    });
  };

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  return (
    <div className="flex md:flex-row flex-col gap-10 px-4 m-4 my-18">
      <div className="w-full">
        <h3 className="uppercase mb-2 text-[0.8rem] font-bold text-[#2563eb]">
          faqs
        </h3>
        <h1 className="text-[1.98rem] font-extrabold mb-4">
          Fequently Asked Questions
        </h1>
        <div className="border-b py-2">
          <button
            className="flex justify-between items-center text-left w-full cursor-pointer"
            onClick={() => handleClick(1)}
          >
            <span className="text-[0.98rem] font-semibold py-4">
              What Services do you offer?
            </span>
            <span
              className={`text-[1.2rem] font-semibold text-[#2563eb] transition-transform duration-250 ease-in-out ${isOpen == 1 && "rotate-45"}`}
            >
              +
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen === 1 ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-[#64748b] text-[0.92rem] pb-4">
              We offer web development, mobile app development, UI/UX design and
              digital marketing services tailored to your business goals.
            </p>
          </div>
        </div>
        <div className="border-b py-2">
          <button
            className="flex justify-between items-center text-left w-full cursor-pointer"
            onClick={() => handleClick(2)}
          >
            <span className="text-[0.98rem] font-semibold py-4 ">
              How long does a project take?
            </span>
            <span
              className={`text-[1.2rem] font-semibold text-[#2563eb] transition-transform duration-250 ease-in-out ${isOpen == 2 && "rotate-45"}`}
            >
              +
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen === 2 ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-[#64748b] text-[0.92rem]">
              Timelines vary depending on scope, but most projects are completed
              within 4 to 12 weeks from kickoff to launch.
            </p>
          </div>
        </div>
        <div className="border-b py-2">
          <button
            className="flex justify-between items-center text-left w-full cursor-pointer"
            onClick={() => handleClick(3)}
          >
            <span className="text-[0.98rem] font-semibold py-4 ">
              Do you provide support after project delivery?
            </span>
            <span
              className={`text-[1.2rem] font-semibold text-[#2563eb] transition-transform duration-250 ease-in-out ${isOpen == 3 && "rotate-45"}`}
            >
              +
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen === 3 ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-[#64748b] text-[0.92rem] ">
              Yes, we offer ongoing maintenance and support packages to keep
              your product running smoothly after launch.
            </p>
          </div>
        </div>
        <div className="border-b py-2">
          <button
            className="flex justify-between items-center text-left w-full cursor-pointer"
            onClick={() => handleClick(4)}
          >
            <span className="text-[0.98rem] font-semibold py-4 ">
              How much does a website cost?
            </span>
            <span
              className={`text-[1.2rem] font-semibold text-[#2563eb] transition-transform duration-250 ease-in-out ${isOpen == 4 && "rotate-45"}`}
            >
              +
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen === 4 ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-[#64748b] text-[0.92rem] ">
              Pricing depends on the complexity and features required. Contact
              us for a custom quote based on your needs.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full px-2">
        <div>
          <h3 className="uppercase mb-2 text-[0.8rem] font-bold text-[#2563eb]">
            contact us
          </h3>
          <h1 className="text-[1.98rem] font-extrabold mb-4">
            Let&apos;s Work Together
          </h1>
          <p className="text-[#64748b] text-[0.92rem]">
            Have a project in mind? Let&apos;s talk and create something amazing
            together.
          </p>
        </div>
        <form className="flex flex-col gap-8 my-10" onSubmit={handleSubmit}>
          <div className="flex justify-center items-center gap-4">
            <input
              type="text"
              required
              name="name"
              value={contact.name}
              onChange={handleInput}
              className="border px-5 py-3 rounded-md w-full bg-[#f8fafc] focus:bg-white focus:border-[#2563eb] focus:outline-none"
              placeholder="Your Name"
            />
            <input
              type="email"
              required
              name="email"
              value={contact.email}
              onChange={handleInput}
              className="border px-5 py-3 rounded-md w-full bg-[#f8fafc] focus:bg-white focus:border-[#2563eb] focus:outline-none"
              placeholder="Your Email"
            />
          </div>
          <textarea
            rows={4}
            required
            name="message"
            value={contact.message}
            onChange={handleInput}
            className="border px-5 py-3 rounded-md w-full bg-[#f8fafc] focus:bg-white focus:border-[#2563eb] focus:outline-none"
            placeholder="Your Message"
          ></textarea>
          <button className="rounded-lg bg-[#2563eb] px-5 py-3 text-[0.95rem] font-semibold text-white hover:bg-[#1d4ed8] transition-all duration-150 ease-in-out">
            Send Message
          </button>
        </form>
        {isSubmit && (
          <p className="m-2 text-green-500 font-bold">
            Thanks! Your message has been sent.
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
