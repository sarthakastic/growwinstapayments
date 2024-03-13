import Address from "@/components/checkout/productCard/Address";
import OrderSummary from "@/components/checkout/productCard/OrderSummary";
import PhoneNumber from "@/components/checkout/productCard/PhoneNumber";
import ProductCard from "@/components/checkout/productCard/ProductCard";
import PromoCode from "@/components/checkout/productCard/PromoCode";
import React from "react";

const Checkout = () => {
  return (
    <div>
      <Address />
      <PhoneNumber />
      <ProductCard />
      <PromoCode />
      <OrderSummary />
    </div>
  );
};

export default Checkout;
