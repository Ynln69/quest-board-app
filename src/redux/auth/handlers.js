export const handleRegisterLoginFulfilled = (state, { payload }) => {
  state.username = payload.user.username;
  state.email = payload.user.email;
  state.password = payload.user.password;
  state.token = payload.user.token;
  state.isLoggedIn = true;
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
