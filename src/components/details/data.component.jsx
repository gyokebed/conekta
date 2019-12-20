import React from "react";
import PaymentStatus from "./blocks/payment-status.component.jsx";
import Client from "./blocks/client.component.jsx";
import PaymentMethod from "./blocks/payment-method.component.jsx";

const Data = ({ data, id }) => {
  return (
    <div>
      <PaymentStatus data={data} id={id} title="PAYMENT STATUS" />
      <Client data={data} title="CLIENT" />
      <PaymentMethod data={data} title="PAYMENT METHOD" />
    </div>
  );
};

export default Data;
