import React from "react";
import "./AboutC.css"; // CSS file for custom styles

const AboutSection = () => {
  return (
    <>
      {/* <div className="about-section flex justify-center items-center w-100  mt-20 md:mt-10">
      <div className="about-content p-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-purple-700">🌟 About Us 🌟</h1>
        <p className="text-lg mb-4 text-gray-700">
          Welcome to our world of innovation and creativity! We're on a mission to make a difference in the digital landscape by providing cutting-edge solutions and educational resources. Our passion is to empower individuals and businesses through the latest technologies, helping them thrive in the digital realm. From innovative web applications to educational content, we're here to elevate your digital experience. Join us on this exciting journey of learning and growth!
        </p>
      </div>
    </div> */}

      <div className="aboutS w-100 mt-[-15px] mb-[100px]">
        <header className="bg-gradient-to-r from-blue-600 to-purple-800 text-white text-center py-2 md:py-8">
          <h1 className=" text-xl md:text-4xl font-bold text-white">
            CYBRSFER
          </h1>
          <p className="text-lg text-white">
            Empowering Minds, Transforming Futures
          </p>
        </header>

        <div className="containerAbout w-full m-auto mt-10 md:m-5 md:pl-20 md:pr-20 pl-2 pr-2">
          <h2 className=" text-xl  md:text-3xl font-bold mb-4">
            Welcome to CYBRSFER
          </h2>
          <p className="text-gray-700 mb-6 text-[16px] md:text-xl text-justify pl-3 pr-3">
            Welcome to CYBRSFER, your passport to limitless opportunities in the
            IT landscape. At CYBRSFER, we're dedicated to democratizing IT
            education, offering free internships and training in web
            development, Android, Java, and Python. Our community on LinkedIn,
            aptly named CYBRSFER, provides students with free job updates,
            fostering a collaborative space for knowledge exchange.
            Distinguished by our commitment to making IT education accessible,
            CYBRSFER ensures quality learning experiences led by seasoned
            professionals. Join us to explore immersive internships, connect
            with industry experts, and access free courses that propel your IT
            journey forward. As we continuously evolve, anticipate more
            initiatives aimed at keeping you ahead of IT trends. At CYBRSFER,
            seize the opportunity to learn, connect, and grow – because in the
            sphere of IT, your success is our mission.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
