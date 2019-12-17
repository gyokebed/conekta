import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { records } from "./services/fakeRecordsService";

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
        {this.state.payments.map(payment => {
          return <h1>{payment.status}</h1>;
        })}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
