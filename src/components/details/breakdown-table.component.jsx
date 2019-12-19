import React from "react";
import Table from "../common/table.jsx";
import TableHeader from "../common/table-header.component.jsx";

const BreakdownTable = ({ data: payments, name }) => {
  const tableHeadItems = [
    "SKU",
    "Quantity",
    "Articles",
    "Taxes",
    "Shipping",
    "Discounts",
    "Unit Price"
  ];
  return (
    <table className="table">
      <TableHeader tableheadItems={tableHeadItems} />
    </table>
  );
};

export default BreakdownTable;
