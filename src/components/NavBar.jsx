import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import CtaButton from "./CtaButton";

const NavBar = () => {
  const [show, setShow] = useState(false);

  const clickHandler = () => {
    setShow(!show);
  };

  return (
    <div className="w-full xl:h-24 lg:h-20 h-16 flex flex-row items-center justify-between lg:px-32 sm:px-20 px-10 shadow-lg relative secondary-font">
      {/* logo */}
      <a
        href="/Cybrsfer/"
        className="lg:text-3xl text-2xl tracking-wide font-light text-[#7A6960]"
      >
        CYBRSFER
      </a>
      {/* menu */}
      <div className="lg:flex items-center justify-between lg:gap-14 hidden">
        <a
          href="/Cybrsfer/"
          className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
        >
          Home
        </a>
        <a
          href="/Cybrsfer/#about"
          className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
        >
          About
        </a>
        <a
          href="/Cybrsfer/#services"
          className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
        >
          Services
        </a>

        <a
          href="/Cybrsfer/#contact"
          className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
        >
          Contact
        </a>

        <a
          href="/Cybrsfer/career"
          className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
        >
          Career
        </a>

        <a href="/Cybrsfer/#contact" className="">
          <CtaButton name={"Get Started"} />
        </a>
      </div>

      {/* mobile menu */}
      <div className="lg:hidden ">
        <RxHamburgerMenu size={"28px"} onClick={clickHandler} />
      </div>

      {show && (
        <div className="absolute z-20 top-[70px] flex flex-col gap-4 text-center w-full left-0 p-5 lg:hidden shadow-xl bg-white transition-all duration-300">
          <a
            href="/Cybrsfer/"
            className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
          >
            Home
          </a>
          <a
            href="/Cybrsfer/#about"
            className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
          >
            About
          </a>
          <a
            href="/Cybrsfer/#services"
            className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
          >
            Services
          </a>
          <a
            href="/Cybrsfer/#contact"
            className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
          >
            Contact
          </a>
          <a
            href="/Cybrsfer/#career"
            className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
          >
            Career
          </a>

          <a
            href="/Cybrsfer/#contact"
            className="mt-2 ml-2 flex justify-center items-center"
          >
            <CtaButton name={"Get Started"} />
          </a>
        </div>
      )}
    </div>
  );
};

export default NavBar;
