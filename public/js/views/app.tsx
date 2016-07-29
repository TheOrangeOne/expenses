import * as React from "react"

import { User, DefaultUser } from "../models/user"
import { Transaction } from "../models/transaction"
import Header from "./header"
import SideBarView from "./sidebar"


export interface AppState {
  user: User;
}

export default class App extends React.Component<any, AppState> {
  constructor(props : any) {
    super(props)
    this.state = {
      user: DefaultUser
    }
  }

  componentDidMount() {
    this.getUser();
  }

  getUser() {
    fetch('/api/user', { credentials: 'include' })
    .then((resp) => resp.json())
    .then((j) => {
      console.log(j)
      this.setState(j)
    })
    .catch((err) => {console.log(err)})
  }

  addTransaction = (transaction: Transaction) => {
    let user = this.state.user

    this.setState({
      user: {
        id: user.id,
        name: user.name,
        displayName: user.displayName,
        transactions: user.transactions.concat([transaction]),
        contacts: user.contacts
      }
    })
  }

  render() {
    const { user } = this.state;

    return (
      <div>
        <Header user={user}/>
        <main id="content">
          <section className="flex five inner-content">
            <SideBarView/>
            {this.props.children && React.cloneElement(this.props.children, {
                user: this.state.user,
                addTransaction: this.addTransaction
              })}
          </section>
        </main>
      </div>
    );
  }
}
