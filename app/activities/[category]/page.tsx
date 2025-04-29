"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SectionHeader from "../../../components/section-header";
import { activities as data } from "../../../lib/activities";
import ActivityCard from "@/components/programmes/activity-card";
import Waves from "@/components/waves";

function toTitleCase(str: string) {
  return str.replace(
    /\w\S*/g,
    (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}

const MOUs = () => {
  const path = usePathname();
  const [activities, setActivities] = useState<
    {
      category: string;
      name: string;
      details: string;
      Link1: string;
      Link2: string;
    }[]
  >([]);

  useEffect(() => {
    setActivities(
      data.filter((activity) => activity.category === path.split("/")[2])
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
            {activities.map((activity, index) =>
              activity.category != "exposure-gateway-day" ? (
                <ActivityCard
                  name={activity.name}
                  desc={activity.details}
                  Link1={activity.Link1}
                  Link2={activity.Link2}
                  key={index}
                />
              ) : (
                <h1 style={{ fontSize: "18px" }} key={index}>
                  <b>The Exposure Gateway Days programme</b> at <b>IIT Mandi</b>{" "}
                  is a unique opportunity for students, faculty/staff of
                  educational institutions to experience the world-class campus,
                  cutting-edge research, and innovation happening at one of
                  India&apos;s premier technological institutes. We invite
                  schools/colleges/universities from across the region and
                  beyond to visit IIT Mandi and engage in an enriching
                  experience.
                  <br />
                  <br />
                  <b>
                    Interest Form (Google Form) :{"  "}
                    <a
                      href="https://forms.gle/4Ec7iDkXmEVti5BS9"
                      className="hover:underline"
                      style={{ color: "blue" }}
                      target="_blank"
                    >
                      Link
                    </a>
                  </b>
                  <br />
                  <br />
                  <br />
                  <b>Note :-</b>
                  <div className="m-7">
                    1. Happens twice a month only, usually on 1st and 3rd
                    mondays of every month. <br />
                    2. All requests are entertained through Google Form only;
                    unsolicited Email requests for visits are not
                    accepted/entertained. <br />
                    3. Your request for visit on a specific day may be rejected
                    or postponed, based on the slots availability or for
                    administrative reasons. <br />
                    4. It is a non-commercial social initiative by CCE, IIT
                    Mandi. Neither the CCE nor the IIT Mandi hold any
                    responsibility regarding the campus visit. <br />
                    5. The school bears all the responsibility and cost
                    regarding and related to the school visit.
                  </div>
                  <div>
                    <b>
                      <br />
                      Who Can Participate?
                      <br />
                      <br />
                    </b>
                    The Exposure Gateway Day is open to: <br />
                    <div className="m-7">
                      1. <b>Schools</b>: Students from 6th to 12th classes.{" "}
                      <br />
                      2. <b>Colleges/Universities</b>: Undergraduate &
                      Postgraduate students.
                    </div>
                  </div>
                  <div>
                    <b>
                      <br />
                      Contact Information
                      <br />
                    </b>

                    <div className="m-7">
                      1. <b>Email</b>: cceoffice@iitmandi.ac.in
                      <br />
                      2. <b>Address</b>: CCE Office, IIT Mandi, Mandi, Himachal
                      Pradesh, India - 175075
                    </div>
                  </div>
                </h1>
              )
            )}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -bottom-10 md:-bottom-24 left-1/2 -translate-x-1/2 rotate-180 z-10">
            <Waves color={"#F1F5F9"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MOUs;
