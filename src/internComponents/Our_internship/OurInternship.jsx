import React from "react";
import "./OurInternship.css";
import Internship from "../Internship/Internship";
import android from "..//../../public/assets/android.jpeg";
import web from "..//../../public/assets/web.jpeg";
import Python from "..//../../public/assets/python.jpeg";
import graphic from "..//../../public/assets/graph.jpeg";
import data from "../../../public/assets/data.jpeg";
import oig from "../../../public/assets/OIG.jpeg";

const OurInternship = () => {
  return (
    <div className="Our_I_container mb-20">
      <div className="OI_title mb-5">
        <h2 className="text-xl md:text-4xl md:w-auto w-[80%] text-center font-bold text-black p-2 md:p-5 rounded-xl bg-[rgba(0,0,0,0.075)]">
          {" "}
          <span className="text-[rgb(254,192,71)]">OUR</span>{" "}
          <span className="text-[rgb(104,68,202)]"> INTERNSHIP</span>{" "}
        </h2>
      </div>
      <div className="Our_internship">
        <Internship
          title1="AI"
          title2="Engineering"
          img={data}
          des="Learn Artificial Intelligence including Machine Learning, Deep Learning, and real-world AI applications. Build smart systems, work with ChatGPT APIs, and gain industry-ready AI skills in this internship."
        />

        <Internship
          title1="Data"
          title2="Science"
          img={data}
          des="Master Data Science with Python, Pandas, and data visualization tools. Learn how to analyze data, generate insights, and build data-driven solutions used in real-world businesses."
        />
        <Internship
          title1="Web"
          title2="Development"
          img={web}
          des="The internship provides hands-on experience in web and app development with a dynamic innovation team, offering practical exposure to creating and enhancing web-based systems through challenging projects."
        />
        <Internship
          title1="Android"
          title2="Development"
          img={android}
          des="Android, an open-source OS for mobile app development, is preferred as people increasingly use mobile devices for internet tasks. Starting your first app with Cyber Sphere is an easy and user-friendly choice."
        />
        <Internship
          title1="Java"
          title2="Development"
          img={oig}
          des="Master Java programming from home, earn certification, and join a 4-week internship to learn web development using Java. Gain real-world experience, build your network, and integrate theory with practical skills."
        />
        <Internship
          title1="Python"
          title2="Development"
          img={Python}
          des={`Join our 4-week Python internship from home to master programming. Acquire essential skills for exciting job prospects, covering web development and deploying Python-driven applications. Get certified to elevate your career. Don't miss this chance to excel in Python programming!`}
        />
      </div>
    </div>
  );
};

export default OurInternship;
