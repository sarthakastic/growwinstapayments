"use client";

import React, { ReactNode, useEffect } from "react";
import useStore from "@/store/store";

const GetProductsWrapper = ({ children }: { children: ReactNode }) => {
  const getData = useStore((state) => state.getProducts);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getData();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return <div>{children}</div>;
};

export default GetProductsWrapper;
