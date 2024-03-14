import Header from "@/components/Header";
import Address from "@/components/checkout/productCard/Address";
import OrderSummary from "@/components/checkout/productCard/OrderSummary";
import PhoneNumber from "@/components/checkout/productCard/PhoneNumber";
import ProductCard from "@/components/checkout/productCard/ProductCard";
import PromoCode from "@/components/checkout/productCard/PromoCode";
import React from "react";

const Checkout = () => {
  return (
    <div className=" px-2 mx-2 md:mx-52 md:px-8  border border-primary my-20">
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
