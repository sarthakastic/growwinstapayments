import Header from "@/components/Header";
import PaymentOptions from "@/components/payment/PaymentOptions";
import React from "react";

const Payment = () => {
  return (
    <div>
      <Header heading="Payment" previousUrl={"/checkout"} />
      <PaymentOptions />
    </div>
  );
};

export default Payment;
