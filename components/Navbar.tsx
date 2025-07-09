"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "@/public/logo-ksep.png";
import Aos from "aos";
import "aos/dist/aos.css";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "INSIGHTS", href: "/insights" },
  { name: "EVENTS", href: "/events" },
  { name: "GALLERY", href: "/gallery" },
  { name: "ACHIEVEMENTS", href: "/achievements" },
];

const MenuIcon = ({ className = "" }) => (
  <svg
    className={`w-7 h-7 text-white ${className}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
);

const CloseIcon = ({ className = "" }) => (
  <svg
    className={`w-8 h-8 text-white ${className}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const Navbar = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsVisible(true);
        return;
      }
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY.current || currentScrollY < 10);
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false); // Changed to lg breakpoint
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="relative w-full bg-[#060911]" data-aos="fade-down">
          <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image src={Logo} alt="Logo" className="w-[60px] h-auto m-2" />
              </Link>
            </div>

            <nav className="hidden lg:flex items-center justify-center flex-1 lg:space-x-10 xl:space-x-20">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative text-base text-white transition-colors duration-300 px-2 py-5"
                  >
                    <span
                      className={
                        isActive
                          ? "text-white"
                          : "text-[#989CA1] hover:text-white"
                      }
                    >
                      {link.name}
                    </span>
                    {isActive && (
                      <span className="absolute bottom-[18px] left-1/2 -translate-x-1/2 h-[2px] w-[80%] bg-gradient-to-r from-[#DC203F] to-[#FF7D46] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden lg:flex items-center">
              <div className="p-[1px] rounded-full bg-gradient-to-r from-[#DC203F] to-[#FF7D46]">
                <Link
                  href="/infest"
                  className="block bg-[#303030] font-semibold text-white rounded-full transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r from-[#DC203F] to-[#FF7D46] hover:text-[#060911] py-2 px-8 inset-shadow-sm inset-shadow-black"
                >
                  INFEST
                </Link>
              </div>
            </div>

            <div className="lg:hidden">
              <button onClick={() => setMobileMenuOpen(true)} className="p-2">
                <MenuIcon />
              </button>
            </div>
          </div>

          <div className="h-[1px] w-full bg-gradient-to-r from-[#060911] via-[#AFAFAF] to-[#060911]"></div>
        </div>
      </header>

      {/* --- Mobile Menu --- */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-[#060911]/90 backdrop-blur-lg"></div>

        <div
          className={`absolute top-4 right-4 z-10 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <button onClick={() => setMobileMenuOpen(false)} className="p-2">
            <CloseIcon />
          </button>
        </div>

        <nav
          className={`flex flex-col items-center justify-center h-full gap-8 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="relative text-xl font-bold"
              >
                <span
                  className={
                    isActive ? "text-white" : "text-[#989CA1] hover:text-white"
                  }
                >
                  {link.name}
                </span>
                {isActive && (
                  <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 h-[2px] w-full bg-gradient-to-r from-[#DC203F] to-[#FF7D46] rounded-full" />
                )}
              </Link>
            );
          })}

          <div className="p-[1px] rounded-full bg-gradient-to-r from-[#DC203F] to-[#FF7D46] mt-8">
            <Link
              href="/infest"
              onClick={() => setMobileMenuOpen(false)}
              className="block bg-[#303030] text-white font-bold rounded-full py-3 px-12 text-xl inset-shadow-sm inset-shadow-black"
            >
              INFEST
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
