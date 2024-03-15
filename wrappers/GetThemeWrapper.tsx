"use client";

import { ReactNode, useEffect, useState } from "react";

const GetThemeWrapper = ({ children }: { children: ReactNode }) => {
  const [dynamicConfig, setDynamicConfig] = useState<any>();

  async function fetchThemeData() {
    try {
      const response = await fetch(
        "https://groww-intern-assignment.vercel.app/v1/api/merchant-metadata",
        {
          cache: "no-cache",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch theme data");
      }
      const data: any = await response.json();
      return data.theme;
    } catch (error) {
      console.error("Error fetching theme data:", error);
      return null;
    }
  }

  async function getDynamicTailwindConfig() {
    const theme = await fetchThemeData();
    if (!theme) {
      throw new Error("Failed to fetch or parse theme data");
    }

    let dynamicTheme = {
      background: theme["--background"],
      foreground: theme["--foreground"],
      primary: theme["--primary"],
      primaryForeground: theme["--primary-foreground"],
    };

    return dynamicTheme;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dynamicConfigData = await getDynamicTailwindConfig();
        setDynamicConfig(dynamicConfigData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <style
        dangerouslySetInnerHTML={{
          __html: `:root {
                     --background: ${dynamicConfig?.background};
                     --foreground: ${dynamicConfig?.foreground};
                     --primary: ${dynamicConfig?.primary};
                     --primarybg: color-mix(in hsl longer hue, ${dynamicConfig?.primary} 25%, transparent);
                     --primaryForeground: ${dynamicConfig?.primaryForeground};
                   }`,
        }}
      />
      {children}
    </section>
  );
};

export default GetThemeWrapper;
