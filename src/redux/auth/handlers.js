export const handleRegisterFulfilled = (state, { payload: { user } }) => {
  state.email = user.email;
};

// export const handleGoogleRegisterFulfilled = (state, { payload }) => {
//   state.username = payload.name;
//   state.email = payload.email;
//   state.password = payload.id;
//   state.isLoggedIn = true;
//   state.avatarURL = payload.picture;
// };

export const handleLoginFulfilled = (state, { payload: { user } }) => {
  state.username = user.username;
  state.email = user.email;
  state.password = user.password;
  state.token = user.token;
  state.isLoggedIn = true;
  state.id = user._id;
  state.boards = user.boards;
  state.theme = user.theme;
  state.avatarURL = user.avatarURL;
};

export const handleLogOutFulfilled = state => {
  state.username = null;
  state.email = null;
  state.password = null;
  state.token = null;
  state.id = null;
  state.boards = null;
  state.theme = null;
  state.avatarURL = null;
  state.isLoggedIn = false;
};

export const toggleIsRefreshing = state => {
  state.isRefreshing = !state.isRefreshing;
};

export const handleRefreshUserFullfilled = (state, { payload: { user } }) => {
  state.username = user.username;
  state.email = user.email;
  state.password = user.password;
  state.token = user.token;
  state.isLoggedIn = true;
  state.id = user._id;
  state.boards = user.boards;
  state.theme = user.theme;
  state.avatarURL = user.avatarURL;
  state.isRefreshing = false;
};
