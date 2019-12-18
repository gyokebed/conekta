import React from "react";
import Table from "../common/table.jsx";

const PaymentsTable = ({ data: payments, name }) => {
  return (
    <div>
      <h1>{name}</h1>
      <Table data={payments} />
    </div>
  );
};

export default PaymentsTable;
