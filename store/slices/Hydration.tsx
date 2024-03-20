"use client"; // (a)

import * as React from "react";
import useProductStore from "./productSlice";
import useThemeStore from "./themeSlice";

const Hydration = () => {
  React.useEffect(() => {
    useProductStore.persist.rehydrate();
    useThemeStore.persist.rehydrate();
  }, []);

  return null;
};

export default Hydration;
