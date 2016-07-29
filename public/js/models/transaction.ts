import { User } from "./user"
import * as moment from "moment"

export const TransactionType = {
  LOAN: "LOAN"
}

export interface Transaction {
  amount: number;
  from: string;
  to: string;
  description: string;
  category: string;
  type: string;
//  date: moment.Moment;
}
