"use client";

import useStore from "@/store/store";
import React, { useEffect } from "react";

const Toaster = () => {
  const isToaster = useStore((state) => state.isToaster);
  const type = useStore((state) => state.type);
  const hideToaster = useStore((state) => state.hideToaster);
  const toasterMessage = useStore((state) => state.toasterMessage);

  useEffect(() => {
    isToaster &&
      setTimeout(() => {
        hideToaster();
      }, 5000);
  }, [isToaster]);

  return (
    isToaster && (
      <div
        className={`z-50 fixed right-5 top-20 border border-yellow p-2 font-bold ${
          type === "error"
            ? "text-red-500 border-red-500 bg-red-100 "
            : "text-green-500 border-green-500 bg-green-100 "
        }  `}
      >
        {toasterMessage}{" "}
      </div>
    )
  );
};

export default Toaster;
