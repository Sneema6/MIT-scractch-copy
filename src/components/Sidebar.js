import React from "react";
import Icon from "./Icon";
import { useDispatch } from "react-redux";
import { setDraggedButtonId } from "../Redux/action";

export default function Sidebar({
  setImagePosition,
  imagePosition,
  setRotationAngle,
  rotationAngle,
  handleClick,
  rotateClockwise,
  rotateCounterclockwise,
  randomPosition,
}) {
  const dispatch = useDispatch();

  const drag = (event, buttonId) => {
    dispatch(setDraggedButtonId(buttonId));
    console.log(buttonId, "buttonId");
    // dataTransfer.clearData();
    event.dataTransfer.setData("text/plain", buttonId);
    const divClone = event.currentTarget.parentNode.cloneNode(true);
    console.log("divClone", divClone);
    event.dataTransfer.setDragImage(divClone, 0, 0);
  };

  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="font-bold"> {"Events"} </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"When "}
        <Icon name="flag" size={15} className="text-green-600 mx-2" />
        {"clicked"}
      </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"When this sprite clicked"}
      </div>
      <div className="font-bold"> {"Motion"} </div>
      <button
        onClick={handleClick}
        draggable="true"
        onDragStart={(event) => {
          drag(event, event.target);
          console.log("target", event.target);
        }}
        id="move steps button"
      >
        <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
          {"Move 10 steps"}
        </div>
      </button>
      <button
        onClick={rotateCounterclockwise}
        draggable="true"
        onDragStart={(event) => drag(event, event.target)}
        id="counter-clockwise-button"
      >
        <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
          {"Turn "}
          <Icon name="undo" size={15} className="text-white mx-2" />
          {"15 degrees"}
        </div>
      </button>
      <button
        onClick={rotateClockwise}
        draggable="true"
        onDragStart={(event) => drag(event, event.target)}
        id="clockwise-button"
      >
        <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
          {"Turn "}
          <Icon name="redo" size={15} className="text-white mx-2" />
          {"15 degrees"}
        </div>
      </button>
      <button
        onClick={randomPosition}
        draggable="true"
        onDragStart={(event) => drag(event, event.target)}
        id="random-position-button"
      >
        <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
          {"go to random position"}
        </div>
      </button>
      <div className="font-bold"> {"Looks"} </div>
      <button
        draggable="true"
        onDragStart={(event) => drag(event, event.target)}
        id="hello-button"
      >
        <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
          {"Say Hello"}
        </div>
      </button>
    </div>
  );
}
