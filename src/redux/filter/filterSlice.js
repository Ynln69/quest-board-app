import { createSlice } from '@reduxjs/toolkit';


export const filterSlice = createSlice({
  name: 'filter',
  initialState: 'all',
  reducers: {
    filterPriority(state, action) {
      return (state = action.payload)
    }
  }
})

export const {filterPriority} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
