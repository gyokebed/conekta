import React, { Component } from "react";
import { records } from "../../services/fakePaymentsService";
// import PaymentsTable from "./payments-table.component.jsx";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payments: []
    };
  }

  componentDidMount() {
    const payments = records.data.payments;
    this.setState({ payments });
  }

  render() {
    const { payments } = this.state;

    return <h1>Details Component</h1>;
  }
}

export default Details;
