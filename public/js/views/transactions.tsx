import * as React from "react"
import * as classNames from "classnames"
import FontIcon from "../components/fonticon"

import { User } from "../models/user"
import { Contact } from "../models/contact"
import { Transaction } from "../models/transaction"
import TransactionCard from "../components/transaction"

export interface TransactionViewProps {
  user: User;
  addTransaction: (transaction: Transaction) => any;
}

export default class TransactionsView extends React.Component<TransactionViewProps, {}> {
  constructor(props: any) {
    super(props)
  }

  refs: {
    [string: string]: any;
    amount: HTMLInputElement;
    category: HTMLSelectElement;
    toFromSelector: HTMLSelectElement;
    toFromText: HTMLInputElement;
    type: HTMLSelectElement;
    description: HTMLTextAreaElement;
  }

  addTransaction = () => {
    let { user, addTransaction } = this.props
    let amount = this.refs.amount.valueAsNumber * 100
    let isTo = this.refs.toFromSelector.value == "to"

    let newTransaction: Transaction
    newTransaction = {
      amount: this.refs.amount.valueAsNumber,
      to: isTo ? this.refs.toFromText.value : user.id,
      from: !isTo ? this.refs.toFromText.value : user.id,
      category: this.refs.category.value,
      description: this.refs.description.value,
      type: this.refs.type.value
    }
    console.log(newTransaction)
  }

  render() {
    const { user } = this.props

    return (
      <article className="full four-fifth-1000">
        <h2>new transaction</h2>
        <div className="third">
          <input
            ref="amount"
            className="stack"
            type="number"
            placeholder="amount"/>
          <select ref="toFromSelector" className="stack">
            <option>to</option>
            <option>from</option>
          </select>
          <select placeholder="contact">
            {user.contacts.map((c: any, i: any) => {
              return <option>{c.name}</option>
            })}
          </select>
          <select ref="category" className="stack">
            <option>category 1</option>
            <option>category 2</option>
          </select>
          <select ref="type" className="stack">
            <option>type 1</option>
            <option>type 2</option>
          </select>
          <textarea ref="description" placeholder="description"/>
          <button className="stack" onClick={this.addTransaction}>
            add transaction
          </button>
        </div>
        <h2>transactions</h2>
        {user.transactions.map((t, i) => {
          return <TransactionCard key={i} user={user} transaction={t}/>
        })}
      </article>
    )
  }
}
