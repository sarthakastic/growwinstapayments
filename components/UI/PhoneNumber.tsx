"use client";

import React, { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { PhoneNumberSchema } from "@/utils/validation";
import { Phone, Plus, Trash } from "lucide-react";
import { saveToLocalStorage } from "@/utils/saveDataToLocalStorage";
import { usePathname } from "next/navigation";
import { getLocalStorage } from "@/utils/localStorageHandler";
import useToasterStore from "@/store/slices/toasterSlice";

type PhoneNumberFields = z.infer<typeof PhoneNumberSchema>;

const PhoneNumber = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PhoneNumberFields>({ resolver: zodResolver(PhoneNumberSchema) });

  const { showToaster } = useToasterStore();

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
    reset();
  };

  useEffect(() => {
    const storedPhone = getLocalStorage("phone");
    if (storedPhone) {
      setPhone(storedPhone);
    } else {
      setPhone("");
    }
  }, [phone]);

  const [hydrated, setHydrated] = useState<boolean>(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <>
      <h4 className="text-primary font-bold text-lg ">Phone Details</h4>
      {hydrated ? (
        <form
          className="flex border px-5 py-2 gap-2 my-5 border-primary bg-primaryBg rounded-lg shadow-2xl"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <Phone className="" />
            <input
              className="w-full bg-transparent  my-2 focus:outline-none"
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
            {errors.phone && (
              <div className="text-red-500 p-2 ">{errors.phone.message}</div>
            )}
            {phone ? (
              pathname === "/checkout" && (
                <Trash
                  className="border p-1 text-red-500 border-red-500 rounded-full hover:cursor-pointer hover:bg-red-200 "
                  onClick={deletePhone}
                />
              )
            ) : (
              <div className="text-primary font-semibold flex w-fit border border-primary px-2 rounded-lg ">
                <Plus />
                <input
                  className="hover:cursor-pointer hover:underline hover:font-black "
                  type="submit"
                  value={"Add"}
                />
              </div>
            )}
          </div>
        </form>
      ) : (
        <div className="h-20 w-full bg-slate-700 animate-pulse rounded-lg my-5 "></div>
      )}
    </>
  );
};

export default PhoneNumber;
