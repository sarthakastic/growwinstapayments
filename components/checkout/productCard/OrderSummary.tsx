"use client";

import Button from "@/components/Button";
import useStore from "@/store/store";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const OrderSummary = () => {
  const router = useRouter();

  const totalAmount = useStore((state) => state.totalPrice);
  const showToaster = useStore((state) => state.showToaster);

  const handleCheckout = () => {
    const city = localStorage.getItem("city");
    const phone = localStorage.getItem("phone");

    phone && city
      ? router.push("/payment")
      : showToaster(" Please add Address and Phone Number", "error");
  };

  return (
    <>
      <h4 className="text-primary font-bold text-lg ">Order Summary</h4>

      <div className="my-5 flex flex-col gap-2 border border-primary p-1 ">
        <div className="flex justify-between items-center ">
          <p>Order Amount</p>
          <p>{totalAmount.toFixed(2)}</p>
        </div>
        <div className="flex justify-between items-center ">
          <p>Delivery Fee</p>
          <p>100</p>
        </div>
        <div className="flex justify-between items-center ">
          <p>Discount</p>
          <p>100</p>
        </div>
        <div className="flex justify-between items-center ">
          <div>
            <p>Total</p>
            <p className="font-bold">{totalAmount.toFixed(2)}</p>
          </div>
          {totalAmount.toFixed(0) > 0 && (
            <div>
              <Button onClick={handleCheckout} text="Payment" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
