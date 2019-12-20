import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar.jsx";
import Payments from "./components/payments/payments.component.jsx";
import Details from "./components/details/details.component.jsx";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {/* sidebar */}
          <Sidebar />
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
    );
  }
}

export default App;
