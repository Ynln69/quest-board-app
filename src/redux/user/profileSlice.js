import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  photo: 'default_photo_url',
  name: 'Ivetta',
  email: 'ivetta34@gmail.com',
  password: 'ivetta1999.23',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfileData: (state, action) => {
      const { newPhoto, newName, newEmail, newPassword } = action.payload;
      state.photo = newPhoto || state.photo;
      state.name = newName || state.name;
      state.email = newEmail || state.email;
      state.password = newPassword || state.password;
    },
  },
});

export const { updateProfileData } = profileSlice.actions;
export const profileReducer = profileSlice.reducer;