import Header from "@/components/home/header";
import StatsCard from "@/components/home/stats-card";
import InfoSection from "@/components/home/info-section";
import AboutCard from "@/components/home/about-card";
import ActivitiesSection from "@/components/home/activities-section";
import Waves from "@/components/waves";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <StatsCard />
      <div className="flex flex-col justify-center items-center gap-24 p-5 lg:p-12">
        <InfoSection />
        <AboutCard />
      </div>
      <div className="w-full py-24">
        <Waves color={"#E2E8F0"} />
        <div className="bg-slate-200 relative">
          <div className="py-12 px-24 flex flex-col justify-center items-center">
            <ActivitiesSection />
          </div>
          <div className="absolute -bottom-10 md:-bottom-24 left-1/2 -translate-x-1/2 rotate-180 z-10">
            <Waves color={"#E2E8F0"} />
          </div>
        </div>
      </div>
    </div>
  );
}
