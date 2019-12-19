import React, { Component } from "react";
import { details } from "../../services/fakeDetailsService";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentDetails: {
        customer: {},
        line_items: [],
        nested_charges: [{ payment_method: {} }]
      }
    };
  }

  componentDidMount() {
    const paymentDetails = details.data.payment;
    this.setState({ paymentDetails });
    console.log(paymentDetails);
  }

  render() {
    const { id: paymentId } = this.props.match.params;
    const {
      paid_at,
      customer: { name, email, phone },
      nested_charges: [
        {
          failure_message,
          amount,
          created,
          status,
          payment_method: {
            bank,
            brand,
            type,
            last4,
            name: nameOnCard,
            exp_month,
            exp_year,
            auth_code
          }
        }
      ]
    } = this.state.paymentDetails;

    console.log(name);
    return (
      <div>
        <div className="d-flex flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <div className="btn-group mr-2">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Data
            </button>
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Breakdown
            </button>
          </div>
        </div>
        <div>
          <h4>PAYMENT STATUS</h4>
          <div>Amount: ${amount}</div>
          <div>Created At {created}</div>
          <div>Paid At: {paid_at ? paid_at : "Not yet paid"}</div>
          <div>{status}</div>
          <div>{failure_message}</div>
          <div>ORDER ID: {paymentId}</div>
        </div>
        <div>
          <h4>CLIENT</h4>
          <div>Name: {name}</div>
          <div>Email: {email}</div>
          <div>Phone: {phone}</div>
        </div>
        <div>
          <h4>PAYMENT METHOD</h4>
          <div>{bank}</div>
          <div>{brand}</div>
          <div>{type}</div>
          <div>............{last4}</div>
          <div>{nameOnCard}</div>
          <div>
            Expiration Date: {exp_month} / {exp_year}
          </div>
          <div>Authorization Code: {auth_code}</div>
        </div>
      </div>
    );
  }
}

export default Details;
