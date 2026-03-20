import React from "react";
import "./Hero.css";
import heroImg from "..//../../public/assets/hero 3.jpg";

const Hero = () => {
  return (
    <div className="flex mobile_hero">
      {/* First Section */}
      <div className="flex hero_text flex-col  ml-0 md:ml-10 p-5">
        <div className="h-auto">
          <h1 className="text-[rgb(41,45,65)] text-5xl text-800 font-bold mb-2 md:mb-10 text-start">
            {" "}
            Explore. Learn. Conquer The{" "}
            <span className="text-[rgb(254,192,71)]"> CYBRSFER. </span>{" "}
          </h1>
        </div>
        <div className="flex gap-5 mt-5">
          <div className="h-100 w-2 bg-[rgb(254,192,71)] transform origin-left scale-3"></div>
          <p className="text-justify text-[rgb(41,45,65)] text-xl font-">
            Take A Trip Through The{" "}
            <span className="text-[rgb(254,192,71)]"> CYBRSFER: </span> Look
            Around To Learn, Understand, And Overcome. Master The Digital
            Domain, Armed With Knowledge And The Drive To{" "}
            <span className="text-[rgb(104,68,202)]">
              {" "}
              Conquer Technological Frontiers.{" "}
            </span>
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div className="hero_img p-5">
        <img src={heroImg} alt="hero" className="hero_img-2 w-screen " />
      </div>
    </div>
  );
};

export default Hero;
