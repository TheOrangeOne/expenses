import * as React from "react"
import SideBar from "./sidebar"
import HomePage from "./homepage"

export default class ExpensesApp extends React.Component<any, any> {
  render() {
    return (
      <section className="flex five content">
        <SideBar/>
        <HomePage user={this.props.user}/>
      </section>
    )
  }
}
