import { create } from "zustand";

const getToasterSlice = (set: any) => ({
  isToaster: false,
  toasterMessage: "",
  type: "error",
  showToaster: (message: string, type: "success" | "error") => {
    set(() => ({
      isToaster: true,
      toasterMessage: message,
      type: type,
    }));
  },
  hideToaster: () => {
    set(() => ({
      isToaster: false,
      toasterMessage: "",
    }));
  },
});

const useToasterStore = create(getToasterSlice);

export default useToasterStore;
