import React from "react";

const Person = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.source}</p>
      <p>{props.worth}</p>
    </div>
  );
};

export default Person;
