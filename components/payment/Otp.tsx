import useStore from "@/store/store";
import { useRouter } from "next/navigation";

import React, { useState } from "react";

const Otp = () => {
  const router = useRouter();

  const [otpValue, setOtpValue] = useState(""); // State to store OTP value
  const showToaster = useStore((state) => state.showToaster);

  const inputChangeHandler = (e: any) => {
    const data = e.target.value;
    setOtpValue(data); // Update OTP value in state
  };

  const handleSubmit = (e: any) => {
    e.preventDefault(); // Prevent form submission
    if (otpValue.length === 6) {
      showToaster(" Order Placed Successfully", "success");
      router.push("/order-status");
    } else {
      showToaster(" Incorrect OTP, OTP must be of 6 digits", "error");
    }
    console.log("Length of OTP:", otpValue.length);
  };

  return (
    <div className="absolute w-screen h-4/5 flex bg-primaryForeground justify-center items-center">
      <div className="w-1/2 m-auto  flex flex-col items-center justify-center">
        Otp
        <form onSubmit={handleSubmit}>
          <input
            className="w-full focus:outline-none"
            maxLength={6}
            onInput={(e) => {
              const input = e.target as HTMLInputElement;
              let value = input.value.replace(/\D/g, ""); // Remove non-numeric characters
              if (value.length > 10) {
                value = value.slice(0, 10); // Truncate the value to 10 digits
              }
              input.value = value; // Update the input value
            }}
            value={otpValue}
            onChange={inputChangeHandler}
            type="text"
            placeholder="Enter OTP"
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Otp;
