"use client";

import useStore from "@/store/store";
import Image from "next/image";
import React, { useEffect } from "react";

const Navbar = () => {
  const tp = useStore((state) => state.merchantName);
  const tl = useStore((state) => state.merchantLogo);
  const getTheme = useStore((state) => state.getTheme);
  useEffect(() => {
    getTheme();
  }, []);

  return (
    <div className="flex justify-center items-center gap-5 bg-white border-b-2  ">
      <Image src={tl} alt="image" width={20} height={20} />
      <p className="text-black font-bold py-2 ">{tp}</p>
    </div>
  );
};

export default Navbar;
