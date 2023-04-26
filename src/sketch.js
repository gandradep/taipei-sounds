/* eslint-disable */


function sketch(p) {
  let img;
  p.preload = function () {
    img = p.loadImage('./assets/busScratch.jpg');
  }
  p.setup = function () {
    p.createCanvas(810, 540);
    img.resize(p.width, p.height);
  };

  p.draw = function () {

    p.rect(0,0, p.width, p.height);
    p.image(img,0,0);
  };
}

export default sketch;
