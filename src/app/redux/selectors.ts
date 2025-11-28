import { RootState } from "./store";

export const name = (state: RootState) => state.user.user?.name;
export const email = (state: RootState) => state.user.user?.email;
export const avatarLink = (state: RootState) => state.user.user?.avatar.link;
export const avatarName = (state: RootState) => state.user.user?.avatar.name;
export const isLoading = (state: RootState) => state.user.isLoading;
export const isLoggedIn = (state: RootState) => state.user.isLoggedIn;
export const userError = (state: RootState) => state.user.error;

export const userToken = (state: RootState) => state.user.token;

export const user = (state: RootState) => state.user;
// export const userCreateYear = (state: RootState) => state.user.user?.createdAt;
// export const userCreateYear = (state: RootState) => {
//   return Number(
//     state.user.user?.createdAt?.toString().split("").slice(0, 4).join("")
//   );
// };
export const userCreateYear = (state: RootState) => {
  return state.user.user?.createdAt?.toString().split("").slice(0, 4).join("");
};

export const userTokens = (state: RootState) => state.user.user?.tokens || [];
