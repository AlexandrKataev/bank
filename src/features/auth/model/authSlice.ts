import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store/store';

interface AuthState {
  refreshToken: null | string;
  accessToken: null | string;
}

const initialState: AuthState = {
  refreshToken: null,
  accessToken: null,
};

const slice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setCredentials: (
      state,
      {
        payload: { refreshToken, accessToken },
      }: PayloadAction<{ refreshToken: string; accessToken: string }>,
    ) => {
      state.refreshToken = refreshToken;
      state.accessToken = accessToken;
    },
    resetCredentials: (state) => {
      state.refreshToken = null;
      state.accessToken = null;
    },
  },
  extraReducers: (builder) => {},
});

export const { setCredentials, resetCredentials } = slice.actions;

export const authReducer = slice.reducer;
