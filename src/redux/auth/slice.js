import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  refreshUser,
  updateUser,
  updateUserAvatar,
} from './operations';
import * as handlersForRegisterLogin from './handlers';

export const initialState = {
  id: null,
  username: null,
  email: null,
  password: null,
  avatarURL: null,
  token: null,
  theme: 'LIGHT',
  boards: [],
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
      .addCase(
        register.fulfilled,
        handlersForRegisterLogin.handleRegisterFulfilled
      )
      .addCase(logIn.fulfilled, handlersForRegisterLogin.handleLoginFulfilled)
      .addCase(
        updateUser.fulfilled,
        handlersForRegisterLogin.handleUpdateUserFullfilled
      )
      .addCase(
        updateUserAvatar.fulfilled,
        handlersForRegisterLogin.handleUpdateAvatarUserFullfilled
      )
      .addMatcher(
        isAnyOf(refreshUser.pending, refreshUser.rejected),
        handlersForRegisterLogin.toggleIsRefreshing
      );
  },
});

export const authReducer = authSlice.reducer;

// .addMatcher(
//         isAnyOf(
//           createBoard.fulfilled,
//           editBoard.fulfilled,
//           deleteBoard.fulfilled
//         ),
//         handlersForRegisterLogin.handleAddBoardFulfilled
//       );
