import { createSlice } from '@reduxjs/toolkit';

const initialState = 'light';

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      return action.payload;
    },
  },
});

export const  themeReducer = themeSlice.reducer;