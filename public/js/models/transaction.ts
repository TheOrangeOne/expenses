import { User } from "./user"
import * as moment from "moment"

export const TransactionType = {
  LOAN: "LOAN"
}

export interface Transaction {
  amount: number;
  from: User,
  to: User,
//  date: moment.Moment;
  category: string;
  about: string;
  type: string;
}