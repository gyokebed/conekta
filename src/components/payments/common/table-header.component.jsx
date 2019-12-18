import React from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">Date</th>
        <th scope="col">Payment status</th>
        <th scope="col">Payment type</th>
        <th scope="col">Customer</th>
        <th scope="col">Amount</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
