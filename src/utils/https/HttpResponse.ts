import { ErrorResponseResult } from "./ErrorResponse";

export interface HttpResponse<T> extends ErrorResponseResult {
  data: T;
}
