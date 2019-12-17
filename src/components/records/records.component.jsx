import React from "react";

const Payments = ({ payments }) => {
  console.log(payments);
  return payments.map(payment => {
    return <h1>{payment.customer.name}</h1>;
  });
};

export default Payments;
