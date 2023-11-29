import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://632a05584c626ff832cfe7bb.mockapi.io/',
  // baseURL: 'http://localhost:5000/',
});
