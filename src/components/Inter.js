/* eslint-disable */
import React, { useState, useRef } from "react";
import P5sketch from "./P5sketch";
import IconButton from './IconButton';

const Inter = () => {
  const [count, setCount] = useState(0);


  return (
    <div className="d-flex justify-content-center">
      <P5sketch count={count} />
      <IconButton count={count} setCount={setCount} />
    </div>
  );
};

export default Inter;
