import * as React from "react";

interface Expense { name: string; }

 var field : any

export default class ExpensesApp extends React.Component<any, any> {
  constructor(props: any) {
    super(props)

    field = { value: "" }
    this.state = {
      expenses: []
    };
  }

  addExpense = () => {
    this.setState({
      expenses: this.state.expenses.concat({ name: field.value })
    })
  }

  removeExpense = () => {
    this.setState({
      expenses: this.state.expenses.slice(0, this.state.expenses.length - 1)
    })
  }

  render() {
    return (
      <div>
        <fieldset className="flex two">
          <label>
            <input ref={x => field = x} type="email" placeholder="expense"/>
          </label>
        </fieldset>
        <button onClick={this.addExpense}>add</button>
        <button className="error" onClick={this.removeExpense}>remove</button>
        {this.state.expenses.map((exp: Expense, i: number) => {
          return (<h3 key={i}> {exp.name} </h3>)
          })
        }
      </div>
    )
  }
}
