import { AxiosError, isAxiosError } from 'axios';

import { api } from '@/api';
import { Response } from '@/api/chat/create/types';
import { RequestError } from '@/api/RequestError';

export const fetchList = async () => {
  try {
    const { data } = await api.get<Response[]>('/chats');

    return data;
  } catch (e) {
    if (isAxiosError(e)) {
      throw RequestError.buildFromAxiosError(e as AxiosError);
    }

    throw e;
  }
};
