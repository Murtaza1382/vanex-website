"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const sections = ["home", "about", "services", "portfolio", "blog", "contact"];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /*
   * Detect which section is currently visible
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        threshold: [0.2, 0.5, 0.7],
        rootMargin: "-80px 0px -20% 0px",
      },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);

      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  /*
   * Scroll to a section manually
   */
  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    section: string,
  ) => {
    e.preventDefault();

    const element = document.getElementById(section);

    if (!element) return;

    setIsOpen(false);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border bg-white shadow-2xl shadow-neutral-300">
      {/* Desktop */}
      <div className="mx-8 hidden items-center justify-between py-3 lg:flex">
        <h3 className="text-3xl font-bold">
          Venex<span className="text-[#2563eb]">.</span>
        </h3>

        <div className="flex items-center justify-center gap-10">
          {sections.map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              onClick={(e) => handleNavigation(e, section)}
              className={`transition-colors ${
                activeSection === section
                  ? "font-semibold text-[#2563eb]"
                  : "text-gray-700 hover:text-[#1d4ed8]"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>

        <Link
          href="#contact"
          onClick={(e) => handleNavigation(e, "contact")}
          className="rounded-lg bg-[#2563eb] px-5 py-3 text-lg font-semibold text-white hover:bg-[#1d4ed8]"
        >
          Get A Quote
        </Link>
      </div>

      {/* Mobile header */}
      <div className="block p-4 lg:hidden">
        <h3 className="text-3xl font-bold">
          Venex<span className="text-[#2563eb]">.</span>
        </h3>

        <button
          className="absolute right-8 top-4"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`flex flex-col overflow-hidden px-4 transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {sections.map((section) => (
          <Link
            key={section}
            href={`#${section}`}
            onClick={(e) => handleNavigation(e, section)}
            className={`block w-full border-t py-3 transition-colors ${
              activeSection === section
                ? "font-semibold text-[#2563eb]"
                : "text-gray-700 hover:text-[#1d4ed8]"
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Header;
