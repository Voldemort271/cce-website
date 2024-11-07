import React from "react";
import SectionHeader from "@/components/section-header";
import Waves from "@/components/waves";

const ContactsPage = () => {
  return (
    <div className="relative">
      <SectionHeader title={"Programmes"} />
      <div className="w-full py-24">
        <div className="px-5 sm:px-12 lg:px-24 pt-12 pb-24 flex flex-col justify-center items-center">
          <div className="font-raleway text-4xl sm:text-6xl font-bold bg-gradient-to-r from-sky-600 to-teal-600 inline-block text-transparent bg-clip-text">
            Contact CCE, IIT Mandi
          </div>
          <div className="py-5 px-12 mt-5 bg-slate-200 rounded-md text-lg font-medium text-center">
            My address
            <br />
            Hello, world institute of technology
            <br />
            Kamand, Mandi 175005, H.P.
            <br />
          </div>
        </div>
        <div className="relative">
          <div className="absolute -bottom-10 md:-bottom-24 left-1/2 -translate-x-1/2 rotate-180 z-10 bg-none">
            <Waves color={"#f1f5f9"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
