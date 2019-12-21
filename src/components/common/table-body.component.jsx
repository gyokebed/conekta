import React from "react";

const TableBody = ({ data, columns }) => {
  return (
    <tbody>
      {data.map((item, i) => {
        return (
          <tr key={i}>
            {columns.map((column, i) => {
              return <td key={i}>{column.content(item)}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
