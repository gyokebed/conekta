import React from "react";
import { Route, Switch } from "react-router-dom";

import Payments from "../payments/payments.component.jsx";
import Details from "../details/details.component.jsx";

const Main = () => {
  return (
    <main id="page-content-wrapper">
      <div className="container-fluid">
        <Switch>
          <Route
            path="/:id"
            render={props => <Details {...props} title={`Payment Details`} />}
          />
          <Route
            path="/"
            render={props => <Payments {...props} title={`Payments`} />}
          />
        </Switch>
      </div>
    </main>
  );
};

export default Main;
