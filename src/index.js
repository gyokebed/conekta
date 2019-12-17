import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { records } from "./services/fakeRecordsService";

import Payments from "./components/records/records.component.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      payments: records.data.payments
    };
  }
  render() {
    return (
      <div>
        <Payments payments={this.state.payments} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
