import { Transaction } from "./transaction"

export interface User {
  name: string;
  transactions?: Transaction[];
}