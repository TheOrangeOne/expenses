import * as React from "react"
import FontIcon from "../components/fonticon"
import { Link } from "react-router"

export default class HeaderView extends React.Component<any, any> {
  render() {
    return (
      <nav className="header">
        <Link className="brand" to="/">
          <FontIcon class="fa-usd"/><span>expenses</span>
        </Link>
        <div className="menu">
          <Link className="pseudo button" to="/about">
            <span>about</span>
          </Link>
        </div>
      </nav>
    );
  }
}