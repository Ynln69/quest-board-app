import { createSlice } from '@reduxjs/toolkit';
import { updateTheme } from './operations';

const initialState = {theme: 'LIGHT'};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateTheme.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateTheme.fulfilled, (state, action) => {
           state.theme = action.payload.theme;
         });
    builder.addCase(updateTheme.rejected, (state, action) => {
       state.error = action.error.message;
    });
  },
});

export const { setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;