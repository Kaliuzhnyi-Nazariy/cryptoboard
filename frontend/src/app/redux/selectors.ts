import { RootState } from "./store";

export const name = (state: RootState) => state.user.user?.name;
export const email = (state: RootState) => state.user.user?.email;
export const avatar = (state: RootState) => state.user.user?.avatar;
export const isLoading = (state: RootState) => state.user.isLoading;
export const isLoggedIn = (state: RootState) => state.user.isLoggedIn;

export const user = (state: RootState) => state.user;
