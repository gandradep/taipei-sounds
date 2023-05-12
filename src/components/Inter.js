/* eslint-disable */
import React, { useState, useRef } from "react";
import P5sketch from "./P5sketch";
import IconButton from './IconButton';
import PositionButton from "./PositionButton";
import PlayButton from "./PlayButton";

const Inter = () => {
  const [count, setCount] = useState(0);
  const [posCheck, setPosCheck] = useState(false);
  const [playCheck, setPlayCheck] = useState(false);


  return (
    <div className="d-flex justify-content-center">
      <P5sketch count={count} posCheck={posCheck} playCheck={playCheck} />
      <IconButton count={count} setCount={setCount} />
      <PositionButton posCheck={posCheck} setPosCheck={setPosCheck} />
      <PlayButton playCheck={playCheck} setPlayCheck={setPlayCheck} />
    </div>
  );
};

export default Inter;
