import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";

import Payments from "./components/payments/payments.component.jsx";
import Details from "./components/details/details.component.jsx";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            {/* sidebar */}
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
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
            <main className="col-md-9 ml-sm-auto col-lg-10 px-4">
              <Switch>
                <Route
                  path="/:id"
                  render={props => (
                    <Details {...props} title={`Payment Details`} />
                  )}
                />
                <Route
                  path="/"
                  render={props => <Payments {...props} title={`Payments`} />}
                />
              </Switch>
            </main>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
