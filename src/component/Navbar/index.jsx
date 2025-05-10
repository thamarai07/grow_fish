import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="max-w-[992px] m-auto flex items-center shadow-2xs justify-between">
      <Image src={"/logo/logo.png"} width={120} height={120} alt="Logo" />
      <ul className="flex item-center w-[50%] justify-between">
        <li className="font-semibold transition-all duration-300 ease-in-out hover:bg-[#217c2f] hover:text-[#f4efe9] px-4 py-1 rounded">
          <Link href={"/"}>Home</Link>
        </li>

        <li className="font-semibold transition-all duration-300 ease-in-out hover:bg-[#217c2f] hover:text-[#f4efe9] px-4 py-1 rounded">
          <Link href={"/product"}>Product</Link>
        </li>
        <li className="font-semibold transition-all duration-300 ease-in-out hover:bg-[#217c2f] hover:text-[#f4efe9] px-4 py-1 rounded">
          <Link href={"/aboutus"}>About Us</Link>
        </li>
        <li className="font-semibold transition-all duration-300 ease-in-out hover:bg-[#217c2f] hover:text-[#f4efe9] px-4 py-1 rounded">
          <Link href={"/contactus"}>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}
