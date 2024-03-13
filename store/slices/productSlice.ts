import { StateCreator } from "zustand";

interface ProductStore {
  data: Record<string, any>;
  loading: boolean;
  error: string | null;
  getProducts: () => Promise<void>;
}

const getProductSlice: StateCreator<ProductStore> = (set, get) => ({
  data: {},
  loading: false,
  error: null,
  getProducts: async () => {
    try {
      set(() => ({ loading: true, error: null }));

      const response = await fetch(
        "https://groww-intern-assignment.vercel.app/v1/api/order-details"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const responseData = await response.json();

      set(() => ({ data: responseData, loading: false }));
    } catch (error) {
      console.error("Error fetching data:", error);

      set(() => ({ error: "Error fetching data", loading: false }));
    }
  },
});

export default getProductSlice;
