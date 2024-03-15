"use client";

import useStore from "@/store/store";
import React from "react";

const PaymentInfo = () => {
  const totalAmount = useStore((state) => state.totalPrice);
  const modeOfPayment = useStore((state) => state.modeOfPayment);
  return (
    <>
      <h4 className="text-primary font-bold text-lg mt-5 ">Amount Paid</h4>
      <p className="flex border px-5 py-2 gap-2 my-5 border-primary bg-primaryBg rounded-lg ">
        {totalAmount.toFixed(2)}
      </p>
      <h4 className="text-primary font-bold text-lg mt-5 ">Payment Method</h4>
      <p className="flex border px-5 py-2 gap-2 my-5 border-primary bg-primaryBg rounded-lg ">
        {modeOfPayment}
      </p>
    </>
  );
};

export default PaymentInfo;
