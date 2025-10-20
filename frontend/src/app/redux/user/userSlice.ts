import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { token, UserState } from "./userType";
import { signin, signout, signup } from "../requests/authRequests";
import { IUser } from "@/app/types";
import {
  deleteUser,
  getMe,
  getTokens,
  updateUser,
} from "../requests/userRequests";

const initialState: UserState = {
  user: {
    name: "",
    email: "",
    createdAt: undefined,
    tokens: [],
    avatar: { link: "", name: "" },
  },
  error: null,
  isLoading: false,
  isLoggedIn: false,
};

const handleLoading = (state: UserState) => {
  state.isLoading = true;
  state.error = null;
};

const handleReject = (
  state: UserState,
  action: PayloadAction<{ message: string } | undefined>
) => {
  state.isLoading = false;
  state.error = action.payload?.message ?? "Something went wrong";
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, handleLoading)
      .addCase(
        signup.fulfilled,
        (state: UserState, action: PayloadAction<IUser>) => {
          state.isLoading = false;
          state.isLoggedIn = true;
          state.user = {
            ...action.payload,
            createdAt: action.payload.createdAt
              ? new Date(action.payload.createdAt).toISOString()
              : undefined,
          };
        }
      )
      .addCase(signup.rejected, handleReject)
      .addCase(signin.pending, handleLoading)
      .addCase(
        signin.fulfilled,
        (state: UserState, action: PayloadAction<IUser>) => {
          state.isLoading = false;
          state.isLoggedIn = true;
          state.user = {
            ...action.payload,
            createdAt: action.payload.createdAt
              ? new Date(action.payload.createdAt).toISOString()
              : undefined,
          };
        }
      )
      .addCase(signin.rejected, handleReject)
      .addCase(signout.pending, handleLoading)
      .addCase(
        signout.fulfilled,
        (state: UserState, action: PayloadAction<IUser>) => {
          state.isLoading = false;
          state.isLoggedIn = false;
          state.user = {
            ...action.payload,
            createdAt: undefined,
          };
        }
      )
      .addCase(signout.rejected, handleReject)
      .addCase(getMe.pending, handleLoading)
      .addCase(
        getMe.fulfilled,
        (state: UserState, action: PayloadAction<IUser>) => {
          state.isLoading = false;
          state.isLoggedIn = true;
          state.user = {
            ...action.payload,
            createdAt: action.payload.createdAt
              ? new Date(action.payload.createdAt).toISOString()
              : undefined,
          };
        }
      )
      .addCase(
        getMe.rejected,
        (
          state: UserState,
          action: PayloadAction<{ message: string } | undefined>
        ) => {
          state.isLoading = false;
          state.isLoggedIn = false;
          state.error = action.payload?.message ?? "Something went wrong";
        }
      )
      .addCase(updateUser.pending, handleLoading)
      .addCase(
        updateUser.fulfilled,
        (state: UserState, action: PayloadAction<IUser>) => {
          state.isLoading = false;
          state.isLoggedIn = true;
          console.log(action.payload);

          state.user = {
            ...action.payload,
            createdAt: action.payload.createdAt
              ? new Date(action.payload.createdAt).toISOString()
              : undefined,
          };
        }
      )
      .addCase(updateUser.rejected, handleReject)
      .addCase(deleteUser.pending, handleLoading)
      .addCase(deleteUser.fulfilled, (state: UserState) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.user = initialState.user;
      })
      .addCase(deleteUser.rejected, handleReject)
      .addCase(getTokens.pending, (state: UserState) => {
        state.error = null;
      })
      .addCase(
        getTokens.fulfilled,
        (state: UserState, action: PayloadAction<{ tokens: token[] }>) => {
          state.isLoading = false;
          state.user.tokens = action.payload.tokens;
        }
      )
      .addCase(getTokens.rejected, handleReject);
  },
});

export const userReducer = userSlice.reducer;
