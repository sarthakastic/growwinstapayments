import { create } from "zustand";

import getProductSlice from "./slices/productSlice";
import getThemeSlice from "./slices/themeSlice";

interface ProductStore {
  data: Record<string, any>; // Update the data type as per your needs
  loading: boolean;
  error: string | null;
  getProducts: () => Promise<void>;
}

const useStore = create<any>()((...a) => ({
  ...getProductSlice(...a),
  ...getThemeSlice(...a),
}));

export default useStore;
