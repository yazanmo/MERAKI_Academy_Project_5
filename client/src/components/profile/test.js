import React from "react";

const Test = (props) => {
  //   const storedNames = JSON.parse(localStorage.getItem("result"));

  return (
    <div>
      {props.items.map((element, index) => {
        return (
          <div>
            <h1>{element.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Test;
