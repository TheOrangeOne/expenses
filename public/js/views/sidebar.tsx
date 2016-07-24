import * as React from "react"
import FontIcon from "../components/fonticon"
import { Link } from "react-router"

import * as className from "classnames"

export default class SideBarView extends React.Component<any, any> {
  render() {
    let itemClass = className(
      "pseudo",
      "button"
    )
    
    return (
      <aside className="full fifth-1000">
        <Link className={itemClass} to="/transactions">
          <FontIcon class="fa-exchange"/>transactions
        </Link>
        <Link className={itemClass} to="/budgets">
          <FontIcon class="fa-balance-scale"/>budgets
        </Link>
      </aside>
    );
  }
}