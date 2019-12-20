import React, { Component } from "react";

import Header from "./components/header/header.jsx";
import Sidebar from "./components/sidebar/sidebar.jsx";
import Main from "./components/main/main.jsx";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Header />
          <Sidebar />
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
