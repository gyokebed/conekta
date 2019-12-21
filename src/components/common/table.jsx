import React from "react";
import TableBody from "./table-body.component.jsx";
import TableHeader from "./table-header.component.jsx";

const Table = ({ data, tableheadItems, columns }) => {
  return (
    <div className="table-responsive">
      <table className="table">
        <TableHeader tableheadItems={tableheadItems} />
        <TableBody data={data} columns={columns} />
      </table>
    </div>
  );
};

export default Table;
