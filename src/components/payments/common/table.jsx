import React from "react";
import TableBody from "./table-body.component.jsx";
import TableHeader from "./table-header.component.jsx";

const Table = ({ data: payments }) => {
  return (
    <table className="table">
      <TableHeader />
      <TableBody data={payments} />
    </table>
  );
};

export default Table;
