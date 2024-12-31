import { AxiosError } from 'axios';

import { ReqError } from '@/api/types';

export class RequestError<Data = any> extends Error implements ReqError<Data> {
  data: Data;
  status: number;

  constructor({ data, status }: ReqError<Data>) {
    super('REQUEST_ERROR');

    this.data = data;
    this.status = status;
  }

  static buildFromAxiosError(resp: AxiosError) {
    return new RequestError({
      data: resp?.response?.data,
      status: resp?.response?.status as number,
    });
  }
}