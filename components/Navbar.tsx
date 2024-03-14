"use client";

import useStore from "@/store/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { ModeToggle } from "./Toggle";

const Navbar = () => {
  const router = useRouter();

  const name = useStore((state) => state.merchantName);
  const logo = useStore((state) => state.merchantLogo);
  const getTheme = useStore((state) => state.getTheme);
  useEffect(() => {
    getTheme();
  }, []);

  return (
    <div className="flex justify-between top-0 p-2 bg-primary  fixed w-full items-center  ">
      <div
        onClick={() => router.push("/")}
        className="flex justify-between gap-5 items-center "
      >
        <Image src={logo} alt="image" width={20} height={20} />
        <p className="text-primaryForeground font-bold text-xl ">{name}</p>
      </div>
      <div className="w-10 h-10 bg-primaryForeground text-foreground">pf</div>
      <div className="w-10 h-10 bg-background text-primary ">b</div>
      <div className="w-10 h-10 bg-foreground ">f</div>
      <div className="w-10 h-10 bg-primary ">p</div>
    </div>
  );
};

export default Navbar;
