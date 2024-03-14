import { StateCreator } from "zustand";

interface ToasterStore {
  isToaster: boolean;
  toasterMessage: string;
  type: "success" | "error";
}

const getToasterSlice: StateCreator<ToasterStore> = (set, get) => ({
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

export default getToasterSlice;
