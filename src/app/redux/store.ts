import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user/userSlice";
import { walletReducer } from "./wallet/walletSlice";
import transactionReducer from "./transaction/transactionSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { UserState } from "./user/userType";
import safeStorage from "./utils/safeStore";

const userPersistConfig = {
  key: "user",
  storage: safeStorage,
  whitelist: ["token"],
};

// const rootReducer = combineReducers({
//   user: persistReducer(UserPersistConfig, userReducer),
//   wallet: walletReducer,
//   transaction: transactionReducer,
// });

export const store = configureStore({
  reducer: {
    user: persistReducer<UserState>(userPersistConfig, userReducer),
    wallet: walletReducer,
    transaction: transactionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
