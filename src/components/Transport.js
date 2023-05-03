class Transport {
  constructor(img, bgImg, y) {
    this.img = img;
    this.bgImg = bgImg;
    this.y = y;
  }

  show(p5, x, num) {
    p5.image(this.bgImg[num], 0, 0);
    p5.image(this.img[num], x, this.y);
  }
}

export default Transport;
