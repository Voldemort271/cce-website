import React from "react";
import SectionHeader from "@/components/section-header";
import Waves from "@/components/waves";

const ContactsPage = () => {
  return (
    <div className="relative">
      <SectionHeader title={"Contact Us"} />
      <div className="w-full py-24">
        <div className="px-5 sm:px-12 lg:px-24 pt-12 pb-24 flex flex-col justify-center items-center">
          <div className="py-5 px-12 mt-5 bg-slate-200 rounded-md text-lg font-medium text-center">
            Centre for Continuing Education, <br />
            Indian Institute of Technology Mandi
            <br />
            Himachal Pradesh -175075 <br />
            Email:{" "}
            <a href="mailto:cceoffice@iitmandi.ac.in">
              cceoffice@iitmandi.ac.in
            </a>{" "}
            <br />
            Phone: 01905-267742,267788
            <br />
          </div>
          <br />
          {/* Embedded Google Map */}
          <div className="w-full">
            <iframe
              className="w-full h-[300px] sm:h-[400px] md:h-[500px]"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3391.596737550614!2d76.99439799999999!3d31.781483000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDQ2JzUzLjMiTiA3NsKwNTknMzkuOCJF!5e0!3m2!1sen!2sin!4v1741675054098!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -bottom-10 md:-bottom-24 left-1/2 -translate-x-1/2 rotate-180 z-10 bg-none">
            <Waves color={"#f1f5f9"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
