import { getDeliveryDate, getTodayDate } from "@/utils/orderDateHandler";
import React from "react";

const DeliveryDate = async () => {
  const orderDate = await getTodayDate();
  const deliveryDate = await getDeliveryDate(5);

  return (
    <div className="my-2">
      <h4 className="text-primary font-bold text-lg mt-5 ">Order Placed</h4>
      <p className="flex border px-5 py-2 gap-2 my-5 border-primary bg-primaryBg rounded-lg ">
        {" "}
        {orderDate}
      </p>

      <h4 className="text-primary font-bold text-lg mt-5 ">
        Expected Delivery
      </h4>
      <p className="flex border px-5 py-2 gap-2 my-5 border-primary bg-primaryBg rounded-lg ">
        {deliveryDate}
      </p>
    </div>
  );
};

export default DeliveryDate;
