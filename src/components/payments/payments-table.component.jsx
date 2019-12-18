import React from "react";
import Table from "./common/table.jsx";

const PaymentsTable = ({ data: payments }) => {
  return <Table data={payments} />;
};

export default PaymentsTable;
