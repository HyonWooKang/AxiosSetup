export interface Response<T> {
  result: T;
  access_token?: string;
  refresh_token?: string;
}
