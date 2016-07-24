import * as React from "react";
import { User } from "../models/user"
import { Transaction } from "../models/transaction"
import TransactionCard from "../components/transaction"


export default class ProfileView extends React.Component<any, any> {
  render() {
    const { user } = this.props

    return (
      <article className="full four-fifth-1000">
        <h2> profile </h2>
        <h4> {user.name} </h4>
        <h4> {user.displayName} </h4>
      </article>
    );
  }
}
