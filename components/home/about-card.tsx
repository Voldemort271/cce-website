import React from "react";

import HeaderPic from "../../public/header.jpg";
import Image from "next/image";

const AboutCard = () => {
  return (
    <div className="px-5 sm:px-12 md:px-24 py-12 flex flex-col lg:flex-row gap-12 items-center">
      <div className="flex flex-col gap-5 flex-shrink">
        <div className="font-raleway text-4xl sm:text-6xl font-bold bg-gradient-to-r from-sky-600 to-teal-600 inline-block text-transparent bg-clip-text">
          About CCE, IIT Mandi
        </div>
        <div className="max-w-screen-md">
          The Centre for Continuing Education (CCE) was established in early
          2022 at IIT Mandi to dedicatedly cater for the national requirement
          for skilling, up-skilling, and re-skilling of individuals from various
          Govt./Semi Govt. organizations, public and private undertakings,
          research institutions and industries. A variety of continuing
          education programmes have been organized fulfilling the needs for
          nation-building at all levels starting from elementary schools to
          dropouts to working professionals from diverse backgrounds so that
          learners around the globe can get opportunities to gain knowledge
          and/or develop professional growth skill sets. CCE also provides
          necessary logistics, and administrative support to run such programs.
          All institute academic outreach activities like Conferences,
          Workshops, Symposia, Short-term courses, Training programs, and other
          similar activities are executed under the umbrella of the CCE.
        </div>
      </div>
      <div className="flex-shrink-0 w-full md:w-64 lg:w-96 aspect-square relative rounded-full transition-all hover:scale-110">
        <Image
          src={HeaderPic}
          alt={"Pic"}
          className="absolute top-0 left-0 w-full h-full -z-10 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default AboutCard;
