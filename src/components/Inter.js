/* eslint-disable */
import React from 'react';
import Sketch from 'react-p5';
import 'p5/lib/addons/p5.sound';
import Transport from './Transport';
import Button from './Button';

const Inter = () => {
  const x = 50;
  const y = 50;
  let busBg, mrtBg, gBg, bus, gTruck, mrt;
  let mrtSoundRemix;
  let test;
  let button1, button2;
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
      bgImage[i].resize(p5.width, p5.height*0.9 );
    }
    for (let i = 0; i< vehicle.length; i++){
      vehicle[i].resize(p5.width*0.25, p5.height*0.20);
    }
    button1 = new Button(0, p5.height*0.9);
    button2 = new Button(p5.width/2, p5.height*0.9);
    test = new Transport(vehicle, bgImage, p5.height*0.69);
  };
  const draw = (p5) => {
    p5.noFill();
    p5.rect(0, 0, p5.width, p5.height);
    test.show(p5, p5.mouseX, step);
    button1.show(p5);
    button2.show(p5);
    // p5.rect(0, p5.height*0.9, p5.width/2, p5.height*0.1);
    // p5.rect(p5.width/2, p5.height*0.9, p5.width/2, p5.height*0.1);

  };

  const mousePressed = (p5) => {

    if(p5.mouseX<p5.width&&p5.mouseX>0&&p5.mouseY>0&&p5.mouseY<p5.height){
      step ++;
      step = step % 3;

    }
  }

  return (
    <div className="d-flex justify-content-center">
      <Sketch preload={preload} setup={setup} draw={draw} mousePressed={mousePressed} />
    </div>
  );
};

export default Inter;
