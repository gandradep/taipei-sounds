class Transport {
  constructor(img, bgImg, x, y) {
    this.img = img;
    this.bgImg = bgImg;
    this.y = y;
    this.x = x;
  }

  show(p5, num, xXtra, xtra) {
    p5.image(this.bgImg[num], 0, 0);
    p5.image(this.img[num], this.x + xXtra, this.y + xtra);
  }
}

export default Transport;
