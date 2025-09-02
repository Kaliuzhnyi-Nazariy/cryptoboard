import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "./userType";
import { signin, signout, signup } from "../requests/authRequests";
import { IUser } from "@/app/types";
import { deleteUser, getMe, updateUser } from "../requests/userRequests";

const initialState: UserState = {
  user: null,
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
          state.user = action.payload;
        }
      )
      .addCase(signup.rejected, handleReject)
      .addCase(signin.pending, handleLoading)
      .addCase(
        signin.fulfilled,
        (state: UserState, action: PayloadAction<IUser>) => {
          state.isLoading = false;
          state.isLoggedIn = true;
          state.user = action.payload;
        }
      )
      .addCase(signin.rejected, handleReject)
      .addCase(signout.pending, handleLoading)
      .addCase(
        signout.fulfilled,
        (state: UserState, action: PayloadAction<IUser>) => {
          state.isLoading = false;
          state.isLoggedIn = false;
          state.user = action.payload;
        }
      )
      .addCase(signout.rejected, handleReject)
      .addCase(getMe.pending, handleLoading)
      .addCase(
        getMe.fulfilled,
        (state: UserState, action: PayloadAction<IUser>) => {
          state.isLoading = false;
          state.isLoggedIn = false;
          state.user = action.payload;
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
          state.isLoggedIn = false;
          state.user = action.payload;
        }
      )
      .addCase(updateUser.rejected, handleReject)
      .addCase(deleteUser.pending, handleLoading)
      .addCase(deleteUser.fulfilled, (state: UserState) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.user = initialState.user;
      })
      .addCase(deleteUser.rejected, handleReject);
  },
});

export const userReducer = userSlice.reducer;
