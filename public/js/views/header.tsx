import * as React from "react"
import FontIcon from "../components/fonticon"
import { Link } from "react-router"

export default class HeaderView extends React.Component<any, any> {
  render() {
    const { user } = this.props;

    let profile =
      <Link className="pseudo button" to="/profile">
        <span className="displayName">{user.displayName}</span>
      </Link>


    let login = user.name == "" ?
      <a className="pseudo button" href="/login/facebook">
        <span>log in</span>
      </a> :
      <a className="pseudo button" href="/logout">
        <span>log out</span>
      </a>
    
    return (
      <nav className="header">
        <Link className="brand" to="/">
          <FontIcon class="fa-usd"/>
          <span className="app-name">expenses</span>
        </Link>
        <input id="bmenu" type="checkbox" className="show"/>
        <label htmlFor="bmenu" className="burger toggle pseudo button">
          <FontIcon class="fa-bars"/>
        </label>
        <div className="menu">
          <Link className="pseudo button" to="/about">
            <span>about</span>
          </Link>
          {profile}
          {login}
        </div>
      </nav>
    );
  }
}