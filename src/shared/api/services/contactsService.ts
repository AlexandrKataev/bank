import { instance } from '../config/config';
import { Contact } from '@models';

export const contactsService = {
  getContacts: async () => {
    const response = await instance.get<Contact[]>(`/users`);
    return response.data;
  },
};
