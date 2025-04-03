import { facilities } from "@/lib/facilities";
import SectionHeader from "@/components/section-header";
import Waves from "@/components/waves";
import Image from "next/image";

const Facilities = () => {
  return (
    <div>
      <SectionHeader title="Facilities" />
      <center>
        <div
          className="w-full py-12 grid grid-cols-1 md:grid-cols-2"
          style={{ marginBottom: "150px" }}
        >
          {facilities.map((elem, idx) => (
            <div className="w-full py-12" key={idx}>
              <Image
                src={elem.imageLink}
                alt={elem.mainText}
                className="w-[450px] h-[253px] rounded-xl"
                width={500}
                height={300}
              />
              <h1 style={{ fontSize: "35px", marginTop: "25px" }}>
                <b>{elem.mainText}</b>
              </h1>
              <p
                style={{
                  color: "gray",
                  margin: "15px",
                  paddingLeft: "45px",
                  paddingRight: "45px",
                }}
              >
                {elem.subText}
              </p>
            </div>
          ))}
        </div>
      </center>
      <div className="relative">
        <div className="absolute bottom-[65px] md:-bottom-1 left-1/2 -translate-x-1/2 rotate-180 z-10">
          <Waves color={"#F1F5F9"} />
        </div>
      </div>
    </div>
  );
};

export default Facilities;
