"use client";

import React, { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { PhoneNumberSchema } from "@/utils/validation";
import { Phone, Trash } from "lucide-react";
import { saveToLocalStorage } from "@/utils/saveDataToLocalStorage";
import { usePathname } from "next/navigation";
import useStore from "@/store/store";

type PhoneNumberFields = z.infer<typeof PhoneNumberSchema>;

const PhoneNumber = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<PhoneNumberFields>({ resolver: zodResolver(PhoneNumberSchema) });

  const showToaster = useStore((state) => state.showToaster);

  const [phone, setPhone] = useState<string>("");
  const pathname = usePathname();

  const onSubmit: SubmitHandler<PhoneNumberFields> = (data) => {
    showToaster("Phone Number added successfully", "success");
    saveToLocalStorage(data);
    setPhone(data?.phone);
  };

  const deletePhone = () => {
    showToaster("Phone number deleted successfully", "success");
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
      <h4 className="text-primary font-bold text-lg ">Phone Details</h4>
      <form
        className="flex border px-5 py-2 gap-2 my-5 border-primary bg-primaryBg rounded-lg shadow-2xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Phone className="" />
        <input
          className="w-full bg-transparent   focus:outline-none"
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
          pathname === "/checkout" && (
            <Trash
              className="border p-1 text-red-500 border-red-500 rounded-full hover:cursor-pointer hover:bg-red-200 "
              onClick={deletePhone}
            />
          )
        ) : (
          <input
            className="text-primary font-semibold hover:cursor-pointer"
            type="submit"
            value={"Add"}
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
