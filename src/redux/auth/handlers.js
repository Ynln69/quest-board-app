export const handleRegisterFulfilled = (state, { payload: { user } }) => {
  state.username = user.username;
  state.email = user.email;
  state.password = user.password;
  state.state.token = user.token;
  state.isLoggedIn = true;
  state.avatarURL = '';
};

// export const handleGoogleRegisterFulfilled = (state, { payload }) => {
//   state.username = payload.name;
//   state.email = payload.email;
//   state.password = payload.id;
//   state.isLoggedIn = true;
//   state.avatarURL = payload.picture;
// };

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

export const handleRefreshUserFullfilled = (state, { payload: { result } }) => {
  state.username = result.username;
  state.email = result.email;
  state.password = result.password;
  state.token = result.token;
  state.isLoggedIn = true;
  state.id = result._id;
  state.boards = result.boards;
  state.theme = result.theme;
  state.avatarURL = result.avatarURL;
  state.isRefreshing = false;
};
