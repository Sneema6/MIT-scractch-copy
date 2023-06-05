import React, { useRef, useState } from "react";

const SVGDragAndDrop = () => {
  const [svgElements, setSvgElements] = useState([]);

  const handleDragStart = (event, index) => {
    event.dataTransfer.setData("index", index);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const index = event.dataTransfer.getData("index");
    const newSvgElements = [...svgElements];
    const droppedElement = newSvgElements.splice(index, 1)[0];
    newSvgElements.push(droppedElement);
    setSvgElements(newSvgElements);
  };

  const handleAddSvgElement = () => {
    const newSvgElement = <circle cx={50} cy={50} r={20} fill="red" />;
    setSvgElements([...svgElements, newSvgElement]);
  };

  return (
    <div>
      <button onClick={handleAddSvgElement}>Add SVG Element</button>
      <svg
        width="400"
        height="400"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <g>
          {svgElements.map((element, index) => (
            <g
              key={index}
              draggable="true"
              onDragStart={(event) => handleDragStart(event, index)}
            >
              {element}
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
};

export default SVGDragAndDrop;
