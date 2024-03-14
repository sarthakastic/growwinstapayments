"use client";

import React from "react";
import useStore from "@/store/store";
import { Coins, WalletCards } from "lucide-react";
import Button from "../Button";
import { useRouter } from "next/navigation";

const PaymentOptions = () => {
  const router = useRouter();
  const tp = useStore((state) => state.totalPrice);
  const paymentMethods = useStore((state) => state.paymentMethods);

  const paymentHandler = () => {
    router.push("/order-status");
  };

  return (
    <div className="flex flex-col justify-between  ">
      <div>
        {paymentMethods?.map((data: any) => {
          return (
            <div className="flex items-center gap-10 border my-10 h-28 px-20 ">
              {data === "UPI" && <Coins />}
              {data === "CARDS" && <WalletCards />}
              <div>
                <p>{data}</p>
                {data === "CARDS" && <p>1234***********</p>}
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <div className="flex justify-between px-20 ">
          <p>Admin Fee</p>
          <p>0.00</p>
        </div>
        <div className="flex justify-between px-20 ">
          <p>Total</p>
          <p>{tp}</p>
        </div>
        <Button text="Make a Payment" onClick={paymentHandler} />
      </div>
    </div>
  );
};

export default PaymentOptions;
