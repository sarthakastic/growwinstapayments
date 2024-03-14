"use client";

import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { PromoCodeSchema } from "@/utils/validation";

type PromoCodeFields = z.infer<typeof PromoCodeSchema>;

const PromoCode = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<PromoCodeFields>({ resolver: zodResolver(PromoCodeSchema) });

  const onSubmit: SubmitHandler<PromoCodeFields> = (data) => {
    console.log(data, "promocode");
  };

  return (
    <div className="my-5">
      <h4>Promo Code</h4>
      <form
        className="flex border p-1 gap-2 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="w-full text-blue-400 focus:outline-none"
          {...register("promocode")}
          type="text"
          placeholder="Enter PromoCode"
          onInput={(e) => {
            const input = e.target as HTMLInputElement;

            const value = input.value.toUpperCase();

            input.value = value; // Update the input value
          }}
        />
        <input type="submit" value={"Apply"} />
      </form>
      {errors.promocode && (
        <div className="text-red-500">{errors.promocode.message}</div>
      )}
    </div>
  );
};

export default PromoCode;
