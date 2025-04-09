import React from "react";
import Waves from "../../components/waves";
import SectionHeader from "../../components/section-header";
import PersonCard from "../../components/people/person-card";
import Tushar from "../../public/tushar1.jpg";
import Pavin from "../../public/pavin.jpg";
import Rakesh from "../../public/Rakesh Kumar_1.jpg";
import Ram from "../../public/ramlal.jpg";
import Aakash from "../../public/aakash.jpg";
import Amit from "../../public/Amit kumar.jpg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Person {
  name: string;
  position: string;
  mail?: string;
  img?: string | StaticImport;
}

const people: Person[] = [
  {
    name: "Tushar Jain",
    position: "Head CCE, IIT Mandi",
    mail: "headcce@iitmandi.ac.in",
    img: Tushar,
  },
  {
    name: "Pavin Samuel",
    position: "Junior Superintendent",
    mail: "pavin@iitmandi.ac.in",
    img: Pavin,
  },
  {
    name: "Aakash Gautam",
    position: "JLA (Tech)",
    mail: "aakashgautam@iitmandi.ac.in",
    img: Aakash,
  },
  {
    name: "Amit Kumar",
    position: "Junior Assistant",
    mail: "amit_kumar@iitmandi.ac.in",
    img: Amit,
  },
  {
    name: "Rakesh Kumar",
    position: "Office Assistant",
    mail: "cceoffice@iitmandi.ac.in",
    img: Rakesh,
  },
  {
    name: "Ram Lal",
    position: "Attendant",
    img: Ram,
  },
];

const PeoplePage = () => {
  return (
    <div className="relative">
      <SectionHeader title={"People"} />
      <div className="w-full py-24">
        <div className="flex flex-col gap-12 bg-slate-100 px-5 md:px-12 lg:px-24 pb-24">
          <div className="flex flex-row justify-center flex-wrap gap-5 scale-105">
            <PersonCard
              name={people[0].name}
              position={people[0].position}
              mail={people[0].mail}
              img={people[0].img}
            />
          </div>
          <div className="flex flex-row justify-center flex-wrap gap-5">
            {people.slice(1).map((person) => (
              <PersonCard
                key={person.name}
                name={person.name}
                position={person.position}
                mail={person.mail}
                img={person.img}
              />
            ))}
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
