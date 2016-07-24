import { Transaction } from "./transaction"

export const DefaultUser = {
    name: "",
    transactions: [] as Array<Transaction>
}


export interface User {
  name: string;
  transactions?: Transaction[];
}