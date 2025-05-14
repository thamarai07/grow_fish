"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [scrollDetect, setScrollDetect] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollDetect(true);
      } else {
        setScrollDetect(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`transition-all duration-300 z-50  ${
        scrollDetect
          ? "fixed left-0 w-full bg-white"
          : "absolute w-full bg-white"
      }`}
    >
      <div className="flex items-center justify-between shadow-2xs max-w-[992px] m-auto">
        <Image src={"/logo/logo.png"} width={120} height={120} alt="Logo" />
        <ul className="flex items-center w-[50%] justify-between">
          {["Home", "Product", "About Us", "Contact Us"].map((text, idx) => {
            const hrefs = ["/", "/product", "/aboutus", "/contactus"];
            return (
              <li
                key={idx}
                className="font-semibold transition-all duration-300 ease-in-out hover:bg-[#217c2f] hover:text-[#f4efe9] px-4 py-1 rounded"
              >
                <Link href={hrefs[idx]}>{text}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
