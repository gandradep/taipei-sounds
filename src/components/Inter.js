/* eslint-disable */
import React from 'react';
import Sketch from 'react-p5';

const Inter = () => {
  const x = 50;
  const y = 50;
  let img;
  const preload = (p5) => {
    img = p5.loadImage('./assets/busScratch.jpg');
  };
  const setup = (p5, parent) => {
    p5.createCanvas(810, 540).parent(parent);
    p5.background(0);
  };
  const draw = (p5) => {
    p5.rect(0, 0, p5.width, p5.height);
    p5.image(img, 0, 0);

  };

  return (
    <div className="d-flex justify-content-center">
      <Sketch preload={preload} setup={setup} draw={draw} />
    </div>
  );
};

export default Inter;
