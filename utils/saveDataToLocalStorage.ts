const saveToLocalStorage = (data: any) => {
  try {
    for (const [key, value] of Object.entries(data)) {
      typeof value === "string" && localStorage.setItem(key, value);
    }
  } catch (error) {
    console.error("Error saving data to localStorage:", error);
  }
};

export { saveToLocalStorage };
