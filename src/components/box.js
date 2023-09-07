import React from "react";

export default function Box(props) {
  const [square, setSquare] = React.useState(props.on);

  function toggle(id) {
    // setOn((prevOn) => !prevOn);
    setSquare((prevSquares) => {
      const newSquares = [];
      for (let i = 0; i < prevSquares.length; i++) {
        const currentSquare = prevSquares[i];
        if (currentSquare.id === id) {
          const updatedSquare = {
            ...currentSquare,
            on: !currentSquare.on,
          };
          newSquares.push(updatedSquare);
        } else {
          newSquares.push(currentSquare);
        }
      }
      return newSquares;
    });
    // const squareElements = squares.map(square)
  }
  return <div className="box" onClick={toggle}></div>;
}
