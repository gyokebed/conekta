import React from "react";

const Block = ({ data, title, blockInfo }) => {
  data = [data];

  return (
    <div>
      <h4>{title}</h4>
      {data.map(item => {
        return blockInfo.map((column, i) => {
          return <p key={i}>{column.content(item)}</p>;
        });
      })}
    </div>
  );
};

export default Block;
