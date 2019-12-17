import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { detail } from "./services/fakeDetailService";

class App extends React.Component {
  render() {
    return <div>Hello Conekta</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
