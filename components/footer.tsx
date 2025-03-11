import React from "react";
import Image from "next/image";
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
          <div className=" w-full max-w-screen-sm flex-col gap-2.5 items-center justify-center text-center">
            <div className="font-raleway text-4xl font-bold">Contact Us</div>
            <div className="text-xl">
              Centre for Continuing Education, <br />
              Indian Institute of Technology Mandi
              <br />
              Himachal Pradesh -175075 <br />
              Email: cceoffice@iitmandi.ac.in <br />
              Phone: 01905-267742,267788
              <br />
            </div>
          </div>
        </div>
        <div className="text-slate-3 text-center">
          <div className="font-medium text-slate-800">
            Copyright &copy; IIT Mandi, 2025. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
