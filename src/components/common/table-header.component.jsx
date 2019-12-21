import React from "react";

const TableHeader = ({ tableheadItems }) => {
  return (
    <thead>
      <tr>
        {tableheadItems.map((item, i) => {
          return (
            <th key={i} scope="col">
              {item}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
