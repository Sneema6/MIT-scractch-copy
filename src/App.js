import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import { DragProvider } from "./components/dragContext";
import { Provider } from "react-redux";
import store from "./Redux/store";

export default function App() {
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [rotationAngle, setRotationAngle] = useState(0);

  const handleClick = () => {
    setImagePosition({ x: imagePosition.x + 10, y: imagePosition.y + 0 });
  };
  const rotateClockwise = () => {
    setRotationAngle((prev) => prev + 15);
  };

  const rotateCounterclockwise = () => {
    setRotationAngle((prev) => prev - 15);
  };

  const randomPosition = () => {
    const layoutWidth = 300; // Adjust this value to match the width of your layout
    const layoutHeight = 400; // Adjust this value to match the height of your layout

    const randomX = Math.floor(Math.random() * layoutWidth);
    const randomY = Math.floor(Math.random() * layoutHeight);

    setImagePosition({ x: randomX, y: randomY });
  };

  const addEventListenersToButton = (button, buttonId) => {
    debugger;
    switch (buttonId) {
      case "button A":
        button.addEventListener("click", handleClick);
        break;
      case "button B":
        button.addEventListener("click", rotateClockwise);
        break;
      case "button-anticlockwise":
        button.addEventListener("click", rotateCounterclockwise);
        break;
      // Add more cases for other buttons and their corresponding events
      default:
        // Handle the default case or show an error message
        break;
    }
  };

  return (
    <Provider store={store}>
      <div className="bg-blue-100 pt-6 font-sans">
        <div className="h-screen overflow-hidden flex flex-row  ">
          <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
            <DragProvider>
              <Sidebar
                setImagePosition={setImagePosition}
                imagePosition={imagePosition}
                setRotationAngle={setRotationAngle}
                rotationAngle={rotationAngle}
                handleClick={handleClick}
                rotateClockwise={rotateClockwise}
                rotateCounterclockwise={rotateCounterclockwise}
                randomPosition={randomPosition}
              />
              <MidArea addEventListenersToButton={addEventListenersToButton} />
            </DragProvider>
          </div>
          <div
            className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2"
            style={{ position: "relative" }}
          >
            <PreviewArea
              imagePosition={imagePosition}
              rotationAngle={rotationAngle}
            />
          </div>
        </div>
      </div>
    </Provider>
  );
}
