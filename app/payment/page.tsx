import Header from "@/components/Header";
import PaymentOptions from "@/components/payment/PaymentOptions";
import React from "react";

const Payment = () => {
  return (
    <div className=" px-2 mx-2 md:mx-52 md:px-8  border border-primary my-20">
      <Header heading="Payment" previousUrl={"/checkout"} />
      <PaymentOptions />
    </div>
  );
};

export default Payment;
