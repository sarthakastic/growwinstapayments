"use client";

import useToasterStore from "@/store/slices/toasterSlice";
import React, { useEffect } from "react";

const Toaster = () => {
  const { isToaster, toasterMessage, type, hideToaster } = useToasterStore();

  useEffect(() => {
    isToaster &&
      setTimeout(() => {
        hideToaster();
      }, 5000);
  }, [isToaster, hideToaster]);

  return (
    isToaster && (
      <div
        className={`z-50 fixed right-5 top-20 border border-yellow p-2 font-bold rounded-lg shadow-2xl ${
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
