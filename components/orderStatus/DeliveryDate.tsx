import React from "react";

const DeliveryDate = async () => {
  function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function getDeliveryDate(daysToAdd: number) {
    const today = new Date();
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + daysToAdd);

    const year = futureDate.getFullYear();
    const month = String(futureDate.getMonth() + 1).padStart(2, "0");
    const day = String(futureDate.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

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
