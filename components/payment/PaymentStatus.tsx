import { BadgeCheck, BadgeMinus, BadgeX, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import Router from "next/router";
import React, { useEffect, useState } from "react";

const PaymentStatus = () => {
  const router = useRouter();
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    generateRandomStatus();
  }, []);

  const generateRandomStatus = () => {
    const randomNum = Math.random();
    let newStatus = "";

    if (randomNum < 0.5) {
      newStatus = "success";
    } else if (randomNum < 0.7) {
      newStatus = "fail";
    } else {
      newStatus = "pending";
    }

    setStatus(newStatus);

    if (newStatus === "pending") {
      setTimeout(() => {
        generateRandomStatus();
      }, 2000);
    } else if (newStatus === "success") {
      setTimeout(() => {
        router.push("/order-status");
      }, 2000);
    }
  };

  const handleRetry = () => {
    generateRandomStatus();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black/50 flex items-center justify-center z-40">
      <div
        className={`h-fit w-fit p-10 flex flex-col bg-black rounded-lg
           text-primaryForeground`}
      >
        <div
          className={` border  border-dashed p-5 flex flex-col justify-center items-center ${
            status === "pending"
              ? "text-yellow-500/50 border-yellow-500/50 "
              : status === "success"
              ? "text-green-500/50 border-green-500/50"
              : "text-red-500/50 border-red-500/50"
          }`}
        >
          {status === "success" && (
            <BadgeCheck className="h-14 w-14 text-green-800 " />
          )}
          {status === "fail" && <BadgeX className="h-14 w-14 text-red-800 " />}
          {status === "pending" && (
            <BadgeMinus className="h-14 w-14 text-yellow-500 " />
          )}
          <h1>Payment Status: {status}</h1>
          {status === "fail" && (
            <button
              className="bg-red-500/50 border border-red-500 p-1 m-1 text-red-500"
              onClick={handleRetry}
            >
              Retry
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentStatus;
