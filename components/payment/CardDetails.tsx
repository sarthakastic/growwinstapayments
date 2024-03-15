"use client";

import React from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { PaymentCardSchema, UpiIdSchema } from "@/utils/validation";
import { maskCardNumber } from "@/utils/cardDetailsHandler";

type PaymentCardFields = z.infer<typeof PaymentCardSchema>;

const CardDetails = ({ setCardData }: { setCardData: any }) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<PaymentCardFields>({ resolver: zodResolver(PaymentCardSchema) });

  const onSubmit: SubmitHandler<PaymentCardFields> = async (data) => {
    const response = await maskCardNumber(data?.cardNumber);

    setCardData(response);
  };

  return (
    <>
      <form
        className="flex flex-col lg:flex-row border p-1 gap-2 my-5  rounded-lg border-primary "
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="w-full bg-transparent focus:outline-none  "
          {...register("cardNumber")}
          maxLength={12}
          onInput={(e) => {
            const input = e.target as HTMLInputElement;
            let value = input.value.replace(/\D/g, "");
            if (value.length > 12) {
              value = value.slice(0, 12);
            }
            input.value = value;
          }}
          type="text"
          placeholder="Enter Card Number"
        />

        <input
          className="w-full bg-transparent focus:outline-none  "
          {...register("cvv")}
          maxLength={3}
          onInput={(e) => {
            const input = e.target as HTMLInputElement;
            let value = input.value.replace(/\D/g, "");
            if (value.length > 3) {
              value = value.slice(0, 3);
            }
            input.value = value;
          }}
          type="text"
          placeholder="Enter CVV Number"
        />

        <div className="flex">
          <input
            className="w-8 bg-transparent focus:outline-none  "
            {...register("month")}
            maxLength={2}
            onInput={(e) => {
              const input = e.target as HTMLInputElement;
              let value = input.value.replace(/\D/g, "");
              if (value.length > 2) {
                value = value.slice(0, 2);
              }
              input.value = value;
            }}
            type="text"
            placeholder="mm"
          />

          <span>/</span>
          <input
            className="w-10 bg-transparent focus:outline-none  "
            {...register("year")}
            maxLength={4}
            onInput={(e) => {
              const input = e.target as HTMLInputElement;
              let value = input.value.replace(/\D/g, "");
              if (value.length > 4) {
                value = value.slice(0, 4);
              }
              input.value = value;
            }}
            type="text"
            placeholder="yyyy"
          />
        </div>
        <input
          className="text-primary w-fit font-semibold hover:cursor-pointer"
          type="submit"
          value={"Save"}
        />
      </form>
      {errors.cardNumber && (
        <div className="text-red-500 p-2 ">{errors.cardNumber.message}</div>
      )}
      {errors.cvv && (
        <div className="text-red-500 p-2 ">{errors.cvv.message}</div>
      )}
      {errors.month && (
        <div className="text-red-500 p-2 ">{errors.month.message}</div>
      )}
      {errors.year && (
        <div className="text-red-500 p-2 ">{errors.year.message}</div>
      )}
    </>
  );
};

export default CardDetails;
