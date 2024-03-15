"use client";

import React from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { UpiIdSchema } from "@/utils/validation";

type UpiFields = z.infer<typeof UpiIdSchema>;

const UpiDetails = ({ setCardData }: { setCardData: any }) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<UpiFields>({ resolver: zodResolver(UpiIdSchema) });

  const onSubmit: SubmitHandler<UpiFields> = async (data) => {
    setCardData(data?.upiId);
  };

  return (
    <>
      <form className="flex border p-1 " onSubmit={handleSubmit(onSubmit)}>
        <input
          className="w-full bg-transparent focus:outline-none  "
          {...register("upiId")}
          type="text"
          placeholder="Enter UPI ID"
        />
        <input
          className="text-primary font-semibold hover:cursor-pointer"
          type="submit"
          value={"Save"}
        />
      </form>
      {errors.upiId && (
        <div className="text-red-500 p-2 ">{errors.upiId.message}</div>
      )}
    </>
  );
};

export default UpiDetails;
