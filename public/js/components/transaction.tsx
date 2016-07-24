import * as React from "react"
import * as classNames from "classnames"
import FontIcon from "./fonticon"
import { User } from "../models/user"
import { Transaction, TransactionType } from "../models/transaction"

export interface TransactionCardProps {
  user: User;
  transaction: Transaction
}

export default class TransactionCard extends React.Component<TransactionCardProps, {}> {
  render() {
    const { user, transaction } = this.props

    let moneyClass = classNames({
      'good-money': user.name == transaction.to.name,
      'bad-money': user.name == transaction.from.name
    })

    let iconClass = classNames({
      'fa-long-arrow-right': user.name == transaction.from.name,
      'fa-long-arrow-left': user.name == transaction.to.name
    })

    let labelClass = classNames('label', {
      'warning': transaction.type == TransactionType.LOAN
    })

    let other = user.name == transaction.to.name ? transaction.from.name : transaction.to.name

    return (
      <article className="card">
        <header>
          <h3>
            <span className={moneyClass}>
              {"$" + transaction.amount/100 + " "}
            </span>
            <FontIcon class={iconClass}/>
            {" " + other}
          </h3>
          <span className={labelClass} style={{float: "right"}}>
            {transaction.category}
          </span>
        </header>
        <p>{transaction.about}</p>
        <footer>
        </footer>
      </article>
    )
  }
}
