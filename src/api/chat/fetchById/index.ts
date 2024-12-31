import { AxiosError, isAxiosError } from 'axios';

import { api } from '@/api';
import { RequestError } from '@/api/RequestError';

import { FetchParams, Response } from './types';

export const fetchById = async ({ chat_id }: FetchParams) => {
  try {
    const { data } = await api.get<Response>(`/chats/${chat_id}/messages`);

    return data;
  } catch (e) {
    if (isAxiosError(e)) {
      throw RequestError.buildFromAxiosError(e as AxiosError);
    }

    throw e;
  }
};
