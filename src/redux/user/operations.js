import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://tp-backend-905x.onrender.com/api/users/current'; user

axios.defaults.baseURL = 'https://tp-backend-905x.onrender.com/api/users/avatars';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const updateProfile = createAsyncThunk(
  'user/updateProfile',
  async  formData => {
    try {
      const response = await axios.patch('api/users/avatars', formData);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);