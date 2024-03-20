import { StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeColors {
  "--background": string;
  "--foreground": string;
  "--primary": string;
  "--primary-foreground": string;
}

const getThemeSlice = (set: any, get: any) => ({
  merchantName: "",
  merchantLogo: "",
  themeConfig: {
    "--background": "",
    "--foreground": "",
    "--primary": "",
    "--primary-foreground": "",
  },
  themeLoading: true,

  setLabel: async (merchantLogo: string, merchantName: string) => {
    set(() => ({
      merchantLogo,
      merchantName,
    }));
  },
  setThemeLoading: async () => {
    set(() => ({
      themeLoading: false,
    }));
  },
  setThemeConfig: async (themeConfig: ThemeColors) => {
    set(() => ({
      themeConfig,
    }));
  },
  fetchThemeData: async () => {
    try {
      const { setThemeLoading, setThemeConfig, setLabel } = get();
      setThemeLoading();

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_HOST_URL}/v1/api/merchant-metadata`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch theme data");
      }

      const data: any = await response.json();

      setLabel(data?.merchantLogo, data?.merchantName);
      setThemeConfig(data?.theme);

      return data.theme;
    } catch (error) {
      const { setThemeLoading } = get();
      setThemeLoading(); // Set themeLoading to false in case of error
      console.error("Error fetching theme data:", error);
      return null;
    }
  },
});

const useThemeStore = create(
  persist(getThemeSlice, {
    name: "growwtheme",
  })
);

export default useThemeStore;
