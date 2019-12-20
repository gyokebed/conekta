import React from "react";
import Table from "../common/table.jsx";

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

  const columns = [
    { content: payment => `` },
    {
      content: payment => {
        return `${payment.quantity}`;
      }
    },
    {
      content: payment => {
        return `${payment.name}`;
      }
    },
    { content: payment => `` },
    { content: payment => `` },
    { content: payment => `` },
    {
      content: payment => {
        return `$ ${payment.unit_price}`;
      }
    }
  ];

  return (
    <Table data={data} tableheadItems={tableHeadItems} columns={columns} />
  );
};

export default BreakdownTable;
