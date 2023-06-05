import React from "react";
import CatSprite from "./CatSprite";

export default function PreviewArea({ imagePosition, rotationAngle }) {
  return (
    <div className="h-full p-2">
      <CatSprite position={imagePosition} rotationAngle={rotationAngle} />
    </div>
  );
}
