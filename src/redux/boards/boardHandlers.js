export const handleCreateBoardFulfilled = (state, { payload }) => {
  return {
    ...state,
    boards: [...state.boards, payload],
  };
};

export const handleEditBoardFulfilled = (state, { payload }) => {
  const boardToEdit = state.boards.find(board => board.id === payload.id);
  if (boardToEdit) {
    boardToEdit.title = payload.title;
    boardToEdit.icon = payload.icon;
    boardToEdit.background = payload.background;
  }
};

export const handleDeleteBoardFulfilled = (state, { payload }) => {
  state.boards.filter(board => board.id !== payload.id);
};

export const handlePending = (state, { payload }) => {
  state.isRefreshing = true;
};

export const handleRejected = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
};

export const handleFulfilled = (state, { payload }) => {
  state.isRefreshing = false;
  state.error = null;
};

export const handleGetBoardsFulfilled = (state, { payload }) => {
  return { ...state, boards: payload };
};

// export const handleRefreshUserFulfilled = (state, { payload }) => {
//   console.log(payload);
// };
