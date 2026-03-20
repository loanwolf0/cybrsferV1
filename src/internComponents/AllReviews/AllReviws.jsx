import React from "react";
import "./AllReviws.css";
import Review from "../../internComponents/Review/Review";
import graphic from "..//../../public/assets/graph.jpeg";
import data from "../../../public/assets/data.jpeg";
import oig from "../../../public/assets/OIG.jpeg";

const AllReviws = () => {
  return (
    <div className="Allreviews-container flex flex-col w-full mt-2 pb-20 bg-gradient-to-r from-[#6844ca] via-purple-500 to-pink-500 text-white">
      <div className="title flex justify-center items-center w-full h-20 text-white mt-20">
        <h1 className="text-2xl md:text-4xl mb-3 md:mb-5 w-100 font-bold p-5 rounded-xl ">
          {" "}
          <span className="text-[rgb(254,192,71)]">This</span> is What Our{" "}
          <span className="text-[rgb(39,77,95)]"> Students</span> Said !{" "}
        </h1>
      </div>
      <div className=" container_rev md:p-5  justify-between align-middle mt-10">
        <Review
          revName="Aplesh singh"
          revTitle="Web Development"
          img={oig}
          revDes="Superb web development! Cyber Sphere exceeded expectations with their expertise, responsiveness, and dedication. Flawless execution from concept to a visually striking website. Highly recommended!"
        />
        <Review
          revName="Gunjan verma"
          revTitle="Android Development"
          img={data}
          revDes="Excellent Android development! The team demonstrated outstanding expertise and delivered a top-notch application. Seamless functionality, great user experience—highly satisfied!"
        />
        <Review
          revName="Rajeev sharma"
          revTitle="Graphic Design"
          img={graphic}
          revDes="Exceptional graphic design work! The team showcased remarkable creativity and attention to detail, bringing our vision to life. The final results exceeded expectations. Highly recommend for top-quality graphic design services!"
        />
      </div>
    </div>
  );
};

export default AllReviws;
