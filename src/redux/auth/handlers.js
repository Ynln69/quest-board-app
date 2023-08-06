export const handleRegisterFulfilled = (state, { payload: { user } }) => {
  state.username = user.username;
  state.email = user.email;
  state.password = user.password;
  state.token = user.token;
  state.isLoggedIn = true;
};

export const handleLoginFulfilled = (state, { payload: { newUser } }) => {
  state.username = newUser.username;
  state.email = newUser.email;
  state.password = newUser.password;
  state.token = newUser.token;
  state.isLoggedIn = true;
  state.id = newUser._id;
  state.boards = newUser.boards;
  state.theme = newUser.theme;
  state.avatarURL = newUser.avatarURL;
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
  state.username = payload.user.username;
  state.email = payload.user.email;
  state.password = payload.user.password;
  state.token = payload.user.token;
  state.isLoggedIn = true;
  state.id = payload.user._id;
  state.boards = payload.user.boards;
  state.theme = payload.user.theme;
  state.avatarURL = payload.user.avatarURL;
  state.isRefreshing = false;
};
