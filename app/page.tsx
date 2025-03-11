import Header from "../components/home/header";
import InfoSection from "../components/home/info-section";
import AboutCard from "../components/home/about-card";
import ActivitiesSection from "../components/home/activities-section";
import Waves from "../components/waves";
import DocsSection from "@/components/home/documents-section";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      {/*<StatsCard />*/}
      {/* <div className="p-24 flex flex-col justify-center items-center">
        <DocsSection />
      </div> */}
      <div className="w-full pb-24">
        {/* <Waves color={"#E2E8F0"} /> */}
        <div className="relative">
          <div className="py-12 px-24 flex flex-col justify-center items-center">
            <ActivitiesSection />
          </div>
          <div className="absolute -bottom-10 md:-bottom-24 left-1/2 -translate-x-1/2 z-10">
            <Waves color={"#E2E8F0"} />
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="bg-slate-200 flex flex-col justify-center items-center gap-24 p-5 lg:p-12 mb-24">
          <InfoSection />
        </div>
        <div className="absolute -bottom-10 md:-bottom-24 left-1/2 rotate-180 -translate-x-1/2 z-10">
          <Waves color={"#E2E8F0"} />
        </div>
      </div>
      <div className="relative flex flex-col justify-center items-center p-5 lg:p-12 mb-24">
        <AboutCard />
      </div>
      <div className="w-full">
        <div className="absolute -bottom-10 md:-bottom-24 left-1/2 -translate-x-1/2 rotate-180 z-10">
          <Waves color={"#E2E8F0"} />
        </div>
      </div>
    </div>
  );
}
