import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Linkedin,
  Instagram,
  Mail,
  MessageSquare,
  User,
  Phone,
} from "lucide-react";
import Logo from "@/public/logo-ksep2.png";

const socialLinks = [
  { icon: Linkedin, text: "Kelompok Studi Ekonomi dan Pasar Modal", href: "#" },
  { icon: Instagram, text: "ksepitb", href: "#" },
  { icon: Mail, text: "ksepitb@gmail.com", href: "#" },
  { icon: MessageSquare, text: "ksepitb", href: "#" },
];

const Footer = () => {
  return (
    <footer className="w-full px-4">
      <div className="max-w-7xl mx-auto py-11 bg-white/10 rounded-[32px] shadow-glass-inset backdrop-blur-[50px]">
        <div className="w-full mx-auto px-6 md:px-8">
          <div className="flex justify-center items-center gap-3 mb-6">
            <Image src={Logo} alt="KSEP Logo" className="w-8 h-8" />
            <h3 className="font-semibold text-white text-sm sm:text-base md:text-lg">
              Kelompok Studi Ekonomi dan Pasar Modal
            </h3>
          </div>

          {/* Social Links Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4 md:gap-y-6 text-xs md:text-sm">
            {socialLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex items-center sm:justify-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <item.icon className="w-3 h-3 md:w-5 md:h-5 flex-shrink-0" />
                <span>{item.text}</span>
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-white/20 my-8"></div>

          {/* Bottom Section: Contact and Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
            <div className="text-gray-300">
              <h4 className="text-sm md:text-base font-semibold text-white mb-3">
                Contact Person
              </h4>
              <div className="text-xs md:text-sm flex items-center gap-3 mb-2">
                <User className="w-3 h-3 md:w-5 md:h-5" />
                <span>Nicholas Wise</span>
              </div>
              <div className="text-xs md:text-sm  flex items-center gap-3">
                <Phone className="w-3 h-3 md:w-5 md:h-5" />
                <span>088888888888</span>
              </div>
            </div>
            <div className="text-gray-400 text-center text-xs sm:text-sm md:text-base md:text-right">
              <p>
                © 2025 Kelompok Studi Ekonomi dan Pasar Modal. <br /> All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
