import { createAsyncThunk } from '@reduxjs/toolkit';
import { ILoginData, IRegisterData } from '../../common/types/auth';
import { instance } from '../../utils/axios';

export const loginUser = createAsyncThunk(
  'login',
  async (data: ILoginData, { rejectWithValue }) => {
    try {
      const user = await instance.post('auth/login', data);
      // if (
      //   user.data.status === 400 ||
      //   user.data.status === 401 ||
      //   user.data.status === 500
      // )
      // return;

      localStorage.setItem('token', user.data.token);
      localStorage.setItem('name', user.data.user.firstName);
      return user.data;
    } catch (e: any) {
      if (e.response && e.response.data.message) {
        return rejectWithValue(e.response.data.message);
      } else {
        return rejectWithValue(e.message);
      }
    }
  }
);

export const registerUser = createAsyncThunk(
  'register',
  async (data: IRegisterData, { rejectWithValue }) => {
    try {
      const user = await instance.post('auth/register', data);
      console.log(user.data);
      localStorage.setItem('token', user.data.token);
      localStorage.setItem('name', user.data.user.firstName);
      return user.data;
    } catch (e: any) {
      if (e.response && e.response.data.message) {
        console.log(e.response.data.message);

        return rejectWithValue(e.response.data.message);
      } else {
        console.log(e.message);

        return rejectWithValue(e.message);
      }
    }
  }
);
