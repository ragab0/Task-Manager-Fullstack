"use client";
import { Provider } from "react-redux";
import { store, persistedStore } from "@/toolkits/store";
import { PersistGate } from "redux-persist/integration/react";
import Loading from "@/app/loading";

export default function ReduxProvider({children}) {
  // return (
  //   <Provider store={store}>
  //     <PersistGate persistor={persistedStore}>
  //       {bootstrapped => children}
  //     </PersistGate>
  //   </Provider>
  // )

  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        {children}
      </PersistGate>
    </Provider>
  )
}