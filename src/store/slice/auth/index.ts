import { createSlice } from '@reduxjs/toolkit';
import { IAuthState, IPublicUser } from '../../../common/types/auth';

const initialState: IAuthState = {
  user: {
    token: '',
    user: {} as IPublicUser,
  },
  isLogged: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.isLogged = true;

      console.log('action', action.payload);
      console.log('user', state.user);
      console.log('isLogged', state.isLogged);
    },
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
