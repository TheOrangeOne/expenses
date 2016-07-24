import * as React from "react"
import * as classNames from "classnames"
import FontIcon from "../components/fonticon"

import { User } from "../models/user"
import TransactionCard from "../components/transaction"

export interface TransactionViewProps {
  user: User;
}

export default class TransactionsView extends React.Component<TransactionViewProps, {}> {
  render() {
    const { user } = this.props

    return (
      <article className="full four-fifth-1000">
        <h2>transactions</h2>
          {user.transactions.map((t, i) => {
            return <TransactionCard key={i} user={user} transaction={t}/>
        })}
      </article>
    )
  }
}
