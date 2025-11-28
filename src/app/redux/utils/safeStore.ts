import storage from "redux-persist/lib/storage";

const isClient = typeof window !== "undefined";

export const safeStorage = isClient
  ? storage
  : {
      getItem: () => Promise.resolve(null),
      setItem: () => Promise.resolve(),
      removeItem: () => Promise.resolve(),
    };

export default safeStorage;
