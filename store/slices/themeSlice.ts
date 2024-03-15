import { StateCreator } from "zustand";

interface Merchant {
  merchantName: string;
  merchantLogo: string;
}

const getThemeSlice: StateCreator<Merchant> = (set, get) => ({
  merchantName: "",
  merchantLogo: "",

  setLabel: async (merchantLogo: string, merchantName: string) => {
    set(() => ({
      merchantLogo,
      merchantName,
    }));
  },
});

export default getThemeSlice;
