"use client";

import useProductStore from "@/store/slices/productSlice";
import useThemeStore from "@/store/slices/themeSlice";

import { RefreshCw } from "lucide-react";
import React from "react";

const Reload = () => {
  const { getProducts } = useProductStore();
  const { fetchThemeData } = useThemeStore();

  return (
    <button
      className="flex  "
      type="button"
      onClick={() => {
        useProductStore.persist.clearStorage();
        useThemeStore.persist.clearStorage();
        getProducts();
        fetchThemeData();
      }}
    >
      <RefreshCw className="border bg-primaryForeground  rounded-full border-primary p-1 fixed bottom-24 right-5  h-[2rem] w-[2rem] rotate-0 scale-100 text-primary transition-all " />
    </button>
  );
};

export default Reload;
