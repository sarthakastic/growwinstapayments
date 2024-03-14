"use client";

import React, { useState } from "react";
import useStore from "@/store/store";
import { Coins, WalletCards } from "lucide-react";
import Button from "../Button";

import { useRouter } from "next/navigation";

import CardDetails from "./CardDetails";
import UpiDetails from "./UpiDetails";
import Otp from "./Otp";

const PaymentOptions = () => {
  const router = useRouter();
  const tp = useStore((state) => state.totalPrice);
  const paymentMethods = useStore((state) => state.paymentMethods);
  const showToaster = useStore((state) => state.showToaster);

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    string | null
  >(null);

  const [cardData, setCardData] = useState<any>();
  const [upiData, setUpiData] = useState<any>();
  const [showOtp, setShowOtp] = useState<boolean>(false);

  const handlePaymentMethodChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const paymentHandler = () => {
    if (!selectedPaymentMethod) {
      showToaster("Choose a payment method", "error");
    } else if (selectedPaymentMethod && (cardData || upiData)) {
      setShowOtp(true);
    } else {
      showToaster("Enter  payment details", "error");
    }
  };

  return (
    <div className="flex flex-col justify-between  ">
      <div>
        {paymentMethods?.map((data: string, index: number) => (
          <div
            key={index}
            className="flex items-center gap-10 border my-10 h-28 px-20"
          >
            <input
              type="radio"
              id={`paymentMethod-${index}`}
              name="paymentMethod"
              value={data}
              checked={selectedPaymentMethod === data}
              onChange={handlePaymentMethodChange}
              className="mr-2"
            />
            {data === "UPI" && <Coins />}
            {data === "CARDS" && <WalletCards />}
            <div className="flex flex-col">
              <label htmlFor={`paymentMethod-${index}`}>{data}</label>
              {selectedPaymentMethod === "UPI" &&
                data === "UPI" &&
                !upiData && <UpiDetails setCardData={setUpiData} />}
              {selectedPaymentMethod === "CARDS" &&
                data === "CARDS" &&
                !cardData && <CardDetails setCardData={setCardData} />}

              {cardData && data === "CARDS" && <p>{cardData}</p>}
              {upiData && data === "UPI" && <p>{upiData}</p>}
            </div>
          </div>
        ))}
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
      {showOtp && <Otp />}
    </div>
  );
};

export default PaymentOptions;
