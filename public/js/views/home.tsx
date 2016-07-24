import * as React from "react";
import { User } from "../models/user"
import { Transaction } from "../models/transaction"
import TransactionCard from "../components/transaction"

interface Props {
  user: User;
}

interface State {
  user: User;
}

export default class HomePageView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }

  addTransaction = () => {
  }

  render() {
    const { user } = this.props
    const { transactions } = user;

    //let money = transactions.map((t) => t.amount).reduce((x, y) => x + y) / 100;
    return (
      <article className="full four-fifth-1000">
        <h2> summary </h2>
        <h2> projections </h2>
        <h2> recent transactions </h2>
        {transactions.slice(0, 3).map((t, i) =>
          <TransactionCard key={i} user={user} transaction={t}/>)
        }
      </article>
    );
  }
}
