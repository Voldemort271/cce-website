import React from "react";

const InfoSection = () => {
  return (
    <div className="py-12 px-5 sm:px-12 md:px-24 text-center flex flex-col sm:flex-row gap-5 justify-between">
      <div className="w-full sm:w-1/2 flex flex-col items-center">
        <div className="font-raleway text-2xl sm:text-4xl font-bold bg-gradient-to-r from-sky-600 to-teal-600 inline-block text-transparent bg-clip-text">
          Vision
        </div>
        <div className="text-lg text-slate-600 max-w-screen-sm">
          A self-sustainable centre to build a workforce for nation capacity
          building in STEM and management-related fields.
        </div>
      </div>
      <div className="w-full sm:w-1/2 flex flex-col items-center">
        <div className="font-raleway text-2xl sm:text-4xl font-bold bg-gradient-to-r from-sky-600 to-teal-600 inline-block text-transparent bg-clip-text">
          Mission
        </div>
        <div className="text-lg text-slate-600 max-w-screen-sm">
          Provide the learners with an enriching platform to study and get
          exposure to state-of-the-art facilities at IIT Mandi through various
          outreach programmes.
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
