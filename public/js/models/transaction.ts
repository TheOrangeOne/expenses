import { User } from "./user"

export interface Transaction {
  amount: number;
  from: User,
  to: User,
  date: Date;
  category: string;
  about: string;
}