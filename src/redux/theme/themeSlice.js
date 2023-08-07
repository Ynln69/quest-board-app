import { createSlice } from '@reduxjs/toolkit';
import { updateTheme } from './operations';

const initialState = {
  theme: null,
  isLoading: false,
  error: null,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(updateTheme.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateTheme.fulfilled, (state, action) => {
        state.theme = action.payload.theme;
        state.isLoading = false;
      })
      .addCase(updateTheme.rejected, (state, action) => {
        // state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
