"use client";

import useThemeStore from "@/store/slices/themeSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const router = useRouter();

  const { merchantLogo, merchantName } = useThemeStore();

  const [hydrated, setHydrated] = useState<boolean>(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return hydrated ? (
    <div className="flex justify-between top-0 p-2 bg-primary  fixed w-full items-center  ">
      <div
        onClick={() => router.push("/")}
        className="flex justify-between gap-5 items-center "
      >
        <Image src={merchantLogo} alt="image" width={20} height={20} />
        <p className="text-primaryForeground font-bold text-xl hover:cursor-pointer ">
          {merchantName}
        </p>
      </div>
    </div>
  ) : (
    <div className="flex justify-start gap-2 top-0 p-2 h-10 bg-slate-700  fixed w-full items-center  ">
      <div className="rounded-full h-5 w-5 bg-slate-800 animate-pulse "></div>
      <div className=" h-5 w-20 bg-slate-800 animate-pulse  "></div>
    </div>
  );
};

export default Navbar;
