"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SectionHeader from "../../../components/section-header";
import { activities as data } from "../../../lib/activities";
import ActivityCard from "@/components/programmes/activity-card";

function toTitleCase(str: string) {
  return str.replace(
    /\w\S*/g,
    (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase(),
  );
}

const MOUs = () => {
  const path = usePathname();
  const [activities, setActivities] = useState<
    { category: string; name: string; details: string }[]
  >([]);

  useEffect(() => {
    setActivities(
      data.filter((activity) => activity.category === path.split("/")[2]),
    );
  }, [path]);

  return (
    <div className="relative">
      <SectionHeader
        title={toTitleCase(path.split("/")[2].replaceAll("-", " "))}
      />
      <div className="w-full py-24">
        <div className="px-5 sm:px-12 lg:px-24 min-h-96">
          <div className="bg-slate-100 mt-2.5 px-2.5 sm:px-5 py-12 my-12 rounded-md flex gap-5 flex-wrap">
            {activities.map((activity, index) => (
              <ActivityCard
                name={activity.name}
                desc={activity.details}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -bottom-10 md:-bottom-24 left-1/2 -translate-x-1/2 rotate-180 z-10 bg-none"></div>
        </div>
      </div>
    </div>
  );
};

export default MOUs;
