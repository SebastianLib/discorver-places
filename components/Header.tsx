import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="shadow-sm">
      <div className="flex justify-between container mx-auto px-2 py-3">
        <div className="flex gap-3 items-center">
          <Image src="/logo.png" alt="logo" width={50} height={50} />
          <h2 className="text-[25px] text-red-500 tracking-widest font-semibold">
            DISCOVER
          </h2>
        </div>
        <ul className="flex items-center gap-8">
          <li className="text-[18px] hover:text-red-500 cursor-pointer transition duration-300">
            Home
          </li>
          <li className="text-[18px] hover:text-red-500 cursor-pointer transition duration-300">
            About Us
          </li>
          <li className="text-[18px] hover:text-red-500 cursor-pointer transition duration-300">
            Contact Us
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
