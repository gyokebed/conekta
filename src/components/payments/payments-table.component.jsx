import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import Table from "../common/table.jsx";
import look from "../../assets/look.png";

const PaymentsTable = ({ data }) => {
  const tableHeadItems = [
    "",
    "Date",
    "Payment status",
    "Payment type",
    "Customer",
    "Amount"
  ];
  const columns = [
    {
      content: payment => (
        <Link to={`${payment.id}`}>
          <img src={look}></img>
        </Link>
      )
    },
    {
      content: payment => {
        return <Moment unix>{`${payment.created}`}</Moment>;
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
    <Table data={data} tableheadItems={tableHeadItems} columns={columns} />
  );
};

export default PaymentsTable;
