export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectTheme = state => state.auth.theme;
