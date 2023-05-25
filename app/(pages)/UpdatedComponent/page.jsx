"use client";
import React, { useState } from "react";

const UpdatedComponent = (OriginalComponent) => {
  const NewComponent = () => {
    //render OriginalComponent and pass on its props.
    const [fontSize, setFontSize] = useState(30);
    return (
      <OriginalComponent
        fontSize={fontSize} //export our fontSize Hook
        //now create an 'incrementSize' function
        incrementSize={() => setFontSize((size) => size + 1)}
      />
    );
  };

  return NewComponent;
};

export default UpdatedComponent;
