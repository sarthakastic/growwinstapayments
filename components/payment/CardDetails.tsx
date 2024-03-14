"use client";

import React, { useState } from "react";
import useStore from "@/store/store";
import { Coins, WalletCards } from "lucide-react";
import Button from "../Button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { PaymentCardSchema, UpiIdSchema } from "@/utils/validation";

type PaymentCardFields = z.infer<typeof PaymentCardSchema>;

const CardDetails = ({ setCardData }: { setCardData: any }) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<PaymentCardFields>({ resolver: zodResolver(PaymentCardSchema) });

  function maskCardNumber(cardNumber: string) {
    const firstPart = cardNumber.substring(0, 4);

    const maskedPart = "********".substring(0, 8);

    const maskedNumber = firstPart + maskedPart;

    return maskedNumber;
  }

  const onSubmit: SubmitHandler<PaymentCardFields> = async (data) => {
    console.log(data);
    const response = await maskCardNumber(data?.cardNumber);
    console.log(response);
    setCardData(response);
  };

  return (
    <form
      className="flex border p-1 gap-2 my-5 "
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="w-full focus:outline-none  "
        {...register("cardNumber")}
        maxLength={10}
        onInput={(e) => {
          const input = e.target as HTMLInputElement;
          let value = input.value.replace(/\D/g, ""); // Remove non-numeric characters
          if (value.length > 12) {
            value = value.slice(0, 12); // Truncate the value to 10 digits
          }
          input.value = value; // Update the input value
        }}
        type="text" // Change the type to "text" to prevent native validation for number inputs
        placeholder="Enter Card Number"
      />
      {errors.cardNumber && (
        <div className="text-red-500 p-2 ">{errors.cardNumber.message}</div>
      )}
      <input
        className="w-full focus:outline-none  "
        {...register("cvv")}
        maxLength={10}
        onInput={(e) => {
          const input = e.target as HTMLInputElement;
          let value = input.value.replace(/\D/g, ""); // Remove non-numeric characters
          if (value.length > 3) {
            value = value.slice(0, 3); // Truncate the value to 10 digits
          }
          input.value = value; // Update the input value
        }}
        type="text" // Change the type to "text" to prevent native validation for number inputs
        placeholder="Enter CVV Number"
      />
      {errors.cvv && (
        <div className="text-red-500 p-2 ">{errors.cvv.message}</div>
      )}
      <input
        className="w-full focus:outline-none  "
        {...register("date")}
        maxLength={10}
        onInput={(e) => {
          const input = e.target as HTMLInputElement;
          let value = input.value.replace(/\D/g, ""); // Remove non-numeric characters
          if (value.length > 4) {
            value = value.slice(0, 4); // Truncate the value to 10 digits
          }
          input.value = value; // Update the input value
        }}
        type="text" // Change the type to "text" to prevent native validation for number inputs
        placeholder="mm/yy"
      />
      {errors.date && (
        <div className="text-red-500 p-2 ">{errors.date.message}</div>
      )}
      <input
        className="text-primary font-semibold hover:cursor-pointer"
        type="submit"
        value={"Save"}
      />
    </form>
  );
};

export default CardDetails;
