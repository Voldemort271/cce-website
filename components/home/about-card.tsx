import React from "react";

const AboutCard = () => {
  return (
    <div className="px-5 sm:px-12 md:px-24 py-12 flex flex-col lg:flex-row gap-12 items-center">
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
      </div>
      <div className="flex-shrink-0 w-full md:w-64 lg:w-96 aspect-square relative rounded-full bg-zinc-400 transition-all hover:scale-110"></div>
    </div>
  );
};

export default AboutCard;
