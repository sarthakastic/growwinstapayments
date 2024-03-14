"use client";

import { ReactNode, useEffect, useState } from "react";

const GetThemeWrapper = ({ children }: { children: ReactNode }) => {
  const [foreground, setForeground] = useState<any>();

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

    let a = {
      background: theme["--background"],
      foreground: theme["--foreground"],
      primary: theme["--primary"],
      primaryForeground: theme["--primary-foreground"],
    };

    return a;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const a = await getDynamicTailwindConfig();
        setForeground(a);
        console.log({ a });
        // make an API call and set the response data to a variable
        const brandColor = "#0ff0f0";
        const bgColor = "#a5cd3e";
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log({ foreground });
  }, [foreground]);

  return (
    <section>
      <style
        dangerouslySetInnerHTML={{
          __html: ` :root {
                             --background: ${foreground?.background};
                             --foreground: ${foreground?.foreground};
                             --primary: ${foreground?.primary};
                             --primaryForeground: ${foreground?.primaryForeground}
                           }`,
        }}
      />
      {children}
    </section>
  );
};

export default GetThemeWrapper;
