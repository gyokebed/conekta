import React from "react";
import { Link } from "react-router-dom";

const TableBody = ({ data }) => {
  console.log(data);
  return (
    <tbody>
      {data.map(payment => {
        const {
          id,
          created,
          status,
          type,
          brand,
          customer: { name, email },
          amount
        } = payment;
        return (
          <tr key={id}>
            <th scope="row">
              <Link to={id}>Ver</Link>
            </th>
            <td>{created}</td>
            <td>{status}</td>
            <td>
              {type} {brand}
            </td>
            <td>
              {name}
              <br></br>
              {email}
            </td>
            <td>${amount}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
