import React, { useRef, useState } from "react";
import "./ContactForm.css";
import ContactImg from "..//../../public/assets/contact-img.jpg";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [successMessage, setSuccessMessage] = useState(null);

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        "service_88jy2g5",
        "template_j3l96lp",
        form.current,
        "t3ZveS0tnlR_jTrMr",
      );
      console.log(result.text);
      setSuccessMessage("Message sent successfully!");

      // Reset the form fields after success
      form.current.reset();

      // Hide the success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
    } catch (error) {
      console.error(error.text);
      setSuccessMessage("Error sending message. Please try again.");
    }
  };

  return (
    <div className="contact-main-container flex flex-col justify-between align-middle w-full">
      <div className="title flex justify-center items-center w-full h-20 text-white mt-20">
        <h2 className="text-3xl md:text-4xl mb-5 w-100 font-bold text-black p-5 rounded-xl bg-[rgba(0,0,0,0.075)]">
          {" "}
          <span className="text-[rgb(254,192,71)]">CONTACT</span>{" "}
          <span className="text-[rgb(104,68,202)]"> US !</span>{" "}
        </h2>
      </div>

      <div className="ContactForm-container w-full mt-5 p-2 md:p-6">
        <div className="contact-img w-full md:w-[48%] flex justify-between align-middle">
          <img src={ContactImg} alt="contact" className=" object-contain" />
        </div>

        <div className="container_form w-full md:w-[48%]  flex flex-col justify-center align-middle">
          <form
            ref={form}
            onSubmit={sendEmail}
            className=" w-[90%] md:w-full flex flex-col align-middle justify-center gap-15"
          >
            <div className="mb-5 w-full ">
              <label htmlFor="title" className="block text-gray-700 ">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="user_title"
                className="p-2 w-full  outline-none border-none"
                placeholder="Enter your title"
              />
            </div>
            <div className="mb-5 mb-5 w-full">
              <label htmlFor="name" className="block text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                className="p-2 w-full  outline-none border-none"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-5 mb-5 w-full">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                className="p-2 w-full  outline-none border-none"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-5 mb-5 w-full">
              <label htmlFor="mobile" className="block text-gray-700">
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                name="user_mobile"
                className="p-2 w-full  outline-none border-none"
                placeholder="Enter your mobile number"
              />
            </div>
            <div className="mb-5 mb-5 w-full">
              <label htmlFor="issue" className="block text-gray-700">
                What is in your mind?
              </label>
              <textarea
                id="issue"
                name="message"
                className="p-2 w-full outline-none border-none"
                placeholder="Describe what is in your mind (max 100 words)"
                maxLength="500" // Adjust the maximum character length as needed
                rows="4" // Adjust the number of rows as needed
              ></textarea>
            </div>

            <button
              type="submit"
              value="Send"
              className="bg-blue-500 text-white pt-2 pb-2 mb-5 w-full rounded hover:bg-blue-600 transition-all duration-300 "
            >
              Submit
            </button>
          </form>
          {successMessage && (
            <div className="success-message success-popup show-popup">
              {successMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
