"use client";

import React, { ReactNode, useEffect } from "react";
import useProductStore from "@/store/slices/productSlice";

const GetProductsWrapper = ({ children }: { children: ReactNode }) => {
  const { getProducts, products } = useProductStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getProducts();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    products.length === 0 && fetchData();
  }, []);

  return <div>{children}</div>;
};

export default GetProductsWrapper;
