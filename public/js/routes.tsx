import * as React from "react"
import * as Router from "react-router"
import { Route, IndexRoute } from "react-router"

import App from "./views/app"
import About from "./views/about"
import HomeView from "./views/home"
import TransactionsView from "./views/transactions"

var routeMap = (
  <Route path="/" component={App}>
    <IndexRoute component={HomeView}/>
    <Route path="transactions" component={TransactionsView}/>
    <Route path="about" component={About}/>
  </Route>
)

export default routeMap