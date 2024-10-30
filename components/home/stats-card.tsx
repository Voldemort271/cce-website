import React from "react";

const StatsCard = () => {
  return (
    <div className="-translate-y-36 flex flex-row justify-center">
      <div className="px-12 lg:px-24 py-12 bg-slate-100/[0.7] sm:min-w-96 border border-slate-100/[0.5] rounded-2xl shadow-2xl shadow-slate-900/[0.2] backdrop-blur-md grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-12 md:gap-24">
        <div className="text-center space-y-1">
          <div className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-sky-600 to-teal-600 inline-block text-transparent bg-clip-text">
            25
          </div>
          <div className="text-lg md:text-xl text-slate-600 font-medium w-full">
            Workshops
          </div>
        </div>
        <div className="text-center space-y-1">
          <div className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-sky-600 to-teal-600 inline-block text-transparent bg-clip-text">
            1700
          </div>
          <div className="text-lg md:text-xl text-slate-600 font-medium w-full">
            Registrations
          </div>
        </div>
        <div className="text-center space-y-1">
          <div className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-sky-600 to-teal-600 inline-block text-transparent bg-clip-text">
            150
          </div>
          <div className="text-lg md:text-xl text-slate-600 font-medium w-full">
            Faculty
          </div>
        </div>
        <div className="text-center space-y-1">
          <div className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-sky-600 to-teal-600 inline-block text-transparent bg-clip-text">
            10
          </div>
          <div className="text-lg md:text-xl text-slate-600 font-medium w-full">
            Awards
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
