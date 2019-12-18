import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Payments from "./components/payments/payments.component.jsx";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          {/* sidebar */}
          <nav id="sidebar">
            <div class="sidebar-header">
              <h3>Bootstrap Sidebar</h3>
            </div>

            <ul class="list-unstyled components">
              <p>Dummy Heading</p>
              <li class="active">
                <a
                  href="#homeSubmenu"
                  data-toggle="collapse"
                  aria-expanded="false"
                  class="dropdown-toggle"
                >
                  Home
                </a>
                <ul class="collapse list-unstyled" id="homeSubmenu">
                  <li>
                    <a href="#">Home 1</a>
                  </li>
                  <li>
                    <a href="#">Home 2</a>
                  </li>
                  <li>
                    <a href="#">Home 3</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a
                  href="#pageSubmenu"
                  data-toggle="collapse"
                  aria-expanded="false"
                  class="dropdown-toggle"
                >
                  Pages
                </a>
                <ul class="collapse list-unstyled" id="pageSubmenu">
                  <li>
                    <a href="#">Page 1</a>
                  </li>
                  <li>
                    <a href="#">Page 2</a>
                  </li>
                  <li>
                    <a href="#">Page 3</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <main className="container">
            <Switch>
              <Route path="/" component={Payments} />
            </Switch>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
