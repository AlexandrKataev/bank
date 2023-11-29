import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Card, CreateCardDto } from './types';

const BASE_URL = 'http://localhost:5000';

export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/cards/`,
    credentials: 'include',
  }),

  tagTypes: ['Cards'],
  endpoints: (builder) => ({
    getCards: builder.query<Card[], number | null>({
      query(userId) {
        return {
          url: `getUserCardsList/${userId}`,
          method: 'GET',
        };
      },
      providesTags: ['Cards'],
    }),

    addCard: builder.mutation<Card, CreateCardDto>({
      query(body) {
        return {
          url: 'addCard',
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['Cards'],
    }),

    deleteCard: builder.mutation<any, number>({
      query(cardId) {
        return {
          url: `deleteCard/${cardId}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Cards'],
    }),
  }),
});

export const { useAddCardMutation, useGetCardsQuery, useDeleteCardMutation } = cardsApi;
