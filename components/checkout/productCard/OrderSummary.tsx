"use client";

import Button from "@/components/UI/Button";
import useProductStore from "@/store/slices/productSlice";
import useToasterStore from "@/store/slices/toasterSlice";
import { getLocalStorage } from "@/utils/localStorageHandler";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const OrderSummary = () => {
  const router = useRouter();

  const [hydrated, setHydrated] = useState<boolean>(false);

  const { totalPrice } = useProductStore();
  const { showToaster } = useToasterStore();

  const handleCheckout = () => {
    const city = getLocalStorage("city");
    const phone = getLocalStorage("phone");

    phone && city
      ? router.push("/payment")
      : showToaster(" Please add Address and Phone Number", "error");
  };

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <>
      <h4 className="text-primary font-bold text-lg ">Order Summary</h4>
      {hydrated ? (
        <div className="my-5 flex flex-col gap-2 border border-primary px-5 py-2 bg-primaryBg rounded-lg shadow-2xl">
          <div className="flex justify-between items-center ">
            <p>Order Amount</p>
            <p>{totalPrice.toFixed(2)}</p>
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
              <p className="font-bold">{totalPrice.toFixed(2)}</p>
            </div>
            {totalPrice.toFixed(0) && (
              <div>
                <Button onClick={handleCheckout} text="Payment" />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="h-80 w-full bg-slate-700 animate-pulse rounded-lg my-5 "></div>
      )}
    </>
  );
};

export default OrderSummary;
