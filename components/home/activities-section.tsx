import React from "react";
import Link from "next/link";

const ActivitiesSection = () => {
  return (
    <div className="flex w-full max-w-[1200px] flex-col items-center gap-5">
      <div className="font-raleway text-2xl sm:text-4xl font-bold bg-gradient-to-r from-sky-600 to-teal-600 inline-block text-transparent bg-clip-text">
        <center>Current Activities</center>
      </div>
      <div className="w-full my-5 flex flex-wrap justify-center gap-5">
        <div className="bg-slate-300 rounded-md p-5 min-w-72">
          <center className="">
            GIAN Course: Elements of Smart Structures
          </center>
          <center className="">
            Prof. Vishal Singh Chauhan, SMME, IIT Mandi (December 15-20, 2025)
          </center>
          <div className="flex justify-around">
            <Link
              href={"https://research.iitmandi.ac.in/eoss2025/"}
              style={{ color: "blue" }}
              target="_blank"
            >
              <center>Website</center>
            </Link>
            <Link
              href={
                "https://research.iitmandi.ac.in/eoss2025/files/Poster_stc.pdf"
              }
              style={{ color: "blue" }}
              target="_blank"
            >
              <center>Brochure</center>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesSection;
