"use client";

import useStore from "@/store/store";
import React from "react";

const OrderSummary = () => {
  const tp = useStore((state) => state.totalPrice);
  return (
    <div className="my-5 flex flex-col gap-2 border p-1 ">
      <h4 className="font-bold">Order Summary</h4>
      <div className="flex justify-between items-center ">
        <p>Order Amount</p>
        <p>{tp.toFixed(2)}</p>
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
          <p>{tp.toFixed(2)}</p>
        </div>
        <button type="button">Make Payment</button>
      </div>
    </div>
  );
};

export default OrderSummary;
