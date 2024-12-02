import React from "react";

const Content = (props) => {
  const {name, exercise} = props;
  return (
    <>
      {props.part_list.map((part, index) => {
        return (
          <p key={index}>
            {part.name} {part.exercise}
          </p>
        );
      })}
    </>
  );
};

export default Content;
