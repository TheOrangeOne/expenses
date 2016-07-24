import * as React from "react"

import { User, DefaultUser } from "../models/user"
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
    fetch('/api/user')
    .then((resp) => resp.json())
    .then((j) => {
      console.log(j)
      this.setState(j)
    })
    .catch((err) => {console.log(err)})
  }
  
  getUser() {
    fetch('/api/user')
    .then((resp) => resp.json())
    .then((j) => {
      console.log(j)
      this.setState(j)
    })
    .catch((err) => {console.log(err)})
  }

  render() {
    return (
      <div>
        <Header/>
        <main id="content">
          <section className="flex five inner-content">
            <SideBarView update={this.getUser}/>
            {this.props.children && React.cloneElement(this.props.children, {
                user: this.state.user
              })}
          </section>
        </main>
      </div>
    );
  }
}
