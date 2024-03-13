"use client";

import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { PhoneNumberSchema } from "@/utils/validation";

type PhoneNumberFields = z.infer<typeof PhoneNumberSchema>;

const PhoneNumber = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<PhoneNumberFields>({ resolver: zodResolver(PhoneNumberSchema) });

  const onSubmit: SubmitHandler<PhoneNumberFields> = (data) => {
    console.log(data, "phone Number");
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="w-full focus:outline-none text-red-500 "
          {...register("phone")}
          maxLength={10}
          onInput={(e) => {
            const input = e.target as HTMLInputElement;
            let value = input.value.replace(/\D/g, ""); // Remove non-numeric characters
            if (value.length > 10) {
              value = value.slice(0, 10); // Truncate the value to 10 digits
            }
            input.value = value; // Update the input value
          }}
          type="text" // Change the type to "text" to prevent native validation for number inputs
          placeholder="Enter Phone Number"
        />
        {errors.phone && (
          <div className="text-red-500">{errors.phone.message}</div>
        )}
        <input type="submit" value={"Apply"} />
      </form>
    </>
  );
};

export default PhoneNumber;
