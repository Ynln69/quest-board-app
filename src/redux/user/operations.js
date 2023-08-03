// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://backend-task-pro.onrender.com';

// // Utility to add JWT
// const setAuthHeader = token => {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   };

// export const fetchProfileData = createAsyncThunk(
//   'user/fetchProfileData',
//   async (credentials, thunkAPI) => {
//     try {
//            const res = await axios.get('api/users/profile', credentials);
//       // After successful registration, add the token to the HTTP header
//       setAuthHeader(res.data.token);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
// );

// export const updateProfileOnServer = createAsyncThunk(
//   'user/updateProfileOnServer',
//   async data => {
//     try {
//       const response = await axios.put('/api/profile', data);

//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   }
// );