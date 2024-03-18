"use client";

import useStore from "@/store/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const router = useRouter();

  const name = useStore((state) => state.merchantName);
  const logo = useStore((state) => state.merchantLogo);
  const themeLoading = useStore((state) => state.themeLoading);

  if (themeLoading) {
    return (
      <div className="flex justify-between top-0 p-2 bg-amber-50  dark:bg-slate-500  fixed w-full items-center  ">
        <div className="h-5 bg-amber-200 w-28 dark:bg-gray-700 max-w-[360px]  animate-pulse "></div>
      </div>
    );
  }

  return (
    <div className="flex justify-between top-0 p-2 bg-primary  fixed w-full items-center  ">
      <div
        onClick={() => router.push("/")}
        className="flex justify-between gap-5 items-center "
      >
        <Image src={logo} alt="image" width={20} height={20} />
        <p className="text-primaryForeground font-bold text-xl hover:cursor-pointer ">
          {name}
        </p>
      </div>
    </div>
  );
};

export default Navbar;
