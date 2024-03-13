"use client";

import useStore from "@/store/store";
import React from "react";

const OrderSummary = () => {
  const tp = useStore((state) => state.totalPrice);
  return (
    <>
      <h4>Order Summary</h4>
      <div className="flex justify-between items-center ">
        <p>Order Amount</p>
        <p>{tp}</p>
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
          <p>{tp}</p>
        </div>
        <button type="button">Make Payment</button>
      </div>
    </>
  );
};

export default OrderSummary;
