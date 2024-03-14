"use client";

import React, { ReactNode, useEffect } from "react";
import useStore from "@/store/store";

import Image from "next/image";
import { useRouter } from "next/navigation";

const GetProductsWrapper = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const data = useStore((state) => state.products);
  const pm = useStore((state) => state.paymentMethods);
  const getData = useStore((state) => state.getProducts);

  useEffect(() => {
    console.log("Running useEffect in GetProductsWrapper");

    const fetchData = async () => {
      try {
        console.log("Fetching data...");
        await getData();
        console.log("Data fetched successfully");
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error as needed (e.g., show error message, retry fetching, etc.)
      }
    };

    fetchData();

    // Cleanup function to ensure effect runs only once
    return () => {
      console.log("Cleanup function executed");
      // Add cleanup logic here if needed
    };
  }, []);

  return <div>{children}</div>;
};

export default GetProductsWrapper;
