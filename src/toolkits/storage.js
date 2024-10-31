"use client";

const createCustomStorage = () => {
  const STATE_NAME = "tod";

  return {
    getItem: (key) => {
      if (typeof window === "undefined") return Promise.resolve(null);
      try {
        return Promise.resolve(JSON.parse(localStorage.getItem(key)));
      } catch {
        return Promise.resolve(null);
      }
    },
    setItem: (key, value) => {
      if (typeof window === "undefined") return Promise.resolve();
      try {
        localStorage.setItem(key, JSON.stringify(value));
        return Promise.resolve();
      } catch {
        return Promise.resolve();
      }
    },
    removeItem: (key) => {
      if (typeof window === "undefined") return Promise.resolve();
      try {
        localStorage.removeItem(key);
        return Promise.resolve();
      } catch {
        return Promise.resolve();
      }
    },
  };
};

export const customStorage = createCustomStorage();
