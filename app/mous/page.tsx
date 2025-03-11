import React from "react";
import SectionHeader from "../../components/section-header";
import Waves from "../../components/waves";
import MOUsTable from "../../components/programmes/mous";

const MOUs = () => {
  return (
    <div className="relative">
      <SectionHeader title={"MOUs"} />
      <div className="w-full py-24">
        <div className="px-5 sm:px-12 lg:px-24 min-h-96">
          <div className="bg-slate-200 mt-2.5 px-2.5 sm:px-5 py-12 my-12 rounded-md">
            <MOUsTable />
          </div>
        </div>
        <div className="relative">
          <div className="absolute -bottom-10 md:-bottom-24 left-1/2 -translate-x-1/2 rotate-180 z-10 bg-none">
            <Waves color={"#f1f5f9"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MOUs;
