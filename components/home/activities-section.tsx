import React from "react";

const ActivitiesSection = () => {
  return (
    <div className="flex w-full max-w-[1200px] flex-col items-center gap-5">
      <div className="font-raleway text-4xl sm:text-6xl font-bold bg-gradient-to-r from-sky-600 to-teal-600 inline-block text-transparent bg-clip-text">
        Current Activities
      </div>
      <div className="w-full my-5 flex flex-wrap justify-center gap-5">
        <div className="bg-slate-300 rounded-md p-5 min-w-72">upcoming 1</div>
        <div className="bg-slate-300 rounded-md p-5 min-w-72">upcoming 2</div>
        <div className="bg-slate-300 rounded-md p-5 min-w-72">upcoming 3</div>
        <div className="bg-slate-300 rounded-md p-5 min-w-72">upcoming 4</div>
        <div className="bg-slate-300 rounded-md p-5 min-w-72">upcoming 5</div>
      </div>
    </div>
  );
};

export default ActivitiesSection;
