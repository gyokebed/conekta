import React from "react";
import Moment from "react-moment";

const Block = ({ data, title, blockInfo }) => {
  data = [data];

  return (
    <div>
      <h4>{title}</h4>
      {data.map(item => {
        return blockInfo.map(column => {
          return <p>{column.content(item)}</p>;
        });
      })}
    </div>
  );
};

export default Block;
