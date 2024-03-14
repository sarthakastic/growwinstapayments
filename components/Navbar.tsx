"use client";

import useStore from "@/store/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Navbar = () => {
  const router = useRouter();

  const tp = useStore((state) => state.merchantName);
  const tl = useStore((state) => state.merchantLogo);
  const getTheme = useStore((state) => state.getTheme);
  useEffect(() => {
    getTheme();
  }, []);

  return (
    <div
      onClick={() => router.push("/")}
      className="flex justify-center gap-5 top-0 py-2 bg-white fixed w-full items-center  border-b-2  "
    >
      <Image src={tl} alt="image" width={20} height={20} />
      <p className="text-black font-bold  ">{tp}</p>
    </div>
  );
};

export default Navbar;
