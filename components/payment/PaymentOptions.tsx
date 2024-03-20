"use client";

import React, { useEffect, useState } from "react";
import { Coins, Currency, WalletCards } from "lucide-react";

import CardDetails from "./CardDetails";
import UpiDetails from "./UpiDetails";
import PaymentStatus from "./PaymentStatus";
import Button from "../UI/Button";
import useProductStore from "@/store/slices/productSlice";
import useToasterStore from "@/store/slices/toasterSlice";

const PaymentOptions = () => {
  const { paymentMethods, totalPrice, setModeOfPayment } = useProductStore();

  const { showToaster } = useToasterStore();

  const [hydrated, setHydrated] = useState<boolean>(false);
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
      setShowOtp(true);
    } else {
      showToaster("Enter  payment details", "error");
    }
  };

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated)
    return (
      <>
        <h4 className="text-primary font-bold text-lg mt-5 ">
          Choose Payment Method
        </h4>
        <div className="h-80 w-full bg-slate-700 animate-pulse rounded-lg my-5 "></div>
      </>
    );

  return (
    hydrated && (
      <>
        {showOtp && (
          <div className=" ">
            <PaymentStatus />
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
                className="flex items-center xxs:gap-2 xs:gap-5 sm:gap-10 border border-primary my-10 min-h-28 max-h-fit  px-5 rounded-lg shadow-2xl bg-primaryBg lg:px-20"
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
              <p>{totalPrice.toFixed(2)}</p>
            </div>
            <div className="my-2">
              <Button text="Make a Payment" onClick={paymentHandler} />
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default PaymentOptions;
