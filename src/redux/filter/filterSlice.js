import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: 'all',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    filterPriority(state, action) {
      return {
        ...state,
        filter: action.payload,
      };
    },
  },
});

export const { filterPriority } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
