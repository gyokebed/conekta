import React, { Component } from "react";
import { records } from "../../services/fakePaymentsService";

class Payments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payments: records.data.payments
    };
  }
  render() {
    const { payments } = this.state;
    console.log(payments);
    return payments.map(payment => {
      return <h1>{payment.customer.name}</h1>;
    });
  }
}

export default Payments;
