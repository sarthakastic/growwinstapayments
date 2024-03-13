import { StateCreator } from "zustand";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface PaymentMethods {
  paymentMethods: string;
}

interface ProductStore {
  totalPrice: number;
  paymentMethods: PaymentMethods[];
  products: Product[];
  loading: boolean;
  error: string | null;
  getProducts: () => Promise<void>;
  incrementQuantity: (productId: number) => void;
  decrementQuantity: (productId: number) => void;
}

const getProductSlice: StateCreator<ProductStore> = (set, get) => ({
  totalPrice: 0,
  paymentMethods: [],
  products: [],
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

      // Assuming the response structure matches the provided example
      set(() => ({
        products: responseData.products.map((product: Product) => ({
          ...product,
          // Add initialQuantity to track the original quantity
          initialQuantity: product.quantity,
        })),
        paymentMethods: responseData.paymentMethods,
        loading: false,
      }));
    } catch (error) {
      console.error("Error fetching data:", error);

      set(() => ({ error: "Error fetching data", loading: false }));
    }
  },
  incrementQuantity: (productId: number) => {
    set((state) => ({
      products: state.products.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      ),
    }));
  },
  decrementQuantity: (productId: number) => {
    set((state) => ({
      products: state.products.map((product) =>
        product.id === productId && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product
      ),
    }));
  },
  getTotalPrice: () => {
    const { products } = get();

    set(() => ({
      totalPrice: products.reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0),
    }));
  },
});

export default getProductSlice;