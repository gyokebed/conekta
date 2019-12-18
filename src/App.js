import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";

import Payments from "./components/payments/payments.component.jsx";
import Details from "./components/details/details.component.jsx";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          {/* sidebar */}
          <nav id="sidebar">
            <div className="sidebar-header">
              <h3>
                <Link to="/">Conekta</Link>
              </h3>
            </div>

            <ul className="list-unstyled components">
              <li className="active">
                <a
                  href="#homeSubmenu"
                  data-toggle="collapse"
                  aria-expanded="false"
                  className="dropdown-toggle"
                >
                  Transactions
                </a>
              </li>
              <li>
                <a href="#">Payments</a>
              </li>
            </ul>
          </nav>
          <main className="container">
            <Switch>
              <Route path="/payment" component={Details} />
              <Route path="/" component={Payments} />
            </Switch>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
