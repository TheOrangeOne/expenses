import * as React from "react"
import * as Router from "react-router"
import { Route, IndexRoute } from "react-router"

import App from "./views/app"
import About from "./views/about"
import BudgetsView from "./views/budgets"
import ContactsView from "./views/contacts"
import HomeView from "./views/home"
import ProfileView from "./views/profile"
import TransactionsView from "./views/transactions"

var routeMap = (
  <Route path="/" component={App}>
    <IndexRoute component={HomeView}/>
    <Route path="transactions" component={TransactionsView}/>
    <Route path="budgets" component={BudgetsView}/>
    <Route path="contacts" component={ContactsView}/>
    <Route path="about" component={About}/>
    <Route path="profile" component={ProfileView}/>
  </Route>
)

export default routeMap