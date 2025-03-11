import React from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import userPic from "../../public/user.png";
import Link from "next/link";

interface Props {
  name: string;
  position: string;
  mail?: string;
  img?: string | StaticImport;
}

const PersonCard = ({ name, position, mail, img }: Props) => {
  return (
    <div className="bg-slate-200 rounded-md lg:px-12 p-5 flex min-w-72 flex-col md:flex-row gap-5 items-center">
      <div className="w-44 sm:w-[12.5rem] aspect-square bg-gradient-to-br from-sky-500 to-teal-500 flex justify-center items-center rounded-full shadow-xl shadow-slate-900/[0.2]">
        <Image
          src={img || userPic}
          width={300}
          height={300}
          alt={name}
          className="object-cover w-44 sm:w-48 aspect-square rounded-full"
        />
      </div>

      <div className="relative flex-col">
        <div className="text-2xl sm:text-4xl font-raleway font-bold text-center sm:text-left">
          {name}
        </div>
        <div className="text-lg font-medium mb-1 text-slate-600 text-center md:text-left">
          {position}
        </div>
        {mail && (
          <div className="text-sky-500 font-medium text-lg sm:text-xl mt-5 text-center md:text-left">
            <Link href={`mailto:${mail}`}>{mail}</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonCard;
