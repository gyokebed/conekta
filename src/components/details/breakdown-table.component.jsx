import React from "react";
import Table from "../common/table.jsx";
import TableHeader from "../common/table-header.component.jsx";
import TableBody from "./table-breakdown-body.component.jsx";

const BreakdownTable = ({ data }) => {
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
      <TableBody data={data} />
    </table>
  );
};

export default BreakdownTable;
