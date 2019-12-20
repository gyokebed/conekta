import React from "react";
import Block from "../../common/block.component.jsx";
import Moment from "react-moment";

const PaymentStatus = ({ data, id, title }) => {
  const paymentStatus = [
    {
      content: payment => {
        return `${payment.amount}`;
      }
    },
    {
      content: payment => {
        return <Moment unix>{`${payment.created}`}</Moment>;
      }
    },
    {
      content: payment => {
        return `Paid at: ${payment.paid_at ? payment.paid_at : "Not yet paid"}`;
      }
    },
    {
      content: payment => {
        return `${payment.status}`;
      }
    },
    {
      content: payment => {
        return `${payment.failure_message}`;
      }
    },
    {
      content: () => {
        return `${id}`;
      }
    }
  ];
  return <Block data={data} id={id} title={title} blockInfo={paymentStatus} />;
};

export default PaymentStatus;
