import React, { Component } from "react";
import { records } from "../../services/fakePaymentsService";
import PaymentsTable from "./payments-table.component.jsx";

class Payments extends Component {
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

    return <PaymentsTable data={payments} />;
  }
}

export default Payments;