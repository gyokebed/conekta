import React, { Component } from "react";
import { records } from "../../services/fakePaymentsService";

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
    return payments.map(payment => {
      return <h1>{payment.customer.name}</h1>;
    });
  }
}

export default Payments;
