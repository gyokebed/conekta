import React from "react";
import Table from "../common/table.jsx";
import { Link } from "react-router-dom";

const PaymentsTable = ({ data: payments, name }) => {
  const tableHeadItems = [
    "",
    "Date",
    "Payment status",
    "Payment type",
    "Customer",
    "Amount"
  ];
  const columns = [
    { content: payment => <Link to={`${payment.id}`}>Ver</Link> },
    {
      content: payment => {
        return `${payment.created}`;
      }
    },
    {
      content: payment => {
        return `${payment.status}`;
      }
    },
    {
      content: payment => {
        return `${payment.type} ${payment.brand}`;
      }
    },
    {
      content: payment => {
        return `${payment.customer.name}`;
      }
    },
    {
      content: payment => {
        return `$ ${payment.amount}`;
      }
    }
  ];
  return (
    <div>
      <h1>{name}</h1>
      <Table
        data={payments}
        tableheadItems={tableHeadItems}
        columns={columns}
      />
    </div>
  );
};

export default PaymentsTable;
