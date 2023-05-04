/* eslint-disable */
import React from 'react';
import Sketch from 'react-p5';
import 'p5/lib/addons/p5.sound';
import Transport from './Transport';

const Inter = () => {
  const x = 50;
  const y = 50;
  let busBg, mrtBg, gBg, bus, gTruck, mrt;
  let mrtSoundRemix;
  let test;
  let step = 0;
  const preload = (p5) => {
    busBg = p5.loadImage('./assets/busBg.jpg');
    gBg = p5.loadImage('./assets/gBg.jpg');
    mrtBg = p5.loadImage('./assets/mrtBg.jpg');
    bus = p5.loadImage('./assets/bus.png');
    gTruck = p5.loadImage('./assets/garbageTruck.png');
    mrt = p5.loadImage('./assets/mrt.png');
    p5.soundFormats('mp3', 'ogg');
    mrtSoundRemix = p5.loadSound('./assets/mrtRemixV2.mp3');
  };
  const setup = (p5, parent) => {
    const vehicle = [bus, mrt, gTruck];
    const bgImage = [busBg, mrtBg, gBg];
    p5.createCanvas(810, 540).parent(parent);
    // cnv.mousePressed(() => {
    //   mySound.play();
    // })
    for (let i = 0; i< bgImage.length; i++){
      bgImage[i].resize(p5.width, p5.height);
    }
    for (let i = 0; i< vehicle.length; i++){
      vehicle[i].resize(p5.width*0.25, p5.height*0.20);
    }

    test = new Transport(vehicle, bgImage, p5.height*0.75);
  };
  const draw = (p5) => {
    p5.rect(0, 0, p5.width, p5.height);
    test.show(p5, p5.mouseX, step);

  };

  const mousePressed = () => {
    step ++;
    step = step % 3;
    console.log(step);
  }

  return (
    <div className="d-flex justify-content-center">
      <Sketch preload={preload} setup={setup} draw={draw} mousePressed={mousePressed} />
    </div>
  );
};

export default Inter;
