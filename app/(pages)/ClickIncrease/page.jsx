"use client";
import React from "react";
import UpdatedComponent from "../UpdatedComponent/page";

const ClickIncrease = (props) => {
  //   const [fontSize, setFontSize] = useState(10);
  const { fontSize, incrementSize } = props;
  return (
    <>
      <div>
        {/*When clicked, increment the value of fontSize*/}
        <button className="button-19" onClick={() => incrementSize()}>
          Increase with click
        </button>
        {/*Set the font size of this text to the fontSize variable.*/}
        {/*Furthermore, display its value as well.*/}
        <p style={{ fontSize }}>Size of font in onClick function: {fontSize}</p>
      </div>
    </>
  );
};

export default UpdatedComponent(ClickIncrease);
