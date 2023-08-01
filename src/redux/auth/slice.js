import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';
import * as handlersForRegisterLogin from './handlers';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logOut.fulfilled, handlersForRegisterLogin.handleLogOutFulfilled)
      .addCase(
        refreshUser.fulfilled,
        handlersForRegisterLogin.handleRefreshUserFullfilled
      )
      .addMatcher(
        isAnyOf(refreshUser.pending, refreshUser.rejected),
        handlersForRegisterLogin.toggleIsRefreshing
      )
      .addMatcher(
        isAnyOf(register.fulfilled, logIn.fulfilled),
        handlersForRegisterLogin.handleRegisterLoginFulfilled
      );
  },
});

export const authReducer = authSlice.reducer;
