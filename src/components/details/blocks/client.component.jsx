import React from "react";
import Block from "../../common/block.component.jsx";

const Client = ({ data, title }) => {
  const client = [
    {
      content: payment => {
        return `Name: ${payment.customer.name}`;
      }
    },
    {
      content: payment => {
        return `Email: ${payment.customer.email}`;
      }
    },
    {
      content: payment => {
        return `Phone: ${payment.customer.phone}`;
      }
    }
  ];
  return <Block data={data} title={title} blockInfo={client} />;
};

export default Client;
