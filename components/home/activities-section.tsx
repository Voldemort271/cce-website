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
          <center>Digital Foundations: Mastering OS, Networks & IoT</center>

          <Link
            href={
              "https://drive.google.com/file/d/15_oDar0g0fkG68BAc7E9M4rEY8wjfXZx/view?usp=sharing"
            }
            target="_blank"
            style={{ color: "blue" }}
          >
            <center>Link</center>
          </Link>
          <Link
            href={
              "https://drive.google.com/file/d/15_oDar0g0fkG68BAc7E9M4rEY8wjfXZx/view?usp=sharing"
            }
            target="_blank"
            style={{ color: "blue" }}
          >
            <center>Download Brochure</center>
          </Link>
        </div>
        <div className="bg-slate-300 rounded-md p-5 min-w-72 items-center">
          <center>
            Hands-on training on High-Performance Scientific Computing (HPSC)
          </center>
          <Link
            href={
              "https://drive.google.com/file/d/1fEc6SkCx3dbNiAq0cYtDgi6bl2pwa3AW/view?usp=sharing"
            }
            target="_blank"
            style={{ color: "blue" }}
          >
            <center> Link</center>
          </Link>
          <Link
            href={
              "https://drive.google.com/file/d/1fEc6SkCx3dbNiAq0cYtDgi6bl2pwa3AW/view?usp=sharing"
            }
            target="_blank"
            style={{ color: "blue" }}
          >
            <center>Download Brochure</center>
          </Link>
        </div>
        <div className="bg-slate-300 rounded-md p-5 min-w-72">
          <center>Hands on IoT- Workshop</center>

          <Link
            href={
              "https://drive.google.com/file/d/1aOCGyUVDmS4w5sy7Rm7E95h6OHBKUckY/view?usp=drive_link"
            }
            target={"_blank"}
            style={{ color: "blue" }}
          >
            <center>Link</center>
          </Link>
          <Link
            href={
              "https://drive.google.com/file/d/1aOCGyUVDmS4w5sy7Rm7E95h6OHBKUckY/view?usp=drive_link"
            }
            target={"_blank"}
            style={{ color: "blue" }}
          >
            <center>Download Brochure</center>
          </Link>
        </div>
        <div className="bg-slate-300 rounded-md p-5 min-w-72">
          <center>
            Mastering 3D Printing: From Basics to Advanced Techniques
          </center>

          <Link href={"/"} style={{ color: "blue" }}>
            <center>Link</center>
          </Link>
          <Link href={"/"} style={{ color: "blue" }}>
            <center>Download Brochure</center>
          </Link>
        </div>
        <div className="bg-slate-300 rounded-md p-5 min-w-72">
          <center>
            One month Residential Program on AI & Robotics (PRAYAS 3.0)
          </center>

          <Link
            href={"https://bsates.tech/prayas.html"}
            style={{ color: "blue" }}
          >
            <center>Link</center>
          </Link>
          <Link
            href={"https://bsates.tech/prayas.html"}
            style={{ color: "blue" }}
          >
            <center>Download Brochure</center>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesSection;
