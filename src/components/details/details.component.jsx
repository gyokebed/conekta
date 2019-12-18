import React, { Component } from "react";
import { records } from "../../services/fakePaymentsService";

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
    const { id } = this.props.match.params;
    const { payments } = this.state;

    return <h1>{id}</h1>;
  }
}

export default Details;
