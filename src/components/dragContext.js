import React, { createContext, useState } from "react";

// Create the drag context
export const DragContext = createContext();

// Create the drag provider component
export const DragProvider = ({ children }) => {
  const [draggedButton, setDraggedButton] = useState(null);

  // Set the dragged button
  const setDraggedButtonId = (buttonId) => {
    setDraggedButton(buttonId);
  };

  return (
    <DragContext.Provider value={{ draggedButton, setDraggedButtonId }}>
      {children}
    </DragContext.Provider>
  );
};
