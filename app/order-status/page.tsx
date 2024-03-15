import Header from "@/components/Header";
import Address from "@/components/checkout/productCard/Address";
import PhoneNumber from "@/components/checkout/productCard/PhoneNumber";
import ProductCard from "@/components/checkout/productCard/ProductCard";
import DeliveryDate from "@/components/orderStatus/DeliveryDate";
import PaymentInfo from "@/components/orderStatus/PaymentInfo";
import React from "react";

const OrderStatus = async () => {
  return (
    <div className=" px-2 mx-2 md:mx-52 md:px-8  border border-primary my-20">
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
