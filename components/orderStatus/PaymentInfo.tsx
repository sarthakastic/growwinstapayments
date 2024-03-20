"use client";

import useProductStore from "@/store/slices/productSlice";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const PaymentInfo = () => {
  const router = useRouter();

  const [hydrated, setHydrated] = useState<boolean>(false);

  const { totalPrice, modeOfPayment } = useProductStore();

  useEffect(() => {
    !modeOfPayment && router.push("/checkout");
  }, []);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    hydrated && (
      <>
        <h4 className="text-primary font-bold text-lg mt-5 ">Amount Paid</h4>
        <p className="flex border px-5 py-2 gap-2 my-5 border-primary bg-primaryBg rounded-lg ">
          {totalPrice.toFixed(2)}
        </p>
        <h4 className="text-primary font-bold text-lg mt-5 ">Payment Method</h4>
        <p className="flex border px-5 py-2 gap-2 my-5 border-primary bg-primaryBg rounded-lg ">
          {modeOfPayment}
        </p>
      </>
    )
  );
};

export default PaymentInfo;
