"use client";

import React from "react";
import useStore from "@/store/store";

const PaymentOptions = () => {
  const tp = useStore((state) => state.totalPrice);
  const paymentMethods = useStore((state) => state.paymentMethods);

  return (
    <>
      <div>
        {paymentMethods?.map((data: any) => {
          return <p>{data}</p>;
        })}
      </div>
      <p className="text-purple-800">{tp}</p>
    </>
  );
};

export default PaymentOptions;
