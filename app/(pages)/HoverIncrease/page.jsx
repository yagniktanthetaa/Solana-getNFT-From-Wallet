"use client";
import React from "react";
import UpdatedComponent from "../UpdatedComponent/page";

const HoverIncrease = (props) => {
  const { fontSize, incrementSize } = props;

  return (
    <>
      <div>
        {/*This time, instead of listening to clicks,*/}
        {/*Listen to hover events instead*/}
        <button className="button-19" onMouseOver={() => incrementSize()}>
          Increase on hover
        </button>
        <p style={{ fontSize }}>
          Size of font in onMouseOver function: {fontSize}
        </p>
      </div>
    </>
  );
};

export default UpdatedComponent(HoverIncrease);
