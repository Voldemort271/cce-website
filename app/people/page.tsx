import React from "react";
import Waves from "../../components/waves";
import SectionHeader from "../../components/section-header";
import PersonCard from "../../components/people/person-card";
import HeaderPic from "../../public/header.jpg";

const PeoplePage = () => {
  return (
    <div className="relative">
      <SectionHeader title={"Meet the staff"} />
      <div className="w-full py-24">
        <div className="flex flex-col gap-12 bg-slate-100 px-5 md:px-12 lg:px-24 pb-24">
          <div className="flex flex-row justify-center flex-wrap gap-5 scale-105">
            <PersonCard
              name="Person Name"
              position={"Designation"}
              mail={"email"}
              img={HeaderPic}
            />
          </div>
          <div className="flex flex-row justify-center flex-wrap gap-5">
            <PersonCard
              name="Person Name"
              position={"Designation"}
              mail={"email"}
              img={HeaderPic}
            />
            <PersonCard
              name="Person Name"
              position={"Designation"}
              mail={"email"}
              img={HeaderPic}
            />
            <PersonCard
              name="Person Name"
              position={"Designation"}
              mail={"email"}
              img={HeaderPic}
            />
            <PersonCard
              name="Person Name"
              position={"Designation"}
              mail={"email"}
              img={HeaderPic}
            />
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

export default PeoplePage;
