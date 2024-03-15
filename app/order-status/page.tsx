import Address from "@/components/UI/Address";
import Header from "@/components/UI/Header";
import PhoneNumber from "@/components/UI/PhoneNumber";
import ProductCard from "@/components/UI/ProductCard";

import DeliveryDate from "@/components/orderStatus/DeliveryDate";
import PaymentInfo from "@/components/orderStatus/PaymentInfo";
import React from "react";

const OrderStatus = async () => {
  return (
    <div className=" px-2 mx-2 md:mx-40 md:px-8  border border-primary my-20">
      <Header previousUrl="/payment" heading="Order Status" />
      <ProductCard />
      <PaymentInfo />
      <Address />
      <PhoneNumber />
      <DeliveryDate />
    </div>
  );
};

export default OrderStatus;
