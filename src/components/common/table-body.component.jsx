import React from "react";

const TableBody = ({ data }) => {
  return (
    <tbody>
      {data.map(payment => {
        return (
          <tr key={payment.id}>
            <th scope="row">1</th>
            <td>{payment.created}</td>
            <td>{payment.status}</td>
            <td>
              {payment.type} {payment.brand}
            </td>
            <td>
              {payment.customer.name}
              <br></br>
              {payment.customer.email}
            </td>
            <td>${payment.amount}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
