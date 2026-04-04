export const handleLoginFulfilled = (state, { payload }) => {
  state.token = payload.token;
  state.username = payload.username;
  state.email = payload.email;
  state.id = payload._id;
  state.theme = payload.theme;
  state.avatarURL = payload.avatarURL;
  state.boards = payload.boards;
  state.isLoggedIn = true;
};

export const handleRegisterLoginFulfilled = (state, { payload }) => {
  state.token = payload.token;
  state.username = payload.username;
  state.email = payload.email;
  state.id = payload._id;
  state.theme = payload.theme;
  state.avatarURL = payload.avatarURL;
  state.boards = payload.boards;
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
  if (payload.username !== undefined) state.username = payload.username;
  if (payload.email !== undefined) state.email = payload.email;
  if (payload.theme !== undefined) state.theme = payload.theme;
  if (payload.avatarURL !== undefined) state.avatarURL = payload.avatarURL;
  if (payload._id !== undefined) state.id = payload._id;
};

export const handleUpdateAvatarUserFullfilled = (state, { payload }) => {
  state.avatarURL = payload.avatarURL;
};
