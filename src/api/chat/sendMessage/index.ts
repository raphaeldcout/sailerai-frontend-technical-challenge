import { AxiosError, isAxiosError } from 'axios';

import { api } from '@/api';
import { RequestError } from '@/api/RequestError';

import { FetchParams, Response } from './types';

export const sendMessage = async ({ chat_id, message }: FetchParams) => {
  try {
    const { data } = await api.post<Response>(`/chats/${chat_id}/messages`, {
      ...message
    });

    return data;
  } catch (e) {
    if (isAxiosError(e)) {
      throw RequestError.buildFromAxiosError(e as AxiosError);
    }

    throw e;
  }
};
