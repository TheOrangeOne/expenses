import { User } from "./user"
import * as moment from "moment"

export interface Transaction {
  amount: number;
  from: User,
  to: User,
//  date: moment.Moment;
  category: string;
  about: string;
}