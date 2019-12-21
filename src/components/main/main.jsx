import React from "react";
import { Route, Switch } from "react-router-dom";
import Payments from "../payments/payments.component.jsx";
import Details from "../details/details.component.jsx";
import Header from "../header/header.jsx";

const Main = () => {
  return (
    <main id="page-content-wrapper">
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
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
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
