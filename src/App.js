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
              />
              <MidArea />
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
