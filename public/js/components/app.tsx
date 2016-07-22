import * as React from "react"
import ExpensesApp from "./expenses"

export class App extends React.Component<any, {}> {
  render() {
    let user = {
      name: "kyle",
      transactions: [
        {
          amount: -11.52,
          from: { name: "kyle" },
          to: { name: "burrito place" },
          category: "food",
          about: "got a tasty beef burrito"
        }
      ]
    }

    return (
      <main id="home">
        <ExpensesApp user={user}/>
      </main>
    );
  }
}
