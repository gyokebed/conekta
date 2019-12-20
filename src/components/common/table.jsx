import React from "react";
import TableBody from "./table-body.component.jsx";
import TableHeader from "./table-header.component.jsx";

const Table = ({ data, tableheadItems, columns }) => {
  return (
    <table className="table">
      <TableHeader tableheadItems={tableheadItems} />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
