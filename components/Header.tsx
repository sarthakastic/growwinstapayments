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
    <div>
      <Link href={previousUrl}>back</Link>
      <h4 className="text-red-400">{heading}</h4>
    </div>
  );
};

export default Header;
