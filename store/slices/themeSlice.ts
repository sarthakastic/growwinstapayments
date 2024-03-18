import { StateCreator } from "zustand";

interface Merchant {
  merchantName: string;
  merchantLogo: string;
  themeLoading: boolean;
}

const getThemeSlice: StateCreator<Merchant> = (set, get) => ({
  merchantName: "",
  merchantLogo: "",
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
});

export default getThemeSlice;
