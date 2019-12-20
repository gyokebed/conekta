import React, { Component } from "react";
import { details } from "../../services/fakeDetailsService";
import Data from "./data.component.jsx";
import BreakdownTable from "./breakdown-table.component.jsx";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentDetails: {
        customer: {},
        line_items: [],
        nested_charges: [{ payment_method: {} }]
      },
      dataActive: false,
      breakdownTableActive: false
    };
    this.handleDataClick = this.handleDataClick.bind(this);
    this.handleBreakdownClick = this.handleBreakdownClick.bind(this);
  }

  componentDidMount() {
    const paymentDetails = details.data.payment;
    this.setState({ paymentDetails, dataActive: true });
  }

  handleDataClick() {
    this.setState({ dataActive: true, breakdownTableActive: false });
  }

  handleBreakdownClick() {
    this.setState({ dataActive: false, breakdownTableActive: true });
  }

  render() {
    return (
      <div>
        <div className="d-flex flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <div className="btn-group mr-2">
            <button
              type="button"
              className={`btn btn-sm btn-outline-secondary ${
                this.state.dataActive ? "active" : ""
              }`}
              onClick={this.handleDataClick}
            >
              Data
            </button>
            <button
              type="button"
              className={`btn btn-sm btn-outline-secondary ${
                this.state.breakdownTableActive ? "active" : ""
              }`}
              onClick={this.handleBreakdownClick}
            >
              Breakdown
            </button>
          </div>
        </div>
        {this.state.dataActive ? (
          <Data
            data={this.state.paymentDetails}
            id={this.props.match.params.id}
          />
        ) : (
          <BreakdownTable data={this.state.paymentDetails.line_items} />
        )}
      </div>
    );
  }
}

export default Details;
