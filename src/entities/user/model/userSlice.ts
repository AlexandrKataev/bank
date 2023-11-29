import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../api/types';

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  initialState,
  name: 'userSlice',
  reducers: {
    logout: (state) => {
      state.user = null;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const userReducer = userSlice.reducer;

export const { logout, setUser } = userSlice.actions;
