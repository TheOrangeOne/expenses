import * as React from "react";
import ExpensesApp from "./expenses";

export interface AppProps { compiler: string; framework: string; }

export class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <ExpensesApp/>
    );
  }
}
