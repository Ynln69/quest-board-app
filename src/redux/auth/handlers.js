export const handleRegisterFulfilled = (state, { payload: { user } }) => {
  state.username = user.username;
  state.email = user.email;
  state.password = user.password;
  state.token = user.token;
  state.isLoggedIn = true;
};

export const handleLoginFulfilled = (state, { payload }) => {
  state.username = payload.username;
  state.email = payload.email;
  state.password = payload.password;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.id = payload._id;
  state.boards = payload.boards;
  state.theme = payload.theme;
  state.avatarURL = payload.avatarURL;
};

export const handleLogOutFulfilled = state => {
  // state.user = { name: null, email: null };
  state.username = null;
  state.email = null;
  state.password = null;
  state.token = null;
  state.isLoggedIn = false;
};

export const toggleIsRefreshing = state => {
  state.isRefreshing = !state.isRefreshing;
};

export const handleRefreshUserFullfilled = (state, { payload }) => {
  // state.user = payload;
  state.username = payload.user.username;
  state.email = payload.user.email;
  state.password = payload.user.password;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};
