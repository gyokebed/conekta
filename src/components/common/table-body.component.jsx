import React from "react";

const TableBody = ({ data, columns }) => {
  return (
    <tbody>
      {data.map(item => {
        return (
          <tr>
            {columns.map(column => {
              return <td key={column.path}>{column.content(item)}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
