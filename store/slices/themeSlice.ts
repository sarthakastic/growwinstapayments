import { StateCreator } from "zustand";

interface Theme {
  "--background": string;
  "--foreground": string;
  "--primary": string;
  "--primary-foreground": string;
}

interface Merchant {
  merchantName: string;
  merchantLogo: string;
  theme: Theme;
  loading: boolean;
}

const getThemeSlice: StateCreator<Merchant> = (set, get) => ({
  merchantName: "",
  merchantLogo: "",
  theme: {
    "--background": "",
    "--foreground": "",
    "--primary": "",
    "--primary-foreground": "",
  },
  loading: false,

  getTheme: async () => {
    try {
      set(() => ({ loading: true, error: null }));

      const response = await fetch(
        "https://groww-intern-assignment.vercel.app/v1/api/merchant-metadata",
        {
          cache: "force-cache",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const responseData = await response.json();

      set(() => ({
        merchantLogo: responseData.merchantLogo,
        merchantName: responseData.merchantName,
        theme: responseData?.theme,
        loading: false,
      }));
    } catch (error) {
      console.error("Error fetching data:", error);

      set(() => ({ error: "Error fetching data", loading: false }));
    }
  },
});

export default getThemeSlice;
