import React, { useEffect } from "react";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div>
      <div className="md:grid grid-cols-4 p-5 md:p-0 text-[#7A6960]">
        {/* About / Contact */}
        <div data-aos="fade-right">
          <h1 className="text-xl font-semibold mb-3">
            Digital Marketing Agency
          </h1>

          <p className="mb-3 text-sm">
            हम आपके business को online grow करने में मदद करते हैं — SEO, Ads और
            Social Media के साथ।
          </p>

          <div>
            <p className="font-medium">
              Phone:
              <span className="font-normal ml-1"> +91 7080445746</span>
            </p>

            <p className="font-medium">
              Email:
              <span className="font-normal ml-1"> cybrsfer@gmail.com</span>
            </p>
          </div>
        </div>

        {/* Useful Links */}
        <div
          data-aos="fade-right"
          data-aos-delay="300"
          className="mt-10 md:mt-0"
        >
          <h1 className="font-medium text-lg mb-2">Quick Links</h1>

          <ul>
            <li className="mb-2 arrow">
              <a href="#" className="text-zinc-700">
                Home
              </a>
            </li>

            <li className="mb-2 arrow">
              <a href="#about" className="text-zinc-700">
                About
              </a>
            </li>

            <li className="mb-2 arrow">
              <a href="#services" className="text-zinc-700">
                Services
              </a>
            </li>

            <li className="mb-2 arrow">
              <a href="#contact" className="text-zinc-700">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div
          data-aos="fade-right"
          data-aos-delay="700"
          className="mt-10 md:mt-0"
        >
          <h1 className="font-medium text-lg mb-2">Follow Us</h1>

          <p className="text-sm">
            हमसे जुड़े रहें और digital marketing से जुड़ी updates पाते रहें।
          </p>

          <div className="flex justify-between pr-5 mt-5">
            <div className="border border-zinc-400 p-2 rounded-full hover:border-orange-600 hover:text-orange-600 cursor-pointer">
              <IoLogoTwitter size={"26px"} />
            </div>
            <div className="border border-zinc-400 p-2 rounded-full hover:border-orange-600 hover:text-orange-600 cursor-pointer">
              <IoLogoFacebook size={"26px"} />
            </div>
            {/* <div className="border border-zinc-400 p-2 rounded-full hover:border-orange-600 hover:text-orange-600 cursor-pointer">
            <IoLogoInstagram size={"26px"} />
          </div> */}
            <a
              href="https://www.instagram.com/cybrsfer?igsh=MTlnZjNjc2IzcnhqZQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="border border-zinc-400 p-2 rounded-full hover:border-orange-600 hover:text-orange-600 inline-block"
            >
              <IoLogoInstagram size={"26px"} />
            </a>

            <a
              href=" https://www.linkedin.com/company/cybrsfer/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-zinc-400 p-2 rounded-full hover:border-orange-600 hover:text-orange-600 inline-block"
            >
              <IoLogoFacebook size={"26px"} />
            </a>
          </div>
        </div>
      </div>
      <div className="disclaimer_footer w-full mt-12 mb-10 md:mt-16 md:pl-20 md:pr-20 pl-2 pr-2 text-[14px]">
        <p className="pl-5 pr-5 text-justify">
          {" "}
          Disclaimer: CYBRSFER is an evolving information and service provider.
          While we endeavor to provide accurate and up-to-date content, users
          acknowledge that information may change and should be verified
          independently. CYBRSFER offers IT solutions and services, aiming for
          precision and reliability. However, we do not guarantee absolute
          accuracy. Users are encouraged to verify information for their
          specific needs. CYBRSFER is not liable for any consequences arising
          from the use of information or services provided. We reserve the right
          to modify, update, or discontinue our platform and services at our
          discretion. Links to third-party websites are provided for convenience
          and do not imply endorsement.
        </p>
      </div>

      <hr className="mb-5" />
      <div className="w-full flex align-middle justify-center mt-15 pb-5 items-center transition duration-300 ease-in-out">
        <h1>
          {" "}
          &copy; {new Date().getFullYear()} CYBRSFER. All rights reserved.{" "}
        </h1>
      </div>
    </div>
  );
};

export default Footer;
