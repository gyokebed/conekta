import React from "react";

const TableBody = ({ data }) => {
  const columns = [
    { path: "" },
    { path: "quantity" },
    { path: "name" },
    { path: "" },
    { path: "" },
    { path: "" },
    { path: "unit_price", before: "$" }
  ];

  return (
    <tbody>
      {data.map(item => {
        return (
          <tr>
            {columns.map(column => {
              return (
                <td>
                  {column.before}
                  {item[column.path]}
                  {column.after}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
