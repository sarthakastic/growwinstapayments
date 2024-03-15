import Address from "@/components/UI/Address";
import Header from "@/components/UI/Header";
import PhoneNumber from "@/components/UI/PhoneNumber";
import ProductCard from "@/components/UI/ProductCard";

import OrderSummary from "@/components/checkout/productCard/OrderSummary";

import PromoCode from "@/components/checkout/productCard/PromoCode";
import React from "react";

const Checkout = () => {
  return (
    <div className=" px-2 mx-2 md:mx-40 md:px-8  border border-primary my-20">
      <Header heading="Checkout" previousUrl="/checkout" />
      <Address />
      <PhoneNumber />
      <ProductCard />
      <PromoCode />
      <OrderSummary />
    </div>
  );
};

export default Checkout;
