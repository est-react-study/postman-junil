import { Method } from "axios";

export interface RequestHistory {
  url: string
  createdAt?: number
  method: Method
}