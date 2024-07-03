import { Packet } from "./Packet";
import { HttpResponse } from "./HttpResponse";

export interface HttpRequester {
  request: <T>(packet: Packet) => Promise<HttpResponse<T>>;
}
