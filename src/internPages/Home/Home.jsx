import React from "react";
import Navbar from "../../internComponents/Navbar/Navbar";
import Hero from "../../internComponents/Hero/Hero";
import "./Home.css";
import Title from "../../internComponents/Title/Title";
import Waterdrop from "../../internComponents/Waterdrop/Waterdrop";
import WaterWave from "../../internComponents/WaterWave/WaterWave";
import AllReviws from "../../internComponents/AllReviews/AllReviws";
import ContactForm from "../../internComponents/ContactFORM/ContactForm";
import FAQ from "../../internComponents/Faq/Faq";
import Footer from "../../internComponents/Footer/Footer";
import OurInternship from "../../internComponents/Our_internship/OurInternship";
import AboutC from "../../internComponents/AboutC/AboutC";

const Home = () => {
  return (
    <div className="home-main">
      <Navbar />
      <div className="home_top">
        <Hero />
      </div>
      <Title />
      <WaterWave />
      <AboutC />
      <Waterdrop />
      <OurInternship />
      <AllReviws />
      {/* <ContactForm /> */}
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
