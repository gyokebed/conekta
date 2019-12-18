import React, { Component } from "react";
import { details } from "../../services/fakeDetailsService";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentDetails: {}
    };
  }

  componentDidMount() {
    const paymentDetails = details.data.payment;
    this.setState({ paymentDetails });
    console.log(paymentDetails);
  }

  render() {
    const { id } = this.props.match.params;
    const { paymentDetails } = this.state;
    return (
      <h1>
        {id}
        <br></br>
        {paymentDetails.amount}
      </h1>
    );
  }
}

export default Details;
