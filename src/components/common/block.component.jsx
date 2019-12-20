import React from "react";

const Block = ({ data }) => {
  const blockInfo = [
    {
      content: payment => {
        return `${payment.created}`;
      }
    }
  ];
  data = [data];
  console.log(data);

  return data.map(item => {
    return (
      <tr>
        {blockInfo.map(column => {
          return <p key={column.path}>{column.content(item)}</p>;
        })}
      </tr>
    );
  });
};

export default Block;
