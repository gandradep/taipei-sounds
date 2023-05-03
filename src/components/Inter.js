/* eslint-disable */
import React from 'react';
import Sketch from 'react-p5';
import 'p5/lib/addons/p5.sound';
import Transport from './Transport';

const Inter = () => {
  const x = 50;
  const y = 50;
  let busBg, bus, gTruck, mrt;
  let mySound;
  let test;
  const preload = (p5) => {
    busBg = p5.loadImage('./assets/busScratch.jpg');
    bus = p5.loadImage('./assets/bus.png');
    gTruck = p5.loadImage('./assets/garbageTruck.png');
    mrt = p5.loadImage('./assets/mrt.png');
    p5.soundFormats('mp3', 'ogg');
    mySound = p5.loadSound('./assets/mrtRemixV2.mp3');
  };
  const setup = (p5, parent) => {
    const vehicle = [bus, mrt, gTruck];
    const cnv = p5.createCanvas(810, 540).parent(parent);
    cnv.mousePressed(() => {
      mySound.play();
    })
    busBg.resize(p5.width, p5.height);
    for (let i = 0; i< vehicle.length; i++){
      vehicle[i].resize(p5.width*0.25, p5.height*0.20);
    }
    // mrt.resize(p5.width*0.25, p5.height*0.20);
    // bus.resize(p5.width*0.25, p5.height*0.20)
    // gTruck.resize(p5.width*0.25, p5.height*0.20)
    test = new Transport(gTruck, p5.height*0.75);
  };
  const draw = (p5) => {
    p5.rect(0, 0, p5.width, p5.height);
    p5.image(busBg, 0, 0);
    test.show(p5, p5.mouseX);

  };

  return (
    <div className="d-flex justify-content-center">
      <Sketch preload={preload} setup={setup} draw={draw} />
    </div>
  );
};

export default Inter;
