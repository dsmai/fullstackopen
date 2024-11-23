import React from "react";

const Content = (props) => {
  return (
    <>
      {props.part_list.map((part, index) => {
        return (
          <p key={index}>
            {part.part_name} {part.exercise}
          </p>
        );
      })}
    </>
  );
};

export default Content;
