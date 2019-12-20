import React from "react";
import Block from "../../common/block.component.jsx";

const PaymentMethod = ({ data, title }) => {
  const paymentMethod = [
    {
      content: payment => {
        return `${payment.nested_charges[0].payment_method.bank}`;
      }
    },
    {
      content: payment => {
        return `${payment.nested_charges[0].payment_method.brand}`;
      }
    },
    {
      content: payment => {
        return `${payment.nested_charges[0].payment_method.type}`;
      }
    },
    {
      content: payment => {
        return `............${payment.nested_charges[0].payment_method.last4}`;
      }
    },
    {
      content: payment => {
        return `Expiration Date: ${payment.nested_charges[0].payment_method.exp_month} / ${payment.nested_charges[0].payment_method.exp_year}`;
      }
    },
    {
      content: payment => {
        return `Authorization Code: ${payment.nested_charges[0].payment_method.auth_code}`;
      }
    }
  ];
  return <Block data={data} title={title} blockInfo={paymentMethod} />;
};

export default PaymentMethod;
