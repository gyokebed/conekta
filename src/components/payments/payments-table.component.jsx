import React from "react";
import Table from "../common/table.jsx";

const PaymentsTable = ({ data: payments, name }) => {
  const tableHeadItems = [
    "",
    "Date",
    "Payment status",
    "Payment type",
    "Customer",
    "Amount"
  ];
  return (
    <div>
      <h1>{name}</h1>
      <Table data={payments} tableheadItems={tableHeadItems} />
    </div>
  );
};

export default PaymentsTable;
