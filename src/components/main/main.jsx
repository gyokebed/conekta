import React from "react";
import { Route, Switch } from "react-router-dom";

import Payments from "../payments/payments.component.jsx";
import Details from "../details/details.component.jsx";

const Main = () => {
  return (
    <main className="col-md-9 ml-sm-auto col-lg-10 px-4">
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
    </main>
  );
};

export default Main;
