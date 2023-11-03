import { Card } from '@models';
import { instance } from '../config/config';

export const taskService = {
  addCard: async (task: Card) => {
    await instance.post(`/cards/addCard`, task);
  },
  getCard: async (cardId: string) => {
    const response = await instance.get<Card>(`/cards/getCard/${cardId}`);
    return response.data;
  },
  getUserCardsList: async () => {
    const response = await instance.get<Card[]>(`/cards/getUserCardsList`);
    return response.data;
  },
  deleteCard: async (id: number) => {
    await instance.delete(`/cards/${id}`);
  },
  getAllCardsList: async () => {
    const response = await instance.get<Card[]>(`/cards/getAllCardsList`);
    return response.data;
  },
  // updateCard: async (task: Card) => {
  //   await instance.put(`/cards/${task.id}`, task);
  // },
};
