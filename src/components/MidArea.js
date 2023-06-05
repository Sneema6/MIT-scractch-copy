import React, { useContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDraggedButtonId, removeButton } from "../Redux/action";

export default function MidArea(addEventListenersToButton) {
  const draggedButtonId = useSelector((state) => state.draggedButtonId);
  console.log("draggedButtonId", draggedButtonId);
  const dispatch = useDispatch();

  // Drop event handler
  const drop = (event) => {
    event.preventDefault();
    const buttonElement = draggedButtonId;
    const buttonClone = buttonElement.cloneNode(true);
    const buttonId = event.dataTransfer.getData("text/plain");
    console.log("button ID in midArea", draggedButtonId);
    const divElement = document.getElementById(draggedButtonId);
    // console.log("buttonId", buttonId, divElement);
    // const buttonCopy = buttonElement;
    // Append the button to the drop area

    buttonClone.style.position = "absolute";
    buttonClone.style.left = `${event.clientX}px`;
    buttonClone.style.top = `${event.clientY}px`;
    // addEventListenersToButton(buttonClone, draggedButtonId);

    event.target.appendChild(buttonClone);
  };

  // Allow drop event handler
  const allowDrop = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className="flex-1 h-full overflow-auto"
      onDragOver={allowDrop}
      onDrop={drop}
    ></div>
  );
}
