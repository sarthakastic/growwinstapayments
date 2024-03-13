import { create } from "zustand";

import getProductSlice from "./slices/productSlice";

interface ProductStore {
  data: Record<string, any>; // Update the data type as per your needs
  loading: boolean;
  error: string | null;
  getProducts: () => Promise<void>;
}

const useStore = create<ProductStore>()((...a) => ({
  ...getProductSlice(...a),
}));

export default useStore;
