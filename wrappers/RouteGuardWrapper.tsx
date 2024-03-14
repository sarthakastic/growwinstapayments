"use client";

import { getLocalStorage } from "@/utils/localStorageHandler";
import { usePathname, useRouter } from "next/navigation";
import React, { ReactNode, useEffect } from "react";

const Routeguard = ({ children }: { children: ReactNode }) => {
  const phone = getLocalStorage("phone");
  const city = getLocalStorage("city");

  const pathname = usePathname();
  const router = useRouter();

  const protectedRoutes = ["/payment", "/order-status"];

  useEffect(() => {
    if ((!phone || !city) && protectedRoutes.includes(pathname)) {
      router.replace("/checkout");
    }
  }, []);

  return <div>{children}</div>;
};

export default Routeguard;
