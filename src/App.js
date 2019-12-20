import React, { Component } from "react";

import Header from "./components/header/header.jsx";
import Sidebar from "./components/sidebar/sidebar.jsx";
import Main from "./components/main/main.jsx";

class App extends Component {
  render() {
    return (
      <div className="d-flex" id="wrapper">
        {/* <Header /> */}
        <Sidebar />
        <Main />
      </div>
    );
  }
}

export default App;
