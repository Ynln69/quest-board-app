import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { showToast } from 'components/Notification/ToastNotification';

axios.defaults.baseURL = 'https://tp-backend-905x.onrender.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerLogin = createAsyncThunk(
  'auth/registerLogin',
  async (credentials, thunkAPI) => {
    try {
      const { email, username, password } = credentials;
      const res = await axios.post('api/auth/register', {
        email,
        username,
        password,
      });
      if (res.status === 201) {
        const response = await axios.post('api/auth/login', {
          email,
          password,
        });
        setAuthHeader(response.data.token);
        return response.data;
      }
      return;
    } catch (error) {
      if (error.code === 'ERR_BAD_REQUEST') {
        showToast('info', 'User already registered. Try to Log In');
        return thunkAPI.rejectWithValue(error.message);
      }
      showToast('error', 'Oops...something went wrong with registration');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const googleRegister = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      await axios.post('api/auth/register', credentials);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('api/auth/login', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      showToast('error', 'Oops...something went wrong with logIn');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('api/auth/logout');
    clearAuthHeader();
    localStorage.clear();
  } catch (error) {
    showToast('error', 'Oops...something went wrong with logout');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('api/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedUser = state.auth.token;

    if (persistedUser === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    setAuthHeader(persistedUser);
    try {
      const res = await axios.patch('/api/users/current', credentials);

      return res.data;
    } catch (error) {
      showToast('error', 'Oops...something went wrong.');

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserAvatar = createAsyncThunk(
  'auth/updateUserAvatar',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.patch('/api/users/avatars', credentials);

      return res.data;
    } catch (error) {
      showToast('error', 'Oops...something went wrong.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const needHelp = createAsyncThunk('help', async (formData, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (token === null) {
      return thunkAPI.rejectWithValue('User not authenticated');
    }

    setAuthHeader(token);

    const res = await axios.post('/api/helper', formData);
    if (res.status === 200) {
      return res.data;
    } else {
      return thunkAPI.rejectWithValue('Request failed');
    }
  } catch (error) {
    showToast('error', 'Request failed. Please try again');
    return thunkAPI.rejectWithValue(error.message);
  }
});
