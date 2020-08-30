import { Method } from "axios";

export interface History {
  url: string
  createdAt?: number
  method: Method
}