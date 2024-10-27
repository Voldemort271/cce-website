import React from "react";
import Waves from "@/components/waves/waves";
import HeaderPic from "@/public/header.jpg";
import Image from "next/image";

const Header = () => {
  return (
    <div className="relative w-screen h-[80vh] bg-gradient-to-br from-sky-800/[0.5] to-teal-800/[0.5] flex flex-col justify-center items-center">
      <Image
        src={HeaderPic}
        alt={"IIT Mandi"}
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      hello world!
      <Waves />
    </div>
  );
};

export default Header;
