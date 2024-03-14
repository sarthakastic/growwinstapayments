const saveToLocalStorage = (data: any) => {
  try {
    for (const [key, value] of Object.entries(data)) {
      // Save key-value pair to localStorage
      typeof value === "string" && localStorage.setItem(key, value);
      console.log(`Data saved to localStorage: { ${key}: ${value} }`);
    }
  } catch (error) {
    console.error("Error saving data to localStorage:", error);
    // Handle error as needed (e.g., show error message, retry saving, etc.)
  }
};

export { saveToLocalStorage };
