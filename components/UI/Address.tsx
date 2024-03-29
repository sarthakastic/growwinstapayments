"use client";

import React, { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { AddressSchema } from "@/utils/validation";
import { usePathname } from "next/navigation";
import { saveToLocalStorage } from "@/utils/saveDataToLocalStorage";
import { MapPin, Plus, Trash } from "lucide-react";
import { getLocalStorage } from "@/utils/localStorageHandler";
import useToasterStore from "@/store/slices/toasterSlice";

type AddressFields = z.infer<typeof AddressSchema>;

const Address = () => {
  const pathname = usePathname();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddressFields>({ resolver: zodResolver(AddressSchema) });

  const { showToaster } = useToasterStore();

  const onSubmit: SubmitHandler<AddressFields> = (data) => {
    showToaster("Address added successfully", "success");
    saveToLocalStorage(data);
    setCity(data?.city);
  };

  const [houseNumber, setHouseNumber] = useState<string>("");
  const [landmark, setLandmark] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [pincode, setPincode] = useState<string>("");

  useEffect(() => {
    const storedHouseNumber = getLocalStorage("addressLine1");
    const storedLandmark = getLocalStorage("addressLine2");
    const storedCity = getLocalStorage("city");
    const storedState = getLocalStorage("state");
    const storedPincode = getLocalStorage("pincode");

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
    showToaster("Address deleted successfully", "success");
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
    reset();
  };

  const [hydrated, setHydrated] = useState<boolean>(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <>
      <h4 className="text-primary font-bold text-lg mt-5 ">Address Details</h4>
      {hydrated ? (
        <form
          className=" border border-primary px-5 py-2 rounded-lg my-5 bg-primaryBg shadow-2xl"
          onSubmit={handleSubmit(onSubmit)}
        >
          <MapPin />
          <div className="mx-2">
            <input
              className="w-full bg-transparent  my-1 focus:outline-none"
              {...register("addressLine1")}
              defaultValue={houseNumber}
              type="text"
              placeholder="Enter House No./Street Number"
              onInput={(e) => {
                const input = e.target as HTMLInputElement;

                const value = input.value.toUpperCase();

                input.value = value;
              }}
            />
            {errors.addressLine1 && (
              <div className="text-red-500">{errors.addressLine1.message}</div>
            )}
            <input
              className="w-full bg-transparent  my-1 focus:outline-none"
              {...register("addressLine2")}
              defaultValue={landmark}
              type="text"
              placeholder="Enter Locality"
              onInput={(e) => {
                const input = e.target as HTMLInputElement;

                const value = input.value.toUpperCase();

                input.value = value;
              }}
            />
            {errors.addressLine2 && (
              <div className="text-red-500">{errors.addressLine2.message}</div>
            )}
            <input
              className="w-full bg-transparent  my-1 focus:outline-none"
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
              className="w-full bg-transparent  my-1 focus:outline-none"
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
              className="w-full bg-transparent  my-1 focus:outline-none"
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
                <Trash
                  className="border p-1  text-red-500 border-red-500 rounded-full hover:cursor-pointer hover:bg-red-200 "
                  onClick={deleteAddress}
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
        <div className="h-80 w-full bg-slate-700 animate-pulse rounded-lg my-5 "></div>
      )}
    </>
  );
};

export default Address;
