import React from "react";
import Image from "next/image";
import { FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";
import HeaderPic from "../public/header.jpg";

const Footer = () => {
  return (
    <div className="relative w-screen -mt-24 bg-gradient-to-br from-sky-900/[0.7] to-teal-900/[0.7]">
      <Image
        src={HeaderPic}
        alt={"IIT Mandi"}
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <div className="w-full h-10 md:h-24"></div>
      <div className="flex flex-col px-12 pt-24 pb-5 gap-12 w-full">
        <div className="flex flex-col md:flex-row gap-24 sm:gap-5 justify-center items-start text-slate-100">
          <div className="w-full max-w-screen-sm flex-col gap-2.5 items-center justify-center text-center">
            <div className="font-raleway text-4xl font-bold">Contact Us</div>
            <div className="text-xl">
              Centre for Continuing Education, <br />
              Indian Institute of Technology Mandi
              <br />
              Himachal Pradesh -175075 <br />
              <a
                href="mailto:cceoffice@iitmandi.ac.in"
                className="hover:underline"
              >
                Email: cceoffice@iitmandi.ac.in
              </a>{" "}
              <br />
              Phone: 01905-267742,267788
              <br />
              <a
                href="https://www.google.com/maps?q=31.781483,76.994398"
                target="_blank"
                style={{ textDecoration: "underline" }}
              >
                Find CCE on Google Maps
              </a>
            </div>
            <div className="flex justify-center gap-6 mt-4 text-2xl">
              <a
                href="https://www.linkedin.com/company/cce-iitmandi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-white hover:opacity-75 transition" />
              </a>
              <a
                href="https://www.youtube.com/@cce-iitmandi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="text-white hover:opacity-75 transition" />
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-white hover:opacity-75 transition" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-slate-3 text-center">
          <div className="font-medium text-slate-800">
            Copyright &copy; CCE, IIT Mandi, 2025. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
