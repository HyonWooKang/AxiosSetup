export interface ErrorResponseResult {
  code: string;
  error_code: string;
  message: string;
}

export interface ErrorResponse {
  result: ErrorResponseResult;
}
