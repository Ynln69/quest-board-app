import { createSlice } from '@reduxjs/toolkit';
import { updateProfile } from './operations';

const initialState = {
  avatarURL: 'default_photo_url',
  username: 'Ivetta',
  email: 'ivetta34@gmail.com',
  password: 'ivetta1999.23',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    },
  extraReducers: (builder) => {
    builder
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
                const {
          newPhoto,
          newName,
          newEmail,
          newPassword,
        } = action.payload;
        state.avatarURL = newPhoto || state.avatarURL;
        state.username = newName || state.username;
        state.email = newEmail || state.email;
        state.password = newPassword || state.password;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { updateProfileData } = profileSlice.actions;
export const profileReducer = profileSlice.reducer;



// const profileSlice = createSlice({
//   name: 'profile',
//   initialState,
//   reducers: {
//     updateProfileData: (state, action) => {
//       const { newPhoto, newName, newEmail, newPassword } = action.payload;
//       state.avatarURL = newPhoto || state.avatarURL;
//       state.username = newName || state.username;
//       state.email = newEmail || state.email;
//       state.password = newPassword || state.password;
//     },
//   },
// });

// export const { updateProfileData } = profileSlice.actions;
// export const profileReducer = profileSlice.reducer;