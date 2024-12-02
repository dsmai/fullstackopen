import React from "react";

const Total = (props) => {
  const sum = props.part_list.reduce(
    (total, part) => total + part.exercise,
    0
  );
  return (
    <>
      <p>Number of exercises {sum}</p>
    </>
  );
};

export default Total;
