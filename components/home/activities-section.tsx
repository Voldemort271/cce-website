"use client";

import React, { useState } from "react";

const ActivitiesSection = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex w-full max-w-[1200px] flex-col items-center gap-5">
      <div className="font-raleway text-4xl sm:text-6xl font-bold bg-gradient-to-r from-sky-600 to-teal-600 inline-block text-transparent bg-clip-text">
        Activities
      </div>
      <div className="w-full flex flex-col md:flex-row gap-5">
        <button
          className={`w-full md:w-1/2 px-5 sm:px-12 py-2.5 rounded-full ${
            !toggle
              ? "bg-slate-400"
              : "bg-gradient-to-r from-sky-500" + " to-teal-500"
          } text-slate-100 shadow-zinc-900/[0.1] shadow-xl uppercase text-base sm:text-xl font-medium transition-all`}
          onClick={() => {
            setToggle(true);
          }}
        >
          upcoming activities
        </button>
        <button
          className={`w-full md:w-1/2 px-5 sm:px-12 py-2.5 rounded-full ${
            toggle
              ? "bg-slate-400"
              : "bg-gradient-to-r from-sky-500" + " to-teal-500"
          } text-slate-100 shadow-zinc-900/[0.1] shadow-xl uppercase text-base sm:text-xl font-medium transition-all`}
          onClick={() => {
            setToggle(false);
          }}
        >
          past activities
        </button>
      </div>
      {toggle ? (
        <div className="w-full my-5 flex flex-wrap justify-center gap-5">
          <div className="bg-slate-300 rounded-md p-5 min-w-72">upcoming 1</div>
          <div className="bg-slate-300 rounded-md p-5 min-w-72">upcoming 2</div>
          <div className="bg-slate-300 rounded-md p-5 min-w-72">upcoming 3</div>
          <div className="bg-slate-300 rounded-md p-5 min-w-72">upcoming 4</div>
          <div className="bg-slate-300 rounded-md p-5 min-w-72">upcoming 5</div>
        </div>
      ) : (
        <div className="w-full my-5 flex flex-wrap justify-center gap-5">
          <div className="bg-slate-300 rounded-md p-5 min-w-72">past 1</div>
          <div className="bg-slate-300 rounded-md p-5 min-w-72">past 2</div>
          <div className="bg-slate-300 rounded-md p-5 min-w-72">past 3</div>
          <div className="bg-slate-300 rounded-md p-5 min-w-72">past 4</div>
          <div className="bg-slate-300 rounded-md p-5 min-w-72">past 5</div>
        </div>
      )}
    </div>
  );
};

export default ActivitiesSection;
