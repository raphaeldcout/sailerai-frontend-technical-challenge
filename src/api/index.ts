
import axios, { AxiosError } from 'axios';

import { API_URL } from '@/commons/config';

export const api = axios.create({ baseURL: API_URL });

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    // TODO: Add rules to auth flow.

    return Promise.reject(error);
  }
);

