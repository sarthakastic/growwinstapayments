"use client";

import React, { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { PhoneNumberSchema } from "@/utils/validation";
import { Phone, Trash } from "lucide-react";
import { saveToLocalStorage } from "@/utils/saveDataToLocalStorage";

type PhoneNumberFields = z.infer<typeof PhoneNumberSchema>;

const PhoneNumber = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<PhoneNumberFields>({ resolver: zodResolver(PhoneNumberSchema) });

  const [phone, setPhone] = useState<string>("");

  const onSubmit: SubmitHandler<PhoneNumberFields> = (data) => {
    saveToLocalStorage(data);
    setPhone(data?.phone);
  };

  const deletePhone = () => {
    localStorage.removeItem("phone");
    setPhone("");
  };

  useEffect(() => {
    const storedPhone = localStorage.getItem("phone");
    if (storedPhone) {
      setPhone(storedPhone);
    }
  }, [phone]);

  return (
    <>
      <form
        className="flex border p-1 gap-2 my-5 border-primary "
        onSubmit={handleSubmit(onSubmit)}
      >
        <Phone className="" />
        <input
          className="w-full focus:outline-none  "
          {...register("phone")}
          maxLength={10}
          defaultValue={phone}
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
        {phone ? (
          <Trash
            className="border p-1 text-red-500 border-red-500"
            onClick={deletePhone}
          />
        ) : (
          <input
            className="text-primary font-semibold hover:cursor-pointer"
            type="submit"
            value={"Save"}
          />
        )}
      </form>
      {errors.phone && (
        <div className="text-red-500 p-2 ">{errors.phone.message}</div>
      )}
    </>
  );
};

export default PhoneNumber;
