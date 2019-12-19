import React from "react";

const TableHeader = ({ tableheadItems }) => {
  return (
    <thead>
      <tr>
        {tableheadItems.map(item => {
          return <th scope="col">{item}</th>;
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
