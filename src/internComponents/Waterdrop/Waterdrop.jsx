import React from "react";
import "./Waterdrop.css";

const Waterdrop = () => {
  return (
    <div className="main-water">
      <h2 className="text-xl md:text-4xl md:w-auto mb-5 w-[80%] text-center  font-bold p-2 md:p-6 rounded-xl bg-[rgba(0,0,0,0.075)]">
        {" "}
        <span className="text-[rgb(254,192,71)]">This</span> is What We{" "}
        <span className="text-[rgb(104,68,202)]"> Offer !</span>{" "}
      </h2>
      <div className="internContainer">
        <div className="drop" style={{ "--clr": "#ff0f5b" }}>
          <div className="content">
            <h2 id="a">01</h2>
            <p>
              Our developers at CYBRSFER specialize in crafting interactive,
              scalable, brand-focused web solutions for clients. Our goal is to
              build profitable digital products that spark creativity and boost
              ROI
            </p>
            <a href="/">Read More</a>
          </div>
        </div>

        <div className="drop" style={{ "--clr": "#be01fe" }}>
          <div className="content">
            <h2 id="b">02</h2>
            <p>
              Our creative designers deliver striking visuals for brochures,
              banners, logos, and more. With a blend of professionalism and
              creativity, they create a strong online presence for your
              business.
            </p>
            <a href="/">Read More</a>
          </div>
        </div>

        <div className="drop" style={{ "--clr": "#01b4ff" }}>
          <div className="content">
            <h2 id="c">03</h2>
            <p>
              Engaging animations are versatile assets for your brand on social
              media, email, internal features, and websites. Our skilled motion
              graphics team empowers your business storytelling, believing that
              in great stories, you become one.
            </p>
            <a href="/">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waterdrop;
