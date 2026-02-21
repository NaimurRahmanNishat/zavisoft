// src/store/store.ts
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

// ================= PERSIST CONFIG =================
const cartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["items"], 
};

// ================= ROOT REDUCER =================
const rootReducer = combineReducers({
  cart: persistReducer(cartPersistConfig, cartReducer),
});

// ================= STORE =================
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }),
});

// ================= PERSISTOR =================
export const persistor = persistStore(store);

// ================= TYPES =================
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;