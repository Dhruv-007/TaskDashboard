
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { dummyApi } from "../src/component/API/API";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [dummyApi.reducerPath]: dummyApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dummyApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
