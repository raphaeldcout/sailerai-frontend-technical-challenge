import { AxiosError, isAxiosError } from 'axios';

import { api } from '@/api';
import { RequestError } from '@/api/RequestError';

import { FetchParams, Response } from './types';

export const create = async ({ firstName, secondName }: FetchParams) => {
  try {
    const { data } = await api.post<Response>('/chats', {
      'participants': [firstName, secondName]
    });

    return data;
  } catch (e) {
    if (isAxiosError(e)) {
      throw RequestError.buildFromAxiosError(e as AxiosError);
    }

    throw e;
  }
};
