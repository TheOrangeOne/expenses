import * as React from "react";
import { User } from "../models/user"
import { Transaction } from "../models/transaction"
import TransactionCard from "./transaction"

interface Props {
  user: User;
}

interface State {
  user: User;
}

export default class HomePage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }

  addTransaction = () => {
  }

  render() {
    const { user } = this.props
    console.log(user)
    return (
      <article className="full four-fifth-1000">
        <h2> recent transactions </h2>
        {user.transactions.map((t, i) => {
          return <TransactionCard key={i} transaction={t}/>
          })
        }
      </article>
    );
  }
}
