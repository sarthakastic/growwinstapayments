import Header from "@/components/Header";
import Address from "@/components/checkout/productCard/Address";
import PhoneNumber from "@/components/checkout/productCard/PhoneNumber";
import ProductCard from "@/components/checkout/productCard/ProductCard";
import React from "react";

const OrderStatus = async () => {
  function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    // JavaScript months are zero-based, so we add 1 to get the correct month
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  const date = await getTodayDate();

  return (
    <div className=" px-2 md:mx-52 md:px-8  border my-10">
      <Header previousUrl="/payment" heading="Order Status" />
      <ProductCard />
      <Address />
      <PhoneNumber />
      {date}
    </div>
  );
};

export default OrderStatus;
