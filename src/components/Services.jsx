import React, { useEffect } from "react";
import Card from "./Card";
import { HiOutlineChartPie } from "react-icons/hi2";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="text-[#7A6960]">
      {/* Heading */}
      <h1 data-aos="fade-down" className="text-3xl font-semibold text-center">
        Digital Marketing & Development Services
      </h1>

      <div className="flex justify-center items-center mt-2">
        <div className="bg-orange-600 h-1 w-16 rounded"></div>
      </div>

      {/* Subheading */}
      <p className="text-gray-700 text-center mt-7 mb-10 text-lg">
        हम आपके business के लिए ज्यादा leads, traffic और sales के साथ-साथ
        professional website, app और software भी बनाते हैं।
      </p>

      {/* Cards */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5"
        data-aos="fade-up"
      >
        {/* SEO */}
        <Card
          img={<HiOutlineChartPie />}
          title={"SEO (Google Ranking)"}
          desc={
            "आपकी वेबसाइट को Google के top पर लाकर organic traffic बढ़ाते हैं।"
          }
        />

        {/* Social Media */}
        <Card
          img={<HiOutlineChartPie />}
          title={"Social Media Marketing"}
          desc={
            "Instagram और Facebook पर आपका brand grow करके audience बनाते हैं।"
          }
        />

        {/* Ads */}
        <Card
          img={<HiOutlineChartPie />}
          title={"Paid Ads (Google & Meta)"}
          desc={"High-converting ads चलाकर targeted leads और sales दिलाते हैं।"}
        />

        {/* Lead Generation */}
        <Card
          img={<HiOutlineChartPie />}
          title={"Lead Generation"}
          desc={
            "आपके business के लिए real customers generate करते हैं जो convert होते हैं।"
          }
        />

        {/* Web Development */}
        <Card
          img={<HiOutlineChartPie />}
          title={"Website Development"}
          desc={
            "हम आपके business के लिए fast, responsive और professional websites बनाते हैं।"
          }
        />

        {/* App Development */}
        <Card
          img={<HiOutlineChartPie />}
          title={"App Development"}
          desc={"Android और web apps बनाकर आपके business को digital बनाते हैं।"}
        />
      </div>
    </div>
  );
};

export default Services;
