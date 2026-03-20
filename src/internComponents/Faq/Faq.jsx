import React, { useState } from "react";
import "./FAQ.css"; // Your custom CSS file for styling
import Faq from "../../../public/assets/Faq2.jpg";

const FAQ = () => {
  const faqData = [
    {
      question: "How long the internship is?",
      answer: "This is a 4 Week Virtual Internship Program opportunity.",
    },
    {
      question: "How long the training is?",
      answer: " This is a 6 Week Virtual Training Program opportunity.",
    },
    {
      question: "How can I register for this Internship/Training Program?",
      answer:
        "Fill up the form and wait for your Internship/Training Offer Letter approval.",
    },
    {
      question:
        " How will I be benefiting from this Internship/Training program?",
      answer:
        "You will get industrial experience and knowledge on respective domain along with Resume building, and LinkedIn Account building Skills.",
    },
    {
      question: " What is the selection process timeline?",
      answer:
        "Selection emails will be sent within one week if you are chosen for the program.",
    },
    {
      question: "Can I apply for both the internship and training programs?",
      answer:
        "Yes, you can apply for both programs. However, each program has its own application process and requirements.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="contact-main-container flex flex-col justify-between align-middle w-full mt-15">
      <div className="title flex justify-center items-center w-full h-20 text-white mt-20">
        <h2 className="text-xl md:text-4xl mb-5 w-100 font-bold text-black p-2 md:p-5 rounded-xl bg-[rgba(0,0,0,0.075)]">
          {" "}
          <span className="text-[rgb(254,192,71)]">FREQUENTLY</span> ASKED{" "}
          <span className="text-[rgb(104,68,202)]"> QUESTIONS !</span>{" "}
        </h2>
      </div>

      <div className="Faq-main-container md:p-10 mt-10">
        <div className="faq-img  w-100 md:w-[48%] flex justify-between align-middle">
          <img src={Faq} alt="faq-img" className=" object-contain" />
        </div>

        <div className="Faq-container w-100 md:w-[48%] flex justify-between align-middle ">
          <div className="faq-container">
            {faqData.map((item, index) => (
              <div key={index} className="faq-item">
                <div
                  className="faq-question outline-none border-none"
                  onClick={() => handleToggle(index)}
                >
                  <span className="faq-question-text outline-none">
                    {item.question}
                  </span>
                  <span
                    className={`faq-icon  outline-none ${activeIndex === index ? "open" : ""}`}
                  ></span>
                </div>
                <div
                  className={`faq-answer ${activeIndex === index ? "open" : ""}`}
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
