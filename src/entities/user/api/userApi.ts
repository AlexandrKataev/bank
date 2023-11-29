import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setUser } from '../model/userSlice';
import { User } from './types';
import { RootState } from '../../../app/store/store';

const BASE_URL = 'http://localhost:5000';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/users/`,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).authState.accessToken;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),

  tagTypes: ['User'],
  endpoints: (builder) => ({
    getMe: builder.mutation<User, null>({
      query() {
        return {
          url: 'me',
        };
      },

      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          console.log('Запрос данных пользователя');
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {}
      },
    }),
  }),
});

export const { useGetMeMutation } = userApi;
