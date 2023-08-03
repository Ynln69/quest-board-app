export const handleRegisterLoginFulfilled = (state, { payload }) => {
  state.username = payload.username;
  state.email = payload.email;
  state.password = payload.password;
  state.token = payload.token;
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
  state.username = payload.username;
  state.email = payload.email;
  state.password = payload.password;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};
