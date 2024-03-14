import Header from "@/components/Header";
import Address from "@/components/checkout/productCard/Address";
import ProductCard from "@/components/checkout/productCard/ProductCard";
import React from "react";

const OrderStatus = () => {
  return (
    <div className=" ">
      <Header previousUrl="/payment" heading="Order Status" />
      <Address />
      <ProductCard />
    </div>
  );
};

export default OrderStatus;
