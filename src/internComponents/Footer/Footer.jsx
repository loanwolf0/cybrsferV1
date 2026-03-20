import React from "react";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import EmailIcon from "@mui/icons-material/Email";
// import YouTubeIcon from "@mui/icons-material/YouTube";

import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 w-100 text-white rounded-lg about-main-container">
        <div className="w-100 m-3 md:m-5 flex flex-col md:flex-row align-middle justify-center md:justify-between p-5  ">
          <div className="aboutusFooter w-full  mb-10  md:ml-10 flex flex-col ">
            <div className="flex items-center mb-2">
              <h1 className="border-b-2 border-yellow-200 pb-1 font-bold text-2xl ">
                About Us
              </h1>
            </div>
            <p className="text-justify">
              Welcome to CYBRSFER—where IT education meets empowerment. Offering
              free internships and training in web, Android, Java, and Python
              development. Join our LinkedIn community, CYBRSFER, for job
              updates and industry insights. Elevate your IT journey with
              quality education, community support, and future-focused
              initiatives. Your success is our mission
            </p>
          </div>
        </div>

        <div className="disclaimer_footer w-full m-auto mb-5 md:m-5 md:pl-20 md:pr-20 pl-2 pr-2 text-[14px]">
          <p className="pl-5 pr-5 text-justify">
            {" "}
            Disclaimer: CYBRSFER is an evolving information and service
            provider. While we endeavor to provide accurate and up-to-date
            content, users acknowledge that information may change and should be
            verified independently. CYBRSFER offers IT solutions and services,
            aiming for precision and reliability. However, we do not guarantee
            absolute accuracy. Users are encouraged to verify information for
            their specific needs. CYBRSFER is not liable for any consequences
            arising from the use of information or services provided. We reserve
            the right to modify, update, or discontinue our platform and
            services at our discretion. Links to third-party websites are
            provided for convenience and do not imply endorsement.
          </p>
        </div>

        <hr className="mb-5" />
        <div className="w-full flex align-middle justify-center mt-15 pb-5 items-center transition duration-300 ease-in-out">
          <h1>
            {" "}
            &copy; {new Date().getFullYear()} CYBRSFER. All rights
            reserved.{" "}
          </h1>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
