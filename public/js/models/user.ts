import { Transaction } from "./transaction"

export const DefaultUser = {
  id: '0',
  name: "",
  displayName: "",
  transactions: [] as Array<Transaction>,
  contacts: [] as Array<string>
}


export interface User {
  id: string;
  name: string;
  displayName: string;
  transactions: Transaction[];
  contacts: string[];
}
