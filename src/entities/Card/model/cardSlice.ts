import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Card } from '../api/types';

interface CardsState {
  cards: Card[] | null;
  currentCardId: number | null;
}

const initialState: CardsState = {
  cards: null,
  currentCardId: null,
};

export const cardsSlice = createSlice({
  initialState,
  name: 'cardsSlice',
  reducers: {
    setCurrentCard: (state, action: PayloadAction<number>) => {
      state.currentCardId = action.payload;
    },
    setCards: (state, action: PayloadAction<Card[]>) => {
      state.cards = action.payload;
    },
  },
});

export const cardsReducer = cardsSlice.reducer;

export const { setCurrentCard, setCards } = cardsSlice.actions;
