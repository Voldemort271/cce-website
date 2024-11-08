import React from "react";
import Link from "next/link";

const ActivitiesSection = () => {
  return (
    <div className="flex w-full max-w-[1200px] flex-col items-center gap-5">
      <div className="font-raleway text-4xl sm:text-6xl font-bold bg-gradient-to-r from-sky-600 to-teal-600 inline-block text-transparent bg-clip-text">
        Current Activities
      </div>
      <div className="w-full my-5 flex flex-wrap justify-center gap-5">
        <Link
          href={
            "https://drive.google.com/file/d/15_oDar0g0fkG68BAc7E9M4rEY8wjfXZx/view?usp=sharing"
          }
          target="_blank"
        >
          <div className="bg-slate-300 rounded-md p-5 min-w-72">
            Digital Foundations: Mastering OS, Networks & IoT
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ActivitiesSection;
