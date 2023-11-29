import { RootState } from '@app/store/store';

export const selectCards = (state: RootState) => state.cardsState.cards;
export const selectCurrentCard = (state: RootState) =>
  state.cardsState.cards?.filter((card) => card.id === state.cardsState.currentCardId)[0];
