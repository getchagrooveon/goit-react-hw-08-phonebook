import { createSlice } from '@reduxjs/toolkit';
import { createUser, logInUser, refreshUser, logOutUser } from './operations';

const initialState = {
  access_token: '',
  status: 'Idle',
  user: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [createUser.pending]: state => {
      state.status = 'Loading';
    },
    [createUser.fulfilled](state, action) {
      state.status = 'Success';
      state.access_token = action.payload.token;
      state.user = action.payload.user;
    },
    [createUser.rejected]: state => {
      state.status = 'Error';
    },
    [logInUser.pending]: state => {
      state.status = 'Loading';
    },
    [logInUser.fulfilled](state, action) {
      state.status = 'Success';
      state.access_token = action.payload.token;
      state.user = action.payload.user;
    },
    [logInUser.rejected]: state => {
      state.status = 'Error';
    },
    [refreshUser.fulfilled](state, action) {
      state.status = 'Success';
    },
    [refreshUser.rejected]: state => {
      state.status = 'Error';
      return initialState;
    },
    [logOutUser.pending](state, action) {
      state.status = 'Idle';
      state.access_token = '';
      state.user = '';
    },
    [logOutUser.fulfilled](state, action) {
      state.status = 'Idle';
      state.access_token = '';
      state.user = '';
    },
    [logOutUser.rejected](state, action) {
      state.status = 'Idle';
      state.access_token = '';
      state.user = '';
    },
  },
});

export const authReducer = authSlice.reducer;
