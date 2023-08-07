import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://tp-backend-905x.onrender.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const updateTheme = createAsyncThunk(
  'user/theme',
  async (data, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      setAuthHeader(state.auth.token);
      const response = await axios.patch('/api/users/theme', data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
