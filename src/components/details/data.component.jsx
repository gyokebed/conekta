import React from "react";
import Moment from "react-moment";

const Data = ({ data, id }) => {
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
  } = data;
  return (
    <React.Fragment>
      <div>
        <h4>PAYMENT STATUS</h4>
        <div>Amount: ${amount}</div>
        <div>
          Created At: <Moment unix>{created}</Moment>
        </div>
        <div>Paid At: {paid_at ? paid_at : "Not yet paid"}</div>
        <div>{status}</div>
        <div>{failure_message}</div>
        <div>ORDER ID: {id}</div>
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
    </React.Fragment>
  );
};

export default Data;
