/* eslint-disable */
import React, { useState } from "react";
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
      <div className="d-flex flex-column justify-content-around ps-4">
        <IconButton count={count} setCount={setCount} />
        <PositionButton posCheck={posCheck} setPosCheck={setPosCheck} />
        <PlayButton playCheck={playCheck} setPlayCheck={setPlayCheck} />
      </div>
    </div>
  );
};

export default Inter;
