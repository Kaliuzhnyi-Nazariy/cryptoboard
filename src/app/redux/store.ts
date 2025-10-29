import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user/userSlice";
import { walletReducer } from "./wallet/walletSlice";
import transactionReducer from "./transaction/transactionSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    wallet: walletReducer,
    transaction: transactionReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
