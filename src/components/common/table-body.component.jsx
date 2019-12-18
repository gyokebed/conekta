import React from "react";
import { Link } from "react-router-dom";

const TableBody = ({ data }) => {
  return (
    <tbody>
      {data.map(payment => {
        return (
          <tr key={payment.id}>
            <th scope="row">
              <Link to={payment.id}>Ver</Link>
            </th>
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
