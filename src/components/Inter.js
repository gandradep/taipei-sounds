/* eslint-disable */
import React, { useState, useEffect } from "react";
import P5sketch from "./P5sketch";
import IconButton from './IconButton';
import PositionButton from "./PositionButton";
import PlayButton from "./PlayButton";

const Inter = () => {
  const [count, setCount] = useState(0);
  const [posCheck, setPosCheck] = useState(false);
  const [playCheck, setPlayCheck] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update the window width in state
    function handleResize() {
      setWindowWidth(window.innerWidth);
      console.log(window.innerWidth);
    }

    // Add the event listener when the component mounts
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="d-flex flex-column flex-sm-row justify-content-center mt-5">
      <P5sketch count={count} posCheck={posCheck} playCheck={playCheck} windowWidth={windowWidth} />
      <div className="d-flex flex-sm-column justify-content-around ps-4">
        <IconButton count={count} setCount={setCount} />
        <PositionButton posCheck={posCheck} setPosCheck={setPosCheck} />
        <PlayButton playCheck={playCheck} setPlayCheck={setPlayCheck} />
      </div>
    </div>
  );
};

export default Inter;
