"use client";

import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { AddressSchema } from "@/utils/validation";

type AddressFields = z.infer<typeof AddressSchema>;

const Address = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<AddressFields>({ resolver: zodResolver(AddressSchema) });

  const onSubmit: SubmitHandler<AddressFields> = (data) => {
    console.log(data, "phone Number");
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="w-full text-blue-400 focus:outline-none"
          {...register("addressLine1")}
          type="text"
          placeholder="Enter House No./Street Number"
          onInput={(e) => {
            const input = e.target as HTMLInputElement;

            const value = input.value.toUpperCase();

            input.value = value; // Update the input value
          }}
        />
        {errors.addressLine1 && (
          <div className="text-red-500">{errors.addressLine1.message}</div>
        )}
        <input
          className="w-full text-blue-400 focus:outline-none"
          {...register("addressLine2")}
          type="text"
          placeholder="Enter Locality"
          onInput={(e) => {
            const input = e.target as HTMLInputElement;

            const value = input.value.toUpperCase();

            input.value = value; // Update the input value
          }}
        />
        {errors.addressLine2 && (
          <div className="text-red-500">{errors.addressLine2.message}</div>
        )}
        <input
          className="w-full text-blue-400 focus:outline-none"
          {...register("city")}
          type="text"
          placeholder="Enter City"
          onInput={(e) => {
            const input = e.target as HTMLInputElement;

            const value = input.value.toUpperCase();

            input.value = value; // Update the input value
          }}
        />
        {errors.city && (
          <div className="text-red-500">{errors.city.message}</div>
        )}
        <input
          className="w-full text-blue-400 focus:outline-none"
          {...register("state")}
          type="text"
          placeholder="Enter Locality"
          onInput={(e) => {
            const input = e.target as HTMLInputElement;

            const value = input.value.toUpperCase();

            input.value = value; // Update the input value
          }}
        />
        {errors.state && (
          <div className="text-red-500">{errors.state.message}</div>
        )}
        <input
          className="w-full focus:outline-none text-red-500 "
          {...register("pincode")}
          maxLength={6}
          onInput={(e) => {
            const input = e.target as HTMLInputElement;
            let value = input.value.replace(/\D/g, ""); // Remove non-numeric characters
            if (value.length > 6) {
              value = value.slice(0, 6); // Truncate the value to 10 digits
            }
            input.value = value; // Update the input value
          }}
          type="text" // Change the type to "text" to prevent native validation for number inputs
          placeholder="Enter Phone Number"
        />
        {errors.pincode && (
          <div className="text-red-500">{errors.pincode.message}</div>
        )}
        <input type="submit" value={"Apply"} />
      </form>
    </>
  );
};

export default Address;
