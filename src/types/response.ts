export type Response<T> = {
  code: number;
  status: string;
  data: T;
};
