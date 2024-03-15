import { addDaysToDate, getTodayDate } from "@/utils/dateHandler";
import React from "react";

const DeliveryDate = async () => {
  const orderDate = await getTodayDate();
  const deliveryDate = await addDaysToDate(5);
  return (
    <div className="my-2">
      <h4 className="text-primary font-bold text-lg mt-5 ">Order Placed</h4>
      <p> {orderDate}</p>
      <h4 className="text-primary font-bold text-lg mt-5 ">
        Expected Delivery
      </h4>
      <p>{deliveryDate}</p>
    </div>
  );
};

export default DeliveryDate;
