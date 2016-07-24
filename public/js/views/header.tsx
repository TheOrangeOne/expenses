import * as React from "react"
import FontIcon from "../components/fonticon"
import { Link } from "react-router"

export default class HeaderView extends React.Component<any, any> {
  render() {
    const { user } = this.props;

    let login = user.name == "" ?
      <a className="pseudo button" href="/login/facebook">
        <span>log in</span>
      </a> :
      <span>{user.displayName}</span>
    
    return (
      <nav className="header">
        <Link className="brand" to="/">
          <FontIcon class="fa-usd"/><span>expenses</span>
        </Link>
        <div className="menu">
          <Link className="pseudo button" to="/about">
            <span>about</span>
          </Link>
          {login}
        </div>
      </nav>
    );
  }
}