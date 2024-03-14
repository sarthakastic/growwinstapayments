import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = ({
  heading,
  previousUrl,
}: {
  heading: string;
  previousUrl: string;
}) => {
  return (
    <div className="bg-white flex mt-10  p-2 border-b items-center ">
      <Link
        className="text-black w-fit border flex items-center p-1  justify-between "
        href={previousUrl}
      >
        <ArrowLeft />
      </Link>
      <h4 className="w-full text-center font-bold text-black text-xl">
        {heading}
      </h4>
    </div>
  );
};

export default Header;
