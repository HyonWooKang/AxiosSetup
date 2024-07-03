import { AxiosProgressEvent } from "axios";
import HttpMethod from "./HttpMethod";

export interface Packet {
  headers?: Record<string, string> | undefined;
  data?: object | FormData;
  params?: object;
  method: HttpMethod;
  url: string;
  onUploadProgress?: (progressEvent: AxiosProgressEvent) => void;
  host?: string;
}
