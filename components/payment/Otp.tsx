import useStore from "@/store/store";
import { useRouter } from "next/navigation";

import React, { useState } from "react";

const Otp = () => {
  const router = useRouter();

  const [otpValue, setOtpValue] = useState("");
  const showToaster = useStore((state) => state.showToaster);

  const inputChangeHandler = (e: any) => {
    const data = e.target.value;
    setOtpValue(data);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (otpValue.length === 6) {
      showToaster(" Order Placed Successfully", "success");
      router.push("/order-status");
    } else {
      showToaster(" Incorrect OTP, OTP must be of 6 digits", "error");
    }
  };

  return (
    <div className=" z-40 fixed w-full h-screen flex items-center bg-black/50 top-0 left-0 justify-center ">
      <div className="z-40 h-fit w-fit p-10 flex flex-col bg-background fixed justify-center items-center">
        <h4 className="text-primary font-bold text-lg mt-5 ">Enter OTP</h4>
        <form
          className="flex  items-center justify-center my-10 gap-5"
          onSubmit={handleSubmit}
        >
          <input
            className="w-full bg-transparent focus:outline-none border-b border-primary text-primary"
            maxLength={6}
            onInput={(e) => {
              const input = e.target as HTMLInputElement;
              let value = input.value.replace(/\D/g, "");
              if (value.length > 6) {
                value = value.slice(0, 6);
              }
              input.value = value;
            }}
            value={otpValue}
            onChange={inputChangeHandler}
            type="text"
            placeholder="Enter OTP"
          />

          <input
            className="text-primary font-semibold hover:cursor-pointer"
            type="submit"
            value="Verify"
          />
        </form>
      </div>
    </div>
  );
};

export default Otp;
