import axios, { AxiosError, AxiosInstance, AxiosProgressEvent, AxiosResponse } from "axios";
// import { Packet } from "../utils/https/Packet";
// import { HttpResponse } from "../utils/https/HttpResponse";
import { getAccessToken, getRefreshToken } from "../utils/DataUtils";
import { ErrorResponse } from "../utils/https/ErrorResponse";

declare module "axios" {
  interface AxiosRequest<T = any> extends Promise<T> { }
}

const responseHandler = (data: AxiosResponse) => data;
const errorHandler = (error: AxiosError) => {
  if (error.response) {
    return (error.response.data as ErrorResponse).result;
  } else {
    return {
      message: error.message,
      status: error.code,
    };
  }
};

const getAxiosInstance = (
  onUploadProgress?: (progressEvent: AxiosProgressEvent) => void
): AxiosInstance => {
  const axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    withCredentials: true,
    paramsSerializer: { indexes: null },
    onUploadProgress,
    headers: {
      "Access-Control-Allow-Origin": process.env.REACT_APP_BASE_DOMAIN_URL,
      "Access-Control-Allow-Credentials": true,
      "X-Frame-Options": "DENY",
      "x-content-type-options": "nosniff",
      "Cache-Control": "public, max-age=604800, immutable",
      Cookies: `{ "access_token" : "${getAccessToken()}", "refresh_token" : "${getRefreshToken()}" }`,
    },
  });

  axiosInstance.interceptors.response.use(responseHandler, errorHandler);

  return axiosInstance;
};

// axios 인스턴스를 생성
const axiosInstance = getAxiosInstance();

export default axiosInstance;