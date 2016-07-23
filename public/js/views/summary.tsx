import * as React from "react"
import FontIcon from "../components/fonticon"

export default class SummaryView extends React.Component<any, any> {
  render() {
    return (
      <aside className="full fifth-1000">
        <h3><FontIcon class="fa-plus"/>transaction</h3>
      </aside>
    );
  }
}