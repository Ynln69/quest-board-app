import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { createBoard, deleteBoard, editBoard } from './boardOperations';
import {
  handleCreateBoardFulfilled,
  handleDeleteBoardFulfilled,
  handleEditBoardFulfilled,
  handleFulfilled,
  handlePending,
  handleRefreshUserFulfilled,
  handleRejected,
} from './boardHandlers';
import { refreshUser } from 'redux/auth/operations';

const operationsArr = [createBoard, editBoard, deleteBoard];

const setOperationStatus = status => operationsArr.map(el => el[status]);

const boardsSlice = createSlice({
  name: 'boardsSlice',
  initialState: {
    boards: [],
    isRefreshing: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(createBoard.fulfilled, handleCreateBoardFulfilled)
      .addCase(editBoard.fulfilled, handleEditBoardFulfilled)
      .addCase(deleteBoard.fulfilled, handleDeleteBoardFulfilled)
      .addCase(refreshUser.fulfilled, handleRefreshUserFulfilled)
      .addMatcher(isAnyOf(...setOperationStatus('pending')), handlePending)
      .addMatcher(isAnyOf(...setOperationStatus('rejected')), handleRejected)
      .addMatcher(isAnyOf(...setOperationStatus('fulfilled')), handleFulfilled);
  },
});

export const boardsReducer = boardsSlice.reducer;
