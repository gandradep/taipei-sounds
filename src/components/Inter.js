/* eslint-disable */
import React from 'react';
import Sketch from 'react-p5';
import 'p5/lib/addons/p5.sound';
import Transport from './Transport';

const Inter = () => {
  const x = 50;
  const y = 50;
  let img;
  let mySound;
  let test;
  const preload = (p5) => {
    img = p5.loadImage('./assets/busScratch.jpg');
    p5.soundFormats('mp3', 'ogg');
    mySound = p5.loadSound('./assets/mrtRemixV2.mp3');
  };
  const setup = (p5, parent) => {
    const cnv = p5.createCanvas(810, 540).parent(parent);
    cnv.mousePressed(() => {
      mySound.play();
    })
    img.resize(p5.width, p5.height);
    test = new Transport(p5.width/2);
  };
  const draw = (p5) => {
    p5.rect(0, 0, p5.width, p5.height);
    p5.image(img, 0, 0);
    test.show(p5);

  };

  return (
    <div className="d-flex justify-content-center">
      <Sketch preload={preload} setup={setup} draw={draw} />
    </div>
  );
};

export default Inter;
