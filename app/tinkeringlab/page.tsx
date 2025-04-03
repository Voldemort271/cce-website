import SectionHeader from "@/components/section-header";
import Waves from "@/components/waves";
import Image from "next/image";
import Rahul from "../../public/Rahul-Vaish.png";

const TinkeringLab = () => {
  return (
    <div>
      <SectionHeader title="Tinkering Lab" />

      <div
        className="w-full py-12 flex flex-col md:flex-row items-center justify-between gap-10 px-10"
        style={{ marginBottom: "250px" }}
      >
        {/* Left Content */}
        <div className="md:w-2/3">
          <h1 className="text-2xl font-bold">About</h1>
          <p className="mt-2 text-lg leading-relaxed">
            IIT Mandi’s Tinkering Lab is an innovation hub that encourages
            creativity and problem-solving through hands-on, exploratory
            activities, providing students with resources and mentorship to
            ideate, design, and prototype tangible solutions. It aims to foster
            a culture of innovation and equip students with practical skills
            beyond theoretical knowledge. Tinkering Lab provides a space for
            students to experiment, learn from failures, and develop their
            inventive mindset through hands-on activities, by fostering a
            multidisciplinary approach to problem-solving.
          </p>
        </div>

        {/* Right Content (Coordinator) */}
        <div className="md:w-1/3 flex flex-col items-center text-center">
          <div className="bg-yellow-400 rounded-md pt-2 ">
            <h1 className="text-2xl relative bottom-[] ">
              Faculty Coordinator
            </h1>

            <Image
              src={Rahul}
              alt="Rahul Vaish"
              className="w-[250px] h-[300px] object-cover rounded-lg mt-2"
              width={250}
              height={300}
            />
          </div>
          <a
            href="https://faculty.iitmandi.ac.in/~rahul/"
            target="_blank"
            className="mt-2 text-blue-600 hover:underline relative top-2"
          >
            Dr.Rahul Vaish <br />
            Professor SCEE, IIT Mandi
          </a>
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

export default TinkeringLab;
