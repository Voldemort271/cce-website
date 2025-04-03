import React from "react";
import Link from "next/link";

const ActivitiesSection = () => {
  return (
    <div className="flex w-full max-w-[1200px] flex-col items-center gap-5">
      <div className="font-raleway text-2xl sm:text-4xl font-bold bg-gradient-to-r from-sky-600 to-teal-600 inline-block text-transparent bg-clip-text">
        <center>Current Activities</center>
      </div>
      <div className="w-full my-5 flex flex-wrap justify-center gap-5">
        <div className="bg-slate-300 rounded-md p-5 min-w-72 items-center">
          <center>
            A Five-day GIAN course on DATA-BASED SYSTEMS AND CONTROL at IIT
            Mandi
          </center>
          <div className="flex justify-center">
            <Link
              href={
                "https://sites.google.com/iitmandi.ac.in/data-based-systems-control/home"
              }
              target="_blank"
              style={{ color: "blue" }}
              className="mr-7"
            >
              <center>Website</center>
            </Link>
            <Link
              href={"https://www.youtube.com/@cce-iitmandi"}
              target="_blank"
              style={{ color: "blue" }}
            >
              <center>Livestream</center>
            </Link>
          </div>
        </div>

        <div className="bg-slate-300 rounded-md p-5 min-w-72">
          <center>
            GIAN course on Wetting, Capillarity, and Phase Transitions:
            Experiments and Simulations.
          </center>

          <Link
            href={
              "https://www.iitmandi.ac.in/pdf/announcements/GIAN_course_brochure.pdf"
            }
            target={"_blank"}
            style={{ color: "blue" }}
          >
            <center>Brochure</center>
          </Link>
        </div>
        <div className="bg-slate-300 rounded-md p-5 min-w-72">
          <center>
            A Hands-on Workshop on Composites Design and Manufacturing
          </center>

          <Link
            href="https://research.iitmandi.ac.in/cdpmhm2025/doc/5D%20CDM%20HW%202025%20Brochure.pdf"
            style={{ color: "blue" }}
            target="_blank"
          >
            <center>Brochure</center>
          </Link>
        </div>
        <div className="bg-slate-300 rounded-md p-5 min-w-72">
          <center>
            One month Residential Program on AI & Robotics (PRAYAS 3.0)
          </center>

          <Link
            href={
              "https://www.iitmandi.ac.in/pdf/announcements/PRAYAS_3_Brochure.pdf"
            }
            style={{ color: "blue" }}
            target="_blank"
          >
            <center>Brochure</center>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesSection;
