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
    <div className="flex  p-2 border-b border-primary items-center ">
      <Link
        className=" w-fit border border-primary text-primary hover:bg-primaryForeground flex items-center p-1  justify-between "
        href={previousUrl}
      >
        <ArrowLeft />
      </Link>
      <h4 className="w-full text-center font-bold  text-primary  text-xl">
        {heading}
      </h4>
    </div>
  );
};

export default Header;
