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
          <center>
            One month Residential Program on AI & Robotics (PRAYAS 3.0)
          </center>
          <div className="flex justify-around">
            <Link
              href={
                "https://www.iitmandi.ac.in/pdf/announcements/PRAYAS_3_Brochure.pdf"
              }
              style={{ color: "blue" }}
              target="_blank"
            >
              <center>Brochure</center>
            </Link>
            <Link
              href={"https://bsates.tech/prayas.html"}
              style={{ color: "blue" }}
              target="_blank"
            >
              <center>Link</center>
            </Link>
          </div>
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
            Masterclass on Statistical Data Analytics & Deep Learning (23 – 27 June 2025)
          </center>

          <Link
            href={
              "https://drive.google.com/file/d/1FJSxgLT7KQqiRbGKpTTksIgr5RIYwNg-/view?usp=sharing"
            }
            target={"_blank"}
            style={{ color: "blue" }} 
          >
            <center>Poster</center>
          </Link>

          <Link
            href={
              "https://research.iitmandi.ac.in/masterclass/"
            }
            target={"_blank"}
            style={{ color: "blue" }}
          >
            <center>Website</center>
          </Link>
        </div>

        
        
      </div>
    </div>
  );
};

export default ActivitiesSection;
