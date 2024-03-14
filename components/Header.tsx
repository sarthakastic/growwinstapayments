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
        className="text-primaryForeground w-fit border border-primaryForeground dark:border-primary dark:text-primary hover:bg-primary dark:hover:bg-primaryForeground flex items-center p-1  justify-between "
        href={previousUrl}
      >
        <ArrowLeft />
      </Link>
      <h4 className="w-full text-center font-bold text-primaryForeground dark:text-primary  text-xl">
        {heading}
      </h4>
    </div>
  );
};

export default Header;
