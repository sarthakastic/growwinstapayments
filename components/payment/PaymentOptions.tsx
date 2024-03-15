"use client";

import React, { useState } from "react";
import useStore from "@/store/store";
import { Coins, Currency, WalletCards } from "lucide-react";
import Button from "../Button";
import CardDetails from "./CardDetails";
import UpiDetails from "./UpiDetails";
import Otp from "./Otp";
import { useRouter } from "next/navigation";

const PaymentOptions = () => {
  const router = useRouter();

  const totalAmount = useStore((state) => state.totalPrice);
  const paymentMethods = useStore((state) => state.paymentMethods);
  const setModeOfPayment = useStore((state) => state.setModeOfPayment);
  const showToaster = useStore((state) => state.showToaster);

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    string | null
  >(null);

  const [cardData, setCardData] = useState<string>("");
  const [upiData, setUpiData] = useState<string>("");
  const [showOtp, setShowOtp] = useState<boolean>(false);

  const handlePaymentMethodChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedPaymentMethod(event.target.value);
    setModeOfPayment(event.target.value);
  };

  const paymentHandler = () => {
    if (!selectedPaymentMethod) {
      showToaster("Choose a payment method", "error");
    } else if (selectedPaymentMethod && (cardData || upiData)) {
      router.push("/order-status");
    } else {
      showToaster("Enter  payment details", "error");
    }
  };

  return (
    <>
      {showOtp && (
        <div className=" ">
          <Otp />
        </div>
      )}
      <div className="flex flex-col justify-between  ">
        <h4 className="text-primary font-bold text-lg mt-5">
          Choose Payment Method
        </h4>
        <div>
          {paymentMethods?.map((data: string, index: number) => (
            <div
              key={index}
              className="flex items-center gap-10 border border-primary my-10 min-h-28 max-h-fit  px-5 rounded-lg shadow-2xl bg-primaryBg lg:px-20"
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
              {data !== "UPI" && data !== "CARDS" && <Currency />}
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
          <div className="flex justify-between px-5 lg:px-20 ">
            <p>Admin Fee</p>
            <p>0.00</p>
          </div>
          <div className="flex justify-between px-5 lg:px-20 font-bold">
            <p>Total</p>
            <p>{totalAmount.toFixed(2)}</p>
          </div>
          <div className="my-2">
            <Button text="Make a Payment" onClick={paymentHandler} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentOptions;
