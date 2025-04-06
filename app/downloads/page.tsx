import SectionHeader from "@/components/section-header";
import { forms } from "@/lib/forms";
import Link from "next/link";
import { FaFilePdf } from "react-icons/fa";
import { FaFileWord } from "react-icons/fa";
import Waves from "@/components/waves";
import React from "react";
const Downloads = () => {
  return (
    <div>
      <SectionHeader title="Downloads" />
      <div className="w-full py-12 mb-[150px] flex justify-center">
        <div className="grid grid-cols-9 w-[90%] mx-auto border border-black text-center">
          <div className="border border-black py-2 font-bold">S.No</div>
          <div className="border border-black py-2 font-bold col-span-4">
            Documents
          </div>
          <div className="border border-black py-2 font-bold col-span-2">
            Word Format
          </div>
          <div className="border border-black py-2 font-bold col-span-2">
            PDF Format
          </div>

          {forms.map((elem, idx) => (
            <React.Fragment key={idx}>
              <div className="border border-black py-2">{elem.number}</div>
              <div className="border border-black py-2 col-span-4">
                {elem.name}
              </div>
              <div className="border border-black py-2 col-span-2">
                <Link href={`/${elem.wordLink}`} target="_blank">
                  {elem.wordLink != "#" ? (
                    <center className="scale-150">
                      <FaFileWord />
                    </center>
                  ) : (
                    <center>-</center>
                  )}
                </Link>
              </div>
              <div className="border border-black py-2 col-span-2">
                <Link href={`/${elem.pdfLink}`} target="_blank">
                  <center className="scale-150">
                    <FaFilePdf />
                  </center>
                </Link>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="absolute bottom-[65px] md:-bottom-1 left-1/2 -translate-x-1/2 rotate-180 z-10">
          <Waves color={"#F1F5F9"} />
        </div>
      </div>
    </div>
  );
};

export default Downloads;
