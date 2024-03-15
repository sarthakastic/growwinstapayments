"use client";

import React, { useState } from "react";
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

  const [isPromoCode, setIsPromoCode] = useState<boolean>(false);

  const onSubmit: SubmitHandler<PromoCodeFields> = (data) => {
    setIsPromoCode(true);
  };

  return (
    <div className="my-5">
      <h4 className="text-primary font-bold text-lg ">Promo Code</h4>
      <form
        className="flex border border-primary p-1 gap-2 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="w-full bg-transparent  my-1 focus:outline-none"
          {...register("promocode")}
          type="text"
          disabled={isPromoCode}
          placeholder="Enter PromoCode"
          onInput={(e) => {
            const input = e.target as HTMLInputElement;

            const value = input.value.toUpperCase();

            input.value = value; // Update the input value
          }}
        />
        {!isPromoCode && (
          <input
            className="text-primary font-semibold hover:cursor-pointer"
            type="submit"
            value={"Apply"}
          />
        )}
      </form>
      {errors.promocode && (
        <div className="text-red-500">{errors.promocode.message}</div>
      )}
      {isPromoCode && (
        <p className="text-primary font-semibold ">Promocode Applied</p>
      )}
    </div>
  );
};

export default PromoCode;
