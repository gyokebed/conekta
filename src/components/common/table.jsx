import React from "react";
import TableBody from "./table-body.component.jsx";
import TableHeader from "./table-header.component.jsx";

const Table = ({ data, tableheadItems }) => {
  return (
    <table className="table">
      <TableHeader tableheadItems={tableheadItems} />
      <TableBody data={data} />
    </table>
  );
};

export default Table;
