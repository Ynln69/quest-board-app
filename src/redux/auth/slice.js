import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';
import * as handlersForRegisterLogin from './handlers';
import {
  createBoard,
  deleteBoard,
  editBoard,
} from 'redux/boards/boardOperations';

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
      .addMatcher(
        isAnyOf(refreshUser.pending, refreshUser.rejected),
        handlersForRegisterLogin.toggleIsRefreshing
      )
      .addMatcher(
        isAnyOf(
          createBoard.fulfilled,
          editBoard.fulfilled,
          deleteBoard.fulfilled
        ),
        handlersForRegisterLogin.handleAddBoardFulfilled
      );

    // .addMatcher(
    //   isAnyOf(register.fulfilled, logIn.fulfilled),
    //   handlersForRegisterLogin.handleRegisterLoginFulfilled
    // );
  },
});

export const authReducer = authSlice.reducer;
