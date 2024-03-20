"use client";

import useThemeStore from "@/store/slices/themeSlice";
import { ReactNode, useEffect } from "react";

const GetThemeWrapper = ({ children }: { children: ReactNode }) => {
  const { merchantName, themeConfig, fetchThemeData } = useThemeStore();

  async function getDynamicTailwindConfig() {
    await fetchThemeData();

    let dynamicTheme = {
      background: themeConfig["--background"],
      foreground: themeConfig["--foreground"],
      primary: themeConfig["--primary"],
      primaryForeground: themeConfig["--primary-foreground"],
    };

    return dynamicTheme;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getDynamicTailwindConfig();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    merchantName.length === 0 && fetchData();
  }, [themeConfig]);

  return (
    <section>
      <style
        dangerouslySetInnerHTML={{
          __html: `:root {
                     --background: ${themeConfig?.["--background"]};
                     --foreground: ${themeConfig?.["--foreground"]};
                     --primary: ${themeConfig?.["--primary"]};
                     --primarybg: color-mix(in hsl , ${themeConfig?.["--primary"]} 25%, transparent);
                     --primaryForeground: ${themeConfig?.["--primary-foreground"]};
                   }`,
        }}
      />
      {children}
    </section>
  );
};

export default GetThemeWrapper;
