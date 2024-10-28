import React from "react";

const AboutCard = () => {
  return (
    <div className="px-5 sm:px-12 md:px-24 py-12 flex flex-col md:flex-row gap-12 items-center">
      <div className="flex flex-col gap-5 flex-shrink">
        <div className="font-raleway text-4xl sm:text-6xl font-bold bg-gradient-to-r from-sky-600 to-teal-600 inline-block text-transparent bg-clip-text">
          About CCE, IIT Mandi
        </div>
        <div className="max-w-screen-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam
          pretium velit, a dictum quam faucibus non. Nam a sapien imperdiet,
          vehicula augue et, ultrices ex. Sed ut nunc sit amet sem ultricies
          viverra a eu turpis. Praesent congue lobortis gravida. Nam ac tempus
          orci. Aliquam non aliquet metus. Maecenas sit amet turpis dignissim
          metus dapibus porttitor. Suspendisse potenti. Etiam rutrum diam vitae
          ex finibus, eget facilisis diam ornare. Ut consectetur ex non interdum
          imperdiet. Duis et orci dui. Aliquam in tortor odio. Mauris vitae dui
          eleifend diam ornare molestie sed sed lectus. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Sed aliquam pretium velit, a dictum
          quam faucibus non. Nam a sapien imperdiet, vehicula augue et, ultrices
          ex. Sed ut nunc sit amet sem ultricies viverra a eu turpis. Praesent
          congue lobortis gravida.
        </div>
        <button className="w-fit px-12 py-2.5 mt-5 rounded-full bg-gradient-to-r from-sky-500 to-teal-500 text-slate-100 shadow-zinc-900/[0.2] shadow-xl uppercase text-lg font-medium hover:scale-105 transition-all">
          our school visits
        </button>
      </div>
      <div className="flex-shrink-0 w-96 md:w-64 lg:w-96 h-96 md:h-64 lg:h-96 relative rounded-full bg-zinc-400 transition-all hover:scale-110"></div>
    </div>
  );
};

export default AboutCard;
