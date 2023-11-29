import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SignInDto, SignUpDto } from '@models';
import { logout, userApi } from '@entities/user';
import { resetCredentials, setCredentials } from '..';
import { RootState } from '../../../app/store/store';

const BASE_URL = 'http://localhost:5000';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/auth/`,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).authState.accessToken;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (build) => ({
    signUp: build.mutation<{ refreshToken: string; accessToken: string }, SignUpDto>({
      query(body) {
        return {
          url: 'signup',
          method: 'POST',
          credentials: 'include',
          body,
        };
      },

      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log('Вызывается signup');

          dispatch(setCredentials(data));
          await dispatch(userApi.endpoints.getMe.initiate(null));
        } catch (error) {}
      },
    }),

    signIn: build.mutation<{ refreshToken: string; accessToken: string }, SignInDto>({
      query(body) {
        return {
          url: 'signin',
          method: 'POST',
          credentials: 'include',
          body,
        };
      },

      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log('Вызывается signin');

          dispatch(setCredentials(data));
          await dispatch(userApi.endpoints.getMe.initiate(null));
        } catch (error) {}
      },
    }),

    refresh: build.mutation<{ refreshToken: string; accessToken: string }, any>({
      query() {
        return {
          url: 'refresh',
          method: 'GET',
          credentials: 'include',
        };
      },

      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(setCredentials(data));
          await dispatch(userApi.endpoints.getMe.initiate(null));
        } catch (error) {}
      },
    }),

    logout: build.mutation<void, void>({
      query() {
        return {
          url: 'logout',
          credentials: 'include',
          method: 'GET',
        };
      },

      async onQueryStarted(args, { dispatch }) {
        try {
          console.log('Вызывается logout');
          dispatch(resetCredentials());
          dispatch(logout());
        } catch (error) {}
      },
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation, useLogoutMutation, useRefreshMutation } =
  authApi;
