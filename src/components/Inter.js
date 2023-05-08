/* eslint-disable */
import React, { useState, useRef } from "react";
import P5sketch from "./P5sketch";
import IconButton from './IconButton';
import PositionButton from "./PositionButton";

const Inter = () => {
  const [count, setCount] = useState(0);
  const [posCheck, setPosCheck] = useState(false);


  return (
    <div className="d-flex justify-content-center">
      <P5sketch count={count} posCheck={posCheck} />
      <IconButton count={count} setCount={setCount} />
      <PositionButton posCheck={posCheck} setPosCheck={setPosCheck} />
    </div>
  );
};

export default Inter;
