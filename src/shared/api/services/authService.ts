import { SignUpDto, SignInDto } from '@models';
import { instance } from '../config/config';

type SignUpResponse = {
  accessToken: string;
  refreshToken: string;
};

export const authService = {
  signUp: async (SignUpDto: SignUpDto) => {
    try {
      const response = await instance.post<SignUpResponse>(`/auth/signup`, SignUpDto);
      return response.data;
    } catch (err: any) {
      console.log('error:', err.response.data.message);
      return err.response.data.message;
    }
  },
  signIn: async (SignInDto: SignInDto) => {
    await instance.post(`/auth/signin`, SignInDto);
  },
  logout: async () => {
    await instance.get(`/auth/logout`);
  },
  refresh: async () => {
    await instance.get(`/auth/refresh`);
  },
};
