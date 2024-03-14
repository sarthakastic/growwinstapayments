"use client";

import React, { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { AddressSchema } from "@/utils/validation";
import { usePathname } from "next/navigation";
import { saveToLocalStorage } from "@/utils/saveDataToLocalStorage";
import { Pen, Trash } from "lucide-react";
import Router from "next/router";

type AddressFields = z.infer<typeof AddressSchema>;

const Address = () => {
  const pathname = usePathname();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<AddressFields>({ resolver: zodResolver(AddressSchema) });

  const onSubmit: SubmitHandler<AddressFields> = (data) => {
    saveToLocalStorage(data);
    setCity(data?.city);
    console.log(data, "phone Number");
  };

  const [houseNumber, setHouseNumber] = useState<string>("");
  const [landmark, setLandmark] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [pincode, setPincode] = useState<string>("");

  useEffect(() => {
    const storedHouseNumber = localStorage.getItem("addressLine1");
    const storedLandmark = localStorage.getItem("addressLine2");
    const storedCity = localStorage.getItem("city");
    const storedState = localStorage.getItem("state");
    const storedPincode = localStorage.getItem("pincode");

    if (storedHouseNumber) {
      setHouseNumber(storedHouseNumber);
    }

    if (storedLandmark) {
      setLandmark(storedLandmark);
    }

    if (storedCity) {
      setCity(storedCity);
    }

    if (storedState) {
      setState(storedState);
    }

    if (storedPincode) {
      setPincode(storedPincode);
    }
  }, [houseNumber, landmark, city, state, pincode]);

  const deleteAddress = () => {
    localStorage.removeItem("addressLine1");
    localStorage.removeItem("addressLine2");
    localStorage.removeItem("city");
    localStorage.removeItem("state");
    localStorage.removeItem("pincode");
    setHouseNumber("");
    setLandmark("");
    setState("");
    setPincode("");
    setCity("");
  };

  return (
    <>
      <form className=" border p-1 my-5" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="w-full  my-1 focus:outline-none"
          {...register("addressLine1")}
          defaultValue={houseNumber}
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
          className="w-full  my-1 focus:outline-none"
          {...register("addressLine2")}
          defaultValue={landmark}
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
          className="w-full  my-1 focus:outline-none"
          {...register("city")}
          defaultValue={city}
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
          className="w-full  my-1 focus:outline-none"
          {...register("state")}
          defaultValue={state}
          type="text"
          placeholder="Enter State"
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
          className="w-full  my-1 focus:outline-none"
          {...register("pincode")}
          defaultValue={pincode}
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
          placeholder="Enter Pincode"
        />
        {errors.pincode && (
          <div className="text-red-500">{errors.pincode.message}</div>
        )}
        {city ? (
          pathname === "/checkout" && (
            <div className="flex">
              <Pen className="border p-1" />
              <Trash className="border p-1" onClick={deleteAddress} />
            </div>
          )
        ) : (
          <input type="submit" value={"Submit"} />
        )}
      </form>
    </>
  );
};

export default Address;
