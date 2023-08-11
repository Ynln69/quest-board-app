// export const handleRegisterFulfilled = ({ payload }) => {
//   console.log(payload.message);
// };

export const handleLoginFulfilled = (state, { payload }) => {
  state.token = payload.token;
  state.isLoggedIn = true;
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

export const handleRefreshUserFullfilled = (state, { payload }) => {
  state.username = payload.username;
  state.email = payload.email;
  state.password = payload.password;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.id = payload._id;
  state.boards = payload.boards;
  state.theme = payload.theme;
  state.avatarURL = payload.avatarURL;
  state.isRefreshing = false;
};

export const handleUpdateUserFullfilled = (state, { payload }) => {
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

export const handleUpdateAvatarUserFullfilled = (state, { payload }) => {
  state.avatarURL = payload.avatarURL;
};
