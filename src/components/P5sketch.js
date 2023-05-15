/* eslint-disable */
import React, { useRef } from "react";
import Sketch from 'react-p5';
import 'p5/lib/addons/p5.sound';
import Transport from './Transport';

const P5sketch = (props) => {
  const {count, posCheck, playCheck} = props;
  const test = useRef(Transport);
  let yxtra, angle = 0;
  let xXtra = 0 ;
  let busBg, mrtBg, gBg, bus, gTruck, mrt;
  let mrtRemix, busRemix, garRemix, currentSong;
  let busSong, mrtSong, garbageSong;
  let songs0;
  let songsRemix ;
  const preload = (p5) => {
    busBg = p5.loadImage('./assets/busBg.jpg');
    gBg = p5.loadImage('./assets/gBg.jpg');
    mrtBg = p5.loadImage('./assets/mrtBg.jpg');
    bus = p5.loadImage('./assets/bus.png');
    gTruck = p5.loadImage('./assets/garbageTruck.png');
    mrt = p5.loadImage('./assets/mrt.png');
    p5.soundFormats('mp3', 'ogg');
    mrtRemix = p5.loadSound('./assets/mrtRemixV2.mp3');
    busRemix = p5.loadSound('./assets/busRemix.mp3');
    garRemix = p5.loadSound('./assets/garRemix.mp3');
    busSong = p5.loadSound('./assets/busSong.mp3');
    garbageSong = p5.loadSound('./assets/garbageSong.mp3');
    mrtSong = p5.loadSound('./assets/mrtSong.mp3');
  };
  const setup = (p5, parent) => {
    const vehicle = [bus, mrt, gTruck];
    const bgImage = [busBg, mrtBg, gBg];
    songsRemix = [busRemix, mrtRemix, garRemix];
    songs0 = [busSong, mrtSong, garbageSong];

    p5.createCanvas(810, 540).parent(parent);
    for (let i = 0; i< bgImage.length; i++){
      bgImage[i].resize(p5.width, p5.height );
    }
    for (let i = 0; i< vehicle.length; i++){
      vehicle[i].resize(p5.width*0.25, p5.height*0.20);
    }
    test.current = new Transport(vehicle, bgImage, p5.width*0.1, p5.height*0.69, songsRemix, songs0);
  };
  const draw = (p5) => {
    p5.noFill();
    p5.rect(0, 0, p5.width, p5.height);
    angle += 0.02;
    yxtra = 5 * Math.sin(angle);
    xXtra = posCheck ? p5.width/2 : 0;
    test.current.show(p5, count, xXtra, yxtra);
    test.current.playSound(count, playCheck);
  };

  const mousePressed = (p5) => {
    // console.log(currentSong)
  }

  return (
    <div className="d-flex justify-content-center">
      <Sketch preload={preload} setup={setup} draw={draw} mousePressed={mousePressed} />

    </div>
  );
};

export default P5sketch;
