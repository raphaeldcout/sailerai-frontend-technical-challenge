export interface ReqError<Data = any> {
  data: Data;
  status: number;
};

export interface Errors {
  errors: string[];
};
