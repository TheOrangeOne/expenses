import { Transaction } from "./transaction"

export const DefaultUser = {
    name: "",
    displayName: "",
    transactions: [] as Array<Transaction>
}


export interface User {
  name: string;
  displayName: string;
  transactions?: Transaction[];
}