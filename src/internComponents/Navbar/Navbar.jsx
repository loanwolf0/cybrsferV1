import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../../public/assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleMobile = (e) => {
    setIsMobile(!isMobile);
    setIsClicked(!isClicked);
  };

  return (
    <nav
      className={`flex flex-row justify-between items-center  gap-5 md:p-10 p-5`}
    >
      <div className="mobile_cont flex flex-row justify-center items-center ">
        <div className="mobileNav">
          <RxHamburgerMenu size={"28px"} onClick={handleMobile} />
        </div>

        <div className={`flex items-center mobileContainer `}>
          <div className="lg:text-3xl text-2xl tracking-wide font-light text-[#7A6960] ">
            CYBRSFER
          </div>
        </div>
      </div>

      <div className={` flex flex-row `}>
        <ul
          className={`flex flex-row ${isClicked ? "navlinks active" : "navlinks"}`}
        >
          <li className="relative" onClick={handleMobile}>
            <a
              href="/Cybrsfer/"
              className="text-[#7A6960] text-lg cursor-pointer custom-a"
            >
              Home
              <div className="line"></div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
