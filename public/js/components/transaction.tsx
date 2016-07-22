import * as React from "react"
import * as classNames from "classnames"
import FontIcon from "./fonticon"
import { Transaction } from "../models/transaction"

export interface TransactionCardProps {
  transaction: Transaction
}

export default class TransactionCard extends React.Component<TransactionCardProps, {}> {
  render() {
    const { transaction } = this.props

    let moneyClass = classNames({
      'good-money': transaction.amount >= 0,
      'bad-money': transaction.amount < 0
    })

    return (
      <div>
      <article className="card">
        <header>
          <h3>
            <span className={moneyClass}>
              {"$" + Math.abs(transaction.amount) + " "}
            </span>
            ({transaction.from.name + " "}
            <FontIcon class="fa-long-arrow-right"/>
            {" " + transaction.to.name})
          </h3>
          <span className="label" style={{float: "right"}}>
            {transaction.category}
          </span>
        </header>
        <p>{transaction.about}</p>
        <footer>
        </footer>
      </article>
      </div>
    )
  }
}
