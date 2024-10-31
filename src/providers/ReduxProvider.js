"use client";
import { Provider } from "react-redux";
import { store, persistedStore } from "@/toolkits/store";
import { PersistGate } from "redux-persist/integration/react";
import { useEffect, useState } from "react";

export default function ReduxProvider({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  // return (
  //   <Provider store={store}>
  //     <PersistGate persistor={persistedStore}>
  //       {bootstrapped => children}
  //     </PersistGate>
  //   </Provider>
  // )

  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>{children}</PersistGate>
    </Provider>
  );
}
