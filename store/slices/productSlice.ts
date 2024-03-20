import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

const getProductSlice = (set: any, get: any) => ({
  totalPrice: 0,
  paymentMethods: [],
  products: [],
  error: null,
  modeOfPayment: "",

  getProducts: async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_HOST_URL}/v1/api/order-details`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const responseData = await response.json();

      set(() => ({
        products: responseData.products.map((product: Product) => ({
          ...product,

          initialQuantity: product.quantity,
        })),
        paymentMethods: responseData.paymentMethods,
      }));
    } catch (error) {
      set(() => ({
        productLoading: false,
      }));
      console.error("Error fetching data:", error);

      set(() => ({ error: "Error fetching data" }));
    }
  },
  incrementQuantity: (productId: number) => {
    set((state: any) => ({
      products: state.products.map((product: Product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      ),
    }));
  },
  decrementQuantity: (productId: number) => {
    set((state: any) => ({
      products: state.products.map((product: Product) =>
        product.id === productId && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product
      ),
    }));
  },
  getTotalPrice: () => {
    const { products } = get();

    set(() => ({
      totalPrice: products.reduce((total: number, product: Product) => {
        return total + product.price * product.quantity;
      }, 0),
    }));
  },
  setModeOfPayment: (modeOfPayment: string) => {
    set(() => ({
      modeOfPayment: modeOfPayment,
    }));
  },
});

const useProductStore = create(
  persist(getProductSlice, {
    name: "growwproduct",
  })
);

export default useProductStore;
