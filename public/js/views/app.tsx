import * as React from "react"

import Header from "./header"
import SideBarView from "./sidebar"

export default class App extends React.Component<any, {}> {
  render() {
    let user = {
      name: "kyle",
      transactions: [
        {
          amount: -11.52,
          from: { name: "kyle" },
          to: { name: "burrito place" },
          category: "food",
          about: "got a tasty beef burrito",
//          date: moment()
        }
      ]
    }  
    return (
      <div>
        <Header/>
        <main id="content">
          <section className="flex five inner-content">
            <SideBarView/>
            {this.props.children && React.cloneElement(this.props.children, {
                user: user
              })}
          </section>
        </main>
      </div>
    );
  }
}
