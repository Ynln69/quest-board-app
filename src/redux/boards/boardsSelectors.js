export const selectBoards = state => state.boards.boards;

export const selectRefreshError = ({ boards: { isRefreshing, error } }) => ({
  isRefreshing,
  error,
});
