import * as React from "react"
import FontIcon from "./fonticon"

export default class SideBar extends React.Component<any, any> {
  render() {
    return (
      <aside className="full fifth-1000">
        <h3><FontIcon class="fa-plus"/>transaction</h3>
      </aside>
    );
  }
}