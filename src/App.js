import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Payments from "./components/payments/payments.component.jsx";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <Switch>
            <Route path="/" component={Payments} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
