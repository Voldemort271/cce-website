"use client";

import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
import SectionHeader from "../../components/section-header";
import Waves from "../../components/waves";
import MOUsTable from "../../components/programmes/mous";
import ActivitiesTable from "../../components/programmes/activities";
import VisitsTable from "../../components/programmes/visits";

interface Props {
  children: ReactNode;
  active: number;
  activate: number;
  setActive: Dispatch<SetStateAction<number>>;
}

const TabButton = ({ children, active, activate, setActive }: Props) => {
  return (
    <button
      className={`w-full md:w-1/2 px-5 sm:px-12 py-2.5 rounded-full ${
        !(active === activate)
          ? "bg-slate-400"
          : "bg-gradient-to-r from-sky-500 to-teal-500"
      } text-slate-100 shadow-zinc-900/[0.1] shadow-xl uppercase text-base sm:text-xl font-medium transition-all`}
      onClick={() => {
        setActive(activate);
      }}
    >
      {children}
    </button>
  );
};

const Programmes = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="relative">
      <SectionHeader title={"Programmes"} />
      <div className=" bg-slate-100 w-full py-24">
        <div className="bg-slate-100 px-5 sm:px-12 lg:px-24 min-h-96">
          <div className="w-full h-full p-2.5 px-5 flex flex-col md:flex-row gap-5 ">
            {["MOU's", "Activities", "School Visits"].map((el, i) => (
              <TabButton
                active={active}
                activate={i}
                setActive={setActive}
                key={i}
              >
                {el}
              </TabButton>
            ))}
          </div>
          <div className="bg-slate-200 mt-2.5 px-2.5 sm:px-5 py-12 my-12 rounded-md">
            {active === 0 ? (
              <MOUsTable />
            ) : active === 1 ? (
              <ActivitiesTable />
            ) : (
              <VisitsTable />
            )}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -bottom-10 md:-bottom-24 left-1/2 -translate-x-1/2 rotate-180 z-10">
            <Waves color={"#f1f5f9"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programmes;
